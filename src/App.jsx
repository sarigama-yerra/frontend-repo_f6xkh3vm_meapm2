import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} TSL Solutions · Noida</p>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#work" className="hover:text-slate-900">Process</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
