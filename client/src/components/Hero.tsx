// Editorial School Journal hero: documentary image, deliberate negative space, coral chapter cues, and motion that stays quiet.
import { ArrowDown, ArrowUpRight, BookOpen, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { schoolConfig } from "@/lib/school-config";

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setOffset({ x: (event.clientX / window.innerWidth - 0.5) * 16, y: (event.clientY / window.innerHeight - 0.5) * 10 });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-ink text-white lg:min-h-screen">
      <div className="absolute inset-0 scale-[1.05] bg-cover bg-center transition-transform duration-700 ease-out" style={{ backgroundImage: `url(${schoolConfig.coverImage})`, transform: `translate3d(${offset.x * 0.02}px, ${offset.y * 0.02}px, 0) scale(1.05)` }} aria-hidden="true" />
      <div className="hero-vignette absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl animate-glow" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-12 right-10 h-72 w-72 rounded-full bg-indigo-400/15 blur-3xl animate-glow animation-delay-2000" aria-hidden="true" />

      <div className="container relative z-10 flex min-h-[720px] flex-col justify-center pb-20 pt-40 lg:min-h-screen lg:pb-28 lg:pt-44">
        <div className="max-w-3xl">
          <div className="animate-fade-in flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/70"><span className="h-px w-10 bg-coral" /> Estd. 2025 BS · Ilam, Nepal</div>
          <h1 className="animate-slide-up mt-7 max-w-4xl font-display text-[clamp(3.7rem,9vw,8rem)] leading-[0.88] tracking-[-0.055em] text-white">A place to practice <span className="text-coral">becoming.</span></h1>
          <p className="animate-fade-in-delayed mt-8 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{schoolConfig.description} Our days are made of questions, friendships, and the confidence to make something useful.</p>
          <div className="animate-scale-in mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={schoolConfig.enrollmentFormUrl} target="_blank" rel="noreferrer" className="button-signal focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-coral px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white">Enroll now <ArrowUpRight className="h-4 w-4" /></a>
            <Link href="/about" className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-white/35 bg-white/10 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.13em] text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/20">Read our story <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>

        <div className="mt-auto grid max-w-2xl grid-cols-2 gap-8 border-t border-white/20 pt-6 sm:grid-cols-3 lg:mt-20">
          <div><p className="text-2xl font-extrabold tracking-tight">55+</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-white/60">Years of learning</p></div>
          <div><p className="text-2xl font-extrabold tracking-tight">1:8</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-white/60">Teacher / learner ratio</p></div>
          <div className="hidden sm:block"><p className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"><MapPin className="h-5 w-5 text-coral" /> 27°N</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-white/60">A school with a view</p></div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65 lg:flex"><BookOpen className="h-4 w-4 text-coral" /> Field note 01 <span className="h-px w-10 bg-white/30" /></div>
      <a href="#principal" aria-label="Scroll to principal's message" className="focus-ring absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60 transition hover:text-white md:flex"><span>Scroll to explore</span><ArrowDown className="h-4 w-4 animate-bounce text-coral" /></a>
    </section>
  );
}
