export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900"
    >
      {/* Background fog effect */}
      <div className="absolute inset-0 bg-[url('/dark-foggy-haunted-mansion-silhouette.jpg')] bg-cover bg-center opacity-40" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />

      <div className="absolute top-10 left-[10%] w-16 h-16 opacity-40">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="30" fill="currentColor" />
          <circle cx="35" cy="40" r="15" fill="currentColor" />
          <circle cx="65" cy="45" r="12" fill="currentColor" />
          <circle cx="50" cy="70" r="10" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-[20%] right-[15%] w-12 h-12 opacity-30 rotate-45">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="25" fill="currentColor" />
          <circle cx="30" cy="50" r="15" fill="currentColor" />
          <circle cx="70" cy="50" r="12" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-[30%] left-[20%] w-20 h-20 opacity-35 -rotate-12">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="35" fill="currentColor" />
          <circle cx="40" cy="30" r="18" fill="currentColor" />
          <circle cx="70" cy="60" r="15" fill="currentColor" />
          <circle cx="30" cy="70" r="12" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-[60%] right-[25%] w-14 h-14 opacity-40 rotate-90">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="28" fill="currentColor" />
          <circle cx="35" cy="35" r="16" fill="currentColor" />
          <circle cx="65" cy="55" r="14" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-[15%] right-[10%] w-10 h-10 opacity-30">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="22" fill="currentColor" />
          <circle cx="40" cy="40" r="12" fill="currentColor" />
          <circle cx="60" cy="60" r="10" fill="currentColor" />
        </svg>
      </div>

      {/* Main title */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-balance">
          <span className="inline-block relative">
            <span
              className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.8)] font-black tracking-wider animate-glitch"
              style={{ fontFamily: "var(--font-tegomin)" }}
            >
              恐怖の館へ
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
          </span>
          <br />
          <span className="inline-block relative mt-4">
            <span className="text-red-700 drop-shadow-[0_0_40px_rgba(185,28,28,0.9)] font-black tracking-wider">
              ようこそ
            </span>
            <span
              className="absolute -bottom-8 left-[25%] w-1.5 h-14 bg-gradient-to-b from-red-600 via-red-700 to-red-900/0 realistic-blood-drip rounded-full"
              style={{ animationDelay: "0s", animationDuration: "5s" }}
            />
            <span
              className="absolute -bottom-8 left-[40%] w-2 h-20 bg-gradient-to-b from-red-600 via-red-700 to-red-900/0 realistic-blood-drip rounded-full"
              style={{ animationDelay: "0.5s", animationDuration: "5.5s" }}
            />
            <span
              className="absolute -bottom-8 left-[55%] w-1 h-12 bg-gradient-to-b from-red-600 via-red-700 to-red-900/0 realistic-blood-drip rounded-full"
              style={{ animationDelay: "1s", animationDuration: "4.8s" }}
            />
            <span
              className="absolute -bottom-8 left-[70%] w-1.5 h-16 bg-gradient-to-b from-red-600 via-red-700 to-red-900/0 realistic-blood-drip rounded-full"
              style={{ animationDelay: "1.5s", animationDuration: "5.2s" }}
            />
            {/* Blood droplets at the end of drips */}
            <span
              className="absolute -bottom-20 left-[25%] w-3 h-3 bg-red-700 rounded-full blood-droplet opacity-0"
              style={{ animationDelay: "4.5s" }}
            />
            <span
              className="absolute -bottom-24 left-[40%] w-4 h-4 bg-red-700 rounded-full blood-droplet opacity-0"
              style={{ animationDelay: "5s" }}
            />
          </span>
        </h1>

        <p className="mt-20 text-xl md:text-2xl text-red-200/80 font-light tracking-wide">あなたは生きて帰れるか...</p>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
