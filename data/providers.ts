export type StreamingProvider = {
  id: string;
  name: string;
  description: string;
  url: string;
  plan: 'Free' | 'Freemium' | 'Subscription';
  hindiDubbed: boolean;
  english: boolean;
  originalLanguage: boolean;
  download: boolean;
  adSupported: boolean;
  liveTv: boolean;
  regionFocus: string[];
  notableTitles: string[];
  availabilityNotes: string;
  registrationRequired: boolean;
  bestFor: string;
};

export const streamingProviders: StreamingProvider[] = [
  {
    id: 'jio-cinema',
    name: 'JioCinema',
    description:
      'Offers a rotating catalog of free ad-supported Bollywood, Hollywood, and regional films with regular Hindi dubbed additions, especially around sports tournaments.',
    url: 'https://www.jiocinema.com',
    plan: 'Free',
    hindiDubbed: true,
    english: true,
    originalLanguage: true,
    download: true,
    adSupported: true,
    liveTv: true,
    regionFocus: ['India'],
    notableTitles: ['Transformers franchise (Hindi)', 'Fast & Furious saga', 'Mission: Impossible series'],
    availabilityNotes:
      'Requires an Indian mobile number for OTP login. Catalog rotates frequently; blockbuster titles tend to be time-limited.',
    registrationRequired: true,
    bestFor: 'Ad-supported blockbusters and cricket fans'
  },
  {
    id: 'zee5',
    name: 'ZEE5 (Free Tier)',
    description:
      'Hybrid service mixing premium originals with a free ad-supported tier that surfaces Hindi dubbed Hollywood releases and a large English movie section.',
    url: 'https://www.zee5.com',
    plan: 'Freemium',
    hindiDubbed: true,
    english: true,
    originalLanguage: true,
    download: false,
    adSupported: true,
    liveTv: true,
    regionFocus: ['India', 'Middle East', 'UK'],
    notableTitles: ['Pacific Rim (Hindi)', 'Godzilla series', 'The Conjuring Universe'],
    availabilityNotes:
      'Free tier requires ads and restricts HD playback on some titles. Region-locked; use official availability, avoid VPN to honor content licenses.',
    registrationRequired: true,
    bestFor: 'Free dubbed thrillers and day-and-date TV premieres'
  },
  {
    id: 'mx-player',
    name: 'MX Player',
    description:
      'Extensive library of Hindi dubbed South Indian blockbusters, Korean dramas, and curated Hollywood picks available without login.',
    url: 'https://www.mxplayer.in',
    plan: 'Free',
    hindiDubbed: true,
    english: true,
    originalLanguage: false,
    download: true,
    adSupported: true,
    liveTv: false,
    regionFocus: ['India'],
    notableTitles: ['Marvel animated specials', 'KGF (Hindi)', 'Korean thrillers (Hindi)'],
    availabilityNotes:
      'No account needed for most content. Flipkart & MX original titles may require signing in with mobile or social accounts.',
    registrationRequired: false,
    bestFor: 'Hindi dubbed South cinema and Korean dramas'
  },
  {
    id: 'shemaroo',
    name: 'ShemarooMe',
    description:
      'Classic and devotional catalog with a growing selection of dubbed Hollywood titles across mobile and smart TV apps.',
    url: 'https://www.shemaroome.com',
    plan: 'Freemium',
    hindiDubbed: true,
    english: true,
    originalLanguage: true,
    download: false,
    adSupported: true,
    liveTv: true,
    regionFocus: ['India', 'USA', 'UK', 'Middle East'],
    notableTitles: ['Charlie’s Angels (Hindi)', 'Resident Evil saga', 'The Mask (Hindi)'],
    availabilityNotes:
      'Free ad-supported window rotates monthly. International availability varies by platform (Android TV / Roku / Fire TV).',
    registrationRequired: false,
    bestFor: 'Family-friendly dubbed catalogs and classics'
  },
  {
    id: 'plex',
    name: 'Plex Free Movies & TV',
    description:
      'Global FAST platform with on-demand Hollywood titles, many available with Hindi audio or subtitles, plus linear live channels.',
    url: 'https://www.plex.tv/watch-free',
    plan: 'Free',
    hindiDubbed: true,
    english: true,
    originalLanguage: true,
    download: false,
    adSupported: true,
    liveTv: true,
    regionFocus: ['Global'],
    notableTitles: ['Red (Hindi audio on select feeds)', 'The Transporter', 'The Last Witch Hunter'],
    availabilityNotes:
      'Hindi dubs limited to curated collections and mobile apps. Create a free account to sync watchlists across devices.',
    registrationRequired: false,
    bestFor: 'Global catalog with FAST channels and device support'
  },
  {
    id: 'pluto',
    name: 'Pluto TV (India beta)',
    description:
      'Paramount’s ad-supported platform with curated channels. Indian beta catalogs Nickelodeon, action, and movies with English + Hindi tracks.',
    url: 'https://pluto.tv',
    plan: 'Free',
    hindiDubbed: true,
    english: true,
    originalLanguage: true,
    download: false,
    adSupported: true,
    liveTv: true,
    regionFocus: ['India', 'USA', 'Europe', 'LatAm'],
    notableTitles: ['Transformers Prime (Hindi)', 'Star Trek movies', 'Mission Impossible channel'],
    availabilityNotes:
      'FAST experience optimized for TV devices. On-demand selection in India still growing; Hindi tracks mainly on curated channels.',
    registrationRequired: false,
    bestFor: 'Always-on live channels in Hindi and English'
  },
  {
    id: 'youtube',
    name: 'YouTube (Official Movie Channels)',
    description:
      'Hundreds of studio-backed channels upload Hindi dubbed and English movies legally with ad support; includes premium rentals alongside free catalog.',
    url: 'https://www.youtube.com/movies',
    plan: 'Free',
    hindiDubbed: true,
    english: true,
    originalLanguage: true,
    download: true,
    adSupported: true,
    liveTv: false,
    regionFocus: ['Global'],
    notableTitles: ['Goldmines Telefilms dubbed catalogue', 'Sony Pictures Films India', 'Paramount Movies'],
    availabilityNotes:
      'Verify channel authenticity (look for verified checkmark). Offline downloads via YouTube app are available in India with a free Google account.',
    registrationRequired: false,
    bestFor: 'Quick access via mobile with offline viewing'
  }
];

export const featureFilters = [
  { id: 'hindiDubbed', label: 'Hindi dubbed audio' },
  { id: 'english', label: 'English language catalog' },
  { id: 'originalLanguage', label: 'Original-language tracks' },
  { id: 'download', label: 'Offline downloads' },
  { id: 'liveTv', label: 'Live TV / FAST channels' }
] as const;
