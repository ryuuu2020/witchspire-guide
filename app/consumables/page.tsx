export const metadata = {
  title: 'Witchspire Consumables Guide — Potions, Food, and Emergency Utility (2026)',
  description: 'Use Witchspire consumables correctly: recovery timing, corruption cleansing, and which crafted supplies are worth carrying into long runs.',
};

export default function ConsumablesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-10">
      <h1 className="font-display text-3xl tracking-display text-parchment mb-3">Consumables &amp; Potions Guide</h1>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mb-8">
          Consumables in Witchspire exist to protect tempo. A potion that stabilizes you before a corruption spike is
          worth more than a stronger item saved for a perfect moment that never arrives. Use consumables to smooth bad
          weather, rough fights, and long expeditions where returning to Sanctuary would cost too much progress.
        </p>

      <div className="border border-border-gold/20 bg-abyss-light p-6 space-y-4">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          Healing items should be used before you become desperate. Mana and corruption tools are best saved for
          sections that stack pressure quickly, such as boss phases or long traversal stretches where familiars are
          already busy. If an item only looks good when everything goes right, it is usually lower priority than a
          simple recovery tool that rescues a messy run.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          When packing for co-op, coordinate roles instead of duplicating the entire supply kit. One player can carry
          corruption control while another brings emergency healing and stamina support. That creates more total
          problem-solving room than four identical inventories.
        </p>
      </div>

      <div className="border border-border-gold/20 bg-abyss-light p-6 mt-6">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          As a practical rule, leave Sanctuary with one item for sustain, one for status or corruption pressure, and
          one flexible slot that answers the specific region or objective you are chasing. That small framework keeps
          your inventory honest and stops overpacking items that only matter in ideal scenarios.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          Players who use consumables proactively usually progress faster than players who hoard everything. A potion
          that saves one clean pull often protects more total resources than the same potion saved for an emergency.
        </p>
      </div>
    </div>
  );
}
