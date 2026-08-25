// Editorial School Journal staff directory: portrait-led cards, clear contact details, and a calm catalog rhythm.
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { assetUrl, schoolConfig } from "@/lib/school-config";
import EditorialRail from "@/components/EditorialRail";

const staffData = [
  { id: 1, name: "Mrs.Chuda Devi Poudel", position: "Principal & Founding Educator", contact: "+977-9845123401", image: assetUrl("staff/principal.jpg") },
  { id: 2, name: "Mr. KB Basnet", position: "Head of Learning", contact: "+977-9845123402", image: assetUrl("staff/vice-principal.jpg") },
  { id: 3, name: "Mrs. Niru Rai", position: "Early Childhood Educator", contact: "+977-9845123403", image: assetUrl("staff/ecd-teacher.JPG") },
  { id: 4, name: "Mr. Basanta Bhattarai", position: "Science & ICT", contact: "+977-9845123404", image: assetUrl("staff/science-teacher.PNG") },
  { id: 5, name: "Mr. Bobby Karki ", position: "Department Of English ", contact: "+977-9845123405", image: assetUrl("staff/english-teacher.JPG") },
  { id: 6, name: "Mrs. Mira Humagain", position: "Social Activities & Community Lead", contact: "+977-9845123406", image: assetUrl("staff/social-teacher.jpg") },
  { id: 7, name: "Mr. Pradip Rijal", position: "Mathematics & Design", contact: "+977-9845123407", image: assetUrl("staff/maths-teacher.jpeg") },
  { id: 8, name: "Mrs. Veedhya Laksam", position: "Nepali Language & Culture", contact: "+977-9845123408", image: assetUrl("staff/nepali-teacher.jpg") },
  { id: 9, name: "Mrs. Pranita Khadka", position: "English Language & Arts & Crafts", contact: "+977-9845123409", image: assetUrl("staff/english-teacher2.JPG") },
  { id: 10, name: "Mrs. Bhawana Neupane", position: "Department Of English", contact: "+977-9845123410", image: assetUrl("staff/english-teacher1.jpg") },
  { id: 11, name: "Mrs. Bhagawati Nepal", position: "Department of Nepali Language", contact: "+977-9845123411", image: assetUrl("staff/nepali-teacher1.jpg") },
  { id: 12, name: "Ms. Archana Thami", position: "Dance, Music Arts & Crafts", contact: "+977-9845123412", image: assetUrl("staff/dance-teacher.JPG") },
  { id: 13, name: "Mr. Madan Rai", position: "Department Of English", contact: "+977-9845123413", image: assetUrl("staff/IMG_2885.jpeg") },
];

export default function Staff() {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  return (
    <section className="paper-grain relative bg-paper py-24 text-ink sm:py-32">
      <EditorialRail chapter="04" label="Teachers / 2083" />
      <div className="container">
        <div className="flex flex-col justify-between gap-8 border-b border-line pb-10 md:flex-row md:items-end">
          <div><p className="chapter-mark">Teachers / 04</p><h2 className="mt-7 max-w-2xl font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-7xl">The people who keep the questions moving.</h2></div>
          <p className="max-w-xs text-sm leading-7 text-ink-soft">Teachers, mentors, listeners, and co-conspirators in the work of growing up well.</p>
        </div>
        <div className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {staffData.map((person, index) => (
            <article key={person.id} className="lift-card group relative overflow-hidden rounded-[1.35rem] rounded-br-md border border-line bg-white/60 dark:bg-white/5" style={{ animationDelay: `${index * 70}ms` }}>
              <div className="relative h-80 overflow-hidden bg-paper-deep">
                {!loaded[person.id] && <div className="absolute inset-0 animate-pulse bg-paper-deep" aria-hidden="true" />}
                <img src={person.image} alt={`${person.name}, ${person.position}`} onLoad={() => setLoaded((current) => ({ ...current, [person.id]: true }))} className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${loaded[person.id] ? "opacity-100" : "opacity-0"}`} />
                <span className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ink backdrop-blur">0{index + 1}</span>
              </div>
              <div className="p-6"><p className="eyebrow">Faculty record</p><h3 className="mt-3 font-display text-3xl leading-none">{person.name}</h3><p className="mt-2 text-sm font-bold text-coral">{person.position}</p><div className="mt-6 flex items-center justify-between border-t border-line pt-4"><a href={`tel:${person.contact}`} className="focus-ring inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-ink-soft transition hover:text-coral"><Phone className="h-3.5 w-3.5 text-coral" /> Call</a><a href={`mailto:${person.name.toLowerCase().replaceAll(" ", ".")}@sankalpavalleyschool.edu.np`} aria-label={`Email ${person.name}`} className="focus-ring rounded-full border border-line p-2 text-ink-soft transition hover:border-coral hover:text-coral"><Mail className="h-4 w-4" /></a></div></div>
            </article>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center"><p className="text-sm text-ink-soft">Looking for the right person to speak with?</p><a href={`mailto:${schoolConfig.email}`} className="focus-ring inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-coral">Write to the office <ArrowUpRight className="h-4 w-4" /></a></div>
      </div>
    </section>
  );
}

function schoolConfigEmail() {
  return "hello@srbschool.edu.np";
}
