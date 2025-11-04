import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0c0c0f]" aria-label="Hero">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fvh1rcczCU4MCcKH/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        {/* Subtle gradient overlays that don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0c0c0f]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0c0c0f] to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-36 text-center sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          One Halloween Night
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          A minimalist horror vibe: sharp trees, creeping shadows, and choices that linger. Dive into a short, moody game experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://ollienoseworthy.itch.io/one-halloween-night"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:bg-purple-400"
          >
            Play on itch.io
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            Browse games
          </a>
        </motion.div>
      </div>
    </section>
  );
}
