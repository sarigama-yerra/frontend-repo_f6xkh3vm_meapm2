import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] w-full flex items-stretch">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex-1 grid place-items-center py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Scale faster with a full‑stack growth partner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl text-slate-700"
          >
            TSL Solutions is a Noida‑based digital marketing and IT studio. We build high‑converting web apps, drive ROI with SEO & performance marketing, and automate ops with AI and chatbots.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full bg-white/80 backdrop-blur text-slate-900 px-6 py-3 text-sm sm:text-base font-semibold shadow hover:shadow-md border border-white/60"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
    </section>
  );
}
