import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ title, description, href, accent }) => (
  <motion.a
    whileHover={{ y: -6 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group relative block overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-[1px] ring-1 ring-white/10"
  >
    <div className="relative h-full rounded-2xl bg-[#0e0e12] p-6">
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent}`}
      />
      <div className="flex items-center gap-2 text-sm text-white/70">
        <Sparkles className="h-4 w-4 text-purple-300" />
        Featured
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/60">{description}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-white/40">itch.io</span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-300 group-hover:text-purple-200">
          Open <ExternalLink className="h-4 w-4" />
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
    </div>
  </motion.a>
);

export default function GameShowcase() {
  return (
    <section id="showcase" className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
          Featured Games
        </h2>
        <p className="mt-3 text-white/60">
          Atmospheric micro-games that blend minimalism and tension.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="One Halloween Night"
          description="A short, moody horror experience in a stylized forest. Make choices, face the unknown, and embrace the chill."
          href="https://ollienoseworthy.itch.io/one-halloween-night"
          accent="bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(168,85,247,0.15),transparent)]"
        />
        <Card
          title="Moonlit Path (Coming Soon)"
          description="A quiet walk under fractured moonlight. Every fork hides a whisper."
          href="#"
          accent="bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(99,102,241,0.15),transparent)]"
        />
        <Card
          title="Echoes in Pine (Coming Soon)"
          description="Listen to the forest breathe while you try not to. Choices echo through the trees."
          href="#"
          accent="bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(34,197,94,0.12),transparent)]"
        />
      </div>
    </section>
  );
}
