'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useEffect, useReducer, useRef, type ReactNode } from 'react';

import {
  INITIAL_INTRO_VIDEO_STATE,
  INTRO_VIDEO_MOBILE_QUERY,
  INTRO_VIDEO_SOURCES,
  INTRO_VIDEO_TIMEOUT_MS,
  reduceIntroVideoState,
} from '../model/intro-video';
import { useIntroScrollLock } from '../model/use-intro-scroll-lock';

export function IntroVideoGate({ children }: { children: ReactNode }) {
  const [{ phase, source }, dispatch] = useReducer(
    reduceIntroVideoState,
    INITIAL_INTRO_VIDEO_STATE,
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const topFrameRef = useRef<HTMLCanvasElement>(null);
  const bottomFrameRef = useRef<HTMLCanvasElement>(null);
  const revealStartedRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const isActive = phase !== 'complete';
  const isRevealing = phase === 'revealing';

  useIntroScrollLock(isActive);

  useEffect(() => {
    // Select once on entry so resizing never restarts playback or fetches both videos.
    dispatch({
      type: 'source',
      source: window.matchMedia(INTRO_VIDEO_MOBILE_QUERY).matches
        ? INTRO_VIDEO_SOURCES.mobile
        : INTRO_VIDEO_SOURCES.desktop,
    });
  }, []);

  const revealHomepage = useCallback(() => {
    if (revealStartedRef.current) return;
    revealStartedRef.current = true;

    const video = videoRef.current;
    video?.pause();

    // Reuse the actual final frame in both halves without loading extra video players.
    if (video && video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      for (const canvas of [topFrameRef.current, bottomFrameRef.current]) {
        if (!canvas) continue;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d')?.drawImage(video, 0, 0);
      }
    }

    dispatch({ type: 'reveal' });
  }, []);

  useEffect(() => {
    if (!source || isRevealing || !isActive) return;

    let previousTime = 0;
    let lastProgressAt = performance.now();
    const handleVisibilityChange = () => {
      previousTime = videoRef.current?.currentTime ?? 0;
      lastProgressAt = performance.now();

      const video = videoRef.current;
      if (!document.hidden && video?.paused && !video.ended && video.readyState >= 2) {
        void video.play().catch(revealHomepage);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    const watchdog = window.setInterval(() => {
      const currentTime = videoRef.current?.currentTime ?? 0;

      // Time spent in a background tab must not cut a valid video short.
      if (document.hidden || currentTime !== previousTime) {
        previousTime = currentTime;
        lastProgressAt = performance.now();
        return;
      }

      if (performance.now() - lastProgressAt >= INTRO_VIDEO_TIMEOUT_MS) revealHomepage();
    }, 1000);

    return () => {
      window.clearInterval(watchdog);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [source, isActive, isRevealing, revealHomepage]);

  const handleCanPlay = (video: HTMLVideoElement) => {
    if (revealStartedRef.current || !video.paused) return;
    video.muted = true;
    void video.play().catch(revealHomepage);
  };

  const transition = {
    duration: prefersReducedMotion ? 0.15 : 0.9,
    ease: [0.76, 0, 0.24, 1] as const,
  };

  return (
    <>
      <div inert={isActive} aria-hidden={isActive ? true : undefined}>
        {children}
      </div>

      {isActive && (
        <div
          className="fixed inset-0 z-[2147483647] h-dvh overflow-hidden"
          data-intro-phase={phase}
          role="status"
          aria-label="심 곱도리탕 인트로 영상 재생 중"
          aria-busy={!isRevealing}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-black"
            initial={false}
            animate={{
              y: isRevealing && !prefersReducedMotion ? '-100%' : '0%',
              opacity: isRevealing && prefersReducedMotion ? 0 : 1,
            }}
            transition={transition}
            aria-hidden="true"
          >
            <canvas
              ref={topFrameRef}
              className="absolute inset-x-0 top-0 h-[200%] w-full object-contain"
            />
          </motion.div>

          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-black"
            initial={false}
            animate={{
              y: isRevealing && !prefersReducedMotion ? '100%' : '0%',
              opacity: isRevealing && prefersReducedMotion ? 0 : 1,
            }}
            transition={transition}
            onAnimationComplete={() => {
              if (isRevealing) dispatch({ type: 'complete' });
            }}
            aria-hidden="true"
          >
            <canvas
              ref={bottomFrameRef}
              className="absolute inset-x-0 bottom-0 h-[200%] w-full object-contain"
            />
          </motion.div>

          {source && (
            <video
              ref={videoRef}
              src={source.video}
              poster={source.poster}
              className="absolute inset-0 h-full w-full bg-black object-contain"
              style={{ visibility: isRevealing ? 'hidden' : 'visible' }}
              autoPlay
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              aria-hidden="true"
              onCanPlay={(event) => handleCanPlay(event.currentTarget)}
              onPlaying={() => dispatch({ type: 'playing' })}
              onEnded={revealHomepage}
              onError={revealHomepage}
            />
          )}
        </div>
      )}
    </>
  );
}
