'use client';

import { useMemo, useState } from 'react';
import { streamingProviders, type StreamingProvider, featureFilters } from '@/data/providers';
import { FilterBar, type FilterState } from '@/components/FilterBar';
import { ProviderCard } from '@/components/ProviderCard';
import { SparklesIcon, ShieldCheckIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const defaultFilters: FilterState = {
  query: '',
  plan: 'All',
  hindiOnly: false,
  features: featureFilters.reduce(
    (acc, feature) => ({
      ...acc,
      [feature.id]: false
    }),
    {} as FilterState['features']
  )
};

const safeStreamingPractices = [
  'Stick to official apps or verified channels to avoid piracy and malware risks.',
  'Respect regional licensing—avoid VPN workarounds that breach terms of service.',
  'Use parental controls when sharing access with younger viewers.',
  'Rotate between apps to catch limited-time Hindi dubbed premieres as catalogs change often.'
];

function applyFilters(list: StreamingProvider[], filters: FilterState) {
  return list.filter((provider) => {
    if (filters.plan !== 'All' && provider.plan !== filters.plan) {
      return false;
    }

    if (filters.hindiOnly && !provider.hindiDubbed) {
      return false;
    }

    const query = filters.query.trim().toLowerCase();
    if (query) {
      const haystack = [
        provider.name,
        provider.description,
        provider.bestFor,
        provider.notableTitles.join(' '),
        provider.availabilityNotes
      ]
        .join(' ')
        .toLowerCase();

      if (!haystack.includes(query)) {
        return false;
      }
    }

    for (const feature of featureFilters) {
      if (filters.features[feature.id] && !provider[feature.id]) {
        return false;
      }
    }

    return true;
  });
}

export default function Page() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredProviders = useMemo(
    () => applyFilters(streamingProviders, filters),
    [filters]
  );

  const spotlight = filteredProviders[0];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12 md:py-16">
      <header className="glass card-gradient overflow-hidden rounded-3xl border border-slate-800/70 px-8 py-10 shadow-2xl shadow-brand-900/40">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-200/90">
              <SparklesIcon className="h-4 w-4" aria-hidden="true" />
              Curated picks
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">
              Free apps for Hindi dubbed and English movies
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-200/85">
              We evaluated legal streaming platforms that routinely publish Hollywood and regional films with Hindi dubbed audio alongside English catalogs. Filter by plan type, offline downloads, live channels, and more to find what fits your viewing habits without breaking the law—or the bank.
            </p>
          </div>
        </div>
      </header>

      <FilterBar filters={filters} onChange={setFilters} providers={filteredProviders} />

      {spotlight ? (
        <section aria-labelledby="spotlight-heading" className="glass card-gradient rounded-3xl border border-brand-500/60 p-8 shadow-2xl shadow-brand-900/40">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-200/80">
                <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
                Editor spotlight
              </p>
              <h2 id="spotlight-heading" className="mt-3 text-3xl font-semibold text-slate-50">
                {spotlight.name}
              </h2>
              <p className="mt-3 text-sm text-slate-200/85">
                {spotlight.description}
              </p>
            </div>
            <a
              href={spotlight.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/20 px-4 py-2 text-sm font-semibold text-brand-100 transition hover:bg-brand-500/40"
            >
              Explore now
            </a>
          </div>
        </section>
      ) : (
        <section className="glass rounded-3xl border border-rose-500/60 bg-rose-950/30 p-8 text-center text-slate-100">
          <h2 className="text-2xl font-semibold">No matches found</h2>
          <p className="mt-3 text-sm text-slate-200/80">
            Try broadening your filters or clearing the search term to rediscover available legal options.
          </p>
        </section>
      )}

      <section className="grid gap-6 md:grid-cols-2">
        {filteredProviders.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} highlighted={provider.id === spotlight?.id} />
        ))}
      </section>

      <section className="glass card-gradient rounded-3xl border border-slate-800/60 p-8 text-slate-200/85">
        <header className="flex items-center gap-2 text-brand-200/90">
          <InformationCircleIcon className="h-5 w-5" aria-hidden="true" />
          <h2 className="text-lg font-semibold uppercase tracking-[0.3em]">Stay legal. Stay safe.</h2>
        </header>
        <ul className="mt-4 space-y-3 text-sm">
          {safeStreamingPractices.map((tip) => (
            <li key={tip} className="rounded-2xl border border-slate-800/70 bg-slate-900/40 px-4 py-3">
              {tip}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
