import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="#top" className="font-display text-xl tracking-tight">
          GMA<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs uppercase tracking-[0.2em] text-foreground/80 transition hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-xs uppercase tracking-[0.2em] underline underline-offset-4 hover:text-accent"
        >
          Enquire
        </a>
      </div>
    </motion.header>
  );
}
