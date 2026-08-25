// Editorial School Journal header: catalog-like metadata, visible mark, coral action cues, and an immediate mobile drawer.
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { schoolConfig } from "@/lib/school-config";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Principal", href: "/#principal" },
  { label: "Staff", href: "/staff" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [location] = useLocation();

  useEffect(() => {
    const dismissed = sessionStorage.getItem("srb-announcement-dismissed");
    if (dismissed === "true") setAnnouncementVisible(false);
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismissAnnouncement = () => {
    sessionStorage.setItem("srb-announcement-dismissed", "true");
    setAnnouncementVisible(false);
  };

  const isHome = location === "/";
  const headerClass = isHome && !scrolled
    ? "absolute text-white"
    : "sticky bg-paper/95 text-ink shadow-[0_1px_0_rgba(23,42,77,0.12)] backdrop-blur-md";

  return (
    <>
      {announcementVisible && (
        <div className="relative z-50 bg-coral px-4 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
          <span>Admissions for 2026 are now open</span>
          <Link href="/contact" className="ml-2 underline decoration-white/60 underline-offset-4 hover:decoration-white">Ask the admissions office <ArrowUpRight className="ml-1 inline h-3 w-3" /></Link>
          <button aria-label="Dismiss announcement" onClick={dismissAnnouncement} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-80 transition hover:opacity-100"><X className="h-3.5 w-3.5" /></button>
        </div>
      )}
      <header style={isHome && !scrolled ? { top: announcementVisible ? "29px" : "0px" } : undefined} className={`left-0 top-0 z-40 w-full transition-colors duration-300 ${headerClass}`}>
        <div className="container flex min-h-[78px] items-center justify-between gap-5">
          <Link href="/" className="focus-ring group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full border border-white/30 bg-white/10 p-2 shadow-sm backdrop-blur-sm transition group-hover:rotate-[-4deg]">
              <img src={schoolConfig.logo} alt={`${schoolConfig.name} mark`} className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block max-w-[190px] truncate font-display text-xl leading-none tracking-[-0.02em] sm:max-w-none sm:text-[1.45rem]">{schoolConfig.name}</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] opacity-65">{schoolConfig.iemisCode}</span>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="focus-ring relative py-2 text-[11px] font-extrabold uppercase tracking-[0.13em] opacity-75 transition hover:opacity-100">
                {item.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-coral transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
            <div className="group relative">
              <a href={schoolConfig.enrollmentFormUrl} target="_blank" rel="noreferrer" className="button-signal focus-ring inline-flex items-center gap-2 rounded-full bg-coral px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-red-500">
                Enroll now <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <div className="pointer-events-none absolute right-0 top-[calc(100%+12px)] z-50 w-48 translate-y-2 rounded-2xl border border-line bg-paper p-3 text-ink opacity-0 shadow-xl transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <QRCodeSVG value={schoolConfig.enrollmentFormUrl} size={128} includeMargin className="mx-auto h-auto w-full" />
                <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-ink-soft">Scan for admissions</p>
              </div>
            </div>
          </nav>

          <button aria-label="Open navigation menu" onClick={() => setOpen(true)} className="focus-ring rounded-full border border-current/20 p-2.5 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button aria-label="Close navigation menu" className="absolute inset-0 bg-ink/45 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[min(88vw,380px)] overflow-y-auto bg-paper px-6 py-6 text-ink shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img src={schoolConfig.logo} alt={`${schoolConfig.name} mark`} className="h-11 w-11 rounded-full object-contain" />
                <div><p className="font-display text-xl">{schoolConfig.shortName}</p><p className="eyebrow mt-1 text-[9px]">Explore the school</p></div>
              </Link>
              <button aria-label="Close navigation menu" onClick={() => setOpen(false)} className="rounded-full bg-paper-deep p-2"><X className="h-5 w-5" /></button>
            </div>
            <div className="my-8 section-rule" />
            <nav aria-label="Mobile navigation" className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="focus-ring block border-l-2 border-transparent py-3 pl-4 font-display text-3xl transition hover:border-coral hover:pl-6 hover:text-coral">{item.label}</Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)} className="focus-ring block border-l-2 border-transparent py-3 pl-4 font-display text-3xl transition hover:border-coral hover:pl-6 hover:text-coral">Contact</Link>
            </nav>
            <a href={schoolConfig.enrollmentFormUrl} target="_blank" rel="noreferrer" className="button-signal mt-8 flex items-center justify-between rounded-xl bg-coral px-5 py-4 text-sm font-extrabold text-white">Enroll now <ArrowUpRight className="h-5 w-5" /></a>
            <div className="mt-7 rounded-2xl bg-white/55 p-4 text-center dark:bg-white/5"><QRCodeSVG value={schoolConfig.enrollmentFormUrl} size={168} includeMargin className="mx-auto h-auto max-w-full" /><p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink-soft">Scan for admissions</p></div>
          </div>
        </div>
      )}
    </>
  );
}
