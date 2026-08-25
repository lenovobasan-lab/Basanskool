// Editorial School Journal gallery page: frame the archive before letting the image stories take over.
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return <><section className="bg-ink px-0 pb-16 pt-40 text-white sm:pb-20 sm:pt-48"><div className="container"><p className="chapter-mark text-coral">Chapter / 05</p><h1 className="mt-7 max-w-4xl font-display text-6xl leading-[0.9] tracking-[-0.05em] sm:text-8xl">A school is always in <span className="text-coral">motion.</span></h1><p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">Look closely: the ordinary moments are where the culture shows itself.</p></div></section><Gallery /></>;
}
