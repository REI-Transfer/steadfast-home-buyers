import Image from "next/image"
import { Phone, Check, Clock, Shield, KeyRound, FileSignature, BadgeCheck } from "lucide-react"
import { SurveyCard } from "@/components/survey/survey-card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import CountdownTimer from "@/components/v2/CountdownTimer"
import StickyTopBar from "@/components/v2/StickyTopBar"
import { telHref } from "@/lib/utils"
import config from "@/lib/config"

export default function V2Page() {
  let parsedServiceAreas: Array<{ id: string; centerLat: number; centerLng: number; radiusMiles: number }> = []
  try {
    parsedServiceAreas = JSON.parse(config.serviceAreas)
  } catch {}

  const marketLabel = config.marketName || "your area"

  const stats = [
    { value: config.stat1Value, label: config.stat1Label },
    { value: config.stat2Value, label: config.stat2Label },
    { value: config.stat3Value, label: config.stat3Label },
  ]

  return (
    <main className="relative min-h-screen bg-white">
      <StickyTopBar
        companyName={config.companyName}
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
      />

      {/* Spacer to clear the fixed top bar */}
      <div className="h-12 sm:h-14" aria-hidden />

      <Header
        companyName={config.companyName}
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        logoUrl={config.logoUrl}
        headerBgColor={config.headerBgColor}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* LEFT: Hero copy + offer card */}
            <div className="lg:col-span-3">
              <p
                className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--accent)" }}
              >
                Cash Home Buyer in {marketLabel}
              </p>

              <h1 className="font-black text-gray-900 leading-[1.05] text-[2.1rem] sm:text-5xl lg:text-6xl">
                Sell Your House As-Is.
                <br />
                <span style={{ color: "var(--accent)" }}>Pick Your Closing Date.</span>
                <br />
                Walk Away With Cash.
              </h1>

              <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl leading-relaxed">
                Tell us a few things about your house. We send back a real cash number within 24 hours.
                You decide if and when to close. No back and forth. No surprises at the table.
              </p>

              {/* Trust strip */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-1.5">
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(15,15,15,0.08)" }}
                    >
                      <Check className="h-3 w-3" style={{ color: "var(--accent)" }} />
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      <strong>{s.value}</strong> {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Offer card */}
              <div className="mt-7 rounded-2xl bg-white border border-gray-200 shadow-md overflow-hidden max-w-md">
                <div
                  className="px-5 py-3 text-white text-center"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-90">
                    Priority Cash Offer Window
                  </p>
                </div>
                <div className="px-5 sm:px-7 py-6 text-center">
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    {marketLabel}
                  </p>
                  <p className="font-black text-gray-900 text-2xl sm:text-3xl leading-tight mb-1">
                    Cash Offer in 24 Hours
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    Backed by a Marine Veteran owned company
                  </p>

                  <div className="my-5 h-px bg-gray-200" />

                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Priority Review Closes In
                  </p>
                  <div className="flex justify-center">
                    <CountdownTimer size="lg" />
                  </div>

                  <a
                    href="#quiz"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-white font-black text-base sm:text-lg uppercase tracking-wide shadow-lg transition-transform active:translate-y-px"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    Get My Cash Offer
                    <span aria-hidden>›</span>
                  </a>

                  <p className="mt-3 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Takes about 60 seconds
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Survey form */}
            <div id="quiz" className="lg:col-span-2 scroll-mt-24">
              <SurveyCard
                phoneDisplay={config.phoneDisplay}
                phoneHref={config.phoneHref}
                serviceAreas={parsedServiceAreas}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              How It Works
            </p>
            <h2 className="font-black text-gray-900 text-2xl sm:text-3xl lg:text-4xl leading-tight">
              Three Steps. No Stress.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 lg:gap-7">
            {[
              {
                step: "01",
                icon: FileSignature,
                title: "Tell Us About Your House",
                body: "Answer a few quick questions. Address, condition, timeline. About 60 seconds.",
              },
              {
                step: "02",
                icon: BadgeCheck,
                title: "Get Your Cash Number",
                body: "We review your property and call you within 24 hours with a real cash offer you can rely on.",
              },
              {
                step: "03",
                icon: KeyRound,
                title: "Close When You Are Ready",
                body: "You pick the closing date. We handle the paperwork. Walk away with cash in hand.",
              },
            ].map(({ step, icon: Icon, title, body }) => (
              <div key={step} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white font-black text-sm"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    {step}
                  </span>
                  <Icon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STEADFAST */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] mb-2"
              style={{ color: "var(--accent)" }}
            >
              Why {config.companyName}
            </p>
            <h2 className="font-black text-gray-900 text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-2xl mx-auto">
              The Same Honest Number From Day One Through Closing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
            {[
              {
                icon: Shield,
                title: "Your Offer Does Not Change",
                body: "Most buyers quote high to win the deal, then chip the number down at the table. Our first offer is the one you sign.",
              },
              {
                icon: Clock,
                title: "Close in As Little as 7 Days",
                body: "Need to move fast? We can close in a week. Need more time? Pick the date that works for your life.",
              },
              {
                icon: Check,
                title: "Take What You Want. Leave the Rest.",
                body: "No cleaning. No repairs. No staging. Pack what matters to you and walk out. We take the house as it stands.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg mb-4"
                  style={{ backgroundColor: "rgba(228,28,37,0.1)" }}
                >
                  <Icon className="h-5 w-5" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER STRIP */}
      {(config.ownerName || config.headshotUrl) && (
        <section className="bg-gray-50 border-y border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-10 md:py-14 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
              {config.headshotUrl && (
                <div
                  className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 flex-shrink-0"
                  style={{ borderColor: "var(--accent)" }}
                >
                  <Image
                    src={config.headshotUrl}
                    alt={config.ownerName || "Founder"}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.18em] mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  Who You Are Dealing With
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                  {config.ownerName || "Our Founder"}
                  <span className="block sm:inline text-sm font-semibold text-gray-500 sm:ml-2">
                    Founder, {config.companyName} · Marine Veteran
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
                  You will talk to a real person. Not a call center. Not an algorithm.
                  I built {config.companyName} because too many homeowners in {marketLabel} get
                  passed around to investors who never close. That is not how we do business.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:py-14 lg:px-8 text-center">
          <h2 className="font-black text-gray-900 text-2xl sm:text-3xl lg:text-4xl leading-tight">
            Ready For a Real Cash Number?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Two minutes now saves you weeks of showings, repairs, and waiting on a buyer who might back out.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#quiz"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-black text-base uppercase tracking-wide shadow-lg transition-transform active:translate-y-px"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Get My Cash Offer
              <span aria-hidden>→</span>
            </a>
            <a
              href={telHref(config.phoneHref)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-base transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call {config.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer
        companyName={config.companyName}
        phoneDisplay={config.phoneDisplay}
        phoneHref={config.phoneHref}
        privacyPolicyUrl="/privacy"
        termsUrl="/terms"
      />
    </main>
  )
}
