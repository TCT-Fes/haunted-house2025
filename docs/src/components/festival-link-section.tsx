"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Share2 } from "lucide-react"
import { useState } from "react"

export function FestivalLinkSection() {
  const [showShareMenu, setShowShareMenu] = useState(false)
  const festivalUrl = "https://nittcfes.wixsite.com/2025"
  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = "恐怖の館 - 徳山高専高専祭2025"

  const handleShare = (platform: string) => {
    let url = ""
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        break
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case "line":
        url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`
        break
    }
    window.open(url, "_blank", "width=600,height=400")
    setShowShareMenu(false)
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-zinc-900 via-black to-zinc-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-zinc-900/50 border-2 border-red-900/30 rounded-lg p-8 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">徳山高専高専祭2025特設ページ</h2>
          <p className="text-red-200/80 mb-8 text-lg">高専祭の詳細情報はこちらからご確認ください</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-6 text-lg">
              <a href={festivalUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                特設ページへ
              </a>
            </Button>

            <div className="relative">
              <Button
                size="lg"
                variant="outline"
                className="border-red-700 text-red-600 hover:bg-red-950 font-bold px-8 py-6 text-lg bg-transparent"
                onClick={() => setShowShareMenu(!showShareMenu)}
              >
                <Share2 className="mr-2 h-5 w-5" />
                SNSで共有
              </Button>

              {showShareMenu && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-zinc-900 border-2 border-red-900/50 rounded-lg p-4 shadow-xl z-50 min-w-[200px]">
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="ghost"
                      className="justify-start text-red-200 hover:bg-red-950 hover:text-red-100"
                      onClick={() => handleShare("twitter")}
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X (Twitter)
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-red-200 hover:bg-red-950 hover:text-red-100"
                      onClick={() => handleShare("facebook")}
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-red-200 hover:bg-red-950 hover:text-red-100"
                      onClick={() => handleShare("line")}
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                      </svg>
                      LINE
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
