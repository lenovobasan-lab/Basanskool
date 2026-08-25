// Editorial School Journal notices page: a chapter opener for the live school record.
import Notices from "@/components/Notices";

export default function NoticesPage() {
  return <><section className="bg-ink px-0 pb-16 pt-40 text-white sm:pb-20 sm:pt-48"><div className="container"><p className="chapter-mark text-coral">Chapter / 07</p><h1 className="mt-7 max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl">Things worth <span className="text-coral">knowing.</span></h1><p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Dates, invitations, and useful notes from across the SRB community.</p></div></section><Notices /></>;
}
