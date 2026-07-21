export const metadata = {
  title: 'Witchspire Raid Composition — Coven Roles and Co-op Balance (2026)',
  description: 'Build better Witchspire raid compositions with clear front line, control, sustain, and utility coverage for long co-op expeditions.',
};

export default function RaidCompositionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-10">
      <h1 className="font-display text-3xl tracking-display text-parchment mb-3">Raid Team Composition</h1>
      <p className="font-body text-sm text-parchment-dim leading-relaxed mb-8">
        Good Witchspire raid groups are built around coverage, not duplicate damage. A stable team needs one player
        who can hold attention or start safely, one who cleans up corruption or crowd control problems, and enough
        sustain to survive long objectives without resetting. When every player brings the same build, the group often
        collapses the first time the encounter stops behaving predictably.
      </p>

      <div className="border border-border-gold/20 bg-abyss-light p-6 space-y-4">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          Cloudpiercers naturally fit scout and pressure roles because they stay mobile and convert openings quickly.
          Foretellers are excellent anchors for control, support, and safer corruption management. The exact labels do
          not matter as much as making sure someone owns each job before the raid starts.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          The easiest upgrade for most groups is not more damage. It is one player carrying emergency tools and one
          player committing to utility instead of chasing personal numbers. That makes wipes rarer and long clears far
          more repeatable.
        </p>
      </div>

      <div className="border border-border-gold/20 bg-abyss-light p-6 mt-6">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          Before starting a long raid, ask who handles recovery, who solves mobility problems, and who keeps pressure
          steady when the fight becomes chaotic. If nobody owns those questions, the composition is still unfinished.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          The simplest successful groups are often the clearest ones. Four strong personalities with vague jobs lose
          more raids than balanced teams with one obvious answer to each major problem.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          If your raid plan cannot survive one player going down or one role missing a timing window, the composition
          is still too brittle for long-endurance content.
        </p>
      </div>
    </div>
  );
}
