import type { Metadata } from 'next';
import './globals.css';
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Witchspire Guide — Familiars, Crafting, Covens & Survival',
  description: 'Complete Witchspire guide covering familiar taming, sanctuary building, coven choice (Cloudpiercers & Foretellers), corruption mechanics, and patch-by-patch survival tips for this co-op witch adventure by Envar Games.',
  metadataBase: new URL('https://witchspire-guide.vercel.app'),
  openGraph: {
    title: 'Witchspire Guide',
    description: 'Complete Witchspire guide — familiars, crafting, covens, corruption survival, and patch notes for the co-op witch adventure by Envar Games.',
    type: 'website',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
  },
};

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'Familiars', href: '/familiars' },
  { label: 'Crafting', href: '/crafting' },
  { label: 'Beginners', href: '/beginners-guide' },
  { label: 'FAQ', href: '/faq' },
  { label: 'News', href: '/news' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4cd6cdf221ea7b0b" />
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <Script strategy="lazyOnload" id="gtag-init">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ET6778V62K');`}
            </Script>
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
      
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={
            __html: `{"@context": "https://schema.org", "@type": "WebSite", "name": "Witchspire Guide", "url": "https://witchspire-guide.vercel.app"}`
          }
        />

      </head>
      <body className="font-body min-h-screen flex flex-col bg-abyss text-parchment bg-rune-pattern">
        <div className="flex min-h-screen flex-1">
          {/* Sidebar */}
          <aside className="fixed top-0 left-0 z-50 h-full w-56 bg-abyss border-r border-border-gold/20 hidden lg:block">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 px-5 h-14 border-b border-border-gold/20 hover:bg-dark-gold/5 transition-colors">
              <span className="font-display text-sm tracking-display text-dark-gold text-shadow-gold">
                WITCHSPIRE
              </span>
            </Link>

            {/* Navigation */}
            <nav className="py-4 flex flex-col gap-0.5 flex-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-5 py-2.5 font-label text-xs uppercase tracking-wider text-parchment-dim hover:text-dark-gold hover:bg-dark-gold/5 transition-colors border-l-2 border-transparent hover:border-dark-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Bottom section */}
            <div className="p-4 border-t border-border-gold/20">
              <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                Witchspire Guide
              </p>
              <p className="font-label text-[9px] text-parchment-dim/60 mt-1">
                Patch 0.1.3 — Unofficial
              </p>
            </div>
          </aside>

          {/* Main content area */}
          <div className="flex-1 flex flex-col min-w-0 lg:ml-56">
            {/* Header */}
            <header className="h-14 border-b border-border-gold/20 bg-abyss flex items-center px-4 lg:px-6 gap-4">
              {/* Mobile logo */}
              <Link href="/" className="lg:hidden font-display text-sm tracking-display text-dark-gold">
                WITCHSPIRE
              </Link>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Support Us - top right */}
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors"
              >
                ❤️ Support Us
              </a>

              {/* Status */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-dark-gold" />
                <span className="font-label text-[10px] uppercase tracking-wider text-parchment-dim">ONLINE</span>
              </div>
            </header>

            {/* Page content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-border-gold/20 bg-abyss">
              <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6">
                {/* Cross-links — same genre (survival/building co-op) */}
                <div className="mb-4 pb-4 border-b border-border-gold/10">
                  <p className="font-label text-[10px] uppercase tracking-wider text-parchment-dim mb-2">More Survival &amp; Building Guides</p>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://solarpunk-game-wiki.vercel.app" target="_blank" rel="noopener noreferrer" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-dark-gold transition-colors">Solarpunk Guide</a>
                    <a href="https://going-medieval-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-dark-gold transition-colors">Going Medieval Guide</a>
                    <a href="https://town-to-city-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="font-label text-[10px] uppercase tracking-wider text-parchment-dim hover:text-dark-gold transition-colors">Town to City Guide</a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 font-label text-[10px] uppercase tracking-wider text-parchment-dim">
                    <span>&copy; {new Date().getFullYear()} Witchspire Guide</span>
                    <Link href="/privacy" className="hover:text-dark-gold transition-colors">Privacy</Link>
                    <Link href="/terms" className="hover:text-dark-gold transition-colors">Terms</Link>
                  </div>
                  <a
                    href="https://afdian.com/a/gameguidehub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label text-[10px] uppercase tracking-wider text-dark-gold hover:text-dark-gold-dim transition-colors"
                  >
                    SUPPORT ON AFDIAN
                  </a>
                </div>
              </div>
            
              {/* E-E-A-T: Sources & Last Updated */}
              <div className="mt-4 pt-4 border-t border-clay/30">
                <p className="font-body text-xs text-stone text-center">
                  <strong>Sources:</strong> All guides are based on the <a href="https://store.steampowered.com/app/2679100/" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:underline">Steam patch notes</a>, community testing, and gameplay experience.
                </p>
                <p className="font-body text-xs text-stone text-center mt-1">Last updated: June 2026</p>
              </div>

            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
