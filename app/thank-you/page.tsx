import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Phone } from "lucide-react"
import config from "@/lib/config"
import { ContactCTA } from "@/components/article/contact-cta"
import { ARTICLES } from "@/lib/articles"

const RECOMMENDED_READS = ARTICLES.slice(0, 4)

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
        {/* Confirmation icon */}
        <div className="flex justify-center mb-6">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{ backgroundColor: `${config.accentColor}20` }}
          >
            <CheckCircle2 className="h-8 w-8" style={{ color: config.accentColor }} />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Thank You. We Have Your Information.
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-lg mx-auto">
            The {config.companyName} team has received your details and will be in touch within{" "}
            <strong>24 hours</strong> with your cash offer. While you wait, here is a little about who you are dealing with.
          </p>
        </div>

        {/* Personal note card */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 mb-6">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
            A Personal Note
          </p>
          <h2 className="text-xl font-bold text-gray-900 mb-4">From Matt Lange</h2>

          {/* Founder headshot */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-2" style={{ borderColor: config.accentColor }}>
              <Image
                src="/images/founder-matt.jpg"
                alt="Matt Lange, founder of Steadfast Home Buyers"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Matt Lange</p>
              <p className="text-xs text-gray-500">Founder, {config.companyName} · Marine Veteran</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you are reading this, you just did the thing most homeowners put off for months, sometimes years.
              Before anything else, I want you to know that took some courage, and it was the right call.
            </p>
            <p>
              Selling a house can wear on you. The not knowing. The waiting. The feeling that the whole system was
              built for everybody but you. The traditional route asks you to fix the place up, stage it, let strangers
              walk through, and wait three months hoping it closes. That works fine for some folks. It does not work
              for everybody, and it should not have to.
            </p>
            <p>
              I started {config.companyName} here in West Tennessee with my wife Ashton after we kept meeting good
              people stuck in hard spots. A house inherited that they could not afford to keep. A place that needed more
              work than they had time or money for. A divorce, a move, a tired rental. I spent eight years in the Marine
              Corps, and I run this company the same way I was trained to do the job. Straight, honest, and done right.
            </p>
            <p>
              Here is what happens now. Our team reviews what you sent us. Within 24 hours, you hear back from a real
              local person with a fair, no-obligation cash offer. If the number works for you, wonderful. If it does not,
              there are no hard feelings and you owe us nothing. Either way, you will be treated like a neighbor, because
              around here, you are one.
            </p>
          </div>
        </div>

        {/* While you wait: advertorial reads */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-1">While You Wait, a Few Honest Reads</h3>
          <p className="text-sm text-gray-500 mb-5">
            Straight talk on the questions almost every West Tennessee homeowner asks before they sell.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {RECOMMENDED_READS.map((a) => (
              <Link
                key={a.slug}
                href={a.slug}
                className="group flex gap-4 rounded-xl border border-gray-200 p-3 transition-colors hover:bg-gray-50 no-underline"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={120}
                  height={90}
                  className="h-[72px] w-[96px] sm:h-[84px] sm:w-[112px] shrink-0 rounded-lg object-cover bg-gray-100"
                />
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 leading-snug">{a.title}</div>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{a.teaser}</p>
                  <span className="mt-1 inline-block text-sm font-semibold" style={{ color: config.accentColor }}>
                    Read the article &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/articles" className="text-sm font-semibold underline" style={{ color: config.accentColor }}>
              See all articles
            </Link>
          </div>
        </div>

        {/* Text / call CTA */}
        <ContactCTA
          phoneDisplay={config.phoneDisplay}
          phoneHref={config.phoneHref}
          smsKeyword={config.smsKeyword}
          heading="Want your offer faster? Reach us now."
          subheading="Tap to text us the word OFFER, or call and a local team member will pick up."
        />

        {/* What happens next */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">What Happens Next</h3>
          <div className="space-y-4">
            {[
              { step: "1", title: "We review your property", desc: "Our local team looks at your submission and researches the home." },
              { step: "2", title: "You get a cash offer", desc: "Within 24 hours, we reach out with a fair, no-obligation offer." },
              { step: "3", title: "You choose your closing date", desc: "If you accept, you pick the date, even as soon as 7 days. We handle the rest." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: config.accentColor }}
                >
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">Have questions in the meantime? Give us a call.</p>
          <a
            href={`tel:${config.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: config.accentColor }}
          >
            <Phone className="h-5 w-5" />
            {config.phoneDisplay}
          </a>
          <p className="mt-10 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {config.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}
