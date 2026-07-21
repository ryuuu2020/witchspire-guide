/* ============================================
   Witchspire — News / Patch Notes Archive
   Sourced from Steam News API (official Envar Games posts)
   ============================================ */

const NEWS = [
  {
    date: "2026-06-27",
    title: "Witchspire Patch 0.1.3 Live — EA Launch Recap and 2026-2027 Roadmap",
    tag: "Update",
    summary: "Witchspire patch 0.1.3 dropped on June 25, just over two weeks after the game's Steam Early Access launch on June 10. Envar Games has been shipping patches at a rapid pace, and 0.1.3 continues the focus on stability and quality-of-life improvements based on community feedback from the EA launch window.",
    body: [
      "The bigger news is the official roadmap revealed during a June 17 AMA livestream: Witchspire's Early Access period is planned to run through 2026 and into early 2027, with multiple major content updates adding new biomes, creatures, crafting systems, and a co-op multiplayer mode.",
      "The developers have been transparent about what is and is not in the current build — multiple biomes and creatures are playable now, but several planned systems are still in development. For players considering picking up Witchspire during the Steam Summer Sale, the current state offers a solid foundation with active development.",
      "The community has been particularly positive about the crafting flow and creature design, with common feedback requesting more content depth and balance tuning — both of which are addressed in the roadmap.",
    ],
  },
  {
    date: '2026-06-26',
    tag: 'PATCH',
    title: 'Patch 0.1.3 — Offline Mode, Mira Isles Decor, Stability',
    summary: 'Witchspire is now fully playable without an internet connection. Save files transfer between offline and online modes seamlessly and are not lost during connection drops. The patch also brings new decoration options for villas in the Mira Isles and a round of stability fixes for players running below the heat of the Shuddersands.',
    body: [
      'The headline feature is Offline Mode. Once enabled, the game launches without contacting online services, and any progress made offline syncs back when you reconnect. This directly addresses the most common Early Access complaint: save loss during connection drops.',
      'On the content side, Patch 0.1.3 adds decoration items for villas in the Mira Isles region, giving builders more options when furnishing a Sanctuary under moonlight. Stability work targets crashes reported in the Shuddersands, particularly around meteor shower events and rapid familiar swapping.',
      'Patch 0.1.3 build CL: 28486. Players on Steam should receive the update automatically; if the build does not switch over, restart Steam or verify integrity of game files.',
    ],
  },
  {
    date: '2026-06-24',
    tag: 'MILESTONE',
    title: 'Thank You for 100,000 Copies Sold + Official Soundtrack Release',
    summary: 'Envar Games confirms Witchspire crossed 100,000 copies sold within two weeks of Early Access. To celebrate, the official soundtrack is now available to Founder\'s Pack supporters and on streaming platforms.',
    body: [
      'The team posted a thank-you note to the community citing solo and co-op creations, adventure reports, and feedback as the reasons for the milestone. The official soundtrack — already bundled in Founder\'s Edition installations — is now on major streaming platforms under "Witchspire Original Soundtrack".',
      'Envar also reminded players of the previously revealed Early Access Roadmap and the YouTube AMA, both of which outline the studio\'s plans for patches, new covens, and additional familiar lines over the coming months.',
    ],
  },
  {
    date: '2026-06-19',
    tag: 'PATCH',
    title: 'Patch 0.1.2 — Save Game Fixes & Stability',
    summary: 'The first major post-launch patch focuses on Save Game integrity. Several reported issues with corrupted or missing saves have been resolved, and the team confirmed that an Offline Mode is the next priority.',
    body: [
      'Patch 0.1.2 is the first large stability pass after Early Access launch. The patch notes call out a number of fixes across save handling, UI, and co-op connectivity. The development team also acknowledged that Save Game issues are still being worked on, with Offline Mode identified as the structural fix that will land in Patch 0.1.3.',
      'Community feedback during this window reinforced two recurring asks: more transparent save indicators and a way to play without depending on online services. Both are addressed by the Offline Mode currently in Patch 0.1.3.',
    ],
  },
  {
    date: '2026-06-18',
    tag: 'ROADMAP',
    title: 'Early Access Roadmap Revealed',
    summary: 'One week into Early Access, Envar Games published the Witchspire roadmap. It outlines patch cadence, planned coven additions, familiar line expansions, and the path toward the full 1.0 release.',
    body: [
      'The roadmap was revealed alongside a YouTube AMA. Key takeaways: the team has already shipped 7 patches since launch, with larger content drops planned for later in Early Access. Coven variety, familiar lines, and Sanctuary decoration packs are all on the docket.',
      'The studio also highlighted community creations — including early Nexus Mods — as a signal that they want to support modders more formally once the core systems are stable.',
    ],
  },
  {
    date: '2026-06-16',
    tag: 'PATCH',
    title: 'Patch 0.1.1d — First-Week Quality-of-Life Pass',
    summary: 'The first Monday patch after launch. Brings a first round of QoL improvements, optimizations, and acknowledgments of common launch complaints, with a larger update promised later in the week.',
    body: [
      'Patch 0.1.1d is the team\'s first "Happy Monday" update. The developers called out the level of support from the community and confirmed that a larger update addressing several common complaints was in progress.',
      'This patch also set the cadence for what would become Patch 0.1.2 (stability and saves) and Patch 0.1.3 (Offline Mode) — a roughly weekly release rhythm that the team has held to since.',
    ],
  },
  {
    date: '2026-06-10',
    tag: 'LAUNCH',
    title: 'Witchspire Enters Steam Early Access',
    summary: 'Witchspire launches on Steam Early Access at $22.99, with a Standard Edition that includes the Early Bird Cosmetics Pack (Ornate Lamp, Traxio Carpet, Wooden Couch, Two Cushions). Co-op supports up to four witches.',
    body: [
      'The launch build includes the full open world, two starting covens (Cloudpiercers and Foretellers), the familiar taming system, Sanctuary building via astral projection, and the corruption / meteor survival loop.',
      'Day-one coverage highlighted the hand-crafted world, the magical survival mechanics (no hunger drain, power-based resource use), and the co-op Sanctuary sharing as the standout features.',
    ],
  },
];
export const metadata = {
  title: "Witchspire News & Patch Notes — Complete Guide (2026)",
  description:
    "Archive",
  robots: {
    index: false,
    follow: true,
  },
};


export default function NewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-6 py-12">
      <p className="font-label text-[10px] uppercase tracking-[0.3em] text-dark-gold mb-2">Archive</p>
      <h1 className="font-display text-3xl tracking-display text-parchment mb-2">News &amp; Patch Notes</h1>
      <p className="font-body text-sm text-parchment-dim mb-10 max-w-2xl">
        Every Witchspire patch and community milestone, sourced from the official Steam News feed.
        Most recent first.
      </p>

      <div className="space-y-8">
        {NEWS.map((item, i) => (
          <article key={i} className="border border-border-gold/20 bg-abyss-light p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="gold-tag">{item.tag}</span>
              <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">{item.date}</span>
            </div>
            <h2 className="font-display text-xl text-dark-gold mb-3 leading-snug">{item.title}</h2>
            <p className="font-body text-sm text-parchment-dim leading-relaxed mb-4">{item.summary}</p>
            <div className="space-y-3">
              {item.body.map((para, j) => (
                <p key={j} className="font-body text-sm text-parchment-dim/90 leading-relaxed">{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
