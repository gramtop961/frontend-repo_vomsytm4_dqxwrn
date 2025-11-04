import { Gamepad2, Github, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-black/30 px-4 py-3 backdrop-blur-xl ring-1 ring-white/10">
          <a href="#" className="flex items-center gap-2 text-white">
            <Gamepad2 className="h-6 w-6 text-purple-400" />
            <span className="text-sm font-semibold tracking-wide uppercase text-white/90">Nightfall Games</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#showcase" className="transition hover:text-white">Games</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
