export default function NotFound() {
  return (
    <div className="bg-abyss bg-rune-pattern min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-display text-7xl text-dark-gold text-shadow-gold mb-4">404</p>
        <p className="font-label text-[10px] uppercase tracking-[0.3em] text-parchment-dim mb-6">
          LOST IN THE WITCHSPIRE
        </p>
        <p className="font-body text-sm text-parchment-dim leading-relaxed mb-8">
          The page you are looking for has been swallowed by corruption — or never existed
          in this coven\'s records.
        </p>
        <a
          href="/"
          className="inline-block px-5 py-2.5 border border-dark-gold/60 text-dark-gold font-label text-xs uppercase tracking-wider hover:bg-dark-gold hover:text-abyss transition-colors"
        >
          Return to Sanctuary
        </a>
      </div>
    </div>
  );
}
