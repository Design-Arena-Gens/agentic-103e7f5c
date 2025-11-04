'use client';

import { useMemo } from 'react';
import { featureFilters, type StreamingProvider } from '@/data/providers';
import { FunnelIcon } from '@heroicons/react/24/outline';

export type FilterState = {
  query: string;
  plan: 'All' | 'Free' | 'Freemium';
  hindiOnly: boolean;
  features: Record<(typeof featureFilters)[number]['id'], boolean>;
};

type FilterBarProps = {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  providers: StreamingProvider[];
};

const plans: FilterState['plan'][] = ['All', 'Free', 'Freemium'];

export function FilterBar({ filters, onChange, providers }: FilterBarProps) {
  const resultCount = useMemo(() => providers.length, [providers.length]);

  return (
    <section className="glass card-gradient space-y-6 rounded-3xl border border-slate-800/70 p-6 shadow-xl shadow-brand-900/30">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-brand-200/80">Curated Index</p>
          <h2 className="text-2xl font-semibold text-slate-50">Find the right streaming app</h2>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-100">
          <FunnelIcon className="h-4 w-4" aria-hidden="true" />
          {resultCount} {resultCount === 1 ? 'match' : 'matches'}
        </span>
      </header>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <label className="relative flex items-center">
          <input
            className="w-full rounded-2xl border border-slate-800/70 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
            placeholder="Search by app name, genre, or title"
            value={filters.query}
            onChange={(event) => onChange({ ...filters, query: event.target.value })}
          />
        </label>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-2 text-xs font-medium text-slate-200">
          {plans.map((plan) => (
            <button
              key={plan}
              onClick={() => onChange({ ...filters, plan })}
              className={`flex-1 rounded-xl px-3 py-2 transition ${filters.plan === plan ? 'bg-brand-500/30 text-brand-100' : 'bg-transparent text-slate-300 hover:bg-slate-900/70'}`}
            >
              {plan}
            </button>
          ))}
        </div>

        <label className="flex items-center justify-between gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/60 px-4 py-3 text-sm text-slate-200">
          <span>Only Hindi dubbed catalog</span>
          <input
            type="checkbox"
            checked={filters.hindiOnly}
            onChange={(event) => onChange({ ...filters, hindiOnly: event.target.checked })}
            className="h-5 w-10 cursor-pointer appearance-none rounded-full border border-slate-700 bg-slate-900 transition checked:bg-brand-500"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {featureFilters.map((feature) => {
          const activated = filters.features[feature.id];
          return (
            <button
              key={feature.id}
              onClick={() =>
                onChange({
                  ...filters,
                  features: {
                    ...filters.features,
                    [feature.id]: !filters.features[feature.id]
                  }
                })
              }
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${activated ? 'border-brand-400 bg-brand-500/20 text-brand-100' : 'border-slate-700 bg-slate-900/40 text-slate-300 hover:border-brand-400/50 hover:text-brand-200'}`}
            >
              {feature.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
