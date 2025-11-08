import { Code2, Search, Bot, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code2,
    title: 'Web & App Development',
    desc: 'Modern, fast, and scalable apps tailored to your business with delightful UX and measurable outcomes.'
  },
  {
    icon: Search,
    title: 'SEO & Performance Marketing',
    desc: 'Rank higher, reduce CAC, and capture intent with technical SEO, content, and PPC that actually converts.'
  },
  {
    icon: Bot,
    title: 'AI Automation & Chatbots',
    desc: 'Automate workflows, improve support, and drive growth with AI copilots, RAG search, and custom chatbots.'
  },
  {
    icon: Rocket,
    title: 'Go-To-Market & Analytics',
    desc: 'Launch faster with data-led GTM, experimentation, and real-time analytics dashboards.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">End-to-end growth engineering for ambitious brands in Noida and beyond.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
