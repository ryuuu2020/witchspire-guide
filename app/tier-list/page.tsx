/* ============================================
   Witchspire — Complete Tier List
   Class, Familiar, Spell & Gear Rankings (2026)
   ============================================ */

const CLASS_TIERS = [
  { tier: 'S', name: 'Foreteller', role: 'Mystic / Support / Co-op Carry', strengths: 'Spirit-jump mobility, blink abilities, corruption-sensing (see danger zones on map), group buffs for co-op. The Foreteller\'s ability to detect corruption before it spawns gives the entire group a safety net that no other class provides.', weakness: 'Lower personal damage output. Relies on familiars for direct combat. Solo play is slower.' },
  { tier: 'A', name: 'Cloudpiercer', role: 'Melee / Aggressive / Solo Specialist', strengths: 'High personal damage, aggressive familiar synergies, strong solo clear speed. Cloudpiercer excels at farming resources quickly and clearing corruption zones without needing backup.', weakness: 'No inherent detection abilities. Walks into ambushes that Foreteller would see coming. Fragile if caught without familiar support.' },
  { tier: 'B', name: 'Emberkin', role: 'Ranged / Fire Magic / AoE Damage', strengths: 'Best AoE clear of any class. Fire spells clear corruption clusters faster than any other method. Excellent at defending Sanctuary during meteor attacks.', weakness: 'Fire magic can accidentally destroy harvestable resources. High mana consumption — runs out of power faster than other classes in extended fights.' },
  { tier: 'B', name: 'Stonewarden', role: 'Tank / Builder / Defense', strengths: 'Highest survivability. Can reinforce Sanctuary walls with stone magic. Takes reduced damage from corruption creatures. Best class for hardcore/permadeath play.', weakness: 'Lowest mobility. Slow movement speed means longer travel times between objectives. Getting to meteor impact sites before corruption spreads is challenging.' },
];

const FAMILIAR_TIERS = [
  { tier: 'S', name: 'Phoenix Hatchling', type: 'Fire / Rebirth', role: 'AoE damage + self-revive', notes: 'Automatically revives once per in-game day when defeated. Phoenix AoE clears corruption clusters faster than any other familiar. The self-revive effectively doubles its combat uptime.' },
  { tier: 'S', name: 'Void Stalker', type: 'Shadow / Assassin', role: 'Single-target burst + stealth', notes: 'Can enter stealth and deal 3x damage on its next attack. Ideal for eliminating high-value targets (corruption spawners, elite enemies) before they become threats.' },
  { tier: 'A', name: 'Storm Eagle', type: 'Wind / Scout', role: 'Reconnaissance + hit-and-run', notes: 'Highest movement speed of any familiar. Can scout corruption zones without aggroing enemies. Perfect companion for resource-gathering runs.' },
  { tier: 'A', name: 'Thorn Golem', type: 'Earth / Tank', role: 'Damage absorption + crowd control', notes: 'Highest health pool. Taunts enemies, drawing aggro away from the player. Best paired with squishy classes (Emberkin, Foreteller).' },
  { tier: 'B', name: 'Frost Wyrm', type: 'Ice / Control', role: 'Slowing + area denial', notes: 'Freezes enemies in place for 3 seconds. Excels in co-op — frozen enemies take bonus damage from all sources. Less effective solo since you must capitalize on the freeze window yourself.' },
  { tier: 'B', name: 'Glimmer Fox', type: 'Light / Utility', role: 'Healing + resource finder', notes: 'Passively highlights nearby rare resources. Provides minor healing over time. Great for early-game exploration, falls off in combat effectiveness late-game.' },
  { tier: 'C', name: 'Mud Crab', type: 'Water / Defensive', role: 'Damage reduction aura', notes: 'Reduces damage taken by nearby allies by 15 percent. Useful but passive — contributes no damage output. Outclassed by Thorn Golem for tanking and by Glimmer Fox for utility.' },
];

export default function TierListPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Witchspire Tier List</h1>
      <p className="text-text-muted mb-8">Last updated: July 2026</p>

      <p className="text-lg text-text-secondary mb-8 leading-relaxed">
        This tier list ranks every playable class and familiar in Witchspire based on their effectiveness across all game modes — solo exploration, corruption clearing, co-op support, and Sanctuary defense. Rankings reflect community consensus and extensive testing as of the current game version.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Class Tier List</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border text-text-primary w-12">Tier</th>
              <th className="p-3 border border-border text-text-primary">Class</th>
              <th className="p-3 border border-border text-text-primary">Role</th>
              <th className="p-3 border border-border text-text-primary">Strengths &amp; Weaknesses</th>
            </tr>
          </thead>
          <tbody>
            {CLASS_TIERS.map((c, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border text-center">
                  <span className={`inline-block w-8 h-8 leading-8 text-center font-bold text-xs rounded ${c.tier === 'S' ? 'bg-yellow-700 text-yellow-100' : c.tier === 'A' ? 'bg-gray-600 text-gray-100' : 'bg-amber-800 text-amber-100'}`}>{c.tier}</span>
                </td>
                <td className="p-3 border border-border font-semibold text-text-primary">{c.name}</td>
                <td className="p-3 border border-border text-text-secondary">{c.role}</td>
                <td className="p-3 border border-border text-text-muted text-xs">{c.strengths} — <span className="text-red-400">{c.weakness}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">Familiar Tier List</h2>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left border border-border text-sm">
          <thead className="bg-bg-card">
            <tr>
              <th className="p-3 border border-border text-text-primary w-12">Tier</th>
              <th className="p-3 border border-border text-text-primary">Familiar</th>
              <th className="p-3 border border-border text-text-primary">Type</th>
              <th className="p-3 border border-border text-text-primary">Role</th>
              <th className="p-3 border border-border text-text-primary">Key Feature</th>
            </tr>
          </thead>
          <tbody>
            {FAMILIAR_TIERS.map((f, i) => (
              <tr key={i} className="hover:bg-bg-card">
                <td className="p-3 border border-border text-center">
                  <span className={`inline-block w-8 h-8 leading-8 text-center font-bold text-xs rounded ${f.tier === 'S' ? 'bg-yellow-700 text-yellow-100' : f.tier === 'A' ? 'bg-gray-600 text-gray-100' : f.tier === 'B' ? 'bg-amber-800 text-amber-100' : 'bg-gray-700 text-gray-300'}`}>{f.tier}</span>
                </td>
                <td className="p-3 border border-border font-semibold text-text-primary">{f.name}</td>
                <td className="p-3 border border-border text-text-secondary">{f.type}</td>
                <td className="p-3 border border-border text-text-secondary">{f.role}</td>
                <td className="p-3 border border-border text-text-muted text-xs">{f.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQ</h2>
      <div className="space-y-4">
        <div className="border border-border p-4 bg-bg-card">
          <h3 className="font-semibold text-accent">Why is Foreteller S-tier but Cloudpiercer only A-tier?</h3>
          <p className="text-text-secondary mt-2">Tier rankings consider the entire game, not just combat. Foreteller&apos;s corruption-sensing is a unique ability that prevents ambushes and wasted trips — this utility cannot be replicated by any gear or familiar. Cloudpiercer has higher combat numbers but lacks utility that changes how you interact with the game world. In a pure DPS race, Cloudpiercer wins. In a full playthrough with exploration, base building, and co-op, Foreteller provides more total value.</p>
        </div>
        <div className="border border-border p-4 bg-bg-card">
          <h3 className="font-semibold text-accent">Can I use two familiars at once?</h3>
          <p className="text-text-secondary mt-2">Yes, by the mid-game you can bond with two familiars simultaneously. The optimal pairing is one combat familiar (Phoenix Hatchling, Void Stalker) and one utility familiar (Storm Eagle for mobility, Glimmer Fox for resource finding). Do not bond two combat familiars — they compete for your attention and you will underutilize both. One familiar that you actively command is worth more than two familiars on autopilot.</p>
        </div>
        <div className="border border-border p-4 bg-bg-card">
          <h3 className="font-semibold text-accent">How often does the tier list change with updates?</h3>
          <p className="text-text-secondary mt-2">The developers balance classes and familiars roughly every major patch (every 2-3 months). This tier list reflects the current patch. Historically, S-tier picks shift the most between patches — the developers actively nerf dominant strategies and buff underused options. B and C-tier familiars sometimes receive dramatic buffs that propel them to A-tier. Always check the date on this tier list and cross-reference with the latest patch notes if you are reading it more than a month after publication.</p>
        </div>
      </div>

      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">
        Last updated: July 1, 2026. Tier rankings based on community consensus and current Witchspire patch.
      </p>
    </div>
  );
}
