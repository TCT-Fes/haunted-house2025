"use client"

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900/30">
      <ul className="flex justify-center items-center gap-8 py-4 px-4">
        <li>
          <button
            onClick={() => scrollToSection("home")}
            className="text-red-100 hover:text-red-500 transition-colors text-lg"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("story")}
            className="text-red-100 hover:text-red-500 transition-colors text-lg"
          >
            Story
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("guide")}
            className="text-red-100 hover:text-red-500 transition-colors text-lg"
          >
            Guide
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("attention")}
            className="text-red-100 hover:text-red-500 transition-colors text-lg"
          >
            Attention
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("access")}
            className="text-red-100 hover:text-red-500 transition-colors text-lg"
          >
            Access
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("poster")}
            className="text-red-100 hover:text-red-500 transition-colors text-lg"
          >
            Poster
          </button>
        </li>
      </ul>
    </nav>
  )
}
