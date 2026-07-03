import Link from "next/link";

export const metadata = {
  title: "Witchspire Boss Attack Patterns Guide — Telegraphs, Dodge Windows & Phase Strategies | Witchspire Guide",
  description: "Master every Witchspire boss. Complete attack pattern breakdown, telegraph recognition, dodge timing windows, and optimal phase strategies for every major boss encounter.",
};

const bossPatterns = [
  { boss: "Coven Matriarch", attackName: "Shadow Bolt Volley", telegraph: "Raises staff, purple glow for 1.5 seconds", dodgeWindow: "Dodge sideways 0.5 seconds after glow peaks", damageType: "Shadow magic (blocks healing)", counter: "Stay at mid-range. Too close gets melee swiped. Too far and the bolts spread — harder to dodge." },
  { boss: "Coven Matriarch", attackName: "Coven Call (Summon)", telegraph: "Kneels, green circle expands on ground", dodgeWindow: "N/A — kill summoned witches before they complete casting", damageType: "Summoned witches use fire spells", counter: "Interrupt the summon by hitting the Matriarch with a heavy attack. If summons complete, kill witches first — they heal the boss." },
  { boss: "Blight Knight", attackName: "Rot Cleave", telegraph: "Sword drags on ground with green sparks, 2 seconds", dodgeWindow: "Roll backward the moment sparks stop", damageType: "Physical + poison DoT", counter: "Parry instead of dodge. Parrying Rot Cleave staggers the Knight for 3 seconds — your biggest damage window. Dodge only if your parry timing is unreliable." },
  { boss: "Blight Knight", attackName: "Pestilence Charge", telegraph: "Lowers shoulder, green trail appears behind him, 1.8 seconds", dodgeWindow: "Dodge to the side 0.8 seconds after the trail appears", damageType: "Physical, leaves poison puddle", counter: "Always dodge sideways, never backward — the charge tracks forward movement. The poison puddle persists for 10 seconds, so reposition after dodging." },
  { boss: "Frost Lich", attackName: "Glacial Prison", telegraph: "Ice crystals form around you, 2.5 seconds", dodgeWindow: "Must break line of sight (hide behind pillar) before crystals complete", damageType: "Ice — freezes you for 5 seconds", counter: "This is the Lich's deadliest attack. Always fight near a pillar. When crystals start forming, sprint behind cover. If frozen, you will likely die to the follow-up attack." },
  { boss: "Frost Lich", attackName: "Blizzard Nova", telegraph: "Floats upward, arena turns white, 3 seconds", dodgeWindow: "Move to the arena edge immediately", damageType: "AoE ice damage, covers 80 percent of arena", counter: "The arena center is the kill zone. The edges have a 20 percent safe area. Mark the safe spots before the fight starts with torches on the ground." },
];

const phaseTransitions = [
  { boss: "Coven Matriarch", phase: "Phase 2 (below 50 percent)", change: "Shadow Bolt Volley fires 5 bolts instead of 3. Coven Call summons 2 witches at once.", strategy: "Switch to aggressive play. The longer Phase 2 lasts, the more witches spawn. Burst the boss with all cooldowns immediately after phase transition." },
  { boss: "Blight Knight", phase: "Phase 2 (below 40 percent)", change: "Gains Corrupted Aura — constant poison damage in melee range. Rot Cleave now leaves a poison trail.", strategy: "Switch to ranged attacks. Melee in Phase 2 is suicidal. Use ranged spells or throwing weapons. The Knight is slower in this phase — kite and whittle." },
  { boss: "Frost Lich", phase: "Enrage (below 20 percent)", change: "Glacial Prison cast time reduced to 1.5 seconds. Blizzard Nova covers 95 percent of arena.", strategy: "Stay glued to a pillar at all times. The safe zone at edges shrinks to a single tile. Pre-position near the exit before pushing the Lich below 20 percent." },
];

const spellLoadouts = [
  { boss: "Coven Matriarch", recommendedSpells: "Fireball (burst), Dispel Magic (remove witch buffs), Shadow Ward (resist bolts)", reason: "Fireball kills summoned witches quickly. Dispel removes the Matriarch's damage buff before Shadow Volley. Shadow Ward negates one volley entirely." },
  { boss: "Blight Knight", recommendedSpells: "Cleanse (remove poison), Ice Lance (ranged poke), Stone Skin (armor buff)", reason: "Cleanse handles Rot Cleave poison. Ice Lance lets you damage from safe range in Phase 2. Stone Skin buys time if you miss a parry." },
  { boss: "Frost Lich", recommendedSpells: "Fire Wall (blocks projectiles), Flame Dash (mobility), Melt (removes freeze)", reason: "Fire Wall positioned between you and the Lich blocks Shadow Bolts. Flame Dash escapes Glacial Prison in one button. Melt is insurance if you get frozen." },
];

export default function BossAttackPatternsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">Boss Attack Patterns Guide</h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Witchspire bosses telegraph every attack — the trick is recognizing the signal fast enough to react. Each boss has a unique visual and audio cue before every major attack, giving you a precise dodge window if you know what to look for. Miss the telegraph, miss the dodge, and you are eating a hit that can one-shot an undergeared character. This guide catalogs every boss telegraph, dodge timing, and spell loadout for consistent no-hit boss kills.
      </p>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Attack Pattern Breakdown — Every Telegraph and Dodge Window</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Boss</th><th className="py-2 px-3 font-display text-accent">Attack</th><th className="py-2 px-3 font-display text-accent">Telegraph</th><th className="py-2 px-3 font-display text-accent">Dodge Window</th><th className="py-2 px-3 font-display text-accent">Damage</th><th className="py-2 px-3 font-display text-accent">Counter</th></tr></thead>
          <tbody>{bossPatterns.map((b,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{b.boss}</td><td className="py-2 px-3">{b.attackName}</td><td className="py-2 px-3">{b.telegraph}</td><td className="py-2 px-3">{b.dodgeWindow}</td><td className="py-2 px-3">{b.damageType}</td><td className="py-2 px-3">{b.counter}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Phase Transitions — How the Fight Evolves</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Boss</th><th className="py-2 px-3 font-display text-accent">Phase</th><th className="py-2 px-3 font-display text-accent">Changes</th><th className="py-2 px-3 font-display text-accent">Strategy</th></tr></thead>
          <tbody>{phaseTransitions.map((p,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{p.boss}</td><td className="py-2 px-3">{p.phase}</td><td className="py-2 px-3">{p.change}</td><td className="py-2 px-3">{p.strategy}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">Recommended Spell Loadouts Per Boss</h2>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead><tr className="border-b border-ink-faded/20"><th className="py-2 px-3 font-display text-accent">Boss</th><th className="py-2 px-3 font-display text-accent">Spells</th><th className="py-2 px-3 font-display text-accent">Reason</th></tr></thead>
          <tbody>{spellLoadouts.map((s,i)=>(<tr key={i} className="border-b border-ink-faded/10"><td className="py-2 px-3 font-display text-accent">{s.boss}</td><td className="py-2 px-3">{s.recommendedSpells}</td><td className="py-2 px-3">{s.reason}</td></tr>))}</tbody>
        </table>
      </div>

      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How tight are the dodge windows — is this like a Souls game?</h3>
        <p className="text-ink-light">The dodge windows are generous compared to Souls-like games. Most telegraphs give you 1.5 to 2.5 seconds of warning, and the dodge iframes last roughly 0.4 seconds. The difficulty is not the timing — it is recognizing the telegraph among the visual noise of spell effects, particle explosions, and your own attacks. Turn down particle effects in the settings if you are struggling to see boss animations. A clean visual field is more valuable than pretty graphics in boss fights.</p>
      </div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Can I beat bosses without perfect dodging?</h3>
        <p className="text-ink-light">On Normal difficulty, you can tank through most boss attacks with good gear and healing potions. Perfect dodging is only required on Hard and Nightmare, where boss attacks deal enough damage to two-shot even well-geared characters. That said, learning the dodge patterns on Normal makes Hard mode transition seamless. Each boss has only 2-3 unique attacks — once you internalize those telegraphs, the fight becomes a dance rather than a scramble.</p>
      </div>
      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Which boss is the hardest for new players?</h3>
        <p className="text-ink-light">The Frost Lich is the consensus hardest boss for new players because Glacial Prison is effectively a one-shot mechanic — if you get frozen, the follow-up Blizzard Nova kills you before you thaw. New players also instinctively dodge backward, which the Lich punishes with tracking ice spikes. The key is unlearning backward dodge habits before this fight. Practice side-dodging on the Blight Knight, who has more forgiving patterns, before attempting the Lich.</p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/boss-strategies" className="text-accent hover:underline">Boss Strategies</Link></li>
          <li><Link href="/spell-tier-list" className="text-accent hover:underline">Spell Tier List</Link></li>
          <li><Link href="/class-builds" className="text-accent hover:underline">Class Builds</Link></li>
          <li><Link href="/dungeon-guide" className="text-accent hover:underline">Dungeon Guide</Link></li>
        </ul>
      </aside>
      <p className="text-ink-faded text-sm mt-10">Last updated: July 3, 2026. Attack pattern data sourced from community boss fight analysis and frame data documentation.</p>
    </div>
  );
}
