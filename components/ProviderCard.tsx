'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import type { StreamingProvider } from '@/data/providers';
import clsx from 'clsx';

const featureIcon = (enabled: boolean) =>
  enabled ? (
    <CheckCircleIcon className="h-4 w-4 text-emerald-400" aria-hidden="true" />
  ) : (
    <XMarkIcon className="h-4 w-4 text-rose-400" aria-hidden="true" />
  );

type ProviderCardProps = {
  provider: StreamingProvider;
  highlighted?: boolean;
};

export function ProviderCard({ provider, highlighted = false }: ProviderCardProps) {
  const {
    name,
    description,
    url,
    plan,
    hindiDubbed,
    english,
    originalLanguage,
    download,
    adSupported,
    liveTv,
    regionFocus,
    notableTitles,
    availabilityNotes,
    registrationRequired,
    bestFor
  } = provider;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        'glass card-gradient flex h-full flex-col rounded-3xl p-6 shadow-2xl shadow-brand-900/30',
        highlighted && 'border-brand-400/70 shadow-brand-500/30'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-50">{name}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200/80">{plan}</p>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-brand-500/60 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100 transition hover:bg-brand-500/30"
        >
          Visit <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-4 flex-1 text-sm text-slate-200/90">{description}</p>

      <dl className="mt-6 space-y-4 text-xs text-slate-300/90">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
            {featureIcon(hindiDubbed)}
            <span>Hindi Dubbed</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
            {featureIcon(english)}
            <span>English Catalog</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
            {featureIcon(originalLanguage)}
            <span>Original Audio</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
            {featureIcon(download)}
            <span>Offline Downloads</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
            {featureIcon(adSupported)}
            <span>Ads</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2">
            {featureIcon(liveTv)}
            <span>Live / FAST</span>
          </div>
        </div>

        <div>
          <dt className="font-semibold uppercase tracking-[0.25em] text-brand-300/80">Regional Reach</dt>
          <dd className="mt-1 text-sm">{regionFocus.join(', ')}</dd>
        </div>

        <div>
          <dt className="font-semibold uppercase tracking-[0.25em] text-brand-300/80">Best For</dt>
          <dd className="mt-1 text-sm">{bestFor}</dd>
        </div>

        <div>
          <dt className="font-semibold uppercase tracking-[0.25em] text-brand-300/80">Standout Titles</dt>
          <dd className="mt-1 text-sm">{notableTitles.join(', ')}</dd>
        </div>

        <div>
          <dt className="font-semibold uppercase tracking-[0.25em] text-brand-300/80">Access Tips</dt>
          <dd className="mt-1 text-sm leading-relaxed text-slate-200/80">{availabilityNotes}</dd>
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-300/80">
          {featureIcon(registrationRequired === false)}
          <span>{registrationRequired ? 'Registration required (free)' : 'No account needed for core catalog'}</span>
        </div>
      </dl>
    </motion.article>
  );
}
