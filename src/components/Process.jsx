import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discover',
    desc: 'We audit your product, market, and funnel to identify high-leverage growth opportunities.'
  },
  {
    title: 'Design',
    desc: 'We shape the strategy and UX, map experiments, and define KPIs aligned to business goals.'
  },
  {
    title: 'Build',
    desc: 'We ship fast — from landing pages to full apps, analytics, and automations.'
  },
  {
    title: 'Scale',
    desc: 'We iterate, optimize, and expand channels based on data, not hunches.'
  },
];

export default function Process() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How we work</h2>
          <p className="mt-3 text-slate-600">A simple, outcomes-first process that keeps momentum high and risk low.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-sm"
            >
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center font-semibold">{i + 1}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
