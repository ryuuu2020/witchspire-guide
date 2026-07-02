import Link from "next/link";

export const metadata = {
  title: "Witchspire Skill Tree Guide — Best Skills, Build Paths & Passive Synergies",
  description: "Navigate Witchspire's skill tree with complete guide. Best skills per class, optimal paths, passive synergies.",
};

const passiveNodes = [
  { node: "Arcane Reservoir", cls: "Sorcerer", effect: "+15% max Mana, +5 Mana regen per second", cost: "3", priority: "S" },
  { node: "Blood Ritual", cls: "Warlock", effect: "10% of damage dealt heals you, -5% max HP", cost: "3", priority: "S" },
  { node: "Iron Will", cls: "Knight", effect: "+20% max HP, +10% damage reduction while below 50% HP", cost: "3", priority: "S" },
  { node: "Shadow Step", cls: "Rogue", effect: "Dodging grants +30% crit chance for 3 seconds", cost: "4", priority: "S" },
  { node: "Nature's Bounty", cls: "Druid", effect: "Healing effects increased by 25%, +1 Life regen", cost: "3", priority: "A" },
  { node: "Elemental Affinity", cls: "Sorcerer", effect: "Fire and Ice spells deal +12% damage", cost: "4", priority: "A" },
  { node: "Soul Harvest", cls: "Warlock", effect: "Killing an enemy restores 8% max Mana", cost: "3", priority: "A" },
  { node: "Shield Mastery", cls: "Knight", effect: "Block chance +15%, successful blocks reflect 20 damage", cost: "4", priority: "A" },
  { node: "Venom Coating", cls: "Rogue", effect: "Critical strikes apply poison (5% weapon damage per second, 4s)", cost: "3", priority: "A" },
  { node: "Thorned Hide", cls: "Druid", effect: "15% of physical damage taken is reflected, +8 Armor", cost: "4", priority: "B" },
  { node: "Mana Shield", cls: "Sorcerer", effect: "20% of damage taken is absorbed by Mana instead of HP", cost: "5", priority: "B" },
  { node: "Dark Pact", cls: "Warlock", effect: "Spells cost 15% less Mana but deal 8% less damage", cost: "4", priority: "B" },
  { node: "Last Stand", cls: "Knight", effect: "When taking fatal damage, survive at 1 HP (cooldown: 180s)", cost: "5", priority: "B" },
  { node: "Keen Eye", cls: "Rogue", effect: "+8% crit chance, +15% crit damage", cost: "3", priority: "B" },
  { node: "Feral Instinct", cls: "Druid", effect: "While in animal form, +10% movement speed and +15% attack speed", cost: "3", priority: "B" },
];

const buildPaths = [
  { cls: "Sorcerer", path: "Arcane Reservoir → Elemental Affinity → Mana Shield", points: "10", description: "Maximize spell uptime and elemental damage. Reservoir first for mana sustain, Affinity for damage, Shield as defensive layer. Skip Frost nodes unless specializing." },
  { cls: "Warlock", path: "Blood Ritual → Soul Harvest → Dark Pact", points: "10", description: "Self-sustain caster build. Ritual converts damage to healing, Harvest keeps mana flowing in combat, Pact reduces costs for boss fights." },
  { cls: "Knight", path: "Iron Will → Shield Mastery → Last Stand", points: "12", description: "Immortal tank path. Iron Will increases effective HP by ~35%, Shield Mastery adds reflect damage, Last Stand is your fail-safe for boss mechanics." },
  { cls: "Rogue", path: "Shadow Step → Venom Coating → Keen Eye", points: "10", description: "Crit-focused DPS build. Shadow Step enables high uptime on crit buff, Venom adds consistent DOT, Keen Eye pushes crit cap." },
  { cls: "Druid", path: "Nature's Bounty → Feral Instinct → Thorned Hide", points: "10", description: "Hybrid healer-DPS build. Bounty for group sustain, Instinct for form-swapping DPS phases, Hide for tanking trash packs." },
];

export default function SkillTreeGuidePage() {
  return (
    <div className="min-h-screen bg-parchment text-ink">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">
            Witchspire Skill Tree Guide
          </h1>
          <p className="text-lg text-ink-light">
            Navigate Witchspire's skill tree with this complete guide. Best skills per class,
            optimal build paths, and passive synergies explained in detail.
          </p>
          <p className="text-sm text-ink-light mt-2">
            Last updated: July 2, 2026
          </p>
        </header>

        {/* Intro */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">How the Skill Tree Works</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            Witchspire's skill tree consists of passive nodes organized in a branching web per class.
            Each class (Sorcerer, Warlock, Knight, Rogue, Druid) has its own tree with 20-25 passive
            nodes. You earn 1 skill point per level, with a maximum of 50 skill points at level 50.
            Nodes are gated by level requirements and prerequisite connections — you must unlock
            connected nodes in sequence. Keystone nodes (marked with a golden border) provide
            transformative effects but cost 5 points each and require at least 3 prior nodes in
            the same branch.
          </p>
          <p className="text-ink-light leading-relaxed">
            The skill tree is designed to reward specialization. Spreading points across multiple
            branches generally produces weaker builds than focusing on a single synergistic path.
            Each class has 2-3 viable "core paths" that the community has optimized through extensive
            testing. Below, we break down the highest-priority passive nodes and the optimal build
            path for each class. Priority ratings: S (must-have, build-defining), A (excellent,
            take after S nodes), B (situational, pick if the path fits your playstyle).
          </p>
        </section>

        {/* Passive Nodes Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Key Passive Nodes</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-parchment-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-parchment-light border-b border-ink/10">
                  <th className="text-left p-3 text-ink font-semibold text-sm">Node</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Class</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Effect</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Cost</th>
                  <th className="text-left p-3 text-ink font-semibold text-sm">Priority</th>
                </tr>
              </thead>
              <tbody>
                {passiveNodes.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5">
                    <td className="p-3 text-ink font-medium text-sm">{row.node}</td>
                    <td className="p-3 text-accent font-semibold text-sm">{row.cls}</td>
                    <td className="p-3 text-ink-light text-sm leading-relaxed">{row.effect}</td>
                    <td className="p-3 text-ink-light text-sm">{row.cost}</td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                        row.priority === "S" ? "bg-amber-500/20 text-amber-400" :
                        row.priority === "A" ? "bg-green-500/20 text-green-400" :
                        "bg-blue-500/20 text-blue-400"
                      }`}>{row.priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Build Paths Table */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Optimal Build Paths Per Class</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-parchment-light rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-parchment-light border-b border-ink/10">
                  <th className="text-left p-4 text-ink font-semibold">Class</th>
                  <th className="text-left p-4 text-ink font-semibold">Recommended Path</th>
                  <th className="text-left p-4 text-ink font-semibold">Points</th>
                  <th className="text-left p-4 text-ink font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {buildPaths.map((row, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5">
                    <td className="p-4 text-ink font-medium">{row.cls}</td>
                    <td className="p-4 text-accent font-semibold text-sm leading-relaxed">{row.path}</td>
                    <td className="p-4 text-ink-light text-sm">{row.points}</td>
                    <td className="p-4 text-ink-light text-sm leading-relaxed">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Synergy Deep Dive */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Passive Synergies and Interactions</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            Understanding how passives interact is the difference between a functional build and an
            optimized one. Some passives stack multiplicatively while others are additive, creating
            breakpoints where certain combinations become significantly more powerful.
          </p>
          <div className="space-y-3">
            <div className="bg-parchment-light p-4 rounded-lg border border-ink/10">
              <h3 className="text-ink font-semibold mb-1">Sorcerer: Arcane Reservoir + Elemental Affinity</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Reservoir provides the mana pool to sustain Affinity's increased spell output. With both,
                you can cast roughly 40% more spells in a boss encounter before running out of mana.
                Adding Mana Shield later converts the larger mana pool into effective HP, giving Sorcerer
                survivability comparable to a Knight in prolonged fights.
              </p>
            </div>
            <div className="bg-parchment-light p-4 rounded-lg border border-ink/10">
              <h3 className="text-ink font-semibold mb-1">Rogue: Shadow Step + Venom Coating + Keen Eye</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                This is the highest DPS combination in the game. Shadow Step procs on dodge (Rogue's
                natural dodge rate is 15%, boosted by gear), granting 30% crit. Venom Coating applies
                poison on every crit from the buff. Keen Eye pushes base crit to ~23%, meaning poison
                has near-constant uptime during Shadow Step windows. Total sustained DPS increase over
                a naked Rogue: approximately 65%.
              </p>
            </div>
            <div className="bg-parchment-light p-4 rounded-lg border border-ink/10">
              <h3 className="text-ink font-semibold mb-1">Knight: Iron Will + Shield Mastery</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Iron Will's +20% HP applies first, then Shield Mastery's block mechanics scale with
                your larger health pool (block effectiveness is partially HP-based). The damage
                reduction below 50% HP from Iron Will also triggers during block windows, creating
                layered mitigation. Knights with both passives can solo-tank boss encounters that
                normally require two tanks.
              </p>
            </div>
          </div>
        </section>

        {/* Respec Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Skill Point Respec System</h2>
          <p className="text-ink-light leading-relaxed mb-4">
            Respeccing skill points is available at the Arcane Lectern in the Witchspire hub area.
            The first respec per character is free. Subsequent respecs cost increasing amounts of
            Soul Essence (the premium currency earned from boss kills and weekly challenges): 500 for
            the second, 1500 for the third, and 3000 for each thereafter, capped at 3000. The cost
            resets weekly on Monday at server reset. This system allows experimentation in the early
            and mid game while imposing a meaningful cost on late-game respecs, encouraging players
            to commit to a build path.
          </p>
          <p className="text-ink-light leading-relaxed">
            Best practice: save your free respec for around Level 25-30, once you have enough points
            to complete a full core path. Test different builds during the leveling process (Levels
            1-25) using cheap gear swaps, then commit to your chosen path with the free respec.
            Do not respec more than once per week unless you are actively farming Soul Essence from
            weekly challenges.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Can I reset skill points?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Yes, at the Arcane Lectern in the Witchspire hub. The first respec is free, the second
                costs 500 Soul Essence, the third costs 1500, and subsequent respecs cost 3000 each.
                The cost resets weekly. Plan your build carefully after the free respec to avoid wasting
                Soul Essence, which is also needed for upgrading gear and purchasing cosmetic items.
                You cannot respec during combat or in raid instances — return to the hub first.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Best early game skill path?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                For all classes, prioritize survivability and sustain nodes in the first 10-15 levels.
                Sorcerer: rush Arcane Reservoir (Level 5) for mana sustain. Warlock: rush Blood Ritual
                (Level 5) for self-healing. Knight: rush Iron Will (Level 5) for HP. Rogue: take Keen
                Eye at Level 3, then save points for Shadow Step at Level 8. Druid: take Nature's
                Bounty first (Level 4) for passive healing. Avoid 5-cost keystone nodes until after
                Level 20 — the point investment delays your core path too much in the early game
                and leaves you underpowered during critical leveling dungeons.
              </p>
            </div>
            <div className="bg-parchment-light p-5 rounded-lg border border-ink/10">
              <h3 className="text-lg font-semibold text-ink mb-2">Do passives stack?</h3>
              <p className="text-ink-light text-sm leading-relaxed">
                Yes, passives stack, but the stacking behavior depends on the stat type. Additive stats
                (+damage, +HP, +armor) stack linearly — two +10% damage nodes give +20%. Multiplicative
                effects (crit damage, damage reduction) stack multiplicatively — two separate 10% damage
                reduction effects result in 19% total reduction (0.9 × 0.9 = 0.81 damage taken). This
                means stacking too many multiplicative defensive nodes has diminishing returns. The most
                efficient approach is to balance additive offense nodes with multiplicative defense nodes.
                Some passives explicitly state they do not stack with similar effects (check the tooltip),
                but these are rare and usually involve unique buffs like Last Stand.
              </p>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <aside className="border-t border-ink/10 pt-8">
          <h2 className="text-xl font-semibold text-ink mb-4">Related Guides</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/class-builds" className="text-accent hover:underline text-sm">
                Class Builds Guide — Complete builds for all five classes
              </Link>
            </li>
            <li>
              <Link href="/tier-list" className="text-accent hover:underline text-sm">
                Witchspire Tier List — Class and build rankings
              </Link>
            </li>
            <li>
              <Link href="/boss-strategies" className="text-accent hover:underline text-sm">
                Boss Strategies — Mechanics and tactics for every boss
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
