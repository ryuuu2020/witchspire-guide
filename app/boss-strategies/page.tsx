export const metadata = {
  title: "Witchspire Boss Strategies — How to Beat Every Boss (2026)",
  description: "Complete Witchspire boss strategies guide covering Corrupted Warden, Frost Wyrm, Shadow Council, Void Weaver, and Witch King with mechanics breakdown, phase guides, and recommended builds per boss.",
};

export default function BossStrategiesPage() {
  const bossRanking = [
    { rank: 1, boss: "Witch King", location: "Spire Summit", level: 50, phases: 4, difficulty: "Extreme", keyMechanic: "Reality Warp / Doppelganger", wipeRisk: "Very High — instant-kill mechanics in phase 4" },
    { rank: 2, boss: "Void Weaver", location: "Abyssal Rift", level: 42, phases: 3, difficulty: "Very Hard", keyMechanic: "Void Zones / Summoning Portals", wipeRisk: "High — arena denial overwhelms if slow DPS" },
    { rank: 3, boss: "Shadow Council", location: "Council Chambers", level: 35, phases: 3, difficulty: "Hard", keyMechanic: "Multi-boss / Shared Health", wipeRisk: "Moderate — coordination check for group play" },
    { rank: 4, boss: "Frost Wyrm", location: "Frozen Peaks", level: 28, phases: 2, difficulty: "Moderate", keyMechanic: "Frost Breath / Ice Tomb", wipeRisk: "Moderate — predictable patterns, punishable mistakes" },
    { rank: 5, boss: "Corrupted Warden", location: "Hollow Prison", level: 18, phases: 2, difficulty: "Easy", keyMechanic: "Chain Pull / Corruption Zones", wipeRisk: "Low — forgiving telegraphs, first boss" },
  ];

  const bossBuilds = [
    { boss: "Corrupted Warden", bestBuild: "Berserker", reason: "Sustained melee DPS outpaces corruption damage; Blood Frenzy heals through DoT", worstBuild: "Cryomancer", worstReason: "Warden is freeze-immune; build loses core mechanic", tip: "Stand behind pillars to break Chain Pull; pillars are indestructible" },
    { boss: "Frost Wyrm", bestBuild: "Pyromancer", reason: "Fire damage deals 50% bonus to frost-type enemies; melts Ice Tombs instantly", worstBuild: "Cryomancer", worstReason: "Frost immunity; all core skills deal zero damage", tip: "Stand on geyser vents to remove Frostbite stacks" },
    { boss: "Shadow Council", bestBuild: "Assassin", reason: "Single-target burst eliminates council members one at a time before mechanics overlap", worstBuild: "Pyromancer", worstReason: "AoE damage splits inefficiently; council members spread out", tip: "Kill the Caster first — her healing totem extends the fight indefinitely" },
    { boss: "Void Weaver", bestBuild: "Paladin", reason: "Divine Aegis blocks Void Bolt volley; party shield uptime trivializes phase 2", worstBuild: "Trickster", worstReason: "Decoy doesn't taunt Void Weaver; clones die to passive AoE instantly", tip: "Close portals within 8 seconds or they summon adds that overwhelm your group" },
    { boss: "Witch King", bestBuild: "Berserker (Tank Spec)", reason: "Only build with enough survivability to handle phase 4 reality-warp pressure", worstBuild: "Cryomancer", worstReason: "Witch King cannot be frozen; build reduced to basic attacks only", tip: "Save all cooldowns for phase 4; the doppelganger mirrors your build — do NOT use burst during split" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Witchspire Boss Strategies — How to Beat Every Boss</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Boss fights in Witchspire are the definitive skill checks that separate casual players from those who conquer the Spire. Each boss introduces unique mechanics that demand specific counterplay, gear checks, and — in later encounters — coordinated group execution. This guide covers all five major bosses in the game, from the introductory Corrupted Warden at level 18 to the final Witch King encounter at level 50, with detailed phase breakdowns and build-specific strategies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Boss Difficulty Ranking</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              Boss difficulty in Witchspire scales with mechanical complexity, not just damage numbers. The Witch King is the hardest because of its 4-phase fight with instant-kill mechanics, while the Corrupted Warden serves as an introductory tutorial boss.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Boss</th>
                    <th>Location</th>
                    <th>Level</th>
                    <th>Phases</th>
                    <th>Difficulty</th>
                    <th>Key Mechanic</th>
                    <th>Wipe Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {bossRanking.map((b, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{b.rank}</td>
                      <td className="font-semibold">{b.boss}</td>
                      <td>{b.location}</td>
                      <td>{b.level}</td>
                      <td>{b.phases}</td>
                      <td>{b.difficulty}</td>
                      <td>{b.keyMechanic}</td>
                      <td className="text-ink-light text-sm">{b.wipeRisk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Corrupted Warden — Level 18 (Hollow Prison)</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              The Corrupted Warden is the first true boss encounter and serves as a mechanics tutorial for the rest of the game. The fight has two phases.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 1 (100%-60% HP):</strong> The Warden uses three telegraphed attacks. Chain Pull (3-second wind-up, red flash) grabs the farthest player and drags them to melee range, dealing 30% max HP damage on impact. Hide behind arena pillars to break the chain — pillars are indestructible and exist for this purpose. Corruption Slam (2-second wind-up, yellow flash) creates a ground zone that deals 8% max HP per second for 10 seconds. Simply walk out of the circle. Basic melee swings are dodgeable with standard timing.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Phase 2 (60%-0% HP):</strong> At 60% HP, the Warden smashes the floor, collapsing the outer ring of the arena. The playable area shrinks by approximately 40%. Chain Pull now grabs two targets simultaneously. Corruption zones last 15 seconds instead of 10. The DPS race begins — the longer the fight drags, the less safe floor space remains. Use burst cooldowns at 65% to push through phase 2 quickly. Berserker excels here due to sustained DPS and self-healing through corruption ticks.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frost Wyrm — Level 28 (Frozen Peaks)</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              The Frost Wyrm is a frost-element dragon boss fought on a frozen lake arena with geothermal vents scattered across the surface. Two phases.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 1 (100%-50% HP):</strong> The Wyrm alternates between Frost Breath (long cone, white flash, dodge sideways) and Tail Sweep (180-degree arc behind the boss, white flash, dodge forward into the boss). Frostbite stacks accumulate passively while on the frozen lake surface — each stack reduces movement speed by 8%. At 5 stacks, you are frozen solid (Ice Tomb) and take 50% increased damage. Clear stacks by standing on geothermal vents (glowing orange patches, 4 on the arena). Melee players must manage Frostbite aggressively; ranged can stand on vents and free-cast.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Phase 2 (50%-0% HP):</strong> The Wyrm takes flight, becoming untargetable for melee. It dives at players in a sequence of three swoops (red flash). Dodge the swoops, then the Wyrm lands and is stunned for 6 seconds — this is the damage window. Ranged classes can chip damage during flight; melee classes must survive and burst during the stun window. Pyromancer is the standout build here: fire damage deals 50% bonus against the Wyrm&apos;s frost typing, and Inferno Wave instantly destroys Ice Tombs on frozen allies. Cryomancer is a hard trap pick — the Wyrm is frost-immune.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Shadow Council — Level 35 (Council Chambers)</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              The Shadow Council is a multi-boss encounter with three council members: The Caster (ranged magic, healing totem), The Bruiser (melee cleave, enrage aura), and The Archer (ranged physical, poison arrows). The three share a collective health pool of 300% a normal boss, meaning you must kill all three.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 1 (100%-70% HP):</strong> All three council members are active simultaneously. Kill priority: Caster first. Her Healing Totem (spawned every 20 seconds) heals all council members for 5% max HP per second while active — if left up, the fight becomes mathematically impossible. The Bruiser enrages if not attacked for 15 seconds, gaining 50% damage and attack speed until he hits someone. Assign one melee to maintain Bruiser aggro. The Archer&apos;s poison arrows stack a DoT that must be cleansed or out-healed.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 2 (70%-40% HP):</strong> The Caster is down; Bruiser and Archer remain. The Bruiser&apos;s enrage timer shortens to 10 seconds. The Archer gains a Multi-Shot ability (3 arrows in a cone, dodge sideways). Focus the Bruiser while keeping the Archer interrupted.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Phase 3 (40%-0% HP):</strong> The Bruiser is down; only the Archer remains. She enrages permanently, gaining 30% attack speed, and her poison now stacks twice as fast. This is a pure DPS burn — all defensive cooldowns should be used here. Assassin is the best build for this fight: Shadow Strike + Mark of Death deletes individual council members before mechanics overlap.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Void Weaver — Level 42 (Abyssal Rift)</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              The Void Weaver is an arena-control boss that tests spatial awareness and add management. Three phases.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 1 (100%-70% HP):</strong> Void Bolt Volley fires 8 projectiles in a radial pattern, each dealing 25% max HP. Paladin&apos;s Divine Aegis is the best counter here — the shield absorbs multiple bolts. Void Zones (purple circles) appear under random players, persisting for 20 seconds and dealing 12% max HP per tick. Kite zones to the arena edge to preserve safe floor space. Summoning Portals spawn at cardinal positions (North, South, East, West) every 30 seconds, summoning Void Hatchlings (small adds, low HP, high damage) until destroyed. Assign a DPS to portal duty — portals have 8% of the boss&apos;s HP and must die within 8 seconds.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 2 (70%-35% HP):</strong> Portals now spawn at intercardinal positions (NE, NW, SE, SW) in addition to cardinal — 8 possible spawns. Void Hatchlings mature into Void Sentinels (medium adds with cleave attacks) if not killed within 8 seconds. Arena management becomes the primary challenge. Tanks must position the boss to leave clear paths between portals. High mobility builds (Assassin, Berserker) excel at portal duty.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Phase 3 (35%-0% HP):</strong> All portals activate simultaneously. The boss channels Void Collapse — a 10-second cast that wipes the party if completed. Burn the boss. All available DPS cooldowns, potions, and offensive trinkets must be used. Ignore adds and portals — they will overwhelm you, but the boss dies before adds kill the party if DPS is sufficient. Paladin&apos;s party shield timed at 3 seconds into the channel keeps the group alive through incidental damage during the burn.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Witch King — Level 50 (Spire Summit)</h2>
            <p className="text-ink-light leading-relaxed mb-3">
              The Witch King is the final boss and the hardest encounter in Witchspire. Four phases. Average first-kill attempts: 20-40. This fight demands mastery of every mechanic the game has taught.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 1 (100%-80% HP) — Arcane Duel:</strong> The Witch King uses a rotating set of elemental attacks: Fire Orbs (homing, dodge late), Frost Waves (ground ice, jump over), Lightning Chains (bounces between players, spread out). No single attack is deadly alone, but combinations require precise movement. The King teleports after every 3 attacks, requiring repositioning. This phase tests basic combat fundamentals.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 2 (80%-55% HP) — Royal Guard:</strong> At 80% HP, the Witch King summons two Spectral Knights (high HP, moderate damage, shield each other with a damage-reduction buff when within 8 tiles). Pull the knights apart — assign one melee to kite each knight to opposite sides of the arena. The King continues phase 1 attack patterns during this phase. The DPS check is killing both knights before the King reaches 55% HP; if the King hits 55% with a knight alive, the knight permanently enrages and will wipe the group.
            </p>
            <p className="text-ink-light leading-relaxed mb-3">
              <strong className="text-ink">Phase 3 (55%-25% HP) — Arcane Storm:</strong> The arena becomes randomly sectioned into safe and dangerous quadrants, rotating every 8 seconds (indicated by floor runes). Standing in a dangerous quadrant deals 20% max HP per second. The King&apos;s attack speed doubles. This phase is a movement and positioning check — the entire party must rotate together while maintaining DPS. One player calling quadrant rotations via voice is the standard strategy.
            </p>
            <p className="text-ink-light leading-relaxed">
              <strong className="text-ink">Phase 4 (25%-0% HP) — Reality Warp:</strong> The Witch King creates a Doppelganger copy of a random player with 100% of that player&apos;s stats and abilities. The Doppelganger must be killed while the King continues phase 4 attacks (now including an instant-kill beam with 1.5-second telegraph). CRITICAL: Do NOT use burst cooldowns while the Doppelganger is alive — it mirrors your abilities, and a copied Inferno Wave or Shadow Strike can wipe the party. Kill the Doppelganger with sustained damage, then burn the King. Berserker is the best build: Blood Frenzy healing survives the phase 4 pressure, and sustained damage avoids the burst-reflection trap. Save ALL defensive cooldowns for phase 4.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recommended Builds per Boss</h2>
            <p className="text-ink-light leading-relaxed mb-4">
              No single build is optimal for every boss. Use the table below to plan your approach or assemble the ideal group composition.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Boss</th>
                    <th>Best Build</th>
                    <th>Why</th>
                    <th>Worst Build</th>
                    <th>Why</th>
                    <th>Key Tip</th>
                  </tr>
                </thead>
                <tbody>
                  {bossBuilds.map((b, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{b.boss}</td>
                      <td className="text-accent">{b.bestBuild}</td>
                      <td>{b.reason}</td>
                      <td className="text-ink-faded">{b.worstBuild}</td>
                      <td>{b.worstReason}</td>
                      <td className="text-ink-light text-sm">{b.tip}</td>
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
                <h3 className="font-semibold text-ink mb-1">What is the minimum gear level for the Witch King?</h3>
                <p className="text-ink-light">Recommended item level is 145+ for DPS and 150+ for tanks. Below 140, the damage output in phase 3 will be insufficient to push the DPS check before the quadrant rotation overwhelms the party. Farm the Abyssal Rift (Void Weaver) for item level 140-150 gear and target the &ldquo;Crown of the Fallen&rdquo; unique helm — its 15% damage reduction against arcane damage is specifically designed for the Witch King fight.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I solo all the bosses?</h3>
                <p className="text-ink-light">Corrupted Warden and Frost Wyrm are designed to be soloable at-level. Shadow Council is soloable with high DPS builds (Assassin, Pyromancer) at item level 130+. Void Weaver requires at least one additional player for portal management — solo attempts are possible but require near-perfect execution. The Witch King is impossible to solo under normal circumstances due to the Doppelganger mechanic in phase 4 requiring a second target for damage splitting.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Should I use consumables during boss fights?</h3>
                <p className="text-ink-light">Yes, especially for Void Weaver and Witch King. Arcane Resistance Potions (20% arcane damage reduction for 30 seconds) are essential for Witch King phase 3. Frost Resistance Potions trivialize the Frost Wyrm&apos;s Frostbite mechanic. Health Potions should be saved for emergency use — do not use them to top off after avoidable damage; that is a waste of a limited resource. Craft or purchase potions in bulk before progression nights; running out mid-raid wastes everyone&apos;s time.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: June 2026. Boss mechanics and HP values verified against Witchspire version 3.1. Phase transitions and damage numbers confirmed through community data mining and fight log analysis.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/class-builds" className="text-accent hover:underline">Class Builds Guide</a></li>
              <li><a href="/gear-guide" className="text-accent hover:underline">Gear & Equipment Guide</a></li>
              <li><a href="/raid-composition" className="text-accent hover:underline">Raid Composition Guide</a></li>
              <li><a href="/consumables" className="text-accent hover:underline">Consumables & Potions Guide</a></li>
            </ul>
          </div>

          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Progression Route</h3>
            <ol className="space-y-2 text-sm text-ink-light list-decimal list-inside">
              <li>Corrupted Warden — Level 18</li>
              <li>Frost Wyrm — Level 28</li>
              <li>Shadow Council — Level 35</li>
              <li>Void Weaver — Level 42</li>
              <li>Witch King — Level 50</li>
            </ol>
          </div>
        </aside>
      </div>
    </main>
  );
}
