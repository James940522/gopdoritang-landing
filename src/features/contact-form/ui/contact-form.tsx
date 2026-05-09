'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  budgetOptions,
  contactFormSchema,
  privacyPolicyText,
  referralSourceOptions,
  type ContactFormValues,
} from '../model';

const inputClassName =
  'h-12 w-full border border-white/10 bg-white px-4 font-(family-name:--font-noto-sans-kr) text-sm font-bold text-black outline-none transition placeholder:text-black/35 focus:border-[color:var(--color-red-400)] focus:ring-2 focus:ring-[rgba(224,79,97,0.35)]';

const labelClassName =
  'mb-2 block font-(family-name:--font-noto-sans-kr) text-sm font-black text-white';

const errorClassName =
  'mt-1.5 font-(family-name:--font-noto-sans-kr) text-xs font-bold text-[var(--color-red-300)]';

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phoneFirst: '010',
      phoneMiddle: '',
      phoneLast: '',
      desiredRegion: '',
      expectedBudget: '',
      inquiryDetail: '',
      referralSources: [],
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus('idle');
    setSubmitMessage('');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      setSubmitStatus('error');
      setSubmitMessage(
        result.message ?? '문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.',
      );
      return;
    }

    setSubmitStatus('success');
    setSubmitMessage(result.message ?? '문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.');
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-white/10 bg-black/58 p-5 shadow-[0_34px_100px_-52px_rgba(0,0,0,0.95)] backdrop-blur-md sm:p-8 lg:p-10"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            성함 <span className="text-[var(--color-red-400)]">*</span>
          </label>
          <input
            id="contact-name"
            className={inputClassName}
            autoComplete="name"
            placeholder="성함을 입력해 주세요"
            {...register('name')}
          />
          {errors.name ? <p className={errorClassName}>{errors.name.message}</p> : null}
        </div>

        <div>
          <span className={labelClassName}>
            연락처 <span className="text-[var(--color-red-400)]">*</span>
          </span>
          <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
            <input
              aria-label="연락처 앞자리"
              className={inputClassName}
              inputMode="numeric"
              maxLength={3}
              autoComplete="tel-national"
              {...register('phoneFirst')}
            />
            <span className="font-black text-white/80">-</span>
            <input
              aria-label="연락처 가운데 자리"
              className={inputClassName}
              inputMode="numeric"
              maxLength={4}
              {...register('phoneMiddle')}
            />
            <span className="font-black text-white/80">-</span>
            <input
              aria-label="연락처 마지막 자리"
              className={inputClassName}
              inputMode="numeric"
              maxLength={4}
              {...register('phoneLast')}
            />
          </div>
          {errors.phoneFirst || errors.phoneMiddle || errors.phoneLast ? (
            <p className={errorClassName}>
              {errors.phoneFirst?.message ??
                errors.phoneMiddle?.message ??
                errors.phoneLast?.message}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-region" className={labelClassName}>
            창업 희망 지역 <span className="text-[var(--color-red-400)]">*</span>
          </label>
          <input
            id="contact-region"
            className={inputClassName}
            placeholder="예: 서울 마포구, 경기 수원시"
            {...register('desiredRegion')}
          />
          {errors.desiredRegion ? (
            <p className={errorClassName}>{errors.desiredRegion.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-budget" className={labelClassName}>
            예상 창업 비용 <span className="text-[var(--color-red-400)]">*</span>
          </label>
          <select id="contact-budget" className={inputClassName} {...register('expectedBudget')}>
            <option value="">예상 창업 비용을 선택해 주세요</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {errors.expectedBudget ? (
            <p className={errorClassName}>{errors.expectedBudget.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-detail" className={labelClassName}>
            문의 세부 내용 <span className="text-[var(--color-red-400)]">*</span>
          </label>
          <textarea
            id="contact-detail"
            className={`${inputClassName} h-28 resize-y py-3 leading-[1.6]`}
            placeholder="희망 상권, 오픈 시기, 궁금한 점을 남겨 주세요"
            {...register('inquiryDetail')}
          />
          {errors.inquiryDetail ? (
            <p className={errorClassName}>{errors.inquiryDetail.message}</p>
          ) : null}
        </div>

        <fieldset>
          <legend className={labelClassName}>
            방문 유입 경로 <span className="text-[var(--color-red-400)]">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-2">
            {referralSourceOptions.map((source) => (
              <label
                key={source}
                className="flex items-center gap-2 font-(family-name:--font-noto-sans-kr) text-sm font-bold text-white/88"
              >
                <input
                  type="checkbox"
                  value={source}
                  className="h-4 w-4 accent-[var(--color-red-500)]"
                  {...register('referralSources')}
                />
                {source}
              </label>
            ))}
          </div>
          {errors.referralSources ? (
            <p className={errorClassName}>{errors.referralSources.message}</p>
          ) : null}
        </fieldset>

        <div>
          <label htmlFor="privacy-policy" className={labelClassName}>
            개인정보 수집 및 이용 동의 <span className="text-[var(--color-red-400)]">*</span>
          </label>
          <textarea
            id="privacy-policy"
            readOnly
            value={privacyPolicyText}
            className="h-44 w-full resize-none border border-white/10 bg-white/92 p-4 font-(family-name:--font-noto-sans-kr) text-xs leading-[1.7] font-medium text-black outline-none"
          />
          <label className="mt-3 flex items-center gap-2 font-(family-name:--font-noto-sans-kr) text-sm font-bold text-white/88">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[var(--color-red-500)]"
              {...register('privacyAgreed')}
            />
            개인정보 수집 및 이용에 동의합니다.
          </label>
          {errors.privacyAgreed ? (
            <p className={errorClassName}>{errors.privacyAgreed.message}</p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-14 rounded-md bg-[var(--color-beige-100)] font-(family-name:--font-noto-sans-kr) text-base font-black text-[var(--color-surface-900)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? '문의 접수 중' : '창업 문의하기'}
        </button>

        {submitMessage ? (
          <p
            className={[
              'font-(family-name:--font-noto-sans-kr) text-sm font-black',
              submitStatus === 'success'
                ? 'text-[var(--color-beige-100)]'
                : 'text-[var(--color-red-300)]',
            ].join(' ')}
          >
            {submitMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
