import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witchspire Weapon Guide — Best Weapons & Complete Stats (2026) | Witchspire Guide',
  description: 'Complete Witchspire weapon guide covering all weapon types, stats, upgrade paths, and best weapons for each build. Master the dark arsenal.',
};

const weapons = [
  { name: 'Shadowfang Blade', type: 'One-Handed Sword', damage: '85-110', speed: 'Fast', special: 'Life Steal 5%', bestFor: 'Agility Builds' },
  { name: 'Witchspire Staff', type: 'Staff', damage: '120-150', speed: 'Slow', special: '+30% Spell Power', bestFor: 'Caster Builds' },
  { name: 'Bone Reaper Scythe', type: 'Two-Handed', damage: '160-200', speed: 'Very Slow', special: 'AoE Cleave', bestFor: 'Strength Builds' },
  { name: 'Venom Dagger', type: 'Dagger', damage: '45-65', speed: 'Very Fast', special: 'Poison (15 dmg/s)', bestFor: 'Assassin Builds' },
  { name: 'Crystal Wand', type: 'Wand', damage: '70-90', speed: 'Fast', special: '+20% Elemental Damage', bestFor: 'Elemental Hybrid' },
  { name: 'Cursed Greatsword', type: 'Two-Handed', damage: '180-220', speed: 'Slow', special: 'Curse on hit', bestFor: 'Dark Knight Builds' },
  { name: 'Spectral Crossbow', type: 'Ranged', damage: '100-130', speed: 'Medium', special: 'Piercing Shot', bestFor: 'Ranger Builds' },
  { name: 'Ritual Athame', type: 'Dagger', damage: '35-50', speed: 'Very Fast', special: '+40% Ritual Speed', bestFor: 'Ritualist Builds' },
  { name: 'Obsidian Warhammer', type: 'Two-Handed', damage: '200-250', speed: 'Very Slow', special: 'Stun on Heavy Hit', bestFor: 'Tank Builds' },
  { name: 'Eldritch Tome', type: 'Off-Hand', damage: 'N/A', speed: 'N/A', special: '+25% Dark Magic', bestFor: 'Necromancer Builds' },
];

const upgradeTiers = [
  { tier: 'Common', materials: 'Iron Ore x5, Leather x3', statBoost: '+5% base damage', goldCost: 200 },
  { tier: 'Uncommon', materials: 'Steel Ingot x8, Hardened Leather x5', statBoost: '+12% base damage', goldCost: 500 },
  { tier: 'Rare', materials: 'Mithril Bar x10, Enchanted Leather x8', statBoost: '+20% base damage, +1 special effect', goldCost: 1200 },
  { tier: 'Epic', materials: 'Dark Crystal x5, Dragon Scale x3', statBoost: '+30% base damage, +2 special effects', goldCost: 3000 },
  { tier: 'Legendary', materials: 'Void Essence x3, Ancient Relic x1', statBoost: '+50% base damage, unique ability unlock', goldCost: 8000 },
];

const weaponFaqs = [
  { q: '新手应该选什么武器？', a: '建议从 Shadowfang Blade（暗影之牙）开始，它是一把单手剑，攻速快、有吸血效果，容错率高。对于喜欢远程的玩家，Spectral Crossbow 是最安全的选择。法术流派玩家可以从 Crystal Wand 入门，等熟悉元素系统后再升级到 Witchspire Staff。' },
  { q: '武器升级需要什么材料？', a: '每级需要的材料如上表所示。关键材料来源：Iron Ore 在地牢1-3层采集，Mithril Bar 需要完成第4章主线解锁熔炉配方，Dark Crystal 从暗影领域的精英怪掉落（掉率约8%），Void Essence 是最终Boss掉落物，每周只能刷一次。' },
  { q: '二刀流（双持）好还是双手武器好？', a: '双持 DPS 更高（约15-20%），但需要更高的操作技巧来管理两种武器的技能循环。双手武器单发伤害更高，适合打爆发和BOSS战。PvE新手建议双手武器（更简单），PvP高端玩家倾向双持（更灵活）。' },
  { q: '最强武器是哪把？', a: '没有绝对的"最强"，取决于你的Build。力量流派：Obsidian Warhammer（控制+高伤）；敏捷流派：Venom Dagger（毒dot+高攻速）；法术流派：Witchspire Staff（最高法术加成）。传说升级后的武器各有独特能力，建议根据你的 Coven Build 选择。' },
];

export default function WeaponGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <h1 className="text-3xl font-display font-bold text-parchment mb-2">
        Witchspire <span className="text-dark-gold">武器指南</span>
      </h1>
      <p className="text-parchment/60 mb-8">
        完整的 Witchspire 武器系统指南，涵盖全部武器类型、属性数据、升级路径和各流派最佳武器推荐。
        在暗影领域中，武器不仅是伤害工具——它决定了你的战斗风格和 Coven 定位。
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          武器系统概述
        </h2>
        <p className="text-parchment/70 leading-relaxed mb-4">
          Witchspire 提供8种武器类型，每种都有独特的攻击模式、特殊效果和升级路径。
          武器选择直接影响你的战斗风格——从近战刺客到远程施法者，每种流派都有对应的最优武器。
        </p>
        <p className="text-parchment/70 leading-relaxed mb-4">
          武器通过<strong className="text-dark-gold">五级升级系统</strong>（Common → Uncommon → Rare → Epic → Legendary）提升威力。
          每次升级不仅提升基础伤害，还会解锁新的特殊效果。传说级武器更会解锁独特的终极能力。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          全部武器数据
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-gold/20 text-parchment/60 text-left">
                <th className="p-3 font-label text-xs uppercase tracking-wider">武器</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">类型</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">伤害</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">攻速</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">特殊效果</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">推荐流派</th>
              </tr>
            </thead>
            <tbody>
              {weapons.map((w, i) => (
                <tr key={i} className="border-b border-border-gold/10 hover:bg-dark-gold/5">
                  <td className="p-3 text-dark-gold font-medium">{w.name}</td>
                  <td className="p-3 text-parchment/80">{w.type}</td>
                  <td className="p-3 text-parchment/80">{w.damage}</td>
                  <td className="p-3">
                    <span className={`text-xs ${
                      w.speed.includes('Fast') ? 'text-green-400' :
                      w.speed.includes('Slow') ? 'text-red-400' : 'text-yellow-400'
                    }`}>{w.speed}</span>
                  </td>
                  <td className="p-3 text-parchment/60 text-xs">{w.special}</td>
                  <td className="p-3 text-parchment/60 text-xs">{w.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          武器升级系统
        </h2>
        <p className="text-parchment/70 leading-relaxed mb-4">
          每把武器都可以通过铁匠（Blacksmith）进行升级。升级不仅需要金币，还需要收集特定材料。
          建议优先将主武器升至 Rare 级别（性价比最高），有余力再冲击 Epic 和 Legendary。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-gold/20 text-parchment/60 text-left">
                <th className="p-3 font-label text-xs uppercase tracking-wider">等级</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">所需材料</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">属性提升</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">金币</th>
              </tr>
            </thead>
            <tbody>
              {upgradeTiers.map((tier, i) => (
                <tr key={i} className="border-b border-border-gold/10 hover:bg-dark-gold/5">
                  <td className="p-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      tier.tier === 'Legendary' ? 'bg-dark-gold/20 text-dark-gold' :
                      tier.tier === 'Epic' ? 'bg-purple-900/30 text-purple-400' :
                      tier.tier === 'Rare' ? 'bg-blue-900/30 text-blue-400' :
                      tier.tier === 'Uncommon' ? 'bg-green-900/30 text-green-400' :
                      'bg-gray-700/30 text-gray-400'
                    }`}>{tier.tier}</span>
                  </td>
                  <td className="p-3 text-parchment/70 text-xs">{tier.materials}</td>
                  <td className="p-3 text-parchment/80 text-xs">{tier.statBoost}</td>
                  <td className="p-3 text-dark-gold text-xs">{tier.goldCost}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          武器选择策略
        </h2>
        <ul className="space-y-3 text-parchment/70 list-disc pl-5">
          <li><strong className="text-dark-gold">力量流派（Str Build）：</strong>Obsidian Warhammer 和 Cursed Greatsword 是最佳选择。前者提供晕眩控制，后者提供诅咒debuff。建议主手大锤副手巨剑。</li>
          <li><strong className="text-dark-gold">敏捷流派（Agi Build）：</strong>双持 Venom Dagger + Shadowfang Blade（毒dot+吸血=无限续航）。适合喜欢高速战斗的玩家。</li>
          <li><strong className="text-dark-gold">法术流派（Int Build）：</strong>Witchspire Staff 是终极选择，副手搭配 Eldritch Tome 获得额外暗魔法加成。技能循环：诅咒→元素爆发→法杖普攻。</li>
          <li><strong className="text-dark-gold">混合流派（Hybrid）：</strong>Crystal Wand + Ritual Athame 提供元素伤害+仪式速度的双重加成，是 Coven 仪式流的核心装备。</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">常见问题</h2>
        {weaponFaqs.map((faq, i) => (
          <div key={i} className="border border-border-gold/20 bg-abyss-light p-5 mb-3 rounded">
            <h3 className="font-display font-medium text-dark-gold mb-2">{faq.q}</h3>
            <p className="text-parchment/70 text-sm">{faq.a}</p>
          </div>
        ))}
      </section>

      <p className="text-xs text-parchment/40 mt-12 border-t border-border-gold/20 pt-4">
        Last updated: July 5, 2026 · Witchspire Weapon Guide · Part of GameGuideHub Network
      </p>
    </div>
  );
}
