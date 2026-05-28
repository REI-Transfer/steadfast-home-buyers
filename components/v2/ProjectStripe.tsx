import Image from "next/image"

// HPG's VideoStripe shows 3 portrait videos. Steadfast doesn't have videos
// yet, so this is the same visual rhythm with portrait images from the
// existing adv-* library. Easy to swap to <video> later.
const ITEMS = [
  { img: "/images/adv-keys-couple.jpg", caption: "Cash Close — Jackson, TN" },
  { img: "/images/adv-handshake.jpg", caption: "As-Is Sale — Memphis, TN" },
  { img: "/images/adv-couple-window.jpg", caption: "Out-of-State Owner — Murfreesboro, TN" },
]

export default function ProjectStripe() {
  return (
    <section
      className="bg-white py-12 px-4"
      style={{ borderBottom: "1px solid var(--hpg-border)" }}
    >
      <div className="hpg-container">
        <div className="text-center mb-6">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.25em] mb-2"
            style={{ color: "var(--hpg-gold-dark)" }}
          >
            Recent Closings
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl font-black uppercase"
            style={{ color: "var(--hpg-black)" }}
          >
            See the work, not just the words
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ITEMS.map((v) => (
            <div
              key={v.img}
              className="rounded-2xl overflow-hidden shadow-md aspect-[9/16] md:aspect-[4/5] relative bg-black"
              style={{ border: "1px solid var(--hpg-border)" }}
            >
              <Image
                src={v.img}
                alt={v.caption}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                <p className="text-white font-display font-black text-[13px] uppercase tracking-wide">
                  {v.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
