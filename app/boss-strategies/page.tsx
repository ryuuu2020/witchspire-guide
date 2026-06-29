import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witchspire Boss Strategies — How to Beat Every Boss (2026)',
  description: 'Complete Witchspire boss guide with difficulty rankings, mechanical breakdowns, recommended builds per boss, and phase-by-phase strategies for every encounter.',
};

const bossRankings = [
  { boss: 'The Ashen Warden', location: 'Ruined Cathedral (Act 1)', difficulty: 'Easy', phases: 1, keyMechanic: 'Cone fire breath — dodge laterally, not backward', desc: 'Introductory boss that teaches basic dodge timing. Slow, heavily telegraphed attacks with generous recovery windows. The fire breath attack covers a 60-degree cone and is the only dangerous ability. Stay close to bait melee swings (easier to dodge) and punish during the long recovery after breath attacks.' },
  { boss: 'Baroness Vexia', location: 'Crimson Manor (Act 1)', difficulty: 'Medium', phases: 2, keyMechanic: 'Blood pools that heal her — kite boss away from them', desc: 'At 50% HP, transitions to phase 2 and begins spawning Blood Pools on the ground. Standing in a pool deals damage to you and heals the Baroness. Kite her to the edge of the arena after each pool spawn. Phase 2 adds a Blood Bolt barrage (3 projectiles in a spread pattern) that must be dodged between attacks.' },
  { boss: 'Grotesque Chimera', location: 'Sewer Depths (Act 2)', difficulty: 'Medium', phases: 1, keyMechanic: 'Three heads cycle element types — adapt damage type', desc: 'Single-phase endurance fight against a three-headed beast. Each head uses a different element (fire, poison, lightning) on a rotating cycle. The fight lasts approximately 8 minutes. Bring elemental resistance potions matching the current active head. Focus one head at a time — destroying a head removes its element from the rotation permanently.' },
  { boss: 'Void Prophet Malachar', location: 'Abyssal Library (Act 2)', difficulty: 'Hard', phases: 2, keyMechanic: 'Void Rift adds that one-shots if not interrupted', desc: 'At 60% HP, Malachar begins channeling Void Rift — a 4-second cast that creates a growing black hole dealing lethal damage. Must be interrupted with a hard crowd control ability (stun, silence, knockback) or burst down 15% of his HP during the channel to cancel it. Phase 2 adds Void Clones that mirror his attacks.' },
  { boss: 'The Bone Colossus', location: 'Ossuary Halls (Act 3)', difficulty: 'Hard', phases: 3, keyMechanic: 'Summons skeleton adds at each phase transition', desc: 'Massive skeletal construct with three phases at 70% and 35% HP. Each transition summons waves of Skeleton Warriors. Bone Colossus attacks in slow, sweeping arcs with extreme damage — one hit can deal 80% of a squishy character\u2019s HP. Position behind the boss to avoid frontal cleaves. Clear adds immediately or they overwhelm you during phase transitions.' },
  { boss: 'High Inquisitor Seraphine', location: 'Sanctum of Truth (Act 3)', difficulty: 'Hard', phases: 2, keyMechanic: 'Judgment Beam — hide behind pillars to break line of sight', desc: 'Phase 2 begins at 40% HP and introduces the Judgment Beam — a sustained channeled attack that sweeps the arena and applies a stacking vulnerability debuff. Hide behind arena pillars to break line of sight. The beam lasts 8 seconds per cast. Attack during the 12-second cooldown between beam casts. Ranged builds can continue DPS from pillar cover with line-of-sight positioning.' },
  { boss: 'Soulbound Council', location: 'Echoing Catacombs (Act 4)', difficulty: 'Very Hard', phases: 2, keyMechanic: 'Three council members share a health pool — AoE favored', desc: 'Fight against three council members simultaneously sharing a single health bar. Each member uses a different damage type (physical, magical, poison). Phase 2 at 50% HP adds a Soul Link mechanic — killing one member heals the others for 30% of the dead member\u2019s remaining health. Burn all three evenly or you waste damage. Area damage builds (Infernalist, Plague Doctor) excel here.' },
  { boss: 'Witchspire Incarnate', location: 'Spire Summit (Act 4)', difficulty: 'Very Hard', phases: 4, keyMechanic: 'Element cycling every 25% HP — adapt or die', desc: 'Final boss with four phases triggered at 75%, 50%, and 25% HP. Each phase cycles the boss element (fire > ice > void > chaos). Elemental resistance from the previous phase becomes a liability in the next. The chaos phase (25%-0%) combines all three previous elements simultaneously with no safe resistance type — pure execution and damage races. Bring a balanced party or a self-sufficient build with high mobility.' },
];

const recommendedBuilds = [
  { boss: 'The Ashen Warden', bestBuilds: 'Any build (introductory boss)', reason: 'This boss is designed to be beaten with fresh characters in starter gear. Focus on learning dodge timing rather than build optimization. If struggling, any ranged class (Infernalist, Arcanist) trivializes the fight through kiting.' },
  { boss: 'Baroness Vexia', bestBuilds: 'Infernalist Pyromancer, Plague Doctor Cultist', reason: 'Ranged builds avoid Blood Pool damage and can damage the boss while kiting her away from pools. Hexblade struggles here because Blood Pools spawn under melee range, forcing constant repositioning that drops Curse stacks.' },
  { boss: 'Grotesque Chimera', bestBuilds: 'Arcanist Crystal Sentinel, Voidtouched Warlock', reason: 'Crystal Sentinel\u2019s damage reflection works against all three element types simultaneously. Voidtouched Warlock\u2019s debuffs reduce each head\u2019s damage output, making the elemental rotation more manageable.' },
  { boss: 'Void Prophet Malachar', bestBuilds: 'Hexblade Nightblade, Infernalist Pyromancer', reason: 'Hexblade\u2019s Shadow Step provides instant gap-closing to interrupt Void Rift channels. Infernalist\u2019s high burst damage can DPS through the rift if crowd control is unavailable. Bring at least one stun ability regardless of build.' },
  { boss: 'The Bone Colossus', bestBuilds: 'Hexblade Nightblade, Soul Reaper Necromancer', reason: 'Hexblade\u2019s mobility avoids the slow sweeping attacks while maintaining Curse stacks. Necromancer\u2019s minions draw aggro from skeleton adds, giving you breathing room during phase transitions. Ranged builds struggle with the arena size and add management.' },
  { boss: 'High Inquisitor Seraphine', bestBuilds: 'Crimson Archer equivalent \u2014 Arcanist Crystal Sentinel', reason: 'Arcanist\u2019s ranged damage and reflection mechanics work well from pillar cover. Prism Beam can be pre-charged during the Judgment Beam and released during cooldowns. Melee builds struggle to maintain damage uptime during beam phases.' },
  { boss: 'Soulbound Council', bestBuilds: 'Infernalist Pyromancer, Plague Doctor Cultist', reason: 'Area damage builds shine against three simultaneous targets sharing a health pool. Pyromancer\u2019s burn zones hit all three council members simultaneously. Cultist\u2019s Plague Cloud spreads between targets naturally. Avoid Hexblade \u2014 single-target focus wastes damage on the shared health pool mechanic.' },
  { boss: 'Witchspire Incarnate', bestBuilds: 'Hexblade Nightblade, Crystal Sentinel Arcanist', reason: 'Hexblade\u2019s Curse Detonation provides burst windows for each phase transition. Crystal Sentinel\u2019s Crystalline Shield absorbs the mixed element damage in the final chaos phase. This fight demands a well-optimized build with 40+ passive points and endgame gear \u2014 do not attempt it under-leveled or under-geared.' },
];

export default function BossStrategiesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Witchspire Boss Strategies — How to Beat Every Boss</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Witchspire's boss encounters are the game's definitive skill checks — each boss introduces a unique mechanic that tests your mastery of combat fundamentals, build optimization, and mechanical execution. Unlike trash mobs that can be out-geared through farming, bosses require understanding of their attack patterns, phase transitions, and specific counterplay strategies. This guide covers all eight major boss encounters across the four acts, ranking them by difficulty, breaking down their key mechanics phase by phase, and recommending the most effective builds for each fight. Whether you are stuck on the Bone Colossus's add waves or preparing for the final encounter against the Witchspire Incarnate, these strategies will help you conquer every boss in the game.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Boss Difficulty Ranking</h2>
            <p className="text-ink-light leading-relaxed mb-6">
              Bosses are ranked from Easy (introductory, designed to teach mechanics) to Very Hard (endgame skill checks requiring optimized builds and flawless execution). Difficulty assumes appropriate character level and gear for the encounter. All bosses are soloable on standard difficulty; higher difficulties may require cooperative play or meta builds.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Boss</th>
                    <th>Location</th>
                    <th>Difficulty</th>
                    <th>Phases</th>
                    <th>Key Mechanic</th>
                    <th>Strategy Summary</th>
                  </tr>
                </thead>
                <tbody>
                  {bossRankings.map((b) => (
                    <tr key={b.boss}>
                      <td className="font-semibold">{b.boss}</td>
                      <td>{b.location}</td>
                      <td>
                        <span className={`font-bold ${b.difficulty === 'Very Hard' ? 'text-amber-400' : b.difficulty === 'Hard' ? 'text-red-400' : b.difficulty === 'Medium' ? 'text-amber-400' : 'text-green-400'}`}>
                          {b.difficulty}
                        </span>
                      </td>
                      <td>{b.phases}</td>
                      <td className="text-sm">{b.keyMechanic}</td>
                      <td className="text-sm">{b.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recommended Builds per Boss</h2>
            <p className="text-ink-light leading-relaxed mb-6">
              While any well-built character can theoretically defeat any boss, certain builds have natural advantages against specific encounters. This table recommends the most effective builds for each boss fight and explains why their mechanics counter the boss's kit.
            </p>
            <div className="overflow-x-auto">
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Boss</th>
                    <th>Best Builds</th>
                    <th>Why These Builds Excel</th>
                  </tr>
                </thead>
                <tbody>
                  {recommendedBuilds.map((r) => (
                    <tr key={r.boss}>
                      <td className="font-semibold">{r.boss}</td>
                      <td>{r.bestBuilds}</td>
                      <td className="text-sm">{r.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Boss Mechanics Deep Dive</h2>
            <h3 className="font-display text-xl font-medium text-ink mb-3">Void Prophet Malachar — The First Major Wall</h3>
            <p className="text-ink-light leading-relaxed mb-4">
              Malachar represents the first significant difficulty spike in Witchspire and is where many players hit their first progression wall. The Void Rift mechanic at 60% HP requires either a hard crowd control ability or 15% burst damage within 4 seconds — failure to interrupt is an instant wipe regardless of health or defenses. Prepare for this fight by ensuring your build includes at least one stun, silence, or knockback ability. If your class lacks built-in crowd control, equip gear with the "Impact" suffix that adds a stun chance to your basic attacks.
            </p>
            <h3 className="font-display text-xl font-medium text-ink mb-3">Soulbound Council — Team Coordination Check</h3>
            <p className="text-ink-light leading-relaxed mb-4">
              The Soulbound Council fight tests your ability to manage multiple threats simultaneously. Phase 1 is manageable — spread damage across all three council members to keep their HP bars even. Phase 2 introduces Soul Link: damaging one member below the average HP of the group causes the others to heal. The optimal strategy is to damage all three members equally, bringing them to approximately 5-10% HP simultaneously, then executing them in rapid succession before the Soul Link healing triggers. In solo play, area damage builds handle this naturally. In group play, designate one DPS to each council member and coordinate burst timing.
            </p>
            <h3 className="font-display text-xl font-medium text-ink mb-3">Witchspire Incarnate — The Final Challenge</h3>
            <p className="text-ink-light leading-relaxed">
              The final boss cycles through four elements, each requiring different defensive responses. Fire phase (100%-75%): stack fire resistance and avoid burning ground zones. Ice phase (75%-50%): dodge ice shard barrages while managing the chill debuff that slows movement speed — keep mobility abilities off cooldown for this phase. Void phase (50%-25%): similar to Malachar's mechanics, dodge Void Rifts that appear at random arena positions. Chaos phase (25%-0%): all three elements simultaneously plus increased attack speed and damage. This is a pure execution and gear check — bring your best consumables (elemental resistance potions, health flasks, damage elixirs) and expect multiple attempts. Party composition with a Warden tank dramatically simplifies the chaos phase through damage redirection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">General Boss Tips</h2>
            <ul className="space-y-3 text-ink-light leading-relaxed list-disc list-inside">
              <li><strong className="text-ink">Learn telegraphs before optimizing damage.</strong> Spend your first attempt at each boss purely dodging and observing attack patterns. Once you can consistently avoid mechanics, then focus on maximizing damage output during recovery windows.</li>
              <li><strong className="text-ink">Bring elemental resistance consumables.</strong> Every boss past Act 1 deals a specific damage type. Resistance potions provide 25% damage reduction for 10 minutes — easily the most cost-effective preparation for progression attempts.</li>
              <li><strong className="text-ink">Over-level by 2-3 levels before hard encounters.</strong> The level scaling in Witchspire means each level provides approximately 8% more effective HP and 5% more damage. Two extra levels significantly smooth out difficulty spikes.</li>
              <li><strong className="text-ink">Upgrade your weapon before attempting progression bosses.</strong> Weapon damage is the single largest contributor to your DPS. A weapon from the latest available dungeon with optimal stats outperforms an under-leveled weapon with perfect affixes.</li>
              <li><strong className="text-ink">Cooperative play reduces boss difficulty by approximately 40%.</strong> Even a single partner provides boss damage splitting, revive opportunities, and complementary build synergy. If you are stuck on a boss after 10+ solo attempts, try the group finder.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <h3 className="font-display text-lg font-medium text-ink mb-2">What is the minimum level required for the final boss?</h3>
            <p className="text-ink-faded leading-relaxed mb-4">
              The Witchspire Incarnate is tuned for level 38-40 characters with 22+ passive points allocated and gear from the Act 4 dungeons. Attempting the fight at level 35 or below is technically possible but requires near-perfect mechanical execution and optimized gear. For most players, level 40 with all 25 passive points and at least rare-quality equipment in every slot is the realistic minimum for a manageable fight. Farming the Echoing Catacombs (the dungeon before the final boss) for Act 4 gear before attempting the Incarnate is highly recommended.
            </p>
            <h3 className="font-display text-lg font-medium text-ink mb-2">Do boss mechanics change on higher difficulties?</h3>
            <p className="text-ink-faded leading-relaxed mb-4">
              Yes. Hard difficulty adds new mechanics to most bosses — for example, Baroness Vexia gains a third Blood Pool simultaneously, and the Bone Colossus summons elite Skeleton Knights instead of basic Skeleton Warriors. Nightmare difficulty (unlocked after completing the campaign) significantly accelerates boss attack patterns and reduces recovery windows by approximately 40%. The strategies in this guide focus on Normal difficulty; adjustments for higher difficulties will be covered in a future advanced boss guide.
            </p>
            <h3 className="font-display text-lg font-medium text-ink mb-2">Can I skip optional bosses and return later?</h3>
            <p className="text-ink-faded leading-relaxed">
              The only mandatory bosses are The Ashen Warden (Act 1), Void Prophet Malachar (Act 2), The Bone Colossus (Act 3), and Witchspire Incarnate (Act 4). Baroness Vexia, Grotesque Chimera, High Inquisitor Seraphine, and Soulbound Council are optional encounters that provide unique legendary gear and Blood Essence but are not required for campaign completion. Skipping optional bosses and returning at a higher level with better gear is a legitimate strategy. However, optional bosses drop class-specific legendary items that significantly empower their recommended builds — skipping them delays your build optimization.
            </p>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">
            Last updated: June 2026. Boss mechanics, difficulty rankings, and recommended builds verified against Witchspire game data. Strategies reflect Normal difficulty; Hard and Nightmare mechanics may differ.
          </p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/class-builds" className="text-accent hover:underline">Class Builds</a></li>
              <li><a href="/skills" className="text-accent hover:underline">Skills Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
