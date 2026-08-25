// Editorial School Journal staff page: a quiet chapter opener for the people directory.
import Staff from "@/components/Staff";

export default function StaffPage() {
  return <><section className="bg-ink px-0 pb-16 pt-40 text-white sm:pb-20 sm:pt-48"><div className="container"><p className="chapter-mark text-coral">Chapter / 04</p><h1 className="mt-7 max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl">Meet Our Dedicated <span className="text-coral">Staffs.</span></h1><p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">The adults at SRB are here to teach a subject, notice a change, and make room for a question.</p></div></section><Staff /></>;
}
