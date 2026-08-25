// Editorial School Journal principal letter: a human portrait, letterform rhythm, and a small bilingual bridge.
import { ArrowUpRight, Quote } from "lucide-react";
import { Link } from "wouter";
import { assetUrl, schoolConfig } from "@/lib/school-config";

export const principalData = {
  name: "Mrs.Chuda Devi Poudel",
  title: "Principal & Founding Educator",
  image: assetUrl("staff/principal.jpg"),
  message:
    "A school is not only a place where a child learns what is already known. It is a place where they learn to notice, to ask better questions, and to take responsibility for what happens next. At SRB, we make room for rigorous study and for the slower work of becoming dependable to one another.",
  nepali: "विद्यालय केवल एउटा यस्तो ठाउँ मात्र होइन जहाँ बालबालिकाले पहिल्यैदेखि थाहा भएका कुराहरू मात्र सिक्छन्। यो यस्तो ठाउँ हो जहाँ उनीहरूले सूक्ष्म अवलोकन गर्न, अझ राम्रा प्रश्नहरू सोध्न र त्यसपछिका घटनाहरूको जिम्मेवारी लिन सिक्छन्। यस स्कुलमा, हामी गहिरो अध्ययनका साथै एक-अर्काप्रति भरपर्दो बन्ने यो समय लाग्ने तर अर्थपूर्ण कामको लागि पनि ठाउँ बनाउँछौं।",
};

export default function PrincipalMessage() {
  return (
    <section id="principal" className="paper-grain bg-paper py-24 text-ink sm:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.83fr_1.17fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md animate-scale-in lg:mx-0">
            <div className="absolute -left-5 -top-5 h-20 w-20 border-l-2 border-t-2 border-coral" aria-hidden="true" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] rounded-br-[0.45rem] bg-paper-deep shadow-[0_26px_60px_rgba(23,42,77,0.18)]">
              <img src={principalData.image} alt={`${principalData.name}, ${principalData.title}`} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-6 pb-6 pt-16 text-white">
                <p className="font-display text-3xl">{principalData.name}</p>
                <p className="mt-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/70">{principalData.title}</p>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-coral px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-lg sm:-right-8"><span className="block opacity-65">Letter no.</span><span className="mt-0.5 block text-2xl tracking-normal">01</span></div>
          </div>

          <div className="max-w-2xl">
            <p className="chapter-mark">From the principal's desk</p>
            <h2 className="mt-7 font-display text-5xl leading-[0.96] tracking-[-0.04em] sm:text-7xl">The day is made of <span className="text-coral">small acts.</span></h2>
            <div className="mt-8 flex gap-4">
              <Quote className="mt-1 h-7 w-7 shrink-0 text-coral" />
              <p className="bg-gradient-to-r from-[#b33436] via-[#b78319] to-[#315e9b] bg-clip-text text-lg font-bold leading-8 text-transparent sm:text-xl">{principalData.message}</p>
            </div>
            <p className="mt-7 text-justify text-base leading-8 text-ink-soft sm:text-lg">{principalData.nepali}</p>
            <div className="mt-9 flex items-center gap-5 border-t border-line pt-6"><span className="font-display text-2xl">With care,</span><span className="h-px w-16 bg-coral" /><span className="text-xs font-extrabold uppercase tracking-[0.12em] text-ink-soft">Chuda Devi Poudel</span></div>
            <Link href="/about" className="focus-ring mt-9 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-coral transition hover:gap-3">Read about our approach <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
