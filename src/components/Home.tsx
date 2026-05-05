import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import feed1 from "@/assets/feed-1.jpg";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Cursor } from "@/components/Cursor";

const services = [
  "Creative Marketing",
  "Production",
  "Social First Campaigns",
  "Social Media Content & Management",
  "Email Marketing",
  "Creative Strategy",
  "PR & Communications",
  "Wardrobe & Prop Styling",
];

const works = [
  { title: "SS26 Style Guide", client: "GMA Edition", img: work1, year: "2026" },
  { title: "London Laundry Club Launch", client: "Bruelondon", img: work2, year: "2025" },
  { title: "Knack Snacks Campaign", client: "Knack", img: work3, year: "2025" },
  { title: "Quarter Proof", client: "Case Study", img: work4, year: "2024" },
  { title: "Product Updates", client: "Collagevita", img: work5, year: "2024" },
];

const feed = [
  { tag: "AI / Editorial", text: "Fun with AI for Knack Snacks", img: work3 },
  { tag: "Events", text: "December event content for Made with Manners", img: work2 },
  { tag: "Lifestyle", text: "A stroll in Chelsea never looked so good", img: feed1 },
];

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const [active, setActive] = useState(0);

  return (
    <div id="top" className="bg-background text-foreground">
      <Cursor />
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={heroImg} alt="Editorial portrait" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
        </motion.div>

        <motion.div style={{ y: titleY }} className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-12 md:pb-24">
          <div className="mx-auto w-full max-w-[1600px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8 text-xs uppercase tracking-[0.3em] text-cream"
            >
              ✦ London — Est. Creative Studio
            </motion.p>
            <h1 className="font-display text-[14vw] leading-[0.9] text-cream md:text-[10vw]">
              {"GABRIELLE".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.1 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {c}
                </motion.span>
              ))}
              <br />
              <span className="italic text-accent">Mai</span>
              <span className="text-cream/70">.co</span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
            >
              <p className="max-w-md text-balance text-base text-cream/90 md:text-lg">
                A 360° creative agency elevating brands and the people behind them — through strategy, story and considered design.
              </p>
              <div className="flex gap-4">
                <a href="#work" className="group relative overflow-hidden border border-cream px-8 py-4 text-xs uppercase tracking-[0.2em] text-cream">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-ink">View Portfolio</span>
                  <span className="absolute inset-0 -translate-y-full bg-cream transition-transform duration-500 group-hover:translate-y-0" />
                </a>
                <a href="#contact" className="group relative overflow-hidden bg-cream px-8 py-4 text-xs uppercase tracking-[0.2em] text-ink">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-cream">Enquire Now</span>
                  <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-500 group-hover:translate-y-0" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cream"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            Scroll ↓
          </motion.div>
        </motion.div>
      </section>

      <Marquee items={["Creative Direction", "Brand Story", "Production", "Editorial"]} />

      {/* ABOUT */}
      <section id="about" className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="mb-16 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ◯ 01 — About
            </p>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-8 md:col-start-3">
              {[
                "We are a 360° creative agency that helps elevate brands and creatives",
                "through strategy, marketing, production",
                "and considered communications.",
                "End-to-end execution for your next campaign.",
              ].map((line, i) => (
                <Reveal key={i} delay={i * 0.1} y={60}>
                  <p className="font-display text-3xl leading-[1.2] md:text-5xl md:leading-[1.15]">
                    {line}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border bg-cream px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-20 flex items-end justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                ◯ 02 — Services
              </p>
              <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
                A holistic suite of disciplines, executed in-house with intention.
              </p>
            </div>
          </Reveal>

          <ul className="border-t border-foreground/20">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 0.05} y={20}>
                <li className="group relative overflow-hidden border-b border-foreground/20">
                  <a
                    href="#contact"
                    className="relative z-10 flex items-center justify-between gap-6 py-8 transition-colors duration-500 group-hover:text-cream md:py-10"
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-muted-foreground transition-colors duration-500 group-hover:text-cream/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl tracking-tight md:text-6xl">
                        {s}
                      </span>
                    </span>
                    <motion.span
                      className="text-2xl"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      →
                    </motion.span>
                  </a>
                  <span className="absolute inset-0 -translate-y-full bg-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* WORK CAROUSEL */}
      <section id="work" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  ◯ 03 — Selected Work
                </p>
                <h2 className="font-display text-5xl md:text-7xl">Recent <span className="italic text-accent">campaigns</span></h2>
              </div>
              <div className="hidden font-mono text-xs text-muted-foreground md:block">
                {String(active + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
              </div>
            </div>
          </Reveal>

          <div className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 md:-mx-12 md:px-12">
            {works.map((w, i) => (
              <motion.article
                key={w.title}
                onViewportEnter={() => setActive(i)}
                viewport={{ amount: 0.5 }}
                className="group relative w-[80vw] shrink-0 snap-center md:w-[40vw]"
                data-cursor-hover
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <motion.img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{w.client}</p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl">{w.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{w.year}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY / CLIENTS */}
      <section className="relative overflow-hidden bg-ink px-6 py-32 text-cream md:px-12 md:py-48">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-12 text-xs uppercase tracking-[0.3em] text-cream/60">
              ◯ 04 — Case Study
            </p>
          </Reveal>
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <Reveal>
              <div className="overflow-hidden">
                <img src={work2} alt="Case study" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Bruelondon × London Laundry Club</p>
                <h3 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
                  A launch event that turned a brand <span className="italic">into a moment.</span>
                </h3>
                <p className="mt-8 max-w-md text-cream/70">
                  From wardrobe styling to social-first content capture, GMA produced an evening that lived twice — once in the room and again across screens.
                </p>
                <div className="mt-12 grid grid-cols-3 gap-8 border-t border-cream/15 pt-8">
                  {[
                    ["+312%", "Engagement"],
                    ["1.4M", "Impressions"],
                    ["48", "Press hits"],
                  ].map(([n, l]) => (
                    <div key={l}>
                      <p className="font-display text-3xl md:text-4xl">{n}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-cream/50">{l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-10 text-xs uppercase tracking-[0.3em] text-cream/40">
                  ← Swipe to view results
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEED */}
      <section id="journal" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">◯ 05 — Feed</p>
                <h2 className="font-display text-5xl md:text-7xl">From the <span className="italic text-accent">studio</span></h2>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {feed.map((f, i) => (
              <Reveal key={f.text} delay={i * 0.1}>
                <article className="group cursor-pointer" data-cursor-hover>
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={f.img} alt={f.text} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  </div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-accent">{f.tag}</p>
                  <p className="mt-2 font-display text-2xl">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border bg-cream px-6 py-32 text-center md:py-48">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">◯ 06 — Let's create</p>
          <h2 className="mx-auto mt-8 max-w-5xl text-balance font-display text-6xl leading-[0.95] md:text-[10rem]">
            Book your <span className="italic text-accent">social</span> shoot.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-muted-foreground">
            Enquire for rates, bespoke production packages, and creative direction.
          </p>
          <a
            href="mailto:gabrielle@gabriellemai.com"
            className="group mt-12 inline-flex items-center gap-4 border border-foreground px-10 py-5 text-xs uppercase tracking-[0.3em] transition-all hover:bg-foreground hover:text-background hover:shadow-[0_0_60px_rgba(0,0,0,0.2)]"
          >
            gabrielle@gabriellemai.com
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">◯ 07 — Contact</p>
            <h2 className="mt-6 font-display text-5xl md:text-7xl">Say <span className="italic text-accent">hello.</span></h2>
            <div className="mt-12 space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Email</p>
                <a href="mailto:gabrielle@gabriellemai.com" className="mt-2 block font-display text-2xl underline-offset-4 hover:underline">
                  gabrielle@gabriellemai.com
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Studio</p>
                <p className="mt-2 font-display text-xl leading-relaxed">
                  GMA, Unit B509<br />
                  Bourbon Studios, The Biscuit Factory<br />
                  100 Drummond Road<br />
                  London, SE16 4DG
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch."); }}
              className="space-y-8"
            >
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "brand", label: "Brand / Project", type: "text" },
              ].map((f) => (
                <div key={f.id} className="group relative">
                  <label htmlFor={f.id} className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="mt-2 w-full border-b border-border bg-transparent py-3 font-display text-xl outline-none transition-colors focus:border-foreground"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="msg" className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 font-display text-xl outline-none transition-colors focus:border-foreground"
                />
              </div>
              <button type="submit" className="group relative overflow-hidden bg-foreground px-10 py-5 text-xs uppercase tracking-[0.3em] text-background">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-foreground">Send Enquiry →</span>
                <span className="absolute inset-0 -translate-y-full bg-accent transition-transform duration-500 group-hover:translate-y-0" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink px-6 py-16 text-cream md:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-12 md:flex-row md:justify-between">
            <div>
              <p className="font-display text-5xl">GABRIELLE MAI<span className="text-accent">.</span>CO</p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/50">London — Worldwide</p>
            </div>
            <div className="grid grid-cols-2 gap-12 text-sm md:grid-cols-3">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-cream/40">Navigate</p>
                <ul className="space-y-2">
                  {["Services", "Portfolio", "About", "Contact", "Journal"].map((l) => (
                    <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-accent">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-cream/40">Social</p>
                <ul className="space-y-2">
                  {["Instagram", "TikTok", "LinkedIn", "Pinterest"].map((l) => (
                    <li key={l}><a href="#" className="hover:text-accent">{l} ↗</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-cream/40">Studio</p>
                <p className="text-cream/70">100 Drummond Road<br />London SE16 4DG</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-cream/40 md:flex-row">
            <p>© {new Date().getFullYear()} Gabrielle Mai.Co — All rights reserved</p>
            <p>Crafted with intention</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
