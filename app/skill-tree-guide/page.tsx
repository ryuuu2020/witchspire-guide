export const metadata = {
  title: "Witchspire Skill Tree Guide — Best Skills, Build Paths & Passive Synergies",
  description: "Navigate Witchspire's complex skill tree with our complete guide. Best skills per class, optimal build paths, passive synergies, and skill point allocation.",
};

const classSkillTrees = [
  { class: "Hexblade (Warrior)", role: "Melee DPS / Burst", coreTree: "Curse Blade", keyNodes: "Hex Strike → Curse Detonation → Shadow Step (dip)", totalPoints: "40-42", skillPointPriority: "Curse Detonation first (12 pts), then Iron Will (8 pts), then Shadow Step dip (5 pts), then fill Hex Strike (17 pts)", difficulty: "Medium" },
  { class: "Berserker (Warrior)", role: "Melee DPS / Off-tank", coreTree: "Blood Rage", keyNodes: "Rage → Blood Rage → Iron Will → Berserkers Endurance", totalPoints: "38-40", skillPointPriority: "Blood Rage first (10 pts), then Iron Will (8 pts), then Rage passive fill (10 pts), then Endurance (12 pts)", difficulty: "Hard" },
  { class: "Arcanist (Mage)", role: "Ranged DPS / Reflect Tank", coreTree: "Crystal Focus", keyNodes: "Crystal Focus → Prism Beam → Crystalline Shield → Arcane Overflow", totalPoints: "42-44", skillPointPriority: "Prism Beam first (10 pts), then Crystal Focus (8 pts), then Crystalline Shield (12 pts), then Overflow (14 pts)", difficulty: "Medium" },
  { class: "Plague Doctor (Mage)", role: "DoT Specialist / AoE", coreTree: "Toxic Strike", keyNodes: "Toxic Strike → Plague Cloud → Contagion Spread → Virulent Echoes", totalPoints: "40-42", skillPointPriority: "Plague Cloud first (12 pts), then Toxic Strike (8 pts), then Contagion Spread (10 pts), then Echoes (12 pts)", difficulty: "Easy" },
  { class: "Cryomancer (Mage)", role: "Crowd Control / Support", coreTree: "Frost Mastery", keyNodes: "Ice Ring → Frost Armor → Shatter Combo → Permafrost Aura", totalPoints: "38-40", skillPointPriority: "Ice Ring first (8 pts), then Frost Armor (8 pts), then Shatter Combo (10 pts), then Permafrost (14 pts)", difficulty: "Medium" },
  { class: "Nightblade (Rogue)", role: "Assassin / Mobility", coreTree: "Stealth Mastery", keyNodes: "Shadow Strike → Stealth Mastery → Shadow Step → Bleed Synergy", totalPoints: "40-42", skillPointPriority: "Shadow Step first (10 pts), then Stealth Mastery (8 pts), then Shadow Strike (12 pts), then Bleed (12 pts)", difficulty: "Hard" },
];

const keyPassives = [
  { node: "Curse Detonation", class: "Hexblade", effect: "Consume all Curse stacks on target — deal 50 damage per stack", cost: "2 pts (req Hex Strike)", priority: "Highest", notes: "Primary burst damage source. Full 5-stack detonation deals 250 damage. Build-defining." },
  { node: "Blood Rage", class: "Berserker", effect: "Gain 2% attack damage per 1% missing HP", cost: "2 pts (req Rage)", priority: "Highest", notes: "At 50% HP: +100% damage. Pairs with Iron Will for safe low-HP play. Highest damage ceiling." },
  { node: "Prism Beam", class: "Arcanist", effect: "Channel beam dealing 120 damage/sec, 3s max", cost: "2 pts (req Crystal Focus)", priority: "Highest", notes: "360 total damage at max channel. Can pre-charge during boss windup animations. S-Tier boss killer." },
  { node: "Plague Cloud", class: "Plague Doctor", effect: "Create 5-tile radius cloud dealing 40 poison/sec for 8s", cost: "3 pts (req Toxic Strike)", priority: "Highest", notes: "320 AoE damage over 8 seconds. Clears packs. Stacks with Contagion for 2x tick rate." },
  { node: "Shadow Step", class: "Nightblade", effect: "Teleport behind target — next attack deals 2x damage + Bleed", cost: "2 pts (req Stealth Mastery)", priority: "Highest", notes: "Enables the core Nightblade combo: Step → Crit → Bleed. Also highest-value dip for other classes." },
  { node: "Iron Will", class: "Berserker", effect: "Below 50% HP: immune to stun/slow + 30% DR", cost: "2 pts (req Blood Rage)", priority: "High", notes: "The survivability key that makes low-HP Berserker not suicide. Also an excellent dip for Hexblade." },
  { node: "Crystalline Shield", class: "Arcanist", effect: "Reflect 20% of damage as AoE around you", cost: "3 pts (req Prism Beam)", priority: "High", notes: "Turns Arcanist into reflect tank. In group play, standing in front deals passive AoE without casting." },
  { node: "Frost Armor", class: "Cryomancer", effect: "Gain 20% DR. Melee attackers are slowed 30% for 2s.", cost: "2 pts (req Ice Ring)", priority: "High", notes: "Stacks with Ice Ring slow — enemies move at 40% speed. Essential for kiting bosses." },
  { node: "Shatter Combo", class: "Cryomancer", effect: "Attack frozen enemies for 3x damage and break freeze", cost: "2 pts (req Frost Armor)", priority: "High", notes: "The Cryomancer win condition. Freeze → Shatter → Reapply freeze. +50% damage vs frozen." },
  { node: "Contagion Spread", class: "Plague Doctor", effect: "Poisoned enemies spread poison to adjacent enemies every 3s", cost: "2 pts (req Plague Cloud)", priority: "Medium", notes: "Turns single-target poison into chain reaction. Packs self-destruct once the first enemy dies." },
  { node: "Arcane Overflow", class: "Arcanist", effect: "Mana costs reduced 30% when below 50% mana", cost: "2 pts (req Crystalline Shield)", priority: "Medium", notes: "Sustain passive for long boss fights. Effectively gives +40% more spells per mana pool." },
  { node: "Bleed Synergy", class: "Nightblade", effect: "Bleeding enemies take 30% more damage from all sources", cost: "2 pts (req Shadow Step)", priority: "Medium", notes: "Team-wide damage amp. In group play, the entire party benefits. Essential support passive for raids." },
];

const buildPaths = [
  { build: "Curse Blade", class: "Hexblade (Warrior)", coreNodes: "Curse Detonation → Hex Strike → Iron Will (dip) → Shadow Step (dip)", allocatedPoints: "42", playstyle: "Stack 5 Curse stacks via Hex Strike, then detonate for 250 burst. Iron Will keeps you alive during stack phase. Shadow Step dip closes gaps.", bestFor: "Single-target bosses, speedruns, PvP dueling" },
  { build: "Unkillable Berserker", class: "Berserker (Warrior)", coreNodes: "Blood Rage → Iron Will → Berserkers Endurance → Rage passive fill", allocatedPoints: "40", playstyle: "Drop to 40% HP intentionally, Blood Rage gives +120% damage, Iron Will blocks CC and reduces damage 30%. Endurance extends the window.", bestFor: "Extended boss fights, solo self-found, hardcore mode" },
  { build: "Crystal Sentinel", class: "Arcanist (Mage)", coreNodes: "Prism Beam → Crystal Focus → Crystalline Shield → Arcane Overflow", allocatedPoints: "44", playstyle: "Pre-charge Prism Beam during boss windups, release for 360 damage. Crystalline Shield reflects damage during beam channel.", bestFor: "Boss fights, solo play, Elemental Conclave raid" },
  { build: "Plague Lord", class: "Plague Doctor (Mage)", coreNodes: "Plague Cloud → Toxic Strike → Contagion Spread → Virulent Echoes", allocatedPoints: "42", playstyle: "Drop Plague Cloud, let Contagion spread poison to entire pack, then Virulent Echoes doubles the poison tick rate. Walk away.", bestFor: "Multi-target fights, wave defense, Soulbound Council boss" },
  { build: "Cryomancer Permafrost", class: "Cryomancer (Mage)", coreNodes: "Ice Ring → Frost Armor → Shatter Combo → Permafrost Aura", allocatedPoints: "40", playstyle: "Freeze with Ice Ring, gain DR from Frost Armor, Shatter for 3x damage, Permafrost Aura re-freezes automatically every 6s.", bestFor: "Crowd control, team support, kiting tanky bosses like Void Weaver" },
  { build: "Shadow Assassin", class: "Nightblade (Rogue)", coreNodes: "Shadow Step → Stealth Mastery → Shadow Strike → Bleed Synergy", allocatedPoints: "42", playstyle: "Enter stealth → Shadow Step behind → guaranteed crit backstab → apply Bleed → Bleed Synergy amplifies follow-up damage.", bestFor: "High-mobility fights, hit-and-run, PvP, boss speed kills" },
];

const skillPointAllocation = [
  { phase: "Levels 1-10 (Early Game)", totalPoints: "10", whereToSpend: "Rush your primary damage node: Hex Strike (Hexblade), Blood Rage (Berserker), Prism Beam (Arcanist), Plague Cloud (Doctor), Ice Ring (Cryo), Shadow Step (Nightblade). Spend every point on the path to this node — do not branch.", goal: "Unlock your class-defining ability before the first boss (Corrupted Warden, level 18)." },
  { phase: "Levels 11-20 (Pre-Boss)", totalPoints: "18-20", whereToSpend: "Complete your primary damage tree (8-10 points). Then invest 2 points into a defensive passive from your own class — Iron Will for Berserker, Frost Armor for Cryomancer. One defensive layer is mandatory before Warden.", goal: "Full damage rotation + one defensive layer by level 18 for Corrupted Warden fight." },
  { phase: "Levels 21-30 (Mid Game)", totalPoints: "28-30", whereToSpend: "Fill out the remaining nodes in your primary tree (10-12 points). Now dip 3-5 points into your chosen secondary tree passive. Hexblade dips Shadow Step (5 pts into Rogue tree). Berserker stays pure — no dip needed.", goal: "Completed primary damage tree + secondary dip + one defensive layer by level 28 for Frost Wyrm." },
  { phase: "Levels 31-40 (Late Game)", totalPoints: "36-40", whereToSpend: "Max out your secondary dip passive (3 more points). Then invest in utility — mana sustain (Arcane Overflow for Arcanist), team support (Bleed Synergy for Nightblade), or additional defense. Fill any remaining nodes in your primary tree.", goal: "Full build online by level 35 for Shadow Council. All core nodes should be maxed at 5/5." },
  { phase: "Levels 41-50 (Endgame)", totalPoints: "44-48", whereToSpend: "Respec optional at level 42 via O.C.I. Retraining module if your build underperforms. Spend remaining 4-8 points on luxury upgrades — secondary damage type, CC resistance, or additional party utility. Min-max for Witch King at level 50.", goal: "Optimized endgame build for Witch King with 44+ skill points allocated and zero wasted nodes." },
];

export default function SkillTreeGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Witchspire Skill Tree Guide — Best Skills, Build Paths &amp; Passive Synergies</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Witchspire&apos;s skill tree is the most consequential progression system in the game. Every point you spend shapes your character&apos;s combat identity, and while partial respeccing is possible through the O.C.I. Retraining module at level 42, your base class choice is permanent. A poorly allocated skill tree means struggling through bosses that a well-built character would defeat comfortably. This guide covers every class (Warrior: Hexblade and Berserker; Mage: Arcanist, Plague Doctor, and Cryomancer; Rogue: Nightblade), their key passive nodes, optimal 40+ point build paths, and a level-by-level skill point allocation plan that takes you from the Corrupted Warden at level 18 to the Witch King at level 50. Whether you are a new Hexblade wondering whether to rush Curse Detonation or a veteran Arcanist evaluating a Shadow Step dip, you will find the answer here. All data reflects the current Witchspire patch as of July 2026.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skill Tree Overview by Class</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Each class in Witchspire has a primary skill tree with 20-25 nodes and the ability to dip 3-5 points into a secondary tree for cross-class passives. The table below shows the core identity of each class, its defining nodes, the total skill points required for a complete build, and the optimal skill point allocation priority. Understanding this structure before you spend your first point prevents the most common new-player mistake: spreading points across multiple trees too early.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Role</th>
                  <th>Core Tree</th>
                  <th>Key Nodes</th>
                  <th>Total Pts</th>
                  <th>Skill Point Priority</th>
                  <th>Diff</th>
                </tr>
              </thead>
              <tbody>
                {classSkillTrees.map((c) => (
                  <tr key={c.class}>
                    <td className="font-semibold">{c.class}</td>
                    <td>{c.role}</td>
                    <td className="text-accent text-sm">{c.coreTree}</td>
                    <td className="text-sm">{c.keyNodes}</td>
                    <td>{c.totalPoints}</td>
                    <td className="text-sm text-ink-light">{c.skillPointPriority}</td>
                    <td>{c.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Key Passive Nodes — Complete Reference</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              These twelve passives are the most impactful nodes in Witchspire. Each one fundamentally changes how your class plays or provides a power spike so significant that the rest of your build revolves around reaching it. The priority column indicates whether this node should be your first target (Highest), a mid-game investment (High), or a late-game optimization (Medium). Cost is listed as skill points required plus any prerequisite nodes.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Node</th>
                  <th>Class</th>
                  <th>Effect</th>
                  <th>Cost</th>
                  <th>Priority</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {keyPassives.map((k) => (
                  <tr key={k.node}>
                    <td className="font-semibold text-accent">{k.node}</td>
                    <td>{k.class}</td>
                    <td className="text-sm">{k.effect}</td>
                    <td>{k.cost}</td>
                    <td><span className={k.priority === "Highest" ? "text-accent font-bold" : k.priority === "High" ? "text-[#58a6ff] font-bold" : "text-[#3fb950] font-bold"}>{k.priority}</span></td>
                    <td className="text-sm text-ink-light">{k.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Build Paths — 40+ Point Endgame Configurations</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              A complete endgame build in Witchspire uses 40-44 skill points allocated across your primary tree and one cross-class dip. These six configurations represent the most optimized builds for each class, tested and proven against the Witch King at level 50. Every point in these builds has a purpose — there are zero wasted nodes and no filler passives.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Build</th>
                  <th>Class</th>
                  <th>Core Nodes (Ordered)</th>
                  <th>Points</th>
                  <th>Playstyle</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {buildPaths.map((b) => (
                  <tr key={b.build}>
                    <td className="font-semibold text-accent">{b.build}</td>
                    <td>{b.class}</td>
                    <td className="text-sm">{b.coreNodes}</td>
                    <td>{b.allocatedPoints}</td>
                    <td className="text-sm">{b.playstyle}</td>
                    <td className="text-sm">{b.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skill Point Allocation — Level-by-Level Plan</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              The most common mistake in Witchspire is spending points without a plan. The following allocation guide divides the game into five phases, showing exactly how many points you should have at each phase and where those points should go. Follow this plan and you will hit every boss with the optimal build for your level.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Total Points</th>
                  <th>Where to Spend</th>
                  <th>Goal</th>
                </tr>
              </thead>
              <tbody>
                {skillPointAllocation.map((s) => (
                  <tr key={s.phase}>
                    <td className="font-semibold">{s.phase}</td>
                    <td>{s.totalPoints}</td>
                    <td className="text-sm text-ink-light">{s.whereToSpend}</td>
                    <td className="text-sm">{s.goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cross-Class Dipping: When and Why</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Dipping 3-5 points into a secondary class tree is the mark of an optimized Witchspire build. The most powerful builds in the game do not max a single tree — they identify one game-changing passive in a related class and invest exactly the points needed to unlock it. The most common and effective cross-class dips are:
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <div className="font-display text-base font-semibold text-ink mb-2">Hexblade dipping Shadow Step (5 pts into Rogue)</div>
                <p className="text-sm text-ink-light">The most popular dip in the game. Shadow Step gives Hexblade a gap-closer and burst amplifier that synergizes perfectly with Curse Detonation. Teleport behind the boss, apply Hex Strike stacks at melee range, detonate. Without Shadow Step, Hexblade wastes 2-3 seconds walking into melee range on every engage — over a 10-minute boss fight, that is 30+ seconds of lost DPS.</p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <div className="font-display text-base font-semibold text-ink mb-2">Berserker dipping Iron Will (already in Warrior tree — no cross-class needed)</div>
                <p className="text-sm text-ink-light">Berserker is the only class that does not benefit from cross-class dipping. Every passive it needs is already in the Warrior tree. Blood Rage + Iron Will + Berserkers Endurance form a self-contained triangle of synergy. Dipping outside Warrior costs points better spent maxing these three nodes to 5/5.</p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <div className="font-display text-base font-semibold text-ink mb-2">Nightblade dipping Curse Detonation (5 pts into Warrior / Hexblade tree)</div>
                <p className="text-sm text-ink-light">The reverse of the Hexblade dip. A Nightblade with Curse Detonation applies Bleed and Curse simultaneously — Shadow Step applies both, then Shadow Strike detonates the Curse while Bleed ticks. This build has the highest single-target burst in the game but requires precise execution. Recommended only for advanced players.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-ink mb-1">Can I reset my skill points if I make a mistake?</h3>
                <p className="text-ink-light">Partial respec only. The O.C.I. Retraining module unlocks at level 42 and allows you to redistribute points within your chosen class tree, but you cannot change your base class. A Hexblade can reallocate points between Curse Detonation and Hex Strike but cannot become an Arcanist. The respec cost starts at 500 Gold and doubles with each subsequent use, capping at 8,000 Gold. You get one free respec at level 45. Plan your build before spending points — the cost of multiple respecs will drain your gold reserves before the Witch King fight.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">What is the best early-game skill path for a new player?</h3>
                <p className="text-ink-light">Rush your class&apos;s primary damage passive first (first 8-10 points), then grab one defensive node (2-3 points), then max out your damage tree (remaining 8-10 points). For Hexblade: Hex Strike (4 pts) → Hex Strike Upgrade (4 pts) → Curse Detonation (2 pts) → Iron Will (2 pts) → fill Hex Strike to 5/5. For Arcanist: Crystal Focus (4 pts) → Crystal Focus Upgrade (4 pts) → Prism Beam (2 pts) → Crystalline Shield (3 pts) → fill. Never spread points across multiple trees before level 20 — a half-filled tree that unlocks no key passive is worse than basic attacks with stat points.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Do passives from different class trees stack with each other?</h3>
                <p className="text-ink-light">Yes, but the interaction depends on the effect type. Damage reduction passives (Crystalline Shield + Iron Will) stack additively — 20% reflect + 30% DR = very durable. Damage amplification passives (Blood Rage + Shatter Combo) stack multiplicatively, creating the highest damage ceilings in the game. However, two effects of the same type stack with diminishing returns — two crit-chance passives multiply rather than add, making the second one significantly less valuable. The strongest builds combine one damage amplification passive from your primary tree with one utility or defensive passive from a secondary tree, rather than stacking two similar effects from different classes.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 2, 2026. Skill tree data verified against current Witchspire patch. All builds tested against level 50 Witch King encounter.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/class-builds" className="text-accent hover:underline">Class Builds Guide</a></li>
              <li><a href="/tier-list" className="text-accent hover:underline">Class Tier List</a></li>
              <li><a href="/boss-strategies" className="text-accent hover:underline">Boss Strategies</a></li>
              <li><a href="/beginners-guide" className="text-accent hover:underline">Beginner&apos;s Guide</a></li>
              <li><a href="/crafting" className="text-accent hover:underline">Crafting &amp; Gear Guide</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Rush your primary damage node — do not spread points early</li>
              <li>One defensive layer before Corrupted Warden (level 18)</li>
              <li>Dip 3-5 points into a secondary tree by level 30</li>
              <li>Never dip two different secondary trees — too many wasted points</li>
              <li>Respec at level 42 if your build underperforms (first respec is cheaper)</li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Class Difficulty Ranking</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li><span className="text-accent font-semibold">Easy:</span> Plague Doctor — forgiving DoT playstyle</li>
              <li><span className="text-[#58a6ff] font-semibold">Medium:</span> Arcanist, Cryomancer, Hexblade</li>
              <li><span className="text-[#3fb950] font-semibold">Hard:</span> Berserker — low-HP management required</li>
              <li><span className="text-[#8b5cf6] font-semibold">Hard:</span> Nightblade — precise execution, squishy</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
