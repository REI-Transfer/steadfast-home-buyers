"use client"

import Image from "next/image"
import { Clock, Shield, Users, MapPin, ChevronDown, Star, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SurveyCard } from "@/components/survey/survey-card"
import StickyTopBar from "@/components/v2/StickyTopBar"
import { telHref } from "@/lib/utils"

interface Props {
  companyName: string
  phoneDisplay: string
  phoneHref: string
  marketName: string
  supportEmail: string
  serviceAreas: Array<{ id: string; centerLat: number; centerLng: number; radiusMiles: number }>
}

export default function HomebuyerLanding({
  companyName,
  phoneDisplay,
  phoneHref,
  marketName,
  supportEmail,
  serviceAreas,
}: Props) {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-[#FAFAF7]">
      <StickyTopBar companyName={companyName} />

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/adv-home-exterior.jpg"
            alt={`Cash home buyer serving ${marketName}`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight text-balance mb-6">
            See Your Real Cash Number. Before You Ever Sign a Thing.
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 text-pretty">
            {marketName}'s family-owned cash home buyer locks in your number first. So you know exactly what you're walking away with before you commit a single day.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-[#6B8F71] hover:bg-[#5a7a60] text-white font-sans text-lg px-8 py-6 rounded-full"
          >
            Get My Free Cash Offer
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-6 border-b border-[#E8E6E1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-[#6B8F71]" />
              <span className="font-sans text-sm text-[#2C2C2C]">Close in As Little as 7 Days</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-6 h-6 text-[#6B8F71]" />
              <span className="font-sans text-sm text-[#2C2C2C]">Family Owned · Marine Veteran</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-6 h-6 text-[#6B8F71]" />
              <span className="font-sans text-sm text-[#2C2C2C]">Offer Does Not Change at Closing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-[#6B8F71]" />
              <span className="font-sans text-sm text-[#2C2C2C]">Serving Homeowners Across {marketName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Shared Reality */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[750px] mx-auto px-6">
          <div className="font-sans text-[#2C2C2C] text-lg leading-[1.8] space-y-6">
            <p className="font-serif text-2xl md:text-3xl text-[#2C2C2C]">
              You've been thinking about this for a while.
            </p>
            <p>
              Maybe it's the house you inherited. Maybe it's the rental that turned into a headache. Maybe it's the home you raised your kids in and you're finally ready to be done. But something about this property has been weighing on you for a long time, and you know it.
            </p>
            <p>
              You've probably done a little research. Maybe pulled a Zestimate. Maybe drove past a "We Buy Houses" sign and saved the number. You know the place needs to move. You just haven't found a way that feels right.
            </p>
            <p>
              And it's not because you haven't tried.
            </p>
            <p>
              You've probably gotten a call. Maybe two. A buyer showed up, walked the place for fifteen minutes, and texted you a number a day later. No explanation. No conversation about your timeline. Just a price tag and a question: "When can we close?"
            </p>
            <p>
              But you didn't sign. Because something felt off.
            </p>
            <p className="font-serif text-xl text-[#2C2C2C] italic">
              You weren't wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: The Problem */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]">
        <div className="max-w-[750px] mx-auto px-6">
          <div className="font-sans text-[#2C2C2C] text-lg leading-[1.8] space-y-6">
            <p className="font-serif text-2xl md:text-3xl text-[#2C2C2C]">
              Here's what most cash buyers in {marketName} do:
            </p>
            <p>
              They send someone with a clipboard. He walks the house for fifteen minutes. He writes down some notes. Maybe snaps a few photos. Then he disappears for a day and sends you the highest number you've ever heard.
            </p>
            <p>
              No breakdown. No walk through the math. No mention of how that number gets to your bank account.
            </p>
            <p className="font-medium">
              Just a number.
            </p>
            <p>
              And you're supposed to take your house off the market and trust that $180,000... $240,000... $310,000 is the real one?
            </p>
            <p className="font-serif text-xl italic">
              That's not an offer. That's a placeholder.
            </p>
            <p>
              The worst part? Two weeks in, the inspector finds something. The buyer comes back and chips the number down. $20,000. $35,000. Sometimes more. By then you've already turned away other buyers. You've already started packing. You've already told family the house is sold.
            </p>
            <p>
              So you take the new number. Because what other choice do you have?
            </p>
            <p className="font-serif text-xl text-[#2C2C2C] italic">
              It's not bad luck. It's a bait and switch.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: The Mechanism */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="font-sans text-[#2C2C2C] text-lg leading-[1.8] space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2C2C]">
                What if the number you see today is the number that hits your account at closing?
              </h2>
              <p className="font-medium">
                That's exactly how we operate.
              </p>
              <p>
                Before we send a contract, we send you a real number. Not a placeholder. Not a "starting point." The actual cash you walk away with.
              </p>
              <p>
                Our team underwrites your property based on what we can actually pay. Not the highest number we can say out loud. The math is straightforward: comparable closed sales in your area, the work the house needs, our holding costs, and the closing window you want.
              </p>
              <p className="font-medium">
                You see exactly what you're getting before you sign anything.
              </p>
              <p>
                The price. The closing date. The condition we're buying it in. Every detail, in writing, before any earnest money changes hands.
              </p>
              <p>
                Then we walk you through it. The math. The timeline. The paperwork. Line by line. No surprises at the closing table.
              </p>
              <p>
                And then? You decide. On your timeline. Not ours.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/adv-numbers-table.jpg"
                alt="Cash offer reviewed line by line at the kitchen table"
                width={600}
                height={450}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
                unoptimized
              />
              <p className="text-center mt-4 font-sans text-sm text-[#2C2C2C]/70">
                The number we quote you is the number that hits your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-20 md:py-28 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] text-center mb-16">
            Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#6B8F71] text-white flex items-center justify-center text-xl font-serif mx-auto mb-6">
                1
              </div>
              <h3 className="font-serif text-xl text-[#2C2C2C] mb-4">
                Tell Us About the House
              </h3>
              <p className="font-sans text-[#2C2C2C]/80 leading-relaxed">
                Address, condition, timeline. About sixty seconds. Tell us what you have and what you need. No walkthrough required to get a real number on the table.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#6B8F71] text-white flex items-center justify-center text-xl font-serif mx-auto mb-6">
                2
              </div>
              <h3 className="font-serif text-xl text-[#2C2C2C] mb-4">
                Get Your Real Cash Number
              </h3>
              <p className="font-sans text-[#2C2C2C]/80 leading-relaxed">
                We review your property and call you within 24 hours with a cash offer you can rely on. We walk you through how we got there, in plain English.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#6B8F71] text-white flex items-center justify-center text-xl font-serif mx-auto mb-6">
                3
              </div>
              <h3 className="font-serif text-xl text-[#2C2C2C] mb-4">
                Close on Your Date
              </h3>
              <p className="font-sans text-[#2C2C2C]/80 leading-relaxed">
                Love the offer? We close. Need to wait until the kids finish school? We wait. Want to think it over for a week? Take it. There's no countdown, no high-pressure pitch. Just clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Us - Dark Section */}
      <section className="py-20 md:py-28 bg-[#2C2C2C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/adv-local-team.jpg"
                alt={`${companyName} local team in ${marketName}`}
                width={500}
                height={400}
                className="rounded-lg object-cover w-full h-auto"
                unoptimized
              />
            </div>
            <div className="order-1 md:order-2 text-white space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-[#F5F3EF]">
                We're Not a Hedge Fund. We're a Family.
              </h2>
              <div className="font-sans text-white/90 text-lg leading-[1.8] space-y-4">
                <p>
                  Matt Lange started {companyName} after years in the Marines and another decade buying and renovating houses across {marketName}. Built it with his own crew. Same crew, same trucks, same phone number.
                </p>
                <p>
                  We don't sell your contract to whoever bids highest. We don't pass you to a call center. We don't lowball you and chip the number at the table.
                </p>
                <p>
                  When you call us, you talk to a real person in {marketName}. When you sign with us, we close. Same offer. Same date. Same handshake.
                </p>
                <p>
                  This isn't a national wholesaler. It's not a private equity fund. It's a family business that's been buying homes the right way for years.
                </p>
                <p className="font-serif text-xl text-[#6B8F71]">
                  Marine Veteran owned. One family. Same crew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Recent Closings */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] text-center mb-16">
            See the Work. Then Picture Yours.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-dated-kitchen.jpg" alt="Dated kitchen before cash purchase" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-keys-couple.jpg" alt="Sellers walking away with cash in hand" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-[#6B8F71] text-white text-xs px-2 py-1 rounded">SOLD</span>
                </div>
              </div>
              <p className="font-sans text-[#2C2C2C] font-medium">Inherited Home — Jackson, TN</p>
            </div>

            {/* Project 2 */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-homeowner-repair.jpg" alt="Homeowner facing a long list of repairs" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-handshake.jpg" alt="Handshake at the closing table" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-[#6B8F71] text-white text-xs px-2 py-1 rounded">SOLD</span>
                </div>
              </div>
              <p className="font-sans text-[#2C2C2C] font-medium">As-Is Sale — Memphis, TN</p>
            </div>

            {/* Project 3 */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-empty-rooms.jpg" alt="Empty house left behind after a move" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-couple-window.jpg" alt="Sellers moving on to the next chapter" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-[#6B8F71] text-white text-xs px-2 py-1 rounded">SOLD</span>
                </div>
              </div>
              <p className="font-sans text-[#2C2C2C] font-medium">Out-of-State Owner — Murfreesboro, TN</p>
            </div>

            {/* Project 4 */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-frustrated-laptop.jpg" alt="Homeowner stuck on the market for months" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">BEFORE</span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image src="/images/adv-couple-kitchen.jpg" alt="Family relieved after closing" fill className="object-cover rounded-lg" unoptimized />
                  <span className="absolute top-2 left-2 bg-[#6B8F71] text-white text-xs px-2 py-1 rounded">SOLD</span>
                </div>
              </div>
              <p className="font-sans text-[#2C2C2C] font-medium">Tired Landlord — Clarksville, TN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="py-20 md:py-28 bg-[#F5F3EF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] text-center mb-16">
            What {marketName} Homeowners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="font-sans text-[#2C2C2C] leading-relaxed mb-6 italic">
                "From the first call I knew this was different. Matt sat at my kitchen table and walked me through exactly how he got to the number. No pressure, no song and dance. The offer he quoted is what hit my account. Felt like dealing with a neighbor, not a wholesaler."
              </p>
              <p className="font-sans text-[#2C2C2C]/70 text-sm">
                — Susan M., Jackson | Inherited Home Sale
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="font-sans text-[#2C2C2C] leading-relaxed mb-6 italic">
                "We had been burned by a cash buyer once before. Got a great number, then they tried to chop $30K off two weeks in. With {companyName}, the price never moved. We closed on the date we picked. That's all we wanted."
              </p>
              <p className="font-sans text-[#2C2C2C]/70 text-sm">
                — Robert & Linda T., Memphis | As-Is Sale
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="font-sans text-[#2C2C2C] leading-relaxed mb-6 italic">
                "I live out of state and the house had been a rental headache for years. Matt's team handled everything from a thousand miles away. Real number, real date, no surprises. Sold in three weeks without flying back once."
              </p>
              <p className="font-sans text-[#2C2C2C]/70 text-sm">
                — Jennifer K., Out-of-State Owner | Murfreesboro Sale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] text-center mb-16">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            <AccordionItem value="item-1" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                What happens when I submit my information?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                We review the property details, pull comparable closed sales in your area, and call you within 24 hours with a real cash number. We walk you through how we got there in plain English. If you like the offer, we move forward. If not, no hard feelings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                How do you decide what to pay for my house?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                We use the same comparable closed sales any appraiser would, subtract the work the house needs, subtract our holding and closing costs, and that's the number we quote. We show you the math. No magic, no inflated promises we walk back later.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                Will the offer change after I sign?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                No. The number we quote is the number we pay. We do not have a re-trade clause. We do not chip the price at closing if something turns up. We price for the house as it stands, and we close at that price.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                Do I need to clean or repair anything?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                No. Take what you want and leave the rest. We buy the house as it stands. Old furniture, broken HVAC, that storage room you have not opened in five years. We handle all of it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                We serve homeowners across {marketName}. Jackson, Memphis, Murfreesboro, Clarksville, and the surrounding towns. If you are not sure if your area qualifies, send us the address and we will tell you straight.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                How fast can you actually close?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                As fast as seven days if the title is clean and you are ready. Most sellers pick a date thirty to sixty days out so they have time to move. You pick the date. We work around your schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                What if I am not sure I want to sell yet?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                That is fine. Getting the number does not commit you to anything. Lots of homeowners get the offer, take a few weeks to talk it over with family, and come back when they are ready. Or not. Either way, the number is yours to keep.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-[#E8E6E1] rounded-lg px-6">
              <AccordionTrigger className="font-sans text-[#2C2C2C] font-medium text-left py-6">
                Who actually shows up at closing?
              </AccordionTrigger>
              <AccordionContent className="font-sans text-[#2C2C2C]/80 pb-6 leading-relaxed">
                You sit down with a local title company in {marketName}. Same one we use every time. You sign, they wire the funds, you walk out. We are there if you want us to be. If you would rather just sign and go, that works too.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section 10: Final CTA — uses the existing SurveyCard */}
      <section id="contact-form" className="py-20 md:py-28 bg-[#F5F3EF] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C] leading-tight">
                The House Has Been Waiting Long Enough.
              </h2>
              <div className="font-sans text-[#2C2C2C] text-lg leading-[1.8] space-y-4">
                <p>
                  You have been thinking about this for months. You have driven past the place and felt it weigh on you. You have gotten the lowball calls that went nowhere. You have told yourself you would deal with it someday.
                </p>
                <p>
                  Today could be the day someday becomes something real.
                </p>
                <p>
                  Tell us about the house. Get a real cash number. Then decide if it is time.
                </p>
                <p className="font-medium">
                  No obligation. No pressure. Just a real number from a real person in {marketName}.
                </p>
              </div>
            </div>

            <div>
              <SurveyCard
                phoneDisplay={phoneDisplay}
                phoneHref={phoneHref}
                serviceAreas={serviceAreas}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Footer */}
      <footer className="py-12 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-xl text-white mb-4">
            {companyName}
          </p>
          <p className="font-sans text-white/70 mb-4">
            Marine Veteran Owned · Family Operated
          </p>
          <p className="font-sans text-white/70 mb-6">
            Serving {marketName}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/70">
            <a href={telHref(phoneHref)} className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-sans text-sm">{phoneDisplay}</span>
            </a>
            <a href={`mailto:${supportEmail}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-sans text-sm">{supportEmail}</span>
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-white/50 text-xs">
            <a href="/privacy" className="hover:text-white/80 transition-colors">Privacy</a>
            <span>·</span>
            <a href="/terms" className="hover:text-white/80 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
