"use client"

import { Star } from "lucide-react"
import { openQuiz } from "./openQuiz"

// Pulled from steadfasthb.com/reviews — real customer reviews. Edit here when
// new ones come in. Do not invent reviews.
const REVIEWS = [
  {
    quote:
      "Matt called once a week to check to see if everything was going ok. Matt went above his job to make sure the house sold in a short time. If you want a good real estate agent give Matt a call.",
    name: "Malcolm Jackson",
    city: "Jackson, TN",
  },
  {
    quote:
      "Matt takes the time to understand your needs. He has integrity and a great work ethic. Matt sold our house to the first family he showed it to. Matt did his homework in advance and set up qualified buyers. Thanks for making this process so smooth.",
    name: "Ray Simmons",
    city: "Jackson, TN",
  },
  {
    quote:
      "Every call or text returned almost instantly. Matt and Field were both very professional, responsive, and knowledgeable of the overall market. You can't go wrong doing business with these guys!",
    name: "Jeremy Andrew",
    city: "Jackson, TN",
  },
]

export default function Reviews() {
  return (
    <section
      className="py-14 px-4"
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid var(--hpg-border)",
      }}
    >
      <div className="hpg-container">
        <div className="text-center mb-8">
          <p
            className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.25em] mb-2"
            style={{ color: "var(--hpg-gold-dark)" }}
          >
            Real Reviews
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl font-black uppercase"
            style={{ color: "var(--hpg-black)" }}
          >
            What Jackson Homeowners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {REVIEWS.map((r) => (
            <button
              key={r.name}
              type="button"
              onClick={openQuiz}
              aria-label={`Get my cash offer — review from ${r.name}`}
              className="text-left rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all bg-white"
              style={{ border: "1px solid var(--hpg-border)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ color: "var(--hpg-gold)", fill: "var(--hpg-gold)" }}
                  />
                ))}
              </div>
              <p
                className="italic leading-relaxed mb-5 text-[15px] sm:text-[16px]"
                style={{ color: "var(--hpg-charcoal)" }}
              >
                "{r.quote}"
              </p>
              <p
                className="font-display font-black text-[13px] uppercase tracking-wide"
                style={{ color: "var(--hpg-black)" }}
              >
                {r.name}
              </p>
              <p className="text-[12px] mt-0.5" style={{ color: "var(--hpg-muted)" }}>
                {r.city}
              </p>
              <p
                className="text-[11px] font-bold uppercase tracking-wider mt-3"
                style={{ color: "var(--hpg-gold-dark)" }}
              >
                Get my cash offer →
              </p>
            </button>
          ))}
        </div>

        <p
          className="text-center text-[12px] mt-7"
          style={{ color: "var(--hpg-muted)" }}
        >
          Verified reviews from{" "}
          <a
            href="https://www.steadfasthb.com/reviews/"
            target="_blank"
            rel="noopener"
            className="underline font-semibold"
            style={{ color: "var(--hpg-muted)" }}
          >
            steadfasthb.com/reviews
          </a>
        </p>
      </div>
    </section>
  )
}
