export const metadata = {
  title: 'Witchspire Leveling Guide — Early Progression Without Wasted Detours (2026)',
  description: 'Level faster in Witchspire by prioritizing safe exploration, familiar synergy, and upgrade routes that keep both solo and co-op runs stable.',
};

export default function LevelingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-10">
      <h1 className="font-display text-3xl tracking-display text-parchment mb-3">Leveling &amp; Progression Guide</h1>
      <p className="font-body text-sm text-parchment-dim leading-relaxed mb-8">
        Efficient leveling in Witchspire comes from clean loops, not endless wandering. Progress fastest by staying
        on routes that give steady resource gain, familiar growth, and manageable corruption pressure. Detours only
        pay off when they unlock a real power spike or remove a recurring survival problem.
      </p>

      <div className="border border-border-gold/20 bg-abyss-light p-6 space-y-4">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          Early progression should focus on one clear combat identity and one reliable utility line. If your damage
          is already fine, invest in movement, sustain, or crafting speed rather than more overflow power. That keeps
          the next zone smoother and reduces the odds of running out of resources mid-expedition.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          In co-op, progression is faster when the group shares duties. Let one player specialize in familiar support
          or crafting while others cover exploration and combat. Distributed roles create more total uptime than four
          half-finished generalist builds.
        </p>
      </div>

      <div className="border border-border-gold/20 bg-abyss-light p-6 mt-6">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          Progress slows down most when players chase side systems before their core loop is stable. Finish one strong
          expedition pattern first, then widen into optional crafting or coven experiments.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          In other words, level by becoming repeatable. Repeating one efficient route beats surviving three messy
          routes with no clear upgrade story between them.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          The players who level fastest are usually not the bravest. They are the ones who stop improvising every run
          and let one efficient progression loop compound.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          If a route teaches nothing new and pays poorly, drop it. Progress comes from loops that improve both
          resource flow and decision quality at the same time.
        </p>
      </div>
    </div>
  );
}
