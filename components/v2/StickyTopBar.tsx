"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface StickyTopBarProps {
  companyName: string
}

export default function StickyTopBar({ companyName }: StickyTopBarProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > window.innerHeight)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-[#6B8F71] p-3 md:p-4 z-50 shadow-lg transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <span className="font-sans text-white font-medium text-sm md:text-base truncate">
          {companyName} · Free Cash Offer
        </span>
        <Button
          onClick={scrollToForm}
          className="bg-white text-[#6B8F71] hover:bg-white/90 font-sans font-medium px-5 md:px-6 whitespace-nowrap"
        >
          Get My Offer
        </Button>
      </div>
    </div>
  )
}
