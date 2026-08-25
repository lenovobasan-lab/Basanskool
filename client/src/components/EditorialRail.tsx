// Editorial School Journal rail: a slim page index that keeps long pages oriented like a printed chapter.
import { Link } from "wouter";

export default function EditorialRail({ chapter, label }: { chapter: string; label: string }) {
  return <aside className="pointer-events-none absolute left-5 top-24 hidden h-[calc(100%-12rem)] min-h-[420px] xl:flex xl:flex-col xl:items-center xl:justify-between"><div className="flex items-center gap-3 [writing-mode:vertical-rl]"><span className="h-8 w-px bg-coral" /><span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink-soft">{label}</span></div><div className="flex flex-col items-center gap-3"><span className="text-[10px] font-extrabold tracking-[0.16em] text-coral">{chapter}</span><span className="h-16 w-px bg-line" /></div><Link href="/" aria-label="Back to home" className="pointer-events-auto text-[9px] font-extrabold uppercase tracking-[0.18em] text-ink-soft [writing-mode:vertical-rl] transition hover:text-coral">SRB School / Home</Link></aside>;
}
