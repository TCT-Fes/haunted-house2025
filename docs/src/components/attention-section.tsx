export function AttentionSection() {
  return (
    <section
      id="attention"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-zinc-900 via-red-950/20 to-black"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/dark-foggy-haunted-mansion-silhouette.jpg')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Attention Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
          Attention
        </h2>

        {/* Warning Content */}
        <div className="bg-black/60 border-2 border-red-600/50 rounded-lg p-8 md:p-12 backdrop-blur-sm shadow-[0_0_30px_rgba(220,38,38,0.3)]">
          <div className="space-y-6 text-red-100/90">
            {/* Warning Items */}
            <div className="flex items-start gap-4 pb-6 border-b border-red-900/30">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
              <p className="text-lg md:text-xl leading-relaxed text-pretty">配置物には触れないでください</p>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-red-900/30">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
              <p className="text-lg md:text-xl leading-relaxed text-pretty">写真および動画の撮影はお控えください</p>
            </div>

            <div className="flex items-start gap-4 pb-6 border-b border-red-900/30">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
              <p className="text-lg md:text-xl leading-relaxed text-pretty">飲食は禁止です</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-600 rounded-full" />
              <p className="text-lg md:text-xl leading-relaxed text-pretty">
                アトラクション内で発生したいかなるトラブルについても、学生会ならびに徳山工業高等専門学校は一切の責任を負いません
              </p>
            </div>
          </div>
        </div>

        {/* Decorative warning effects */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-red-600/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-900/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
