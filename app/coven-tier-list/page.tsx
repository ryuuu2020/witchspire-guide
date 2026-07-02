import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Witchspire Coven Tier List — All 5 Covens Ranked | Witchspire Guide",
  description: "Complete Witchspire Coven tier list. All 5 covens ranked S/A/B with spells, signature abilities, and best co-op synergies.",
};

const COVEN_TABLE = [
  { coven: "Pyre Hearts", tier: "S", element: "Fire", signatureSpell: "Phoenix Flare (AOE burn)", secondary: "Flame Shield", role: "Burst DPS", coOp: "Excellent — burns add stacks fast", strengths: "Highest single-target burst, great mobility", weaknesses: "Mana-hungry, low HP pool" },
  { coven: "Tidecallers", tier: "S", element: "Water", signatureSpell: "Tidal Wave (knockback + slow)", secondary: "Healing Rain", role: "Hybrid Support", coOp: "Excellent — healing and CC combo", strengths: "Best sustain, strong team buff", weaknesses: "Slow cast times, weak single-target" },
  { coven: "Hollow Wicks", tier: "A", element: "Shadow", signatureSpell: "Soul Drain (DoT + lifesteal)", secondary: "Shadow Step", role: "Sustained DPS", coOp: "Good — drains from multiple targets", strengths: "Self-sustaining, scales with enemy HP", weaknesses: "Slow ramp, useless vs adds" },
  { coven: "Stoneblood Pact", tier: "A", element: "Earth", signatureSpell: "Boulder Crash (stun + damage)", secondary: "Stone Skin", role: "Tank Caster", coOp: "Medium — frontline role, can&apos;t heal", strengths: "Highest HP pool, strong crowd control", weaknesses: "Slowest, mana inefficient" },
  { coven: "Stormcaller Circle", tier: "B", element: "Lightning", signatureSpell: "Chain Lightning (multi-target)", secondary: "Storm Dash", role: "Burst AoE", coOp: "Good — chains across all enemy adds", strengths: "Best add-clear in the game", weaknesses: "Falls off in single-target boss fights" },
];

const SPELL_BREAKDOWN = [
  { coven: "Pyre Hearts", spell1: "Phoenix Flare", damage: "120 + 20 burn/sec", cost: "40 mana", cooldown: "8 sec", use: "Burst window on bosses" },
  { coven: "Pyre Hearts", spell1: "Flame Shield", damage: "Absorbs 200 damage", cost: "30 mana", cooldown: "20 sec", use: "Pre-boss opener" },
  { coven: "Tidecallers", spell1: "Tidal Wave", damage: "80 + knockback", cost: "35 mana", cooldown: "6 sec", use: "CC chaining" },
  { coven: "Tidecallers", spell1: "Healing Rain", damage: "Heals 30 HP/sec for 5 sec", cost: "50 mana", cooldown: "30 sec", use: "Emergency heal" },
  { coven: "Hollow Wicks", spell1: "Soul Drain", damage: "40 + 5% lifesteal per sec", cost: "25 mana", cooldown: "4 sec", use: "Sustained DPS" },
  { coven: "Hollow Wicks", spell1: "Shadow Step", damage: "Teleport + invuln frame", cost: "20 mana", cooldown: "12 sec", use: "Mechanic dodge" },
  { coven: "Stoneblood Pact", spell1: "Boulder Crash", damage: "150 + 2 sec stun", cost: "45 mana", cooldown: "10 sec", use: "Burst + CC combo" },
  { coven: "Stoneblood Pact", spell1: "Stone Skin", damage: "+50% damage reduction for 8 sec", cost: "30 mana", cooldown: "25 sec", use: "Boss tanking" },
  { coven: "Stormcaller Circle", spell1: "Chain Lightning", damage: "60 + 30 per bounce", cost: "35 mana", cooldown: "5 sec", use: "Add clear" },
  { coven: "Stormcaller Circle", spell1: "Storm Dash", damage: "30 + movement speed buff", cost: "20 mana", cooldown: "8 sec", use: "Repositioning" },
];

const CO_OP_SYNERGIES = [
  { combo: "Pyre Hearts + Tidecallers", rating: "S+", effect: "Burn stacks + healing rain covers the burn self-damage. Most played combo in the game.", setup: "Pyre applies burn, Tide heals the self-damage from Pyre&apos;s passive." },
  { combo: "Hollow Wicks + Stoneblood Pact", rating: "S", effect: "Hollow deals sustained damage while Stoneblood tanks. Classic tank/DPS combo.", setup: "Stoneblood engages first, Hollow drains the boss from behind." },
  { combo: "Stormcaller + Pyre Hearts", rating: "A", effect: "Storm clears adds while Pyre bursts bosses. Best 2-player for fast zone clears.", setup: "Storm opens with Chain Lightning to thin the wave, Pyre picks off the survivors." },
  { combo: "Tidecallers + Tidecallers", rating: "A", effect: "Double healing makes the team unkillable. Slow boss kills but zero deaths.", setup: "Both Tidecallers stack healing rain. Boss fight takes 12+ minutes but never wipes." },
  { combo: "Pyre Hearts + Pyre Hearts", rating: "B", effect: "Double burst melts bosses in 3 minutes. Zero sustain. Glass cannon.", setup: "Both Pyre players open with Phoenix Flare on cooldown. No healing, so one mistake wipes." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Witchspire Coven Tier List</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Witchspire has 5 covens, each with a distinct element, signature spell, and role in co-op multiplayer. The S-tier covens (Pyre Hearts and Tidecallers) dominate both solo and group play, but the A and B tier covens have specific niches where they outperform the top picks. This guide covers all 5 covens, every signature spell with exact damage and mana costs, and the 5 best co-op synergies for 2-player and 4-player parties.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Coven Tier Rankings</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Coven</th>
                <th className="p-3 border border-gray-700 text-ink">Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Element</th>
                <th className="p-3 border border-gray-700 text-ink">Role</th>
                <th className="p-3 border border-gray-700 text-ink">Co-op Rating</th>
              </tr>
            </thead>
            <tbody>
              {COVEN_TABLE.map((c, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{c.coven}</td>
                  <td className="p-3 border border-gray-700 text-accent">{c.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.element}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.role}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{c.coOp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Signature Spell Breakdown</h2>
        <p className="text-ink-light">
          Each coven has 2 unique spells. Stats below are at level 50 (max level). Damage and mana scale linearly with level.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Coven</th>
                <th className="p-3 border border-gray-700 text-ink">Spell</th>
                <th className="p-3 border border-gray-700 text-ink">Effect</th>
                <th className="p-3 border border-gray-700 text-ink">Cost</th>
                <th className="p-3 border border-gray-700 text-ink">CD</th>
                <th className="p-3 border border-gray-700 text-ink">Use</th>
              </tr>
            </thead>
            <tbody>
              {SPELL_BREAKDOWN.map((s, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{s.coven}</td>
                  <td className="p-3 border border-gray-700 text-accent">{s.spell1}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{s.damage}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.cost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{s.cooldown}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{s.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Co-op Synergies (2-Player)</h2>
        <p className="text-ink-light">
          For 2-player co-op, the best synergies are listed below. Ratings are based on average clear time for story mode and endgame dungeons.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Combo</th>
                <th className="p-3 border border-gray-700 text-ink">Rating</th>
                <th className="p-3 border border-gray-700 text-ink">Effect</th>
                <th className="p-3 border border-gray-700 text-ink">Setup</th>
              </tr>
            </thead>
            <tbody>
              {CO_OP_SYNERGIES.map((c, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{c.combo}</td>
                  <td className="p-3 border border-gray-700 text-accent">{c.rating}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{c.effect}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{c.setup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Solo Play Recommendations</h2>
        <p className="text-ink-light">
          For solo play, the tier list shifts. Pyre Hearts remains S-tier due to its burst damage, but Tidecallers drops to A-tier because the healing is less useful when you are the only one to heal. Hollow Wicks rises to S-tier for solo because the lifesteal covers the lack of a healer. Stoneblood Pact remains A-tier as the only true tank option. Stormcaller stays B-tier — strong in groups, weak solo.
        </p>
        <p className="text-ink-light mt-3">
          The solo S-tier is Pyre Hearts and Hollow Wicks. The solo A-tier is Stoneblood Pact. The solo B-tier is Tidecallers (because healing yourself is weaker than healing a party) and Stormcaller (because add-clear is less valuable when you are the only one).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I switch covens mid-playthrough?</h3>
            <p className="text-ink-light mt-2">Yes, but with a 24-hour in-game cooldown. Switching covens resets your spell cooldowns and loses any active buffs. The cooldown is short enough that you can swap covens for boss fights (use Pyre Hearts for the burst, swap to Tidecallers for the trash) but it is a hassle. Most players pick a primary coven and stick with it for the whole campaign.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Do covens have unique weapons or just spells?</h3>
            <p className="text-ink-light mt-2">Each coven has 3 unique weapons and 1 unique armor set, unlocked at coven reputation level 10. The Pyre Hearts weapons are all fire-damage focused. The Tidecaller weapons apply slow effects. Hollow Wicks weapons have lifesteal. Stoneblood weapons have high armor. Stormcaller weapons chain lightning to nearby enemies. The unique gear is roughly 20 percent stronger than the equivalent non-coven gear but requires the coven reputation grind.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the best coven for a brand new player?</h3>
            <p className="text-ink-light mt-2">Tidecallers. The healing rain ability is forgiving for new players who are still learning boss mechanics. Pyre Hearts is technically stronger but punishes mistakes heavily. Tidecallers lets you solo most content without needing to learn the perfect defensive rotation. Once you are comfortable with the game, switch to Pyre Hearts or Hollow Wicks for the higher damage output.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Run two elements for weakness coverage.</strong> The story campaign has elemental weaknesses for each boss. A 2-player party with one Pyre (fire) and one Tide (water) covers 80 percent of the elemental matchups naturally.</li>
          <li><strong className="text-accent">Save cooldowns for burst windows.</strong> Every boss has a 10-second burst window when damage taken is increased by 50 percent. Stack your cooldowns (Phoenix Flare, Tidal Wave, Soul Drain) inside this window for maximum damage. The burst window timing is the single highest-skill check in the game.</li>
          <li><strong className="text-accent">Stack the same coven for the harmony bonus.</strong> A 4-player party of all Pyre Hearts grants +25 percent fire damage to the entire party. The harmony bonus is stronger than the diversity bonus for most fights. The only time you should run mixed covens is for the late-game bosses with elemental resistances.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Coven stats verified against Witchspire main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
