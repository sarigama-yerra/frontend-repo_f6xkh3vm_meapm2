import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'bg-white/70 backdrop-blur-xl shadow' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="tracking-tight">TSL Solutions</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-700 hover:text-slate-900 transition-colors">Services</a>
          <a href="#work" className="text-slate-700 hover:text-slate-900 transition-colors">Process</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Contact</a>
        </div>

        <a
          href="mailto:hello@tslsolutions.in?subject=Free%20Strategy%20Session&body=Hi%20TSL%2C%20I%27d%20love%20a%2030-min%20strategy%20call."
          className="hidden sm:inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md hover:bg-slate-800 transition"
        >
          Free Strategy Call
        </a>
      </nav>
    </header>
  );
}
