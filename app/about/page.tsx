export const metadata = {
  title: "About — Witchspire Guide",
  description:
    "About Witchspire Guide: an independent, fan-made strategy resource. Our editorial standards, the GameGuideHub network, and our disclaimer.",
};

export default function AboutPage() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen">
      <div className="max-w-3xl mx-auto px-4 lg:px-6 py-10">
        <h1 className="font-display text-3xl tracking-display text-parchment mb-8">
          ABOUT
        </h1>

        <div className="border border-border-gold p-6 lg:p-8 bg-abyss-elevated space-y-6">
          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">About This Site</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">Witchspire Guide is an independent, fan-made strategy resource covering builds, tier lists, walkthroughs and mechanics breakdowns for Witchspire. Every page is built to put the answer — the table, the build, the layout — above the fold.</p>
          </section>
          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">What You'll Find Here</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">Data-first guides: stat tables, comparisons and step-by-step walkthroughs you can scan in seconds. The site is dark-themed by default, loads fast on any connection, and keeps advertising to a single quiet slot.</p>
          </section>
          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Editorial Standards</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">Guide data is checked against in-game behavior and official patch notes before publishing. Pages are reviewed when patches change the meta, and corrections reported by readers are investigated and fixed promptly.</p>
          </section>
          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">The Network</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">Witchspire Guide is part of GameGuideHub, a growing network of independent game guide sites. Visit gguidehub.com to explore guides for other games.</p>
          </section>
          <section>
            <h2 className="font-display text-lg tracking-display text-dark-gold mb-3">Disclaimer</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed">This is an unofficial fan-made site. It is not affiliated with, endorsed by, or sponsored by the developers or publishers of Witchspire. All game names, assets and trademarks belong to their respective owners.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
