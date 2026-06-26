/* ============================================
   Witchspire — FAQ
   Real questions sourced from Steam reviews, forums, and official AMA
   ============================================ */

const FAQ_GROUPS = [
  {
    heading: 'Early Access & Saves',
    items: [
      {
        q: 'Do I need an internet connection to play Witchspire?',
        a: 'No, as of Patch 0.1.3 (June 24, 2026) Witchspire is fully playable offline. You can launch the game without an active internet connection, and if you lose connection mid-session your save will transfer between online and offline modes seamlessly. The game does not delete saves when the connection drops.',
      },
      {
        q: 'I lost my save after a disconnect — can I recover it?',
        a: 'Patches 0.1.2 and 0.1.3 specifically target save integrity. If you are still on Patch 0.1.1 or earlier, update to 0.1.3 first — most "lost save" reports came from the connection-drop edge case that Offline Mode now resolves. If you were already on 0.1.3 and a save is missing, the save is likely still on disk; check the Witchspire save folder before starting a new character.',
      },
      {
        q: 'How long will Witchspire be in Early Access?',
        a: 'Envar Games has not committed to a 1.0 date. The Early Access Roadmap (revealed June 18, 2026) outlines a roughly weekly patch cadence and plans for additional covens, familiar lines, and Sanctuary decoration packs before the full release.',
      },
    ],
  },
  {
    heading: 'Covens & Character Creation',
    items: [
      {
        q: 'Cloudpiercers or Foretellers — which coven should I pick?',
        a: 'Cloudpiercers are the brave frontline coven and lean toward aggressive, melee-style play with earlier access to offensive familiars. Foretellers are the mystical coven and lean toward spirit-jump, blink, and recon abilities — better for scouting and co-op support. Neither is locked out of any content; the choice shapes your starting outfit and starting ability kit. Co-op groups benefit from mixing both.',
      },
      {
        q: 'Can I switch covens after character creation?',
        a: 'The current Early Access build does not allow coven switching on an existing character. Envar has indicated coven variety is on the roadmap, but coven respec mechanics have not been confirmed.',
      },
      {
        q: 'Are more covens coming?',
        a: 'Yes. The roadmap confirms additional covens are planned during Early Access. The launch build ships with Cloudpiercers and Foretellers; further coven lines will be added in subsequent patches.',
      },
    ],
  },
  {
    heading: 'Survival & Combat',
    items: [
      {
        q: 'Do I have to manage hunger or thirst?',
        a: 'No. Witchspire\'s survival is "magical" — you will not starve. Resources are used to replenish and bolster your power rather than to satisfy hunger bars. This is an intentional design choice: the focus is on exploration, familiar taming, and corruption survival, not on food timers.',
      },
      {
        q: 'How do I capture a familiar?',
        a: 'Defeat a wild creature in battle and its spirit becomes collectible. Once collected, you can build a long-term bond with that familiar and guide its growth to match your playstyle. Different covens bias the familiar pool in different directions.',
      },
      {
        q: 'What are meteors and how do I survive them?',
        a: 'Meteors are environmental hazards that fall from the sky, particularly around corruption zones and the Witchspire itself. The safest response is to blink out of the impact radius (Foretellers have an easier time with this) or to use a frontline familiar to absorb the hit. Reading the sky is a core survival skill.',
      },
    ],
  },
  {
    heading: 'Building & Co-op',
    items: [
      {
        q: 'How does astral projection building work?',
        a: 'Astral projection untethers you from gravity while building, allowing free movement in 3D space as you place and decorate your Sanctuary. This makes it much easier to build vertically and to position decorations precisely — the Early Bird Cosmetics Pack (Ornate Lamp, Traxio Carpet, Wooden Couch, Two Cushions) is a good starting set.',
      },
      {
        q: 'How many players can co-op together?',
        a: 'Witchspire supports co-op for up to four witches in a shared Sanctuary. Online Co-op is the primary mode; as of Patch 0.1.3 you can also play solo offline. Cross-platform multiplayer is not currently supported.',
      },
      {
        q: 'Can I share my Sanctuary with friends who are not in my coven?',
        a: 'Yes — Sanctuary sharing is coven-agnostic. A Cloudpiercers host can host Foretellers guests and vice versa. Coven only affects starting abilities and outfit; the Sanctuary itself is shared.',
      },
    ],
  },
  {
    heading: 'Purchasing & Founder\'s Pack',
    items: [
      {
        q: 'What is in the Early Bird Cosmetics Pack?',
        a: 'The Early Bird Cosmetics Pack is included with the Standard Edition during Early Access and contains four decoration items for your Sanctuary: Ornate Lamp, Traxio Carpet, Wooden Couch, and Two Cushions. The pack is a launch-window bonus; Envar has not confirmed whether it will remain available after Early Access ends.',
      },
      {
        q: 'Is the Founder\'s Pack worth it?',
        a: 'The Founder\'s Edition includes the official soundtrack (also available on streaming platforms) and supports ongoing development. From a pure gameplay standpoint the Standard Edition at $22.99 covers the full game; Founder\'s is primarily for players who want to support the studio and own the OST.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Community</p>
      <h1 className="font-display text-3xl tracking-display text-parchment mb-2">Frequently Asked Questions</h1>
      <p className="font-body text-sm text-parchment-dim mb-10 max-w-2xl">
        Real questions from Steam reviews, the official YouTube AMA, and community forums —
        answered with the most current patch (0.1.3) in mind.
      </p>

      <div className="space-y-12">
        {FAQ_GROUPS.map((group, gi) => (
          <section key={gi}>
            <h2 className="font-display text-lg text-dark-gold mb-5 tracking-tight border-b border-border-gold/20 pb-2">
              {group.heading}
            </h2>
            <div className="space-y-5">
              {group.items.map((item, ii) => (
                <div key={ii} className="border border-border-gold/20 bg-abyss-light p-5">
                  <h3 className="font-display text-base text-parchment mb-3 leading-snug">{item.q}</h3>
                  <p className="font-body text-sm text-parchment-dim leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
