import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabrielle Mai.Co — 360° Creative Agency" },
      { name: "description", content: "GMA is a London-based 360° creative agency elevating brands through strategy, production, social and PR." },
      { property: "og:title", content: "Gabrielle Mai.Co — 360° Creative Agency" },
      { property: "og:description", content: "Strategy, production, social and PR for brands and creatives." },
    ],
  }),
  component: Home,
});
