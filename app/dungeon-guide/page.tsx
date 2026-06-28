export const metadata = {
  title: "Witchspire Dungeon Guide — Floor by Floor Walkthrough (2026)",
  description: "Complete dungeon guide for Witchspire. Every floor explained, boss strategies, and secret room locations.",
};

export default function DungeonGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">Witchspire Dungeon Walkthrough</h1>
      <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Dungeon Structure</h2>
            <p className="text-gray-300 leading-relaxed">Witchspire's dungeon has 20 floors, with boss encounters at floors 5, 10, 15, and 20. Each floor follows a procedurally generated layout but with consistent enemy type pools and fixed room types (shops, rest rooms, challenge rooms). Learning which floors have shops lets you plan purchases around your gold accumulation.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Floors 1-5 Strategy</h2>
            <p className="text-gray-300 leading-relaxed">Floors 1-5 introduce basic enemy types. Focus on: learning enemy attack patterns (each has a 2-3 attack rotation), collecting spell upgrades (take anything that improves your damage spell), and reaching the Floor 5 boss with at least 60% health. The Floor 5 boss can be defeated with any starting spell set if you dodge its telegraphed slam attack.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Floors 6-10 Strategy</h2>
            <p className="text-gray-300 leading-relaxed">Floors 6-10 introduce elite enemies (mini-bosses in regular rooms) and environmental hazards (lava floors, collapsing ceilings). Prioritize buying a shield spell at the Floor 7-8 shop — elite enemies hit hard enough to kill in 3 hits without a defensive spell.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-purple-400 mb-3">Floor 20 Boss Guide</h2>
            <p className="text-gray-300 leading-relaxed">The final boss has three phases: Phase 1 (basic attacks + summons), Phase 2 (adds a rotating aura that covers 60% of the arena), Phase 3 (adds a beam sweep attack). In Phase 2, stay at max range and use AoE to clear summons. In Phase 3, memorize the 4-second sweep delay and move opposite the beam direction.</p>
          </section>
        <section>
          <h2 className="text-xl font-bold text-purple-400 mb-3">FAQ</h2>
          <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-white">What should I know about dungeon structure in Witchspire?</h3>
                <p className="text-gray-300 leading-relaxed">Witchspire's dungeon has 20 floors, with boss encounters at floors 5, 10, 15, and 20. Each floor follows a procedurally generated layout but with consistent enemy type pools and fixed room types (shop...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about floors 1-5 strategy in Witchspire?</h3>
                <p className="text-gray-300 leading-relaxed">Floors 1-5 introduce basic enemy types. Focus on: learning enemy attack patterns (each has a 2-3 attack rotation), collecting spell upgrades (take anything that improves your damage spell), and reachi...</p>
              </div>
              <div>
                <h3 className="font-semibold text-white">What should I know about floors 6-10 strategy in Witchspire?</h3>
                <p className="text-gray-300 leading-relaxed">Floors 6-10 introduce elite enemies (mini-bosses in regular rooms) and environmental hazards (lava floors, collapsing ceilings). Prioritize buying a shield spell at the Floor 7-8 shop — elite enemies ...</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  );
}
