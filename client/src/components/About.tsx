// Editorial School Journal about section: offset reading measure, field-note metadata, and paper-card storytelling.
import { ArrowUpRight, Compass, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { schoolConfig } from "@/lib/school-config";
import EditorialRail from "@/components/EditorialRail";

const principles = [
  { icon: Sparkles, label: "Curiosity", text: "We help learners move from a correct answer to a better question." },
  { icon: HeartHandshake, label: "Character", text: "We practice the everyday habits that make a community trustworthy." },
  { icon: Compass, label: "Contribution", text: "We connect classroom knowledge to the places and people around us." },
];

export default function About() {
  return (
    <section className="paper-grain relative bg-paper py-24 text-ink sm:py-32">
      <EditorialRail chapter="02" label="About / 2026" />
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <p className="chapter-mark">Field note / 02</p>
            <h2 className="mt-7 max-w-sm font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">Learning with the windows open.</h2>
            <p className="mt-7 max-w-sm text-base leading-8 text-ink-soft">We are a school for families who want a rigorous education to feel personal, visible, and connected to real life.</p>
            <Link href="/about" className="focus-ring mt-8 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-coral transition hover:gap-3">Our full story <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.6rem] rounded-br-md bg-ink p-7 text-white sm:translate-y-10 sm:p-9">
              <p className="eyebrow text-coral">Mission</p>
              <h3 className="mt-7 font-display text-4xl leading-none">Make learning useful.</h3>
              <p className="mt-6 text-sm leading-7 text-white/70">Give every learner the knowledge, confidence, and care to contribute to the world they share.</p>
            </div>
            <div className="rounded-[1.6rem] rounded-tl-md border border-line bg-white/55 p-7 sm:p-9 dark:bg-white/5">
              <p className="eyebrow">Vision</p>
              <h3 className="mt-7 font-display text-4xl leading-none">Grow a wider view.</h3>
              <p className="mt-6 text-sm leading-7 text-ink-soft">A school where questions travel beyond the classroom and young people know how to look after one another.</p>
            </div>
          </div>
        </div>

        <div className="mt-28 grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[340px] overflow-hidden rounded-[1.6rem] rounded-bl-md bg-paper-deep">
            <img src="/events/science-exhibition.jpg" alt="Students collaborating around a model bridge in the school workshop" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 text-white sm:p-9"><p className="eyebrow text-coral">A day at SRB School</p><p className="mt-3 max-w-sm font-display text-3xl leading-tight">The best lessons leave the room with you.</p></div>
          </div>
          <div className="flex flex-col justify-between rounded-[1.6rem] rounded-tr-md bg-white/55 p-7 dark:bg-white/5 sm:p-9">
            <div><p className="chapter-mark">The place we share</p><p className="mt-6 text-base leading-8 text-ink-soft">From our garden classroom to the library tables, the school is designed to make conversation, concentration, and movement feel natural.</p></div>
            <div className="mt-10 flex items-start gap-4 border-t border-line pt-6"><MapPin className="mt-1 h-5 w-5 shrink-0 text-coral" /><div><p className="font-extrabold">{schoolConfig.location}</p><p className="mt-1 text-sm text-ink-soft">A hillside school in the heart of Ilam.</p></div></div>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {principles.map(({ icon: Icon, label, text }) => <div key={label} className="bg-paper p-6 sm:p-7"><Icon className="h-5 w-5 text-coral" /><p className="mt-5 font-display text-2xl">{label}</p><p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
