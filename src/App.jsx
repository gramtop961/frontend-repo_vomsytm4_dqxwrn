import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameShowcase from "./components/GameShowcase";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white">
      <Navbar />
      <Hero />
      <main>
        <GameShowcase />
        <section id="about" className="mx-auto max-w-4xl px-6 pb-20 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.02] p-6">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-2 text-white/70">
              We craft short, atmospheric experiences with a modern, minimalist edge. Expect sharp silhouettes, ambient tension, and choices that linger long after the screen fades.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
