export function PosterSection() {
  return (
    <section id="poster" className="relative py-20 px-4 bg-zinc-900">
      <div className="absolute top-8 left-[8%] w-14 h-14 opacity-20">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="32" fill="currentColor" />
          <circle cx="30" cy="35" r="18" fill="currentColor" />
          <circle cx="70" cy="65" r="15" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-[12%] w-20 h-20 opacity-25 rotate-12">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="35" fill="currentColor" />
          <circle cx="40" cy="40" r="20" fill="currentColor" />
          <circle cx="65" cy="70" r="18" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
          Poster
        </h2>

        <div className="relative rounded-lg overflow-hidden border-4 border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.3)] bg-black max-w-md mx-auto">
          <img src="/S__4301448.jpg" alt="恐怖の館 - House of Horror Poster" className="w-full h-auto" />

          {/* Dark overlay for spooky effect */}
          <div className="absolute inset-0 bg-red-950/10 pointer-events-none mix-blend-multiply" />
        </div>
      </div>
    </section>
  )
}
