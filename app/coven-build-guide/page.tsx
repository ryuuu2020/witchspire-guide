import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Witchspire Coven Build Guide — Best Coven Combinations & Strategy (2026)',
  description: 'Complete Witchspire coven build guide covering all coven types, synergy effects, best spell combinations, and recommended builds for every playstyle.',
};

const COVEN_TYPES = [
  { type: 'Foreteller Coven', bestSpells: 'Spirit Step, Corruption Pulse, Fate Bind', synergyEffect: 'Party-wide corruption vision + 25% group damage bonus vs. revealed enemies', playstyle: 'Co-op Support / Scout / Crowd Control', difficulty: 'Medium' },
  { type: 'Cloudpiercer Coven', bestSpells: 'Thunder Strike, Cyclone Slash, Storm Aegis', synergyEffect: 'Melee damage chains to nearby enemies. Each kill extends Storm Aegis duration by 3s.', playstyle: 'Aggressive Melee / Solo Carry / Speed Farming', difficulty: 'Low' },
  { type: 'Emberkin Coven', bestSpells: 'Inferno Wave, Meteor Shower, Flame Armor', synergyEffect: 'Fire spells leave burning ground. Stacking fire debuffs increases all fire damage by 10% per stack (max 50%).', playstyle: 'Ranged AoE / Area Denial / Base Defense', difficulty: 'Medium' },
  { type: 'Stonewarden Coven', bestSpells: 'Earth Barrier, Crystal Spikes, Stone Fortress', synergyEffect: 'Damage absorbed by barriers heals nearby allies for 30% of absorbed value. Fortified walls reflect melee damage.', playstyle: 'Tank / Builder / Hardcore Survival', difficulty: 'Low' },
  { type: 'Frost Weaver Coven', bestSpells: 'Blizzard Veil, Ice Shard Barrage, Frozen Domain', synergyEffect: 'Frozen enemies take 40% extra damage from all physical sources. Ice shards pierce through targets in Frozen Domain.', playstyle: 'Control Mage / Crowd Control / Co-op Setup', difficulty: 'High' },
  { type: 'Verdant Keeper Coven', bestSpells: 'Thorn Wall, Healing Grove, Vine Lash', synergyEffect: 'Healing spells also grant a damage shield. Thorn Wall reflects 50% of blocked damage back to attackers.', playstyle: 'Healer / Hybrid Support / Sustain', difficulty: 'Medium' },
  { type: 'Shadow Weaver Coven', bestSpells: 'Umbral Strike, Shadow Clones, Void Rift', synergyEffect: 'Kills from stealth reset Shadow Clone cooldown. Void Rift pulls enemies together for AoE combos.', playstyle: 'Assassin / Stealth Burst / Solo Hunter', difficulty: 'High' },
  { type: 'Stormcaller Coven', bestSpells: 'Chain Lightning, Tempest Ward, Hurricane', synergyEffect: 'Lightning chains jump to 2 additional targets. Casting in rain doubles all lightning damage.', playstyle: 'Burst Mage / AoE Clear / Environmental', difficulty: 'Medium' },
];

const TOP_BUILDS = [
  {
    name: 'The Death Ball (Cloudpiercer + Emberkin)',
    description: 'The highest damage output combination in the game. Cloudpiercer\'s Thunder Strike draws enemies into a tight cluster, then Emberkin\'s Meteor Shower annihilates the entire group. Storm Aegis provides survivability while Flame Armor adds passive damage.',
    spells: 'Thunder Strike → Cyclone Slash → Meteor Shower → Inferno Wave',
    bestFor: 'Corruption clearing, speed farming, Sanctuary defense',
    weakness: 'No healing. Relies entirely on potions and familiar support for sustain.',
  },
  {
    name: 'The Immortal Fortress (Stonewarden + Verdant Keeper)',
    description: 'The ultimate survival build. Stonewarden\'s Earth Barrier absorbs massive damage while Verdant Keeper\'s Healing Grove provides continuous recovery. Crystal Spikes and Thorn Wall create impassable defense lines. This build can outlast any encounter.',
    spells: 'Earth Barrier → Healing Grove → Crystal Spikes → Stone Fortress',
    bestFor: 'Hardcore/permadeath, boss fights, Sanctuary defense, long expeditions',
    weakness: 'Very low damage output. Relies on familiars or co-op partners to kill things.',
  },
  {
    name: 'Shadow Storm (Shadow Weaver + Stormcaller)',
    description: 'An assassin-style burst build that deletes priority targets. Open with Umbral Strike from stealth for 3x damage, then Shadow Clones to confuse remaining enemies while Chain Lightning cleans up. Void Rift into Hurricane for devastating AoE when needed.',
    spells: 'Umbral Strike → Shadow Clones → Chain Lightning → Void Rift',
    bestFor: 'Boss killing, elite hunting, solo play, PvP',
    weakness: 'Extremely fragile. One mistake in positioning means instant death on higher difficulties.',
  },
  {
    name: 'The Frozen Frontline (Frost Weaver + Cloudpiercer)',
    description: 'Control-melee hybrid. Frost Weaver freezes enemies with Blizzard Veil, granting Cloudpiercer the 40 percent physical damage bonus on all melee attacks. Ice Shard Barrage softens groups before Cyclone Slash finishes them. Frozen Domain locks down boss arenas.',
    spells: 'Blizzard Veil → Ice Shard Barrage → Thunder Strike → Cyclone Slash',
    bestFor: 'Co-op boss fights, coordinated team play, elemental zone clearing',
    weakness: 'Requires precise timing between players. Solo play loses the synergy bonus.',
  },
  {
    name: 'Spirit Commander (Foreteller + Verdant Keeper)',
    description: 'The ultimate support build for co-op groups. Foreteller\'s Fate Bind links party members, sharing 20 percent of all healing. Verdant Keeper\'s Healing Grove and Spirit Step create unmatched party sustain. Corruption Pulse reveals and weakens enemies for the damage dealers.',
    spells: 'Spirit Step → Healing Grove → Corruption Pulse → Fate Bind',
    bestFor: '4-player co-op, carry potential, teaching new players, hardcore groups',
    weakness: 'Near-zero solo viability. Damage output is the lowest of any build combination.',
  },
];

export default function CovenBuildGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Coven Build Guide</h1>
      <p className="text-text-muted mb-8">Last updated: July 2026</p>

      <section className="mb-10">
        <p className="text-lg text-text-secondary mb-4 leading-relaxed">
          Covens are the defining choice of your Witchspire playthrough. Your coven determines which spells you can learn, how your character synergizes with party members, and ultimately how you interact with the corruption-ravaged world. Unlike classes in traditional RPGs, Witchspire covens are not locked at character creation — you join one through narrative choice and can change allegiances through quests, though each switch comes with significant story consequences.
        </p>
        <p className="text-text-secondary mb-4 leading-relaxed">
          The coven system is built around <strong className="text-text-primary">synergy effects</strong> — passive bonuses that activate when you combine specific spells or when multiple coven members fight together. Understanding these synergies is the difference between struggling through encounters and effortlessly clearing corruption zones. A well-built coven pair can handle content 10 levels above their current power, while a mismatched pair will struggle even with level-appropriate challenges.
        </p>
        <p className="text-text-secondary leading-relaxed">
          This guide covers every coven type, their best spell combinations, synergy effects, and the top builds for different playstyles. Whether you play solo, co-op, hardcore, or just want to experiment, use these builds as a foundation and adapt them to your preferred playstyle.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Coven Synergy System Explained</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Each coven has a unique passive synergy effect that activates when certain conditions are met. The most powerful synergies activate between two different covens — meaning in co-op, you want coven diversity, not uniformity. Four Foretellers do not stack their synergy; one Foreteller and one Cloudpiercer are far more effective than two of either.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Synergy effects fall into three categories: <strong className="text-text-primary">Damage synergies</strong> (multiply damage output through buffs and chains), <strong className="text-text-primary">Defense synergies</strong> (share survivability across the party), and <strong className="text-text-primary">Utility synergies</strong> (provide information, mobility, or resource generation). The strongest builds typically pair one damage coven with one utility or defense coven.
        </p>
        <p className="text-text-secondary leading-relaxed">
          In solo play, you can still trigger synergy effects by bonding with a familiar that shares your coven element. A Cloudpiercer with a Storm Eagle familiar receives a weaker version of the full Cloudpiercer chain-damage synergy. This makes solo play viable with every coven, though some (Foreteller, Verdant Keeper) lose more of their power without a co-op partner.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Complete Coven Database</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-border text-sm">
            <thead className="bg-bg-card">
              <tr>
                <th className="p-3 border border-border text-text-primary">Coven Type</th>
                <th className="p-3 border border-border text-text-primary">Best Spells</th>
                <th className="p-3 border border-border text-text-primary">Synergy Effect</th>
                <th className="p-3 border border-border text-text-primary">Playstyle</th>
                <th className="p-3 border border-border text-text-primary w-20">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              {COVEN_TYPES.map((c, i) => (
                <tr key={i} className="hover:bg-bg-card">
                  <td className="p-3 border border-border font-semibold text-text-primary">{c.type}</td>
                  <td className="p-3 border border-border text-text-secondary text-xs">{c.bestSpells}</td>
                  <td className="p-3 border border-border text-text-muted text-xs">{c.synergyEffect}</td>
                  <td className="p-3 border border-border text-text-secondary text-xs">{c.playstyle}</td>
                  <td className="p-3 border border-border text-center">
                    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded ${
                      c.difficulty === 'High' ? 'bg-red-900 text-red-200' :
                      c.difficulty === 'Medium' ? 'bg-yellow-800 text-yellow-100' :
                      'bg-green-800 text-green-200'
                    }`}>{c.difficulty}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Top Coven Builds</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          These are the most effective coven combinations tested across all game modes. Each build has been verified against end-game corruption zones, boss encounters, and Sanctuary defense events. The builds are ranked by overall effectiveness, with notes on which scenarios they excel in.
        </p>

        {TOP_BUILDS.map((build, i) => (
          <div key={i} className="border border-border bg-bg-card p-5 mb-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-accent">{build.name}</h3>
              <span className="text-xs text-text-muted bg-bg-card px-2 py-1 border border-border rounded">Build #{i + 1}</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-3">{build.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mb-3">
              <div>
                <span className="text-text-muted block mb-1">Spell Rotation:</span>
                <span className="text-text-primary">{build.spells}</span>
              </div>
              <div>
                <span className="text-text-muted block mb-1">Best For:</span>
                <span className="text-text-primary">{build.bestFor}</span>
              </div>
              <div>
                <span className="text-text-muted block mb-1">Weakness:</span>
                <span className="text-red-400">{build.weakness}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Choosing Your Coven: Decision Guide</h2>
        <div className="space-y-4">
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Pick Cloudpiercer if you play solo and want fast progression.</h3>
            <p className="text-text-secondary mt-2 text-sm">Cloudpiercer has the highest solo clear speed and the simplest spell rotation. You will spend less time farming and more time progressing the story. Pair with a Storm Eagle or Phoenix Hatchling familiar for maximum efficiency.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Pick Foreteller if you play co-op and want to carry your group.</h3>
            <p className="text-text-secondary mt-2 text-sm">Foreteller&apos;s corruption-sensing and group buffs make every mission safer. Your team will never walk into ambushes, and Fate Bind turns the entire party into a shared health pool that healers can manage easily.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Pick Stonewarden if you play hardcore/permadeath.</h3>
            <p className="text-text-secondary mt-2 text-sm">One death ends your run in permadeath mode. Stonewarden&apos;s defensive kit gives you the margin of error you need. You may clear slower, but you will actually reach the end game instead of rerolling at hour 10.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Pick Emberkin if you enjoy large-scale battles and Sanctuary defense.</h3>
            <p className="text-text-secondary mt-2 text-sm">Emberkin&apos;s AoE fire spells are unmatched for clearing large groups. During meteor attacks on your Sanctuary, Emberkin can hold an entire flank alone while the rest of the party handles other threats.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Pick Frost Weaver if you want the highest skill ceiling.</h3>
            <p className="text-text-secondary mt-2 text-sm">Frost Weaver has the steepest learning curve but the highest potential. Proper freeze timing enables damage windows that let your party delete bosses in seconds. Master this coven and you will never go back.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Pick Shadow Weaver for PvP and speed racing.</h3>
            <p className="text-text-secondary mt-2 text-sm">Stealth opens up routes that are impossible for other covens. Shadow Weaver can skip entire corruption zones by stealthing past enemies. In PvP, the burst from Umbral Strike into Void Rift is a guaranteed kill on any non-tank target.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">Coven Progression Path</h2>
        <div className="space-y-4">
          <div className="border border-border bg-bg-card p-4">
            <h3 className="font-semibold text-text-primary mb-2">Early Game (Levels 1-15)</h3>
            <p className="text-sm text-text-secondary">Unlock your coven&apos;s first two core spells. Prioritize one damage spell and one utility spell. Do not spread points across all available spells — specializing early gives you a power spike that makes the mid-game transition smoother. Recommended: damage spell at rank 5, utility spell at rank 3.</p>
          </div>
          <div className="border border-border bg-bg-card p-4">
            <h3 className="font-semibold text-text-primary mb-2">Mid Game (Levels 15-30)</h3>
            <p className="text-sm text-text-secondary">Unlock your third spell and begin investing in synergy passives. If playing co-op, coordinate with your partner so your passive choices complement each other. A partner with a heal-boosting passive combined with your damage-boosting passive creates a multiplier effect.</p>
          </div>
          <div className="border border-border bg-bg-card p-4">
            <h3 className="font-semibold text-text-primary mb-2">Late Game (Levels 30-50)</h3>
            <p className="text-sm text-text-secondary">Max out all four spell slots. Begin experimenting with secondary coven quests — you can learn one spell from a different coven through special questlines without changing your primary allegiance. A well-chosen cross-coven spell can fix your build&apos;s biggest weakness.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-text-primary">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Can I change my coven mid-game?</h3>
            <p className="text-text-secondary mt-2 text-sm">Yes, but it is not free. You must complete a betrayal questline that takes 2-3 hours and permanently reduces your reputation with your original coven. Some spells become unavailable after switching. Plan your coven choice carefully — treat it as semi-permanent.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Do synergy effects work with familiars?</h3>
            <p className="text-text-secondary mt-2 text-sm">Yes, in a limited form. A familiar that shares your coven element provides a 50 percent-strength version of the full synergy. For example, Cloudpiercer + Storm Eagle gives 50 percent of the chain-damage effect that a second Cloudpiercer player would provide. This is enough to make solo play viable with every coven.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Which coven is best for farming resources?</h3>
            <p className="text-text-secondary mt-2 text-sm">Cloudpiercer is the fastest resource farmer due to Thunder Strike clearing resource nodes in one hit and Cyclone Slash covering wide areas. Emberkin is second-best but risks destroying harvestable resources with fire damage. If farming is your primary goal, Cloudpiercer is the clear winner.</p>
          </div>
          <div className="border border-border p-4 bg-bg-card">
            <h3 className="font-semibold text-accent">Can four players all be the same coven?</h3>
            <p className="text-text-secondary mt-2 text-sm">You can, but you should not. Synergy effects of the same coven do not stack — four Foretellers provide the same corruption vision as one Foreteller. For maximum group effectiveness, aim for coven diversity: one support (Foreteller/Verdant Keeper), one tank (Stonewarden), and two damage dealers (Cloudpiercer/Emberkin/Shadow Weaver).</p>
          </div>
        </div>
      </section>

      <p className="text-text-muted mt-10 text-sm border-t border-border pt-4">
        Last updated: July 4, 2026. Build rankings based on community testing and current Witchspire patch 0.1.3.
      </p>
    </div>
  );
}
