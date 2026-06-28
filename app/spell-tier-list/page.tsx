export const metadata = {
  title: "Witchspire Spell Tier List — Best Spells (2026)",
  description: "Complete spell tier list for Witchspire. Best spells by school, S-tier picks, and spell synergy guide.",
};

export default function SpellTierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Witchspire Spell Tier List</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">S-Tier Spells</h2>
            <p className="text-gray-300 leading-relaxed">S-tier spells in Witchspire have either exceptional damage-to-cost ratios, game-changing utility effects, or both. These spells define the strongest builds and should be prioritized in any spellbook unless a specific combo strategy demands otherwise.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Elemental School Tier</h2>
            <p className="text-gray-300 leading-relaxed">Fire spells offer the highest single-target damage but require proximity. Ice spells provide crowd control (freeze, slow) at the cost of lower raw damage. Lightning spells hit multiple targets but are countered by grounded enemies. Poison spells deal damage-over-time, excellent for boss fights but weak against weak trash mobs.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Arcane School Tier</h2>
            <p className="text-gray-300 leading-relaxed">Arcane spells focus on spell enhancement (boosting other spells) and resource manipulation (mana regeneration, spell cost reduction). Building an arcane-heavy spellbook creates a multiplicative scaling effect where every other spell becomes more powerful. Arcane suits experienced players who want to optimize spell combos.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Spellbook Composition</h2>
            <p className="text-gray-300 leading-relaxed">A balanced spellbook runs: 2 damage spells (one AoE, one single-target), 1 defensive spell (shield, teleport, or dodge), 1 utility spell (reveal, charm, or slow), and 1 passive enhancement. Avoid specializing in only one damage type — most mid-game bosses have resistances that counter mono-element builds.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-purple-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about s-tier spells in Witchspire?</h3>
                <p className="text-gray-300 leading-relaxed">S-tier spells in Witchspire have either exceptional damage-to-cost ratios, game-changing utility effects, or both. These spells define the strongest builds and should be prioritized in any spellbook u...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about elemental school tier in Witchspire?</h3>
                <p className="text-gray-300 leading-relaxed">Fire spells offer the highest single-target damage but require proximity. Ice spells provide crowd control (freeze, slow) at the cost of lower raw damage. Lightning spells hit multiple targets but are...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about arcane school tier in Witchspire?</h3>
                <p className="text-gray-300 leading-relaxed">Arcane spells focus on spell enhancement (boosting other spells) and resource manipulation (mana regeneration, spell cost reduction). Building an arcane-heavy spellbook creates a multiplicative scalin...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
