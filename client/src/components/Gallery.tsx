// Editorial School Journal gallery: image stories move like pages, with clear captions and restrained controls.
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Videos from "@/components/Videos";
import EditorialRail from "@/components/EditorialRail";

export const galleryEvents = [
  {
    title: "Cultural Program",
    photos: [
      { src: "/events/cultural-program.JPG", alt: "Students gathering in the school courtyard" },
      { src: "/events/cultural-program-2.JPG", alt: "Students crossing the school lawn" },
      { src: "/events/cultural-program-3.JPG", alt: "Students working together at a classroom table" },
      { src: "/events/cultural-program-4.JPG", alt: "Students taking part in a cultural program" },
      { src: "/events/cultural-program-5.JPG", alt: "Students sharing a cultural performance" },
      { src: "/events/cultural-program-6.JPG", alt: "Students celebrating together at school" },
    ],
  },
  {
    title: "Science in practice",
    photos: [
      { src: "/events/science-exhibition.jpg", alt: "Students presenting a science exhibition" },
      { src: "/events/science-fair-2.JPG", alt: "Students demonstrating a science project" },
      { src: "/events/science-fair-3.jpg", alt: "Students exploring a science fair display" },
      { src: "/events/science-fair-4.jpg", alt: "Students working on a science experiment" },
    ],
  },
  {
    title: "Sports day",
    photos: [
      { src: "/events/sports-day.JPEG", alt: "Students taking part in sports day" },
      { src: "/events/sports-day-2.JPEG", alt: "Students competing during sports day" },
      { src: "/events/sports-day-3.JPEG", alt: "Students celebrating at sports day" },
    ],
  },
];

function EventCarousel({ event }: { event: (typeof galleryEvents)[number] }) {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % event.photos.length), 4000);
    return () => window.clearInterval(timer);
  }, [event.photos.length]);

  useEffect(() => {
    setLoaded(false);
    const image = new window.Image();
    image.onload = () => setLoaded(true);
    image.src = event.photos[active].src;
  }, [active, event.photos]);

  const next = () => setActive((current) => (current + 1) % event.photos.length);
  const previous = () => setActive((current) => (current - 1 + event.photos.length) % event.photos.length);

  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] rounded-br-md border-b-[3px] border-coral bg-ink shadow-[0_16px_40px_rgba(23,42,77,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        {!loaded && <Skeleton className="absolute inset-0 z-10 h-full w-full rounded-none bg-white/10" />}
        <img src={event.photos[active].src} alt={event.photos[active].alt} onLoad={() => setLoaded(true)} className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.03] ${loaded ? "opacity-100" : "opacity-0"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6"><div className="flex items-end justify-between gap-4"><div><p className="eyebrow text-coral">Photo essay</p><h3 className="mt-2 font-display text-3xl">{event.title}</h3></div><span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65"><Images className="h-3.5 w-3.5" /> {event.photos.length} frames</span></div><div className="mt-5 flex items-center justify-between"><div className="flex items-center gap-1.5" aria-label={`Slide ${active + 1} of ${event.photos.length}`}>{event.photos.map((photo, index) => <button key={photo.src} onClick={() => setActive(index)} aria-label={`View photo ${index + 1}`} className={`h-1.5 rounded-full bg-white transition-all duration-300 ${index === active ? "w-6" : "w-1.5 opacity-55"}`} />)}</div><div className="flex gap-2 opacity-0 transition group-hover:opacity-100 focus-within:opacity-100"><button onClick={previous} aria-label={`Previous ${event.title} photo`} className="focus-ring rounded-full border border-white/40 bg-ink/20 p-2 transition hover:bg-white hover:text-ink"><ChevronLeft className="h-4 w-4" /></button><button onClick={next} aria-label={`Next ${event.title} photo`} className="focus-ring rounded-full border border-white/40 bg-ink/20 p-2 transition hover:bg-white hover:text-ink"><ChevronRight className="h-4 w-4" /></button></div></div></div>
      </div>
    </article>
  );
}

export default function Gallery() {
  return (
    <>
      <section className="paper-grain relative bg-paper py-24 text-ink sm:py-32">
        <EditorialRail chapter="05" label="Archive / 2026" />
        <div className="container">
          <div className="flex flex-col justify-between gap-8 border-b border-line pb-10 md:flex-row md:items-end"><div><p className="chapter-mark">Archive / 05</p><h2 className="mt-7 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">See how the day is made.</h2></div><p className="max-w-xs text-sm leading-7 text-ink-soft">A few frames from the rooms, routes, and rituals that make up school life.</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{galleryEvents.map((event) => <EventCarousel key={event.title} event={event} />)}</div>
        </div>
      </section>
      <Videos />
    </>
  );
}
