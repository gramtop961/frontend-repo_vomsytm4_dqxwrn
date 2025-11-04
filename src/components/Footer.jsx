import { Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-12 border-t border-white/10 bg-[#0a0a0d]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-black/40" />
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Nightfall Games. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
              href="mailto:hello@nightfall.games"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
