export function GuideSection() {
  return (
    <section
      id="guide"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-zinc-950 via-black to-zinc-900"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/dark-foggy-haunted-mansion-silhouette.jpg')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Guide Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
          Guide
        </h2>

        {/* Guide Content */}
        <div className="space-y-12 text-red-100/90">
          {/* Operating Hours */}
          <div className="bg-black/40 border border-red-900/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-red-500 mb-6">営業時間</h3>
            <div className="space-y-3 text-lg md:text-xl">
              <div className="flex justify-between items-center border-b border-red-900/20 pb-3">
                <span className="font-semibold">10月25日</span>
                <span className="text-red-300">9:45 ~ 15:30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">10月26日</span>
                <span className="text-red-300">9:45 ~ 15:00</span>
              </div>
            </div>
          </div>

          {/* Admission Fee */}
          <div className="bg-black/40 border border-red-900/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-red-500 mb-6">入場料</h3>
            <p className="text-2xl md:text-3xl font-bold text-red-300 text-center">無料</p>
          </div>

          {/* Photo Spot */}
          <div className="bg-black/40 border border-red-900/30 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-red-500 mb-6">フォトスポット</h3>
            <p className="text-lg md:text-xl leading-relaxed text-pretty">
              待合室にはフォトスポットもご用意しております
            </p>
          </div>
        </div>

        {/* Decorative blood splatter effect */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-900/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-900/10 rounded-full blur-2xl" />
      </div>
    </section>
  )
}
