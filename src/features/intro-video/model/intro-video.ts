export const INTRO_VIDEO_MOBILE_QUERY = '(max-width: 767px)';
export const INTRO_VIDEO_TIMEOUT_MS = 15_000;

export const INTRO_VIDEO_SOURCES = {
  desktop: {
    video: '/asset/intro/1.mp4',
    poster: '/asset/intro/desktop-poster.webp',
  },
  mobile: {
    video: '/asset/intro/2.mp4',
    poster: '/asset/intro/mobile-poster.webp',
  },
} as const;

export type IntroVideoSource = (typeof INTRO_VIDEO_SOURCES)[keyof typeof INTRO_VIDEO_SOURCES];

type IntroVideoPhase = 'loading' | 'playing' | 'revealing' | 'complete';

export type IntroVideoState = {
  phase: IntroVideoPhase;
  source: IntroVideoSource | null;
};

type IntroVideoEvent =
  | { type: 'source'; source: IntroVideoSource }
  | { type: 'playing' }
  | { type: 'reveal' }
  | { type: 'complete' };

export const INITIAL_INTRO_VIDEO_STATE: IntroVideoState = { phase: 'loading', source: null };

export function reduceIntroVideoState(
  state: IntroVideoState,
  event: IntroVideoEvent,
): IntroVideoState {
  if (state.phase === 'complete') return state;

  switch (event.type) {
    case 'source':
      return { ...state, source: event.source };
    case 'playing':
      return state.phase === 'loading' ? { ...state, phase: 'playing' } : state;
    case 'reveal':
      return state.phase === 'revealing' ? state : { ...state, phase: 'revealing' };
    case 'complete':
      return state.phase === 'revealing' ? { ...state, phase: 'complete' } : state;
  }
}
