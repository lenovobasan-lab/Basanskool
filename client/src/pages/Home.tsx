// Editorial School Journal home: lead with a strong image, then hand the story to the principal and the campus.
import { ArrowUpRight, CalendarDays, Users } from "lucide-react";
import { Link } from "wouter";
import Hero from "@/components/Hero";
import PrincipalMessage from "@/components/PrincipalMessage";
import { schoolConfig } from "@/lib/school-config";

export default function Home() {
  return (
    <>
      <Hero />
      <PrincipalMessage />
      <section className="bg-paper-deep py-16 text-ink sm:py-20"><div className="container"><div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow">Continue the record</p><h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">There is more to see between the bells.</h2></div><div className="flex flex-wrap gap-3"><Link href="/gallery" className="focus-ring inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-coral">View the archive <ArrowUpRight className="h-4 w-4" /></Link><Link href="/notices" className="focus-ring inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] transition hover:border-coral hover:text-coral">Latest notices <CalendarDays className="h-4 w-4" /></Link></div></div><div className="mt-12 grid gap-4 border-t border-line pt-6 text-sm text-ink-soft sm:grid-cols-3"><p className="flex items-center gap-3"><Users className="h-4 w-4 text-coral" /> A school shaped by people</p><p className="hidden sm:block">{schoolConfig.motto}</p><p className="sm:text-right">{schoolConfig.location}</p></div></div></section>
    </>
  );
}
