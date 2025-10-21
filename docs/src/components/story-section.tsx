export function StorySection() {
  return (
    <section
      id="story"
      className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-zinc-900 via-black to-zinc-950"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('/dark-foggy-haunted-mansion-silhouette.jpg')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Story Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
          Story
        </h2>

        {/* Story Content */}
        <div className="space-y-8 text-red-100/90 text-lg md:text-xl leading-relaxed">
          <p className="text-pretty">
            放課後の帰り道、イチカは親友アケミから、裏山の奥にあるという洋風な屋敷、別名「恐怖の館」にまつわる噂を聞かされる。
          </p>

          <p className="text-pretty">そこには幽霊が出て、願いを一つ叶えてくれるというのだ。</p>

          <p className="text-pretty">数日後、アケミはその館へ一人で肝試しに向かい、ふざけた置き手紙を残す。</p>

          <p className="text-pretty">不安を覚えながらも、イチカは彼女を迎えに「恐怖の館」へ向かう決意をする。</p>

          {/* Dramatic ending */}
          <div className="pt-8 text-center">
            <p className="text-2xl md:text-3xl font-bold text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse">
              あなたは、その屋敷へやってきた。
            </p>
          </div>

          <div className="pt-4 text-center">
            <p className="text-xl md:text-2xl text-red-300/80 italic">
              「ようこそお越しくださいました。さあ、この世のものではない摩訶不思議なひとときを。」
            </p>
          </div>
        </div>

        {/* Decorative blood splatter effect */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-red-900/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-red-900/10 rounded-full blur-2xl" />
      </div>
    </section>
  )
}
