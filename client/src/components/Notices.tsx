// Editorial School Journal notices: dated, skimmable, and treated like carefully pinned campus records.
import { ArrowUpRight, CalendarDays, Pin } from "lucide-react";
import { Link } from "wouter";
import EditorialRail from "@/components/EditorialRail";
import { assetUrl } from "@/lib/school-config";

const noticesData = [
  { id: 1, title: "Admissions for 2026 are now open", date: "18 Aug 2026", image: assetUrl("hero/cover.png"), description: "Applications are open for Grades 1–8. Visit the admissions desk or write to our office to begin a conversation." },
  { id: 2, title: "Founder's Day: the long table", date: "07 Aug 2026", image: assetUrl("events/cultural-program.JPG"), description: "Families and alumni are invited to an afternoon of shared food, student work, and stories from the early years." },
  { id: 3, title: "Term II learning conferences", date: "28 Jul 2026", image: assetUrl("events/science-exhibition.jpg"), description: "Conference sign-ups are available through the class mentors. Please reserve one slot per learner." },
  { id: 4, title: "Community garden workday", date: "15 Jul 2026", image: assetUrl("events/sports-day.JPEG"), description: "A Saturday morning of planting, repairing, and making the garden classroom ready for the monsoon term." },
  { id: 5, title: "Library hours during the break", date: "30 Jun 2026", image: assetUrl("notices/vacation-schedule.jpg"), description: "The library remains open on Tuesday and Thursday afternoons for reading, returns, and quiet project time." },
  { id: 6, title: "Student council nominations", date: "18 Jun 2026", image: assetUrl("events/cultural-program-5.JPG"), description: "Learners in Grades 6–8 can nominate themselves or a peer for the next student council cycle." },
];

export default function Notices() {
  return (
    <section className="paper-grain relative bg-paper py-24 text-ink sm:py-32">
      <EditorialRail chapter="07" label="Noticeboard / 2026" />
      <div className="container"><div className="flex flex-col justify-between gap-8 border-b border-line pb-10 md:flex-row md:items-end"><div><p className="chapter-mark">Noticeboard / 07</p><h2 className="mt-7 max-w-2xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">Things worth knowing.</h2></div><p className="max-w-xs text-sm leading-7 text-ink-soft">Dates, invitations, and useful notes from across the RBS community.</p></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">{noticesData.map((notice, index) => <article key={notice.id} className="lift-card group flex gap-4 rounded-[1.25rem] rounded-br-md border border-line border-l-2 border-l-coral bg-white/55 p-4 dark:bg-white/5 sm:gap-6 sm:p-5"><div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-paper-deep sm:h-24 sm:w-24"><img src={notice.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-coral"><CalendarDays className="h-3.5 w-3.5" /> {notice.date}</span><span className="text-[10px] font-bold text-ink-soft">0{index + 1}</span></div><h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{notice.title}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">{notice.description}</p></div></article>)}</div>
        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl bg-ink p-6 text-white sm:flex-row sm:items-center sm:p-8"><div className="flex items-start gap-4"><Pin className="mt-1 h-5 w-5 shrink-0 text-coral" /><div><p className="font-display text-2xl">Need an older notice?</p><p className="mt-1 text-sm text-white/60">Our office can help you find the right date or document.</p></div></div><Link href="/contact" className="focus-ring inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-coral px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-white hover:text-ink">Ask the office <ArrowUpRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}
