// Editorial School Journal videos: framed documentary windows with short, useful descriptions.
import { ArrowUpRight, Play } from "lucide-react";

const videos = [
  { id: 1, title: "A morning in the studio", youtubeUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4", description: "A short look at how making and reflection share the same table." },
  { id: 2, title: "Questions worth carrying", youtubeUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ", description: "Students and mentors on the questions that keep following them home." },
  { id: 3, title: "The community classroom", youtubeUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U", description: "Learning in the wider valley, with the people who make it possible." },
];

export default function Videos() {
  return (
    <section className="bg-ink py-24 text-white sm:py-32">
      <div className="container"><div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end"><div><p className="chapter-mark text-coral">Moving image / 06</p><h2 className="mt-7 max-w-2xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">A school is always in motion.</h2></div><p className="max-w-xs text-sm leading-7 text-white/60">Short films from the workshops, questions, and journeys between the bells.</p></div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">{videos.map((video) => <article key={video.id} className="group"><div className="relative aspect-video overflow-hidden rounded-[1.2rem] rounded-br-md bg-white/10"><iframe src={video.youtubeUrl} title={video.title} className="absolute inset-0 h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><div className="pointer-events-none absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-coral text-white opacity-0 transition group-hover:opacity-100"><Play className="ml-0.5 h-4 w-4 fill-current" /></div></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="eyebrow text-coral">Film 0{video.id}</p><h3 className="mt-2 font-display text-2xl">{video.title}</h3><p className="mt-2 text-sm leading-6 text-white/60">{video.description}</p></div><ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-coral transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div></article>)}</div>
      </div>
    </section>
  );
}
