import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witchspire Crafting & Sanctuary Building — Astral Projection Guide',
  description: 'A field guide to Witchspire crafting and Sanctuary building: astral projection mechanics, the crafting tree, the Early Bird Cosmetics Pack, and co-op Sanctuary sharing. Updated for Patch 0.1.3.',
};

const ASTRAL_PROJECTION_STEPS = [
  { step: '01', title: 'Enter build mode', body: 'Activate astral projection from the Sanctuary menu. Your witch untethers from gravity and can move freely in 3D space — no fall damage, no clipping, full freedom to place walls, floors, and decorations vertically.' },
  { step: '02', title: 'Place structural pieces', body: 'Walls, floors, and foundations snap to a grid. Use astral projection to place ceiling-mounted decorations (Ornate Lamp) and elevated platforms without scaffolding — this is the single biggest advantage of magical building over grounded building.' },
  { step: '03', title: 'Decorate with cosmetics', body: 'Cosmetic items (Traxio Carpet, Wooden Couch, Two Cushions from the Early Bird Cosmetics Pack) can be placed freely. Some decorations have snap points; others are free-form. Patch 0.1.3 added new decoration options for Mira Isles villas.' },
  { step: '04', title: 'Share with your coven', body: 'Up to four witches can share a Sanctuary. Building privileges can be granted to coven members so they can place and edit decorations. Cross-coven co-op works — a Cloudpiercers host can host Foretellers guests in the same Sanctuary.' },
];

const EARLY_BIRD_COSMETICS = [
  { item: 'Ornate Lamp', placement: 'Ceiling-mounted', note: 'Light source. Best placed in astral projection mode — ceiling mount is much easier when you can fly.' },
  { item: 'Traxio Carpet', placement: 'Floor', note: 'Cosmetic floor covering. Snaps to tile boundaries. Pairs well with Wooden Couch for a sitting area.' },
  { item: 'Wooden Couch', placement: 'Floor', note: 'Seating decoration. Functional in co-op — guests can sit on it while you continue building.' },
  { item: 'Two Cushions', placement: 'Floor', note: 'Small floor decorations. Free-form placement, no snap required. Good for filling gaps in a furnished room.' },
];

const CRAFTING_CATEGORIES = [
  { category: 'Structural', examples: 'Walls, floors, foundations, doorways, ceilings', source: 'Timber (from summoned forests) + stone. The core building loop.' },
  { category: 'Decoration', examples: 'Ornate Lamp, Traxio Carpet, Wooden Couch, Two Cushions, Mira Isles villa decor (Patch 0.1.3)', source: 'Early Bird Cosmetics Pack (Standard Edition EA bonus), patch-added decor, and crafted items from the decoration tree.' },
  { category: 'Magical harvesting', examples: 'Magical pickaxe, spirit-jump talismans, blink reagents', source: 'Crafted from resources gathered via magical harvesting. Foretellers start with a head start on these recipes.' },
  { category: 'Familiar gear', examples: 'Bonding charms, growth catalysts', source: 'Crafted to support bonded familiars. Higher-tier gear unlocks as your familiar roster grows.' },
];

export default function CraftingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Building</p>
      <h1 className="font-display text-3xl tracking-display text-parchment mb-2">Sanctuary Crafting Guide</h1>
      <p className="font-body text-sm text-parchment-dim mb-10 max-w-2xl">
        Witchspire\'s building system is magical by design — astral projection lets you build
        free of gravity. Master the crafting tree, the Early Bird Cosmetics Pack, and co-op
        Sanctuary sharing. Updated for Patch 0.1.3.
      </p>

      <section className="mb-12">
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">Astral Projection — How To Build</h2>
        <div className="space-y-6">
          {ASTRAL_PROJECTION_STEPS.map((s, i) => (
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
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">Early Bird Cosmetics Pack</h2>
        <p className="font-body text-sm text-parchment-dim mb-6 max-w-2xl">
          Included with the Standard Edition during Early Access. Four starting decoration items
          to make your Sanctuary functional from day one.
        </p>
        <div className="overflow-x-auto border border-border-gold/20">
          <table className="w-full text-left">
            <thead className="bg-abyss-light border-b border-border-gold/20">
              <tr>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Item</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Placement</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {EARLY_BIRD_COSMETICS.map((row, i) => (
                <tr key={i} className="border-b border-border-gold/10 last:border-0">
                  <td className="px-4 py-3 font-display text-sm text-parchment align-top">{row.item}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim align-top">{row.placement}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim align-top">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-border-gold/10 pt-10">
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">Crafting Categories</h2>
        <div className="space-y-4">
          {CRAFTING_CATEGORIES.map((c, i) => (
            <div key={i} className="border border-border-gold/20 bg-abyss-light p-5">
              <h3 className="font-display text-sm text-dark-gold mb-2 tracking-tight">{c.category}</h3>
              <p className="font-body text-sm text-parchment mb-2"><span className="text-parchment-dim">Examples: </span>{c.examples}</p>
              <p className="font-body text-sm text-parchment-dim leading-relaxed"><span className="text-parchment">Source: </span>{c.source}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-parchment-dim/60 mt-6">
          Full recipe tables (with material costs per item) will be added as the community
          reverse-engineers the crafting tree. For now, this page covers confirmed categories
          and starter items only.
        </p>
      </section>
    </div>
  );
}
