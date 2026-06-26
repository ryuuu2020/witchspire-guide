import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witchspire Guides — Familiars, Crafting, Covens & Survival',
  description: 'Browse all Witchspire guides — beginner walkthrough, familiar taming, sanctuary crafting, coven choice, and patch notes. Updated through Patch 0.1.3.',
};

interface GuideEntry {
  number: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const GUIDES: GuideEntry[] = [
  {
    number: '01',
    title: "Beginner's Survival Guide",
    description: 'New to Witchspire? Walk through your first five hours: pick a coven, claim a Sanctuary, summon your first forest, capture a familiar, and survive your first meteor shower. Avoid the five most common new-player traps.',
    href: '/beginners-guide',
    tag: 'STARTER',
  },
  {
    number: '02',
    title: 'Familiar Taming & Spirit Capture',
    description: 'Every wild creature in Witchspire can be defeated in battle to collect its spirit. Learn how bonding works, which familiars scale into late-game companions, and how your coven choice shapes the familiar pool.',
    href: '/familiars',
    tag: 'CREATURES',
  },
  {
    number: '03',
    title: 'Sanctuary Crafting — Astral Projection Building',
    description: 'Witchspire\'s building system untethers you from gravity. Master the crafting tree, the Early Bird Cosmetics Pack (Ornate Lamp, Traxio Carpet, Wooden Couch, Two Cushions), and how to share a Sanctuary with a co-op coven.',
    href: '/crafting',
    tag: 'BUILDING',
  },
  {
    number: '04',
    title: 'Coven Comparison — Cloudpiercers vs Foretellers',
    description: 'At launch, two covens are available. Cloudpiercers lean melee/aggressive; Foretellers lean mystical/support. This breakdown covers starting abilities, outfit, familiar bias, and co-op role for each coven.',
    href: '/#covens',
    tag: 'COVENS',
  },
  {
    number: '05',
    title: 'Corruption & Meteor Survival',
    description: 'Corruption spreads beneath the surface; meteors fall from the sky. Learn to read the sky for incoming meteor showers, how to blink out of the impact radius, and how to use meteor craters as resource opportunities without getting overrun.',
    href: '/beginners-guide',
    tag: 'SURVIVAL',
  },
  {
    number: '06',
    title: 'News & Patch Notes Archive',
    description: 'Every Witchspire patch from launch (0.1.0) through current (0.1.3) with sourced changelog highlights. Includes the 100k copies-sold milestone, Offline Mode addition, and the Early Access roadmap.',
    href: '/news',
    tag: 'PATCHES',
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-12">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Library</p>
      <h1 className="font-display text-3xl tracking-display text-parchment mb-2">All Guides</h1>
      <p className="font-body text-sm text-parchment-dim mb-10 max-w-2xl">
        Every Witchspire guide on the site, ordered by recommended reading sequence for a new player.
      </p>

      <div className="space-y-4">
        {GUIDES.map((g, i) => (
          <a
            key={i}
            href={g.href}
            className="group flex flex-col sm:flex-row gap-4 sm:gap-6 border border-border-gold/20 bg-abyss-light hover:border-dark-gold/60 transition-colors p-5"
          >
            <span className="font-display text-3xl text-dark-gold/40 shrink-0 sm:w-16">{g.number}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="gold-tag">{g.tag}</span>
              </div>
              <h2 className="font-display text-lg text-parchment group-hover:text-dark-gold transition-colors mb-2 leading-snug">
                {g.title}
              </h2>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">{g.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
