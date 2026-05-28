"use client"

import { Phone } from "lucide-react"
import { telHref } from "@/lib/utils"

interface StickyTopBarProps {
  companyName: string
  phoneDisplay: string
  phoneHref: string
}

export default function StickyTopBar({ companyName, phoneDisplay, phoneHref }: StickyTopBarProps) {
  function jumpToForm() {
    const el = document.getElementById("quiz")
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 bg-gray-900 text-white shadow-md"
      style={{ borderBottom: "3px solid var(--accent)" }}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2">
        <div className="hidden sm:block text-xs sm:text-sm font-semibold truncate">
          {companyName} <span className="text-white/60 font-normal">· Cash offer in 24 hours</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 ml-auto">
          <a
            href={telHref(phoneHref)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold transition-colors"
            aria-label={`Call ${phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">{phoneDisplay}</span>
            <span className="xs:hidden">Call</span>
          </a>

          <button
            type="button"
            onClick={jumpToForm}
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-md font-black text-xs sm:text-sm uppercase tracking-wide text-white shadow-sm transition-transform active:translate-y-px"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Get My Cash Offer
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
