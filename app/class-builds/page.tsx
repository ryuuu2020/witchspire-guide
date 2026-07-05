export const metadata = {
  title: "Witchspire Class Builds — Best Builds for Every Class (2026)",
  description: "Complete Witchspire class builds guide covering Warrior (Berserker, Paladin), Mage (Pyromancer, Cryomancer), and Rogue (Assassin, Trickster) with tier rankings and skill tree paths for optimal performance.",
};

export default function ClassBuildsPage() {
  const buildTierList = [
    { tier: "S", color: "text-yellow-400", className: "Pyromancer", baseClass: "Mage", role: "AoE Nuker", keySkill: "Inferno Wave", strengths: "Highest AoE damage, best farming build, melts packs", weaknesses: "Long cooldowns, vulnerable during setup", rating: "9.6/10" },
    { tier: "S", color: "text-yellow-400", className: "Berserker", baseClass: "Warrior", role: "Melee DPS", keySkill: "Blood Frenzy", strengths: "Highest single-target melee DPS, self-heal", weaknesses: "Loses HP while frenzied, risky at low health", rating: "9.3/10" },
    { tier: "A", color: "text-green-400", className: "Assassin", baseClass: "Rogue", role: "Burst Assassin", keySkill: "Shadow Strike", strengths: "Best boss-killer, massive backstab damage", weaknesses: "Squishy, requires positioning, low AoE", rating: "8.8/10" },
    { tier: "A", color: "text-green-400", className: "Paladin", baseClass: "Warrior", role: "Tank / Support", keySkill: "Divine Aegis", strengths: "Best survivability, group shields, reliable", weaknesses: "Low personal damage, slow clear speed", rating: "8.5/10" },
    { tier: "B", color: "text-blue-400", className: "Cryomancer", baseClass: "Mage", role: "Crowd Control", keySkill: "Glacial Prison", strengths: "Best CC in game, safe playstyle, freeze chains", weaknesses: "Lower damage than Pyromancer, slow solo leveling", rating: "7.8/10" },
    { tier: "B", color: "text-blue-400", className: "Trickster", baseClass: "Rogue", role: "Hybrid / Utility", keySkill: "Decoy Mastery", strengths: "Unique utility, decoy tanking, versatile", weaknesses: "Jack of all trades, master of none, low peak DPS", rating: "7.4/10" },
  ];

  const skillTreePaths = [
    { build: "Berserker", coreNodes: "Blood Frenzy (Max) → Rage Empowerment → Carnage", secondaryNodes: "Heavy Armor → Battle Cry → Adrenaline", avoid: "Shield Wall (conflicts with frenzy)", totalPoints: 48, levelCap: 50 },
    { build: "Paladin", coreNodes: "Divine Aegis → Holy Radiance → Retribution", secondaryNodes: "Shield Wall → Guardian's Oath → Blessed Weapon", avoid: "Blood Frenzy (incompatible with divine skills)", totalPoints: 48, levelCap: 50 },
    { build: "Pyromancer", coreNodes: "Inferno Wave → Fire Mastery → Meteor Storm", secondaryNodes: "Combustion → Arcane Surge → Blazing Soul", avoid: "Frost Affinity (elemental conflict)", totalPoints: 48, levelCap: 50 },
    { build: "Cryomancer", coreNodes: "Glacial Prison → Frost Mastery → Absolute Zero", secondaryNodes: "Ice Barrier → Shatter → Permafrost", avoid: "Fire Mastery (elemental conflict)", totalPoints: 48, levelCap: 50 },
    { build: "Assassin", coreNodes: "Shadow Strike → Lethality → Mark of Death", secondaryNodes: "Stealth → Evasion → Critical Precision", avoid: "Decoy Mastery (dilutes burst focus)", totalPoints: 48, levelCap: 50 },
    { build: "Trickster", coreNodes: "Decoy Mastery → Mirror Image → Sabotage", secondaryNodes: "Traps → Poison Coating → Shadowstep", avoid: "Lethality (anti-synergy with utility playstyle)", totalPoints: 48, levelCap: 50 },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Witchspire Class Builds — Best Builds for Every Class</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Witchspire offers deep build customization through its skill tree system, where each base class — Warrior, Mage, and Rogue — splits into two distinct specializations with unique abilities, playstyles, and optimal gear paths. Choosing the right build for your preferred content type is as important as mechanical execution. This guide covers all six builds, ranks them by overall power, and maps out the essential skill tree nodes you need to hit for each specialization to reach its full potential.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Build Tier List Overview</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Each build is rated across solo content, group play, boss fights, farming efficiency, and survivability. S-tier builds excel in most categories. A-tier builds dominate specific niches. B-tier builds are viable but require more effort for similar results.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Build</th>
                    <th>Class</th>
                    <th>Role</th>
                    <th>Key Skill</th>
                    <th>Strengths</th>
                    <th>Weaknesses</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {buildTierList.map((b, i) => (
                    <tr key={i}>
                      <td className={`font-bold ${b.color}`}>{b.tier}</td>
                      <td className="font-semibold">{b.className}</td>
                      <td>{b.baseClass}</td>
                      <td>{b.role}</td>
                      <td>{b.keySkill}</td>
                      <td>{b.strengths}</td>
                      <td>{b.weaknesses}</td>
                      <td className="font-semibold">{b.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Warrior Builds — Berserker & Paladin</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Berserker</strong> is the premier melee damage dealer in Witchspire. Blood Frenzy activates a state where attack speed increases by 40%, damage by 30%, and all attacks heal for 8% of damage dealt — but you lose 3% of maximum HP per second while frenzied. The key to Berserker is knowing when to toggle off. Staying frenzied below 25% HP is suicidal. The optimal rotation cycles: activate frenzy at full HP, dump all rage into Carnage (a 3-hit cleave consuming 30 rage per cast), toggle off at 40% HP, life leech back up with basic attacks, repeat. With the Heavy Armor passive reducing physical damage by 15%, Berserker becomes surprisingly tanky for a melee DPS. Best weapon: two-handed axe (highest raw damage, scales 1.2x with Blood Frenzy). Worst weapon: sword and shield (anti-synergy with frenzy&apos;s two-handed requirement).
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Paladin</strong> is the tank build built around Divine Aegis — a 6-second party-wide shield absorbing 25% of max HP in damage. With the Guardian&apos;s Oath passive (shield endurance +40%), Paladin can maintain near-100% shield uptime in group content. Solo damage is the lowest of any build — Paladin relies on Retribution (reflects 30% of blocked damage) for offense, meaning you kill things by letting them hit you. This makes solo leveling painfully slow, but in group dungeons and raid content, a Paladin is irreplaceable. Best weapon: sword and shield (enables Shield Wall). Best armor: full plate set with +shield absorption affixes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mage Builds — Pyromancer & Cryomancer</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Pyromancer</strong> is the highest-rated build in the current meta. Inferno Wave sends a 180-degree cone of flame dealing 180% spell power and leaving burning ground for 6 seconds that deals 40% spell power per tick. Combined with Combustion (burning enemies take 25% increased fire damage) and Meteor Storm (channeled AoE with 300% spell power over 4 seconds), a Pyromancer can clear an entire screen of enemies in one rotation. The weakness is cooldown dependency — Inferno Wave has a 12-second cooldown, Meteor Storm has 30 seconds. Between bursts, Pyromancer&apos;s basic fire bolts deal mediocre damage. Learn to group enemies before bursting; never waste Inferno Wave on fewer than 5 targets. Best weapon: fire staff (+25% fire damage, extends burn duration by 40%). Best armor: silk robes with +spell power and +cooldown reduction.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Cryomancer</strong> trades raw damage for control. Glacial Prison freezes a target area for 4 seconds — enemies inside are immobilized and take 20% increased damage from all sources. Shatter deals 250% spell power to frozen targets, creating an ice explosion that chains to nearby frozen enemies. The freeze-shatter cycle provides near-permanent crowd control, making Cryomancer the safest mage build by far. In group play, Glacial Prison sets up kill windows for Berserkers and Assassins. The trade-off: Frost skills deal 30% less base damage than fire equivalents, so solo farming is noticeably slower. Best weapon: frost staff (+freeze duration, +shatter damage). Best for: group play, control-heavy party compositions, learning boss mechanics safely.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Rogue Builds — Assassin & Trickster</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Assassin</strong> is the boss-killing specialist. Shadow Strike teleports behind a target, dealing 200% weapon damage with guaranteed critical hit if the target is not facing you. Mark of Death amplifies all damage to the marked target by 35% for 8 seconds. Combined, the Assassin rotation — Mark, Shadow Strike, dump Critical Precision-boosted attacks during the mark window — deletes single targets faster than any other build. The Assassin falls off hard in AoE situations: no build has weaker area damage. For clearing dungeons, pair with a Pyromancer or group with a Cryomancer who groups enemies for you. Best weapon: dual daggers (fastest attack speed, +backstab multiplier). Best armor: leather with +critical strike chance and +critical strike multiplier.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Trickster</strong> is the utility build that summons a Decoy with 80% of your max HP that taunts enemies in a radius for 5 seconds. Mirror Image creates two clones that deal 40% of your damage. Combined with traps (caltrops slow, poison gas DoT), the Trickster controls the battlefield without needing to be in melee range. The build&apos;s weakness is its identity — it does a bit of everything (tanking via decoy, damage via clones, control via traps) but excels at nothing. A specialized Assassin kills bosses faster. A specialized Berserker deals more AoE. A Paladin tanks better. Trickster is a solo player&apos;s comfort build — safe, versatile, but ultimately lower peak performance than specialized alternatives.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skill Tree Path by Build</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Skill tree optimization in Witchspire requires prioritizing core damage nodes before investing in utility or defense. The table below shows the exact node path for each build with the total point investment required to cap.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Build</th>
                    <th>Core Nodes (Max First)</th>
                    <th>Secondary Nodes</th>
                    <th>Avoid</th>
                    <th>Points</th>
                    <th>Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {skillTreePaths.map((s, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{s.build}</td>
                      <td>{s.coreNodes}</td>
                      <td>{s.secondaryNodes}</td>
                      <td className="text-ink-faded">{s.avoid}</td>
                      <td>{s.totalPoints}</td>
                      <td>Level {s.levelCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I respec my build in Witchspire?</h3>
                <p className="text-ink-light">Yes, respeccing costs Respec Tokens, which are earned from daily quests (1 token per day) or purchased from the in-game shop. The first respec per character is free. Skill tree nodes are fully refundable, but gear affixes tied to specific builds require re-farming — switching from Pyromancer to Cryomancer means replacing your fire staff and fire-damage gear. Plan your respec around having backup gear ready.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Which build is best for solo players?</h3>
                <p className="text-ink-light">Pyromancer for players comfortable with managing cooldowns — it offers the fastest solo progression and farming speed. Berserker for players who prefer melee combat — Blood Frenzy&apos;s self-healing provides strong sustain, and the build is less gear-dependent than Assassin. Paladin and Trickster are safe but slow; Cryomancer is safe and group-friendly but solo damage lags. Avoid Assassin for a first solo playthrough unless you enjoy a high-risk, high-reward challenge.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">How does gear affect build choice?</h3>
                <p className="text-ink-light">Gear determines roughly 60% of a build&apos;s power in endgame. Affix synergy is critical — a Pyromancer needs +fire damage, +burn duration, and +spell power. Generic gear with defensive stats (armor, max HP) is serviceable through the campaign but falls off hard in endgame dungeons and raids (level 50+). The &ldquo;Infernal Mantle&rdquo; unique chest piece (drops from the Corrupted Warden boss) grants +40% fire damage and is build-defining for Pyromancer. Research boss drop tables and target-farm your build&apos;s key uniques before pushing difficult content.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Build rankings based on Witchspire version 3.1 meta with data from raid completion analytics, speedrun leaderboards, and community build surveys.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/boss-strategies" className="text-accent hover:underline">Boss Strategies</a></li>
              <li><a href="/gear-guide" className="text-accent hover:underline">Gear & Equipment Guide</a></li>
              <li><a href="/leveling-guide" className="text-accent hover:underline">Leveling Guide 1-50</a></li>
              <li><a href="/skill-tree-guide" className="text-accent hover:underline">Complete Skill Tree Guide</a></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Build Quick Reference</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li><span className="text-yellow-400 font-semibold">S:</span> Pyromancer, Berserker</li>
              <li><span className="text-green-400 font-semibold">A:</span> Assassin, Paladin</li>
              <li><span className="text-blue-400 font-semibold">B:</span> Cryomancer, Trickster</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
