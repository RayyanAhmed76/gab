import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block mix-blend-difference"
      animate={{ x: pos.x - 12, y: pos.y - 12, scale: hover ? 2.4 : 1 }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.3 }}
    >
      <div className="h-6 w-6 rounded-full bg-cream" />
    </motion.div>
  );
}
