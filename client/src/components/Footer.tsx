// Editorial School Journal footer: an unhurried closing page with contact clarity and useful escape routes.
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { Link } from "wouter";
import { schoolConfig } from "@/lib/school-config";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_0.9fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={schoolConfig.logo}
                alt={`${schoolConfig.name} mark`}
                className="h-12 w-12 rounded-full bg-white/10 p-1.5"
              />
              <p className="font-display text-3xl">{schoolConfig.shortName}</p>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              {schoolConfig.description} A good school leaves a useful trace.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={schoolConfig.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-coral hover:text-coral"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={schoolConfig.social.youtube}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-coral hover:text-coral"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={schoolConfig.social.whatsapp}
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-coral hover:text-coral"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/school"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded-full border border-white/15 p-2.5 text-white/70 transition hover:border-coral hover:text-coral"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-coral">Find us</p>
            <div className="mt-5 flex items-start gap-3 text-sm leading-7 text-white/70">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-coral" />
              <span>
                {schoolConfig.location}
                <br />
                Koshi Province, Nepal
              </span>
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
              IEMIS
            </p>
            <p className="mt-1 text-sm text-white/70">
              {schoolConfig.iemisCode.replace("IEMIS CODE: ", "")}
            </p>
          </div>
          <div>
            <p className="eyebrow text-coral">Talk to the office</p>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <a
                href={`tel:${schoolConfig.phone}`}
                className="focus-ring flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-coral" /> {schoolConfig.phone}
              </a>
              <a
                href={`mailto:${schoolConfig.email}`}
                className="focus-ring flex items-center gap-3 break-all transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-coral" /> {schoolConfig.email}
              </a>
            </div>
            <a
              href="/contact"
              className="focus-ring mt-7 inline-flex rounded-full border border-white/25 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[0.13em] transition hover:border-coral hover:text-coral"
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {schoolConfig.name}. Made for
            learning.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="focus-ring transition hover:text-white"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms-of-service"
              className="focus-ring transition hover:text-white"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
