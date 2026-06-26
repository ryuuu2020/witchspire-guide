import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witchspire Familiars — Spirit Capture, Bonding & Coven Familiar Pools',
  description: 'A field guide to Witchspire familiars: how spirit capture works, how bonding shapes growth, and how Cloudpiercers vs Foretellers bias the familiar pool. Sourced from official mechanics and patch notes.',
};

const CAPTURE_STEPS = [
  { step: '01', title: 'Find a wild creature', body: 'Wild creatures roam the open world, with denser populations around resource clusters and corruption fringes. Lower-tier creatures spawn near your starting Sanctuary; higher-tier creatures appear closer to the Witchspire itself and in corruption zones.' },
  { step: '02', title: 'Defeat it in battle', body: 'Combat is real-time. Use your starting abilities — Cloudpiercers lean on melee, Foretellers on blink and spirit-jump — to whittle the creature down. The creature must be defeated, not just dodged; running away does not capture its spirit.' },
  { step: '03', title: 'Collect its spirit', body: 'On defeat, the creature\'s spirit becomes collectible. Walk over the spirit to add it to your roster. You can hold multiple spirits simultaneously, but only bonded familiars scale with your level.' },
  { step: '04', title: 'Bond with a familiar', body: 'Open the familiar roster and bond with one or two spirits. Bonded familiars join you in combat, scale with your playtime, and can fill gaps in your build. Cloudpiercers bond more easily with aggressive familiars; Foretellers with recon and support familiars.' },
  { step: '05', title: 'Guide its growth', body: 'Bonded familiars gain experience through combat and exploration. Their growth path can be guided toward damage, utility, or defense — pick a direction that complements your coven and your co-op role.' },
];

const COVEN_FAMILIAR_BIAS = [
  {
    coven: 'Cloudpiercers',
    bias: 'Aggressive / Frontline',
    examples: 'Earlier access to offensive familiars; melee-leaning spirits that pair well with a brave playstyle. Cloudpiercers who want a ranged companion can still capture one, but the pool skews toward direct damage.',
    bestFor: 'Solo players who lead charges into corruption zones and want a familiar that tanks or dishes out damage alongside them.',
  },
  {
    coven: 'Foretellers',
    bias: 'Mystical / Support / Recon',
    examples: 'Earlier access to familiars with scouting, healing, and magical-harvest abilities. Foretellers who want a frontline familiar can still capture one, but the pool skews toward utility and ranged casting.',
    bestFor: 'Co-op support players and scouts who prefer to read the battlefield, blink out of danger, and bolster allies.',
  },
];

const KNOWN_REGIONS = [
  { region: 'Starting Sanctuary area', note: 'Low-tier wild creatures, safe to capture as your first familiar. Resource clusters nearby make this a good loop for early bonding.' },
  { region: 'Mira Isles', note: 'Decoration-rich region (Patch 0.1.3 added villa decor here). Wild creatures here drop spirits that tend to lean utility — useful for builders and co-op hosts.' },
  { region: 'Shuddersands', note: 'Heat-baked region below the main map. Wild creatures here are higher-tier; Patch 0.1.3 specifically targeted stability fixes for familiar swapping in this region.' },
  { region: 'Corruption zones', note: 'Corrupted wild creatures tend to be more aggressive and drop higher-tier spirits. Approach with a bonded familiar already in tow — solo captures in corruption are risky.' },
];

export default function FamiliarsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Creatures</p>
      <h1 className="font-display text-3xl tracking-display text-parchment mb-2">Familiar Taming Guide</h1>
      <p className="font-body text-sm text-parchment-dim mb-10 max-w-2xl">
        Witchspire\'s creature-collecting loop, explained step-by-step — from wild encounter
        to bonded companion. Plus how your coven choice biases the familiar pool.
      </p>

      <section className="mb-12">
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">How Spirit Capture Works</h2>
        <div className="space-y-6">
          {CAPTURE_STEPS.map((s, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="font-display text-2xl text-dark-gold/60 shrink-0">{s.step}</span>
              <div>
                <h3 className="font-display text-base text-parchment mb-2">{s.title}</h3>
                <p className="font-body text-sm text-parchment-dim leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 border-t border-border-gold/10 pt-10">
        <h2 className="font-display text-xl text-dark-gold mb-2 tracking-tight">Coven Familiar Bias</h2>
        <p className="font-body text-sm text-parchment-dim mb-6 max-w-2xl">
          Your coven choice does not lock you out of any familiar, but it skews the pool of
          spirits you will naturally encounter and bond with most easily.
        </p>
        <div className="overflow-x-auto border border-border-gold/20">
          <table className="w-full text-left">
            <thead className="bg-abyss-light border-b border-border-gold/20">
              <tr>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Coven</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Bias</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Details</th>
                <th className="px-4 py-3 font-label text-[10px] uppercase tracking-wider text-dark-gold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {COVEN_FAMILIAR_BIAS.map((row, i) => (
                <tr key={i} className="border-b border-border-gold/10 last:border-0">
                  <td className="px-4 py-3 font-display text-sm text-parchment align-top">{row.coven}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim align-top">{row.bias}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim align-top">{row.examples}</td>
                  <td className="px-4 py-3 font-body text-sm text-parchment-dim align-top">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-t border-border-gold/10 pt-10">
        <h2 className="font-display text-xl text-dark-gold mb-6 tracking-tight">Where To Find Familiars</h2>
        <div className="space-y-4">
          {KNOWN_REGIONS.map((r, i) => (
            <div key={i} className="border border-border-gold/20 bg-abyss-light p-5">
              <h3 className="font-display text-sm text-dark-gold mb-2 tracking-tight">{r.region}</h3>
              <p className="font-body text-sm text-parchment-dim leading-relaxed">{r.note}</p>
            </div>
          ))}
        </div>
        <p className="font-body text-xs text-parchment-dim/60 mt-6">
          Familiar spawn tables continue to evolve patch-by-patch. This page tracks confirmed
          mechanics only; specific creature names and stat tables will be added as the community
          verifies them.
        </p>
      </section>
    </div>
  );
}
