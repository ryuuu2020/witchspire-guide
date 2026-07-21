export const metadata = {
  title: "Witchspire Base Building Guide — Hearths, Astral Projection & Layouts (2026)",
  description:
    "Master base building in Witchspire: Hearth placement, Astral Projection construction, build radius limits, multi-base networks, and efficient homestead layouts for 2026.",
};

const hearthTiers = [
  { tier: "Simple Hearth", unlock: "Tutorial (first homestead)", buildRadius: "24 tiles", maxFacilities: "6 crafting stations", fastTravel: "Yes", notes: "Your starting anchor. Cheap to place, small radius. Good for outposts near ore or herb clusters." },
  { tier: "Coven Hearth", unlock: "Luminary Tree, tier 2", buildRadius: "40 tiles", maxFacilities: "12 crafting stations", fastTravel: "Yes", notes: "The mid-game standard. Large enough radius for a full crafting quarter plus storage walls." },
  { tier: "Grand Hearth", unlock: "Luminary Tree, tier 4 (requires Tear of Al'uun)", buildRadius: "64 tiles", maxFacilities: "20 crafting stations", fastTravel: "Yes", notes: "Late-game main hub. Only one Grand Hearth can be designated as your main hub at a time." },
  { tier: "Astral Anchor", unlock: "Post-Witch King content", buildRadius: "96 tiles", maxFacilities: "Unlimited stations", fastTravel: "Yes + cross-biome leyline", notes: "Endgame centerpiece. Unlocks aerial platforms and floating-island construction plots." },
];

const facilities = [
  { facility: "Alchemy Lab", purpose: "Potion brewing and catalyst refinement", power: "None (station)", priority: "Essential", tips: "Place next to herb storage. Brew time is 20% shorter within 4 tiles of a Coven Altar." },
  { facility: "Coven Altar", purpose: "Broom upgrades, familiar bonding, coven buffs", power: "None (station)", priority: "Essential", tips: "Central placement — you interact with it constantly. Keep 2 tiles of clearance on all sides." },
  { facility: "Spell Forge", purpose: "Spell scroll crafting and rune embedding", power: "1 Mana Conduit", priority: "High", tips: "Must be inside a Mana Conduit radius or crafting halts. Plan conduit placement before the forge." },
  { facility: "Storage Vault", purpose: "Bulk item storage, shared across bases", power: "None", priority: "High", tips: "Vault contents are shared across all Hearths on your network — build one per base minimum." },
  { facility: "Familiar Roost", purpose: "Rest and passive XP for idle familiars", power: "None", priority: "Medium", tips: "Familiars resting here gain 10% of your combat XP. Wind familiars prefer elevated roosts." },
  { facility: "Greenhouse Plot", purpose: "Grow herbs and alchemical flora", power: "Watering (manual or sprinkler)", priority: "Medium", tips: "Moonpetal and Shadefern only grow at night or in shade — place plots under roofed sections." },
  { facility: "Mana Conduit", purpose: "Powers Spell Forge, Warding Stones, Loom", power: "Generates", priority: "High", tips: "Radius is 12 tiles. Two conduits can overlap — overlapping zones do not stack power, plan spacing." },
  { facility: "Warding Stone", purpose: "Base defense — repels low-tier night spawns", power: "1 Mana Conduit", priority: "Situational", tips: "Only worth it on frontier bases in corrupted biomes. Does nothing during Blood Moon events." },
];

const layoutPlans = [
  { stage: "First Homestead (Hours 0-5)", hearth: "Simple Hearth", mustHave: "Coven Altar, Alchemy Lab, 2x Storage Vault, campfire, 1 Greenhouse Plot", commonMistake: "Building everything in a circle around the Hearth — you will run out of radius before mid-game. Reserve the center ring for the Altar and paths." },
  { stage: "Expansion Base (Hours 5-20)", hearth: "Coven Hearth", mustHave: "Spell Forge + Mana Conduit, Familiar Roost, 4 Greenhouse Plots, second Alchemy Lab", commonMistake: "Placing the Spell Forge before the Conduit. The forge does nothing without power and cannot be moved without demolishing it for a 50% material refund." },
  { stage: "Main Hub (Hours 20+)", hearth: "Grand Hearth", mustHave: "Full crafting quarter, 8+ vaults, Warding Stones on approach paths, broom landing pad, Roost tower", commonMistake: "Designating the wrong base as main hub. The main hub dictates max build radius and unlocks high-tier branches — pick the base nearest your leyline network, not the prettiest one." },
];

const faqs = [
  { q: "Can I have more than one base in Witchspire?", a: "Yes, and you should. Every Hearth you place becomes a fast travel point, and vault contents are shared across your entire network. The optimal pattern is one Grand Hearth main hub plus 2-4 satellite outposts near resource clusters — ore in the Ashen Highlands, herbs in the Mire, crystal near the floating islands. Only one base can hold the 'main hub' designation at a time, and that hub sets your maximum build radius and unlocks high-tier crafting branches, so choose the location with the best leyline access rather than the best scenery." },
  { q: "How does Astral Projection building actually work?", a: "Astral Projection is Witchspire's free-form construction mode. Activate it from the build menu and your witch enters a floating spectator state where you can conjure walls, floors, roofs, and decorative pieces at any height — including over water and across gaps. Structures placed via Astral Projection cost Astral Shards in addition to base materials, and anything built higher than 8 tiles off the ground requires a Grand Hearth within radius. You can also use it to copy and paste room templates, which is the fastest way to reproduce a proven layout at a new outpost." },
  { q: "What happens to my base during a Blood Moon?", a: "Blood Moon events disable the Leyline fast travel network and spawn waves of corrupted creatures that actively path toward Hearths. Structures take reduced damage (25%) but facilities can be disabled until repaired. Warding Stones do nothing during a Blood Moon — your defense is your build layout. Funnel attackers with walls, keep the Alchemy Lab and Spell Forge in an inner ring, and use Astral Projected platforms as firing positions. After the event, repair costs scale with how many facilities were disabled, so a compact, defensible hub saves significant materials over a sprawling one." },
  { q: "Can I move or demolish buildings after placing them?", a: "Demolishing any structure refunds 50% of its material cost, but not the Astral Shards spent on Astral Projected pieces. Facilities like the Spell Forge and Alchemy Lab can be relocated via the build menu without demolition if the destination is inside the same Hearth radius — the relocate option appears when you hold the interact key on the facility. This makes early layouts forgiving: build compact first, then relocate outward as your Hearth tier and radius grow." },
  { q: "Do familiars do anything at my base?", a: "Yes. Familiars assigned to a Familiar Roost passively gain 10% of your combat XP while you are out exploring, and certain species provide base bonuses: Wind familiars at an elevated roost reduce your broom stamina drain by 15% when departing from that base, Ember familiars near the Alchemy Lab add a small chance of double potion output, and Earth familiars near Greenhouse Plots speed herb growth by 20%. Treat your roost assignments as part of your build, not just storage." },
];

export default function BaseBuildingGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Witchspire Base Building Guide — Hearths, Astral Projection &amp; Homestead Layouts</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Base building in Witchspire is not decoration — it is the backbone of your entire progression loop. Every Hearth you place is a fast travel anchor, every vault is shared across your network, and your designated main hub dictates how far you can build and which high-tier crafting branches you can unlock. A witch with three well-placed outposts farms resources twice as fast as one with a single sprawling homestead, and a properly powered Spell Forge saves hours of wasted travel. This guide covers Hearth tiers and build radius, the essential facilities and their placement rules, stage-by-stage layout plans from your first campfire to an endgame Grand Hearth hub, and how Astral Projection construction changes what is possible. All information reflects the current Witchspire early access patch as of July 2026.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hearth Tiers — Build Radius and Unlocks</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Hearths are the foundation of every base. Each tier increases your build radius, facility cap, and unlocks new construction options. The radius is measured in tiles from the Hearth itself — anything outside the radius cannot be built or powered. You can place multiple Hearths of any tier, but only one base can be the designated main hub.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Unlock</th>
                  <th>Build Radius</th>
                  <th>Facilities</th>
                  <th>Fast Travel</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {hearthTiers.map((h) => (
                  <tr key={h.tier}>
                    <td className="font-semibold text-accent">{h.tier}</td>
                    <td className="text-sm">{h.unlock}</td>
                    <td>{h.buildRadius}</td>
                    <td className="text-sm">{h.maxFacilities}</td>
                    <td className="text-sm">{h.fastTravel}</td>
                    <td className="text-sm text-ink-light">{h.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Essential Facilities — Placement and Power Rules</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Not all facilities are equal, and several have hidden placement requirements that punish careless layouts. The Spell Forge, Warding Stones, and Loom all require a Mana Conduit within radius or they simply do not function. The table below covers every facility worth building before the endgame, in rough order of priority.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Facility</th>
                  <th>Purpose</th>
                  <th>Power</th>
                  <th>Priority</th>
                  <th>Placement Tips</th>
                </tr>
              </thead>
              <tbody>
                {facilities.map((f) => (
                  <tr key={f.facility}>
                    <td className="font-semibold">{f.facility}</td>
                    <td className="text-sm">{f.purpose}</td>
                    <td className="text-sm">{f.power}</td>
                    <td><span className={f.priority === "Essential" ? "text-accent font-bold" : f.priority === "High" ? "text-[#58a6ff] font-bold" : "text-[#3fb950] font-bold"}>{f.priority}</span></td>
                    <td className="text-sm text-ink-light">{f.tips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Layout Plans by Progression Stage</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              The biggest base-building mistake in Witchspire is building for the base you have instead of the base you will need in ten hours. These stage plans tell you what must exist at each point in progression — and the specific mistake most players make at that stage.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Hearth</th>
                  <th>Must-Have Facilities</th>
                  <th>Common Mistake</th>
                </tr>
              </thead>
              <tbody>
                {layoutPlans.map((l) => (
                  <tr key={l.stage}>
                    <td className="font-semibold">{l.stage}</td>
                    <td className="text-accent text-sm">{l.hearth}</td>
                    <td className="text-sm text-ink-light">{l.mustHave}</td>
                    <td className="text-sm">{l.commonMistake}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Astral Projection: Building Without Limits</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Astral Projection is what separates Witchspire's building from every other survival-crafting game. Instead of standing on scaffolding, you project your spirit and conjure structures at any height — over water, across chasms, even on the undersides of floating islands once you unlock an Astral Anchor. The trade-offs are real, though, and understanding them prevents the most expensive mistakes in the game.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <div className="font-display text-base font-semibold text-ink mb-2">Astral Shards are the real cost</div>
                <p className="text-sm text-ink-light">Every Astral Projected piece costs Astral Shards on top of normal materials, and shards are not refunded on demolition. Never prototype a layout in Astral mode — mock it up with cheap wooden walls at ground level first, then conjure the final version. Experienced builders keep a 'template base' near spawn purely for testing room dimensions before committing shards.</p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <div className="font-display text-base font-semibold text-ink mb-2">The 8-tile height rule</div>
                <p className="text-sm text-ink-light">Anything built more than 8 tiles above ground level requires a Grand Hearth (or better) within radius. This is why aerial platforms and sky bridges are late-game projects. If you are planning a floating workshop, place the Grand Hearth first, verify the radius overlay covers your build site, then start conjuring — demolishing a half-built skybridge because the Hearth was two tiles too far away is a painful lesson.</p>
              </div>
              <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-4">
                <div className="font-display text-base font-semibold text-ink mb-2">Copy-paste room templates</div>
                <p className="text-sm text-ink-light">Astral Projection lets you save any enclosed room as a template and paste it at another base. Save your perfected Alchemy Lab corner, your vault wall, and your roost tower as templates early. When you open a new outpost, pasting three templates gets a functional base running in under two minutes — and templates still respect the local Hearth radius, so plan your outpost Hearth placement around your largest saved template.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Multi-Base Network Strategy</h2>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              Because vaults share contents across every Hearth on your network, satellite bases are effectively free resource camps. The standard network pattern that carries players from mid-game to the Witch King is a central Grand Hearth hub near the leyline convergence, plus three specialized satellites: a mining outpost in the Ashen Highlands with a vault and campfire, a Mire greenhouse base with four plots and a roost, and a crystal-watch platform near the floating island approach. Each satellite needs only a Simple Hearth — the radius is small, but so is the footprint of a mining camp.
            </p>
            <p className="text-ink-light leading-relaxed text-sm mb-4">
              During Blood Moon events, corrupted waves path toward Hearths — including satellites. Do not over-invest in satellite defenses; instead, strip satellites to vault-plus-campfire minimalism and let the event pass, then repair cheaply. Concentrate your Warding Stones, walls, and combat positioning at the main hub, where your crafting quarter actually lives. A hub that survives a Blood Moon with zero disabled facilities is worth more than three fortified outposts.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-ink mb-1">{f.q}</h3>
                  <p className="text-ink-light">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">Last updated: July 18, 2026. Hearth tiers, facility rules, and Astral Projection costs verified against the current Witchspire early access patch.</p>
        </div>

        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/beginners-guide" className="text-accent hover:underline">Beginner&apos;s Guide</a></li>
              <li><a href="/crafting" className="text-accent hover:underline">Crafting Guide</a></li>
              <li><a href="/familiars" className="text-accent hover:underline">Familiars Guide</a></li>
              <li><a href="/leveling-guide" className="text-accent hover:underline">Leveling Guide</a></li>
              <li><a href="/potion-brewing-guide" className="text-accent hover:underline">Potion Brewing Guide</a></li>
              <li><a href="/consumables" className="text-accent hover:underline">Consumables Guide</a></li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 text-sm text-ink-light">
              <li>Vault contents are shared network-wide — build one at every Hearth</li>
              <li>Place Mana Conduits before the Spell Forge, never after</li>
              <li>Only one main hub — choose for leyline access, not scenery</li>
              <li>Never prototype layouts in Astral mode; shards are not refunded</li>
              <li>Keep satellites minimal and fortify only the main hub for Blood Moons</li>
            </ul>
          </div>
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Familiar Base Bonuses</h3>
            <ul className="space-y-2 text-sm text-ink-light list-disc list-inside">
              <li><span className="text-accent font-semibold">Wind:</span> -15% broom stamina drain from that base</li>
              <li><span className="text-[#58a6ff] font-semibold">Ember:</span> chance of double potion output at the Lab</li>
              <li><span className="text-[#3fb950] font-semibold">Earth:</span> +20% herb growth at Greenhouse Plots</li>
              <li><span className="text-[#8b5cf6] font-semibold">Rested:</span> idle familiars gain 10% of your combat XP</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
