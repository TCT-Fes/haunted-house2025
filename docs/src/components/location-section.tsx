export function LocationSection() {
  return (
    <section id="access" className="relative py-20 px-4 bg-zinc-950">
      <div className="absolute top-5 right-[10%] w-12 h-12 opacity-25">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="28" fill="currentColor" />
          <circle cx="35" cy="40" r="14" fill="currentColor" />
          <circle cx="65" cy="55" r="12" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-[15%] w-16 h-16 opacity-30 rotate-45">
        <svg viewBox="0 0 100 100" className="text-red-900">
          <circle cx="50" cy="50" r="30" fill="currentColor" />
          <circle cx="35" cy="35" r="16" fill="currentColor" />
          <circle cx="70" cy="60" r="14" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
          Access
        </h2>

        <div className="relative rounded-lg overflow-hidden border-4 border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.681779681282!2d131.84402967565478!3d34.05203311774154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544e0c9c26b9b57%3A0xf4d48552c6aa71a1!2z5b6z5bGx5bel5qWt6auY5bCC6ZaA5a2m5qCh77yI5b6z5bGx6auY5bCC77yJ!5e0!3m2!1sja!2sjp!4v1697204266217!5m2!1sja!2sjp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 brightness-75"
          />

          {/* Dark overlay for spooky effect */}
          <div className="absolute inset-0 bg-red-950/20 pointer-events-none mix-blend-multiply" />
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-red-200/80 text-2xl font-semibold">徳山高等専門学校　教室・管理棟2階</p>
          <p className="text-red-300/60 text-xl">徳山駅よりバスで約20分　車で約15分</p>
          <p className="text-red-300/50 text-lg">〒745-8585 山口県周南市学園台</p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="relative rounded-lg overflow-hidden border-4 border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.3)] bg-zinc-900 p-4">
            <img src="/campus_map.gif" alt="Campus Map" className="w-full max-w-2xl h-auto" />
          </div>
          <p className="mt-4 text-red-200/80 text-xl font-semibold">キャンパスマップ</p>
        </div>
      </div>
    </section>
  )
}
