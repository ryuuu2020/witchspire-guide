import Image from 'next/image';

/* ============================================
   Witchspire — Home Page
   Page content only — chrome in layout.tsx
   All data sourced from Steam store page + patch notes
   ============================================ */

const FEATURED_GUIDES = [
  {
    title: 'Beginner Survival Guide — First 5 Hours',
    excerpt: 'What to do the moment you arrive at the Witchspire: claim a Sanctuary spot, summon your first forest, capture your first familiar, and dodge the first meteor shower. Coven-agnostic advice plus Cloudpiercers vs Foretellers trade-offs for new witches.',
    tag: 'BEGINNER',
    tagStyle: 'gold-tag',
    difficulty: 'NEW',
  },
  {
    title: 'Familiar Taming — Battle Mechanics & Spirit Capture',
    excerpt: 'Every wild creature in Witchspire can be defeated in battle to collect its spirit. Learn how bonding works, which familiars scale into late-game companions, and how the coven you pick at character creation shapes your familiar pool.',
    tag: 'GUIDE',
    tagStyle: 'gold-tag',
    difficulty: 'NORMAL',
  },
  {
    title: 'Sanctuary Building — Astral Projection Mode',
    excerpt: 'Witchspire\'s building system untethers you from gravity via astral projection. This guide covers the crafting tree, decoration packs (including the Early Bird Cosmetics Pack: Ornate Lamp, Traxio Carpet, Wooden Couch, Two Cushions), and how to share a Sanctuary with a co-op coven.',
    tag: 'CRAFTING',
    tagStyle: 'gold-tag',
    difficulty: 'NORMAL',
  },
];

const COVEN_ROWS = [
  { name: 'Cloudpiercers', archetype: 'Brave / Frontline', strength: 'Melee-leaning playstyle; earlier access to aggressive familiars and offensive spirit abilities.', pick: 'Pick if you want to lead charges into corruption zones.' },
  { name: 'Foretellers', archetype: 'Mystical / Support', strength: 'Spirit-jump and blink-focused; stronger magical harvesting and reconnaissance tools.', pick: 'Pick if you prefer scouting, ranged casting, and co-op support.' },
];

const KEY_MECHANICS = [
  { title: 'Survival Made Magical', snippet: 'You will not starve — but resources replenish your power. Call forth forests for timber, spirit jump up ledges, blink out of attacks, and send magical pickaxes to harvest from range.' },
  { title: 'Befriend Familiars', snippet: 'Wilderness creatures can be defeated in battle to capture their spirits. Build long-term bonds and guide their growth to match your playstyle — every witch\'s familiar roster looks different.' },
  { title: 'Conjure a Sanctuary', snippet: 'Use astral projection to build free of gravity. Decorate with cosmetic packs, share with your coven, and use it as a staging base for corruption runs.' },
  { title: 'The Ancients & Corruption', snippet: 'Meteors fall, ancient creatures roam, and corruption spreads beneath the surface. The Witchspire has chosen you — survival means reading the sky and the ground.' },
];

const PATCH_TIMELINE = [
  { version: '0.1.3', date: 'Jun 24, 2026', highlight: 'Offline Mode added — full game playable without internet; save files transfer between online and offline.' },
  { version: '0.1.2', date: 'Jun 19, 2026', highlight: 'Save Game fixes and stability improvements; first major post-launch patch.' },
  { version: '0.1.1d', date: 'Jun 16, 2026', highlight: 'First-week QoL patch; roadmap reveal and AMA on YouTube.' },
  { version: 'EA Launch', date: 'Jun 10, 2026', highlight: 'Witchspire enters Steam Early Access; 100k copies sold within two weeks.' },
];

export default function HomePage() {
  return (
    <div className="bg-abyss bg-rune-pattern">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4">
        <Image
          src="/hero.jpg"
          alt="Witchspire"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-transparent to-abyss pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-parchment-dim mb-6">
            ENVAR GAMES — EARLY ACCESS
          </p>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-display
                         text-dark-gold text-shadow-gold leading-tight">
            Witchspire Guide
          </h1>

          <p className="font-body text-base sm:text-lg text-parchment-dim mt-6 max-w-2xl mx-auto leading-relaxed">
            A community field guide to the co-op witch adventure — familiars, sanctuary
            building, coven choice, corruption survival, and patch-by-patch strategy.
            Updated through Patch 0.1.3 (Offline Mode).
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/beginners-guide"
              className="px-5 py-2.5 border border-dark-gold/60 text-dark-gold font-label text-xs uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors"
            >
              Start Beginner Guide
            </a>
            <a
              href="/familiars"
              className="px-5 py-2.5 border border-parchment-dim/30 text-parchment-dim font-label text-xs uppercase tracking-wider hover:border-dark-gold hover:text-dark-gold transition-colors"
            >
              Familiar Database
            </a>
          </div>
        </div>
      </section>

      {/* Game Facts Strip */}
      <section className="border-y border-border-gold/20 bg-abyss-light">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="font-display text-2xl text-dark-gold">Jun 10, 2026</p>
            <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mt-1">Early Access Launch</p>
          </div>
          <div>
            <p className="font-display text-2xl text-dark-gold">$22.99</p>
            <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mt-1">Standard Edition</p>
          </div>
          <div>
            <p className="font-display text-2xl text-dark-gold">100k+</p>
            <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mt-1">Copies Sold (2 weeks)</p>
          </div>
          <div>
            <p className="font-display text-2xl text-dark-gold">Very Positive</p>
            <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mt-1">1,300+ Steam Reviews</p>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Field Guides</p>
            <h2 className="font-display text-2xl tracking-display text-parchment">Featured Walkthroughs</h2>
          </div>
          <a href="/guides" className="font-label text-xs uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors">
            All Guides &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURED_GUIDES.map((guide, i) => (
            <a
              key={i}
              href={i === 0 ? '/beginners-guide' : i === 1 ? '/familiars' : '/crafting'}
              className="group border border-border-gold/20 bg-abyss-light hover:border-dark-gold/60 transition-colors p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`${guide.tagStyle}`}>{guide.tag}</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">{guide.difficulty}</span>
              </div>
              <h3 className="font-display text-lg tracking-tight text-parchment group-hover:text-dark-gold transition-colors leading-snug">
                {guide.title}
              </h3>
              <p className="font-body text-sm text-parchment-dim mt-3 leading-relaxed">
                {guide.excerpt}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Core Mechanics */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 py-12 border-t border-border-gold/10">
        <div className="mb-8">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">The World</p>
          <h2 className="font-display text-2xl tracking-display text-parchment">Core Mechanics</h2>
          <p className="font-body text-sm text-parchment-dim mt-2 max-w-2xl">
            Witchspire merges survival, crafting, creature-collecting and co-op witch fantasy.
            These four pillars shape every decision you make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {KEY_MECHANICS.map((m, i) => (
            <div key={i} className="border border-border-gold/20 bg-abyss-light p-6">
              <h3 className="font-display text-lg text-dark-gold mb-3 tracking-tight">{m.title}</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">{m.snippet}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coven Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 py-12 border-t border-border-gold/10">
        <div className="mb-8">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Character Creation</p>
          <h2 className="font-display text-2xl tracking-display text-parchment">Which Coven Should You Join?</h2>
          <p className="font-body text-sm text-parchment-dim mt-2 max-w-2xl">
            At launch your coven choice unlocks unique starting outfits and abilities.
            Two covens are confirmed in Early Access — more will be added per the roadmap.
          </p>
        </div>

        <div className="overflow-x-auto border border-border-gold/20">
          <table className="w-full text-left">
            <thead className="bg-abyss-light border-b border-border-gold/20">
              <tr>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Coven</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Archetype</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Strength</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">When To Pick</th>
              </tr>
            </thead>
            <tbody>
              {COVEN_ROWS.map((row, i) => (
                <tr key={i} className="border-b border-border-gold/10 last:border-0">
                  <td className="px-4 py-3 font-display text-sm text-parchment">{row.name}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim">{row.archetype}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim">{row.strength}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim">{row.pick}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Patch Timeline */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 py-12 border-t border-border-gold/10">
        <div className="mb-8">
          <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Update History</p>
          <h2 className="font-display text-2xl tracking-display text-parchment">Patch Timeline</h2>
        </div>

        <div className="space-y-4">
          {PATCH_TIMELINE.map((p, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-6 border-l-2 border-dark-gold/30 pl-5 py-2">
              <div className="shrink-0 sm:w-40">
                <p className="font-display text-base text-dark-gold">Patch {p.version}</p>
                <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mt-1">{p.date}</p>
              </div>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">{p.highlight}</p>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-parchment-dim/60 mt-6">
          See <a href="/news" className="text-dark-gold hover:underline">News</a> for the full patch notes archive.
        </p>
      </section>

      {/* External Links */}
      <section className="max-w-6xl mx-auto px-4 lg:px-6 py-12 border-t border-border-gold/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-border-gold/20 bg-abyss-light p-6">
          <div>
            <h3 className="font-display text-lg text-dark-gold mb-1">Official Resources</h3>
            <p className="font-body text-sm text-parchment-dim">
              Cross-reference community data with the official channels below.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://store.steampowered.com/app/2679100/Witchspire/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-dark-gold/40 text-dark-gold font-label text-[10px] uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors">Steam Store</a>
            <a href="http://playwitchspire.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-dark-gold/40 text-dark-gold font-label text-[10px] uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors">Official Site</a>
          </div>
        </div>
      </section>
    </div>
  );
}
