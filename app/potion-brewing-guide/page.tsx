import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Witchspire Potion Brewing Guide — Recipes, Materials & Stacking | Witchspire Guide",
  description: "Complete Witchspire potion brewing guide. Every alchemy recipe, material gathering locations, effect stacking rules, and advanced potion unlocking paths.",
};

const potionRecipes = [
  { potion: "Health Elixir", station: "Alchemy Table", ingredients: "Moonleaf x2, Spring Water x1", effect: "Restores 50 HP instantly. 10 second cooldown.", unlock: "Default (starting recipe)", tier: "Basic" },
  { potion: "Heart Core", station: "Alchemy Table", ingredients: "Crystal x5, Spirit Essence x2", effect: "Upgrades Heart to Level 2. Unlocks new crafting stations.", unlock: "Default", tier: "Basic" },
  { potion: "Ritual Candle", station: "Alchemy Table", ingredients: "Wax x3, Magic Essence x1", effect: "Upgrades Heart to Level 3. Required for mid-game progression.", unlock: "Heart Level 2", tier: "Intermediate" },
  { potion: "Heat Ward Potion", station: "Alchemy Table", ingredients: "Sun Crystal x2, Herb x1", effect: "Grants heat resistance for desert biome survival.", unlock: "Desert progression", tier: "Intermediate" },
  { potion: "Incense of Calling", station: "Alchemy Table", ingredients: "Moonstone x3, Spirit Essence x1", effect: "Boosts rare and Celestial familiar spawn rate.", unlock: "Meadows shrine discovery", tier: "Advanced" },
  { potion: "Greater Healing Potion", station: "Alchemy Table", ingredients: "Moonleaf x5, Spirit Essence x3, Crystal x2", effect: "Fully restores Witch vitality. No cooldown in combat.", unlock: "Late-game alchemy tree", tier: "Advanced" },
  { potion: "Mana Elixir", station: "Alchemy Table", ingredients: "Wisp Core x2, Moonleaf x3, Spring Water x2", effect: "Restores spellcasting energy (mana) for continued spell use.", unlock: "Alchemy progression quest", tier: "Advanced" },
  { potion: "Purification Dust", station: "Alchemy Table", ingredients: "Spirit Essence x4, Moonstone x1, Herb x3", effect: "Cleanses corruption from cursed areas and items.", unlock: "Alchemy progression quest", tier: "Expert" },
];

const materialLocations = [
  { material: "Moonleaf", biome: "Forest of Whispering Roots", yield: "3 to 5 per node", respawnTime: "5 min", rarity: "Common", notes: "Grows near water sources. Look for faint blue glow at night." },
  { material: "Spring Water", biome: "Hotspring caverns", yield: "2 per collection", respawnTime: "3 min", rarity: "Common", notes: "Collect from bubbling pools. Required for all basic elixirs." },
  { material: "Crystal", biome: "Meadows caves", yield: "1 to 3 per node", respawnTime: "8 min", rarity: "Uncommon", notes: "Mine with Spirit Pickaxe. Needed for Heart Core upgrade." },
  { material: "Spirit Essence", biome: "Spirit node deposits", yield: "1 to 2 per node", respawnTime: "10 min", rarity: "Uncommon", notes: "Drops from defeated spirits. Core material for advanced recipes." },
  { material: "Wax", biome: "Bee hive clusters in Meadows", yield: "2 to 4 per hive", respawnTime: "6 min", rarity: "Common", notes: "Harvest from active hives. Watch for swarm aggro." },
  { material: "Sun Crystal", biome: "Desert biome (sun-exposed rocks)", yield: "1 to 2 per node", respawnTime: "15 min", rarity: "Rare", notes: "Only spawns in direct sunlight. Use Heat Ward Potion before farming." },
  { material: "Moonstone", biome: "Moonlit Grove", yield: "1 per node", respawnTime: "20 min", rarity: "Rare", notes: "Spawns only at night. Bring Witch Lantern for safe travel." },
  { material: "Wisp Core", biome: "Wisp spawning grounds", yield: "1 per wisp", respawnTime: "12 min", rarity: "Rare", notes: "Defeat wisps to collect. Use Incense of Calling to boost spawn rate." },
];

export default function PotionBrewingPage() {
  return (
    <div className="min-h-screen bg-gray-900 max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-100 mb-2">Potion Brewing Guide</h1>
      <p className="text-gray-400 text-sm mb-8">Last updated: July 4, 2026</p>

      <p className="text-gray-300 leading-relaxed mb-6">
        Potion brewing is the heart of Witchspire survival and progression. The Alchemy Table is your primary brewing station, available from the start of the game, and it serves double duty as both a potion crafting bench and a Heart upgrade workshop. Every witch who wants to survive the deeper biomes, tackle boss encounters, and unlock the full familiar roster needs to master the brewing system. This guide covers every verified potion recipe, material gathering locations, effect stacking rules, and the advanced potion unlocking path through the alchemy progression tree.
      </p>

      <p className="text-gray-300 leading-relaxed mb-8">
        Witchspire Early Access currently features 8 verified potion and alchemy recipes across the Alchemy Table. Some recipes are available from the start, while others require specific progression milestones such as Heart Level upgrades, biome discovery, or alchemy quest completion. Understanding which potions to brew first, where to gather materials efficiently, and how potion effects interact with each other is the difference between a witch who thrives and one who constantly runs out of healing mid-dungeon.
      </p>

      <h2 className="text-2xl font-bold text-gray-100 mt-10 mb-4">All Potion and Alchemy Recipes</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        The Alchemy Table handles all potion brewing in Witchspire. Below is the complete catalog of verified recipes, including ingredients, effects, unlock conditions, and tier classification. Note that several advanced recipes (Greater Healing Potion, Mana Elixir, Purification Dust) require progression through the alchemy questline and are not available from the start.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-700 bg-gray-800">
              <th className="py-3 px-4 text-gray-100 font-semibold">Potion</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Station</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Ingredients</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Effect</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Unlock</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Tier</th>
            </tr>
          </thead>
          <tbody>
            {potionRecipes.map((p, i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800">
                <td className="py-3 px-4 text-gray-100 font-medium">{p.potion}</td>
                <td className="py-3 px-4 text-gray-300">{p.station}</td>
                <td className="py-3 px-4 text-gray-300">{p.ingredients}</td>
                <td className="py-3 px-4 text-gray-300">{p.effect}</td>
                <td className="py-3 px-4 text-gray-300">{p.unlock}</td>
                <td className="py-3 px-4 text-gray-300">{p.tier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-100 mt-10 mb-4">Material Gathering Locations</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Efficient material gathering is the bottleneck for potion brewing. Knowing where each material spawns, how long it takes to respawn, and what conditions are required to harvest it safely will save you hours of aimless wandering. The table below covers every alchemy material in Witchspire, including biome location, yield per node, respawn timer, rarity, and practical harvesting notes.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-700 bg-gray-800">
              <th className="py-3 px-4 text-gray-100 font-semibold">Material</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Biome</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Yield</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Respawn</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Rarity</th>
              <th className="py-3 px-4 text-gray-100 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {materialLocations.map((m, i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800">
                <td className="py-3 px-4 text-gray-100 font-medium">{m.material}</td>
                <td className="py-3 px-4 text-gray-300">{m.biome}</td>
                <td className="py-3 px-4 text-gray-300">{m.yield}</td>
                <td className="py-3 px-4 text-gray-300">{m.respawnTime}</td>
                <td className="py-3 px-4 text-gray-300">{m.rarity}</td>
                <td className="py-3 px-4 text-gray-300">{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-gray-100 mt-10 mb-4">Potion Effects and Stacking Rules</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Understanding how potion effects stack is critical for maximizing your survival in difficult encounters. Witchspire uses a structured stacking system with clear rules that prevent infinite buff loops while still rewarding strategic multi-potion use.
      </p>

      <div className="bg-gray-800 rounded-lg p-5 mb-4 border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">Healing Potion Stacking</h3>
        <p className="text-gray-300 leading-relaxed">
          Health Elixirs and Greater Healing Potions do not stack with each other. Drinking a Health Elixir while one is already active refreshes the duration rather than adding a second effect. However, Healing potions do stack with Incense of Calling, which provides a separate buff category. This means you can have one healing effect and one incense effect active simultaneously, but not two healing effects.
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-5 mb-4 border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">Resistance Stacking</h3>
        <p className="text-gray-300 leading-relaxed">
          The Heat Ward Potion provides heat resistance, which is a distinct buff category from healing. You can have Heat Ward and Health Elixir active at the same time. Resistance potions of different types (heat, cold, corruption) can also stack with each other, allowing you to prepare for multi-biome expeditions. However, two Heat Ward Potions will not double your heat resistance. They refresh the duration instead.
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-5 mb-4 border border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100 mb-2">Mana and Restoration Stacking</h3>
        <p className="text-gray-300 leading-relaxed">
          Mana Elixir provides spellcasting energy restoration, which is a separate category from HP restoration. You can have a Health Elixir, a Mana Elixir, and an Incense of Calling all active simultaneously. Purification Dust operates as a cleansing effect rather than a buff, so it can be used at any time without interfering with active potion effects. The Greater Healing Potion overrides the Health Elixir if both are consumed, replacing the weaker effect with the stronger one.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-100 mt-10 mb-4">Advanced Potion Unlocking Path</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        The advanced potion recipes in Witchspire are gated behind a progression tree that requires deliberate planning. Below is the recommended unlock order for players who want to access the most powerful potions as efficiently as possible.
      </p>
      <ul className="list-disc list-inside space-y-3 text-gray-300 mb-8">
        <li><strong className="text-gray-100">Step 1 — Heart Core</strong>: Craft the Heart Core (Crystal x5, Spirit Essence x2) at the Alchemy Table to upgrade your Heart to Level 2. This unlocks additional crafting stations and is the gateway to all advanced recipes.</li>
        <li><strong className="text-gray-100">Step 2 — Ritual Candle</strong>: Once your Heart is Level 2, craft the Ritual Candle (Wax x3, Magic Essence x1) to upgrade to Heart Level 3. This is required for mid-game progression and opens the alchemy questline.</li>
        <li><strong className="text-gray-100">Step 3 — Heat Ward Potion</strong>: Progress through the Desert biome to unlock this recipe. It is essential for surviving the sun-exposed areas where Sun Crystals spawn, which are themselves required for other advanced recipes.</li>
        <li><strong className="text-gray-100">Step 4 — Incense of Calling</strong>: Discover the Meadows shrine to unlock this recipe. The Incense of Calling boosts rare familiar spawn rates, which indirectly improves your Wisp Core farming efficiency for Mana Elixir crafting.</li>
        <li><strong className="text-gray-100">Step 5 — Mana Elixir and Greater Healing Potion</strong>: These require completion of the alchemy progression questline. Focus on gathering Moonleaf, Spirit Essence, and Wisp Cores in bulk while progressing through the earlier steps so you have materials ready when these recipes unlock.</li>
        <li><strong className="text-gray-100">Step 6 — Purification Dust</strong>: The final alchemy unlock. Requires Spirit Essence x4, Moonstone x1, and Herb x3. Essential for cleansing corruption in endgame dungeons and cursed item purification.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 mt-10 mb-4">Brewing Tips and Efficiency</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-300 mb-8">
        <li>Always keep a stockpile of at least 10 Health Elixirs before entering any dungeon. The 50 HP instant restore with a 10 second cooldown is your primary survival tool.</li>
        <li>Farm Moonleaf at night in the Forest of Whispering Roots. The blue glow makes nodes significantly easier to spot, reducing your gathering time by approximately 40 percent.</li>
        <li>The Spirit Logging Sickle (from the Luminaries tree unlock) is the fastest wood gathering tool, but it also speeds up herb collection in forest biomes. Equip it during material farming runs.</li>
        <li>Do not waste Crystals on anything other than the Heart Core until you have upgraded to Heart Level 2. The Heart Core is the single most important early-game craft, and every Crystal spent elsewhere delays your progression.</li>
        <li>Use the Incense of Calling before farming Wisp Cores. The boosted spawn rate means more wisps per area, which directly translates to more Mana Elixir ingredients per hour.</li>
        <li>Spring Water respawns every 3 minutes, making it the fastest-regenerating material in the game. Set up a farming loop between two hotspring caverns for maximum efficiency.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-100 mt-10 mb-4">FAQ</h2>
      <details className="bg-gray-800 rounded-lg p-5 mb-4 border border-gray-700">
        <summary className="text-lg font-semibold text-gray-100 cursor-pointer">How many potion recipes are in Witchspire Early Access?</summary>
        <p className="text-gray-300 mt-3 leading-relaxed">There are 8 verified alchemy recipes in the current Early Access build. Some community sites claim higher numbers, but only 8 have been source-verified through the Alchemy Table interface. These include Health Elixir, Heart Core, Ritual Candle, Heat Ward Potion, Incense of Calling, Greater Healing Potion, Mana Elixir, and Purification Dust. Additional recipes are expected in future patches, but the developers have not confirmed specific additions yet.</p>
      </details>
      <details className="bg-gray-800 rounded-lg p-5 mb-4 border border-gray-700">
        <summary className="text-lg font-semibold text-gray-100 cursor-pointer">Can I brew potions while exploring dungeons, or only at the Sanctuary?</summary>
        <p className="text-gray-300 mt-3 leading-relaxed">Potion brewing is currently restricted to the Alchemy Table at your Sanctuary. You cannot brew potions in the field. This makes pre-dungeon preparation essential. Before entering any dungeon, brew enough potions to cover the expected duration of your expedition. The general rule is 10 Health Elixirs for standard dungeons and 15 to 20 for boss encounters. If you run out mid-dungeon, you will need to retreat to your Sanctuary and brew more, which means leaving the dungeon instance and potentially losing progress on procedural layouts.</p>
      </details>
      <details className="bg-gray-800 rounded-lg p-5 mb-4 border border-gray-700">
        <summary className="text-lg font-semibold text-gray-100 cursor-pointer">What is the best potion for boss fights?</summary>
        <p className="text-gray-300 mt-3 leading-relaxed">The Greater Healing Potion is the best boss fight potion because it fully restores your vitality with no cooldown in combat. However, it requires late-game alchemy progression to unlock. If you do not have access to it yet, stack 15 to 20 Health Elixirs and use them strategically. The 50 HP restore with a 10 second cooldown means you can heal approximately 300 HP per minute, which is enough for most mid-game bosses. Also bring a Mana Elixir if your build relies on spellcasting, since running out of mana mid-fight can be fatal for magic-focused witches.</p>
      </details>

      <aside className="border-l-4 border-gray-600 pl-4 mt-10">
        <h3 className="text-lg font-bold text-gray-100 mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/beginners-guide" className="text-blue-400 hover:underline">Beginners Guide</Link></li>
          <li><Link href="/boss-strategies" className="text-blue-400 hover:underline">Boss Strategies</Link></li>
          <li><Link href="/class-builds" className="text-blue-400 hover:underline">Class Builds</Link></li>
          <li><Link href="/crafting" className="text-blue-400 hover:underline">Crafting Guide</Link></li>
          <li><Link href="/dungeon-guide" className="text-blue-400 hover:underline">Dungeon Guide</Link></li>
          <li><Link href="/familiars" className="text-blue-400 hover:underline">Familiars Guide</Link></li>
          <li><Link href="/skill-tree-guide" className="text-blue-400 hover:underline">Skill Tree Guide</Link></li>
          <li><Link href="/spell-tier-list" className="text-blue-400 hover:underline">Spell Tier List</Link></li>
        </ul>
      </aside>
      <p className="text-gray-500 text-sm mt-10">Last updated: July 4, 2026. Recipe data based on Early Access Patch 0.1.3 and community verification.</p>
    </div>
  );
}
