export const metadata = {
  title: 'Witchspire Gear Guide — Build for Weather, Crafting, and Coven Role (2026)',
  description: 'Choose Witchspire gear by expedition problem: weather protection, familiar support, corruption safety, and co-op role coverage.',
};

export default function GearGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-10">
      <h1 className="font-display text-3xl tracking-display text-parchment mb-3">Gear &amp; Equipment Guide</h1>
      <p className="font-body text-sm text-parchment-dim leading-relaxed mb-8">
        Strong Witchspire gear setups are built around expedition risk, not item rarity. If the route is long and
        corrupted, pack cleansing and sustain. If the objective is resource-heavy crafting, bias toward gathering
        efficiency and familiar uptime. If the weather is the threat, defensive comfort matters more than a tiny bump
        in raw damage.
      </p>

      <div className="border border-border-gold/20 bg-abyss-light p-6">
        <p className="font-body text-sm text-parchment-dim leading-relaxed mb-3">
          Cloudpiercers usually want mobility and visibility tools so they can stay ahead of environmental danger.
          Foretellers can justify slightly slower gear if it improves control and familiar management. In co-op, avoid
          four self-sufficient loadouts. Dedicated roles produce cleaner clears and reduce duplicate dead weight.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          As a quick rule, keep the items that save a failed pull or a bad storm. Cut the items that only help when
          the run is already comfortable.
        </p>
      </div>

      <div className="border border-border-gold/20 bg-abyss-light p-6 mt-6">
        <p className="font-body text-sm text-parchment-dim leading-relaxed">
          If you are unsure what to drop, remove the piece that overlaps an existing teammate or familiar first. Role
          overlap is the easiest way to waste gear slots in both solo and co-op progression.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          Good gear decisions usually make the expedition feel calmer, not louder. If a piece only raises damage while
          making weather, corruption, or recovery harder to manage, it is rarely a true upgrade.
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mt-3">
          That is why reliable utility gear keeps outperforming flashy niche pieces in real progression runs. It saves
          more mistakes, covers more teammates, and keeps the raid moving when plans go bad.
        </p>
      </div>
    </div>
  );
}
