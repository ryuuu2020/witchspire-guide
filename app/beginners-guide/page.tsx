/* ============================================
   Witchspire — Beginner Guide
   First-5-hours walkthrough based on confirmed mechanics
   ============================================ */

const FIRST_HOURS = [
  {
    step: '01',
    title: 'Choose Your Coven',
    body: 'At character creation you must pick a coven. Cloudpiercers lean melee/aggressive and give earlier access to offensive familiars. Foretellers lean mystical, with spirit-jump and blink-focused starting abilities. Neither coven is locked out of any content — the choice shapes your starting kit and outfit. New players who want to focus on combat should pick Cloudpiercers; players who prefer exploration and co-op support should pick Foretellers.',
  },
  {
    step: '02',
    title: 'Claim a Sanctuary Spot',
    body: 'Your Sanctuary is your home base. Use astral projection to build free of gravity — you can place walls, floors, and decorations in 3D without falling. Drop your first Sanctuary near a resource cluster (timber and stone) but away from the visible corruption zones on the map. The Early Bird Cosmetics Pack (Ornate Lamp, Traxio Carpet, Wooden Couch, Two Cushions) gives you four starting decoration items to make the Sanctuary functional.',
  },
  {
    step: '03',
    title: 'Summon Your First Forest',
    body: 'Witchspire\'s survival is magical — you will not starve, but resources replenish your power. To get timber early, use your "call forth forests" ability to spawn trees near your Sanctuary, then harvest them. Magical pickaxes let you harvest from range, which is safer when corruption creatures are nearby.',
  },
  {
    step: '04',
    title: 'Capture Your First Familiar',
    body: 'Find a low-level wild creature and defeat it in battle. Its spirit becomes collectible. Once collected, the familiar joins your roster and can be bonded long-term. Bonded familiars scale with you and can fill gaps in your build — a melee Cloudpiercer might want a ranged familiar, and vice versa for Foretellers.',
  },
  {
    step: '05',
    title: 'Read the Sky — Survive Meteor Showers',
    body: 'Meteors fall around the Witchspire and corruption zones. The first time you see the sky darken, blink to clear ground immediately (Foretellers have a head start here). After the impact, check the crater — sometimes useful resources land with the meteor, but corruption creatures often follow. Treat every meteor as both a threat and an opportunity.',
  },
  {
    step: '06',
    title: 'Invite a Coven — Co-op Basics',
    body: 'Up to four witches can share a Sanctuary. Cross-coven co-op works fine: a Cloudpiercers host can host Foretellers guests. Co-op is most useful for corruption runs (someone tanks, someone scouts) and for shared Sanctuary building — you can split decoration duties and build a much larger base than solo.',
  },
];

const NEW_PLAYER_TRAPS = [
  { trap: 'Treating it like a hunger-survival game', fix: 'You do not starve. Resources replenish power, not hunger. Stop hoarding food and focus on familiars + corruption survival.' },
  { trap: 'Building the Sanctuary too close to corruption', fix: 'Corruption spreads. Build at least one screen-width away from the nearest visible corruption zone, or your base will be overrun within an in-game week.' },
  { trap: 'Ignoring astral projection while building', fix: 'Astral projection lets you build in 3D without falling. Use it for any vertical or ceiling-mounted decoration — manual placement will waste your time.' },
  { trap: 'Hoarding spirits instead of bonding', fix: 'Captured familiars do nothing until bonded. Pick one or two that fill gaps in your build and bond them early; their growth scales with playtime.' },
  { trap: 'Skipping the Offline Mode toggle', fix: 'Patch 0.1.3 added Offline Mode. If your connection is unstable, enable it before any long session — your save will sync back when you reconnect.' },
];
export const metadata = {
  title: "Witchspire Beginner Survival Guide — Complete Guide (2026)",
  description:
    "First 5 Hours",
};


export default function BeginnerGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">First 5 Hours</p>
      <h1 className="font-display text-3xl tracking-display text-parchment mb-2">Beginner Survival Guide</h1>
      <p className="font-body text-sm text-parchment-dim mb-10 max-w-2xl">
        Everything you need to know to survive your first session in Witchspire —
        coven choice, Sanctuary setup, first familiar, and how to read the sky.
        Updated for Patch 0.1.3 (Offline Mode).
      </p>

      <section className="mb-12">
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">The First Five Hours</h2>
        <div className="space-y-6">
          {FIRST_HOURS.map((s, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="font-display text-2xl text-dark-gold/60 shrink-0">{s.step}</span>
              <div>
                <h3 className="font-display text-base text-parchment mb-2">{s.title}</h3>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 border-t border-border-gold/10 pt-10">
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">Common New-Player Traps</h2>
        <div className="space-y-4">
          {NEW_PLAYER_TRAPS.map((t, i) => (
            <div key={i} className="border border-border-gold/20 bg-abyss-light p-5">
              <p className="font-display text-sm text-parchment mb-2">
                <span className="text-dark-gold/70 mr-2">✗</span>{t.trap}
              </p>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">
                <span className="text-dark-gold/70 mr-2">✓</span>{t.fix}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border-gold/10 pt-10">
        <h2 className="font-display text-xl text-dark-gold mb-3 tracking-tight">Where To Go Next</h2>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mb-5">
          Once you have a bonded familiar and a working Sanctuary, the world opens up.
          Head to the corruption zones for higher-tier resources (with risk), explore the
          Mira Isles for decoration opportunities, or group up with three other witches for
          a co-op Sanctuary build.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/familiars" className="px-4 py-2 border border-dark-gold/40 text-dark-gold font-label text-[10px] uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors">Familiar Database</a>
          <a href="/crafting" className="px-4 py-2 border border-dark-gold/40 text-dark-gold font-label text-[10px] uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors">Crafting Guide</a>
          <a href="/faq" className="px-4 py-2 border border-dark-gold/40 text-dark-gold font-label text-[10px] uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors">Full FAQ</a>
        </div>
      </section>
    </div>
  );
}
