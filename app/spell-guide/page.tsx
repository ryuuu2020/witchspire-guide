import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witchspire Spell Guide — All Spells, Elements & Best Combinations (2026) | Witchspire Guide',
  description: 'Complete Witchspire spell guide covering every spell, elemental synergies, best combinations, and advanced spellcasting strategies for all Coven builds.',
};

const spells = [
  { name: 'Shadow Bolt', element: 'Dark', damage: '40-60', castTime: '0.8s', cost: 15, effect: 'Basic dark projectile', tier: 'Basic' },
  { name: 'Fireball', element: 'Fire', damage: '80-110', castTime: '1.5s', cost: 30, effect: 'AoE 3m radius', tier: 'Adept' },
  { name: 'Frost Lance', element: 'Ice', damage: '65-85', castTime: '1.2s', cost: 25, effect: 'Slow 30% for 3s', tier: 'Adept' },
  { name: 'Chain Lightning', element: 'Storm', damage: '55-75', castTime: '1.0s', cost: 28, effect: 'Chains to 3 targets', tier: 'Adept' },
  { name: 'Soul Drain', element: 'Dark', damage: '30-45', castTime: '2.0s', cost: 35, effect: 'Heal for 50% of damage', tier: 'Expert' },
  { name: 'Inferno', element: 'Fire', damage: '150-200', castTime: '3.0s', cost: 60, effect: 'Massive AoE 6m radius', tier: 'Master' },
  { name: 'Blizzard', element: 'Ice', damage: '120-160', castTime: '2.5s', cost: 50, effect: 'Freeze enemies 2s', tier: 'Master' },
  { name: 'Void Rift', element: 'Dark', damage: '200-280', castTime: '4.0s', cost: 80, effect: 'Instant kill below 20% HP', tier: 'Grandmaster' },
  { name: 'Thunderstorm', element: 'Storm', damage: '130-180', castTime: '2.0s', cost: 55, effect: 'Strike 5 random targets', tier: 'Master' },
  { name: 'Witchfire', element: 'Fire+Dark', damage: '100-140', castTime: '1.8s', cost: 40, effect: 'DoT 25 dmg/s for 5s', tier: 'Expert' },
];

const synergies = [
  { combo: 'Frost Lance + Inferno', effect: 'Shatter: Frozen enemies take x2.5 fire damage', description: 'Best burst combo in the game' },
  { combo: 'Shadow Bolt + Soul Drain', effect: 'Dark Resonance: +40% Soul Drain effectiveness', description: 'Best sustain combo for long fights' },
  { combo: 'Chain Lightning + Thunderstorm', effect: 'Storm Amplify: +30% chain range and targets', description: 'Best AoE farming combo' },
  { combo: 'Witchfire + Void Rift', effect: 'DoT snapshot: Void Rift checks DoT ticks', description: 'Boss killer combo — execute threshold raised to 35%' },
  { combo: 'Blizzard + Inferno', effect: 'Thermal Shock: bonus 100 flat damage', description: 'Devastating AoE — clears entire rooms' },
];

const spellFaqs = [
  { q: '新手应该优先学哪些法术？', a: '推荐升级路线：Shadow Bolt（基础）→ Fireball（第一个AoE）→ Soul Drain（续航）→ Frost Lance（控制）→ Inferno（大范围清怪）。这五个法术可以覆盖90%的战斗场景。不要急着学太多法术，专注提升核心法术的等级更重要。' },
  { q: '法力值（Mana）不够用怎么办？', a: '三个解决方案：1) 装备 Eldritch Tome 副手（-20%法力消耗）；2) 天赋点出 Mana Flow（击杀回复15%法力）；3) 使用 Soul Drain 法术（吸血+回蓝二合一）。中期开始可以靠装备和天赋实现法力永动。' },
  { q: '元素相克重要吗？', a: '非常重要！暗→光+30%伤害，火→冰+25%伤害，冰→火-20%受到的伤害，雷→水+35%伤害。但光系敌人在游戏后期才出现，前中期不用太担心元素搭配，专注提升主元素的法术等级即可。' },
  { q: 'PvP最强的法术组合是什么？', a: 'Frost Lance（控制起手）+ Witchfire（挂DoT）+ Soul Drain（拉开血量差）+ Void Rift（斩杀）。关键是 Frost Lance 必须命中才能打出后续连招。高端局会带一个防御性法术（如 Ice Armor）来提高生存率。' },
];

export default function SpellGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <h1 className="text-3xl font-display font-bold text-parchment mb-2">
        Witchspire <span className="text-dark-gold">法术指南</span>
      </h1>
      <p className="text-parchment/60 mb-8">
        完整的 Witchspire 法术系统指南，涵盖全部法术、元素协同、最佳组合和高级施法策略。
        掌握法术系统是成为暗影领域顶尖女巫的关键——正确的法术组合可以让你轻松碾压BOSS战。
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          法术系统概述
        </h2>
        <p className="text-parchment/70 leading-relaxed mb-4">
          Witchspire 的法术系统围绕<strong className="text-dark-gold">四大元素</strong>（Dark、Fire、Ice、Storm）构建。
          每个元素都有独特的效果机制：暗系擅长吸血和斩杀、火系提供高爆发AoE、冰系提供控制和减速、雷系提供连锁和多目标打击。
        </p>
        <p className="text-parchment/70 leading-relaxed mb-4">
          法术等级分为五阶：Basic → Adept → Expert → Master → Grandmaster。
          每升一阶需要消耗技能点（Skill Points）和对应元素精华（Element Essence）。高阶法术虽然强大，但法力消耗也成倍增长，需要合理搭配。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          全部法术数据
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-gold/20 text-parchment/60 text-left">
                <th className="p-3 font-label text-xs uppercase tracking-wider">法术</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">元素</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">伤害</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">施法时间</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">消耗</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">效果</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">等级</th>
              </tr>
            </thead>
            <tbody>
              {spells.map((spell, i) => (
                <tr key={i} className="border-b border-border-gold/10 hover:bg-dark-gold/5">
                  <td className="p-3 text-dark-gold font-medium">{spell.name}</td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      spell.element === 'Dark' ? 'bg-purple-900/30 text-purple-400' :
                      spell.element === 'Fire' ? 'bg-red-900/30 text-red-400' :
                      spell.element === 'Ice' ? 'bg-blue-900/30 text-blue-400' :
                      'bg-yellow-900/30 text-yellow-400'
                    }`}>{spell.element}</span>
                  </td>
                  <td className="p-3 text-parchment/80">{spell.damage}</td>
                  <td className="p-3 text-parchment/80">{spell.castTime}</td>
                  <td className="p-3 text-parchment/80">{spell.cost} MP</td>
                  <td className="p-3 text-parchment/60 text-xs">{spell.effect}</td>
                  <td className="p-3 text-parchment/60 text-xs">{spell.tier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          元素协同（Synergies）
        </h2>
        <p className="text-parchment/70 leading-relaxed mb-4">
          不同元素的法术可以产生协同效果，大幅提升伤害输出。理解和掌握这些组合是高手与普通玩家的分水岭。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-gold/20 text-parchment/60 text-left">
                <th className="p-3 font-label text-xs uppercase tracking-wider">组合</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">效果</th>
                <th className="p-3 font-label text-xs uppercase tracking-wider">说明</th>
              </tr>
            </thead>
            <tbody>
              {synergies.map((syn, i) => (
                <tr key={i} className="border-b border-border-gold/10 hover:bg-dark-gold/5">
                  <td className="p-3 text-dark-gold font-medium text-xs">{syn.combo}</td>
                  <td className="p-3 text-parchment/80 text-xs">{syn.effect}</td>
                  <td className="p-3 text-parchment/60 text-xs">{syn.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">
          施法策略与进阶技巧
        </h2>
        <ul className="space-y-3 text-parchment/70 list-disc pl-5">
          <li><strong className="text-dark-gold">法力管理：</strong>永远不要让法力降到30%以下——低于这个阈值你无法释放紧急逃生法术。使用低消耗的 Shadow Bolt 维持输出节奏，高消耗法术留给精英怪和BOSS。</li>
          <li><strong className="text-dark-gold">施法取消（Animation Cancel）：</strong>在施法动作的后半段（约0.2秒前）使用闪避可以取消后摇，将DPS提升约20%。这是高手必学技巧。</li>
          <li><strong className="text-dark-gold">DoT快照机制：</strong>Witchfire 的DoT伤害在你释放时的法术强度快照，所以在释放 DoT 之前先叠满 Buff（药水+饰品+Coven 光环）可以大幅提升DOT总伤害。</li>
          <li><strong className="text-dark-gold">BOSS战法术循环：</strong>开场 Frost Lance（减速控制）→ Witchfire（挂DoT）→ Soul Drain（吸血拉开血量）→ Void Rift（斩杀）。这个循环对90%的BOSS有效。</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-display font-semibold text-dark-gold mb-4">常见问题</h2>
        {spellFaqs.map((faq, i) => (
          <div key={i} className="border border-border-gold/20 bg-abyss-light p-5 mb-3 rounded">
            <h3 className="font-display font-medium text-dark-gold mb-2">{faq.q}</h3>
            <p className="text-parchment/70 text-sm">{faq.a}</p>
          </div>
        ))}
      </section>

      <p className="text-xs text-parchment/40 mt-12 border-t border-border-gold/20 pt-4">
        Last updated: July 5, 2026 · Witchspire Spell Guide · Part of GameGuideHub Network
      </p>
    </div>
  );
}
