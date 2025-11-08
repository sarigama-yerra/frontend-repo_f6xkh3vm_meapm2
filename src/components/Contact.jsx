import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent('Project Inquiry - TSL Solutions');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nBudget: ${data.get('budget')}\n\nProject details:\n${data.get('message')}`
    );
    window.location.href = `mailto:hello@tslsolutions.in?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
          <p className="mt-3 text-slate-600">Tell us about your goals. We’ll reply within one business day from Noida.</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {['Noida based', 'Full-stack', 'ROI-first', 'Fast turnaround'].map((t) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">{t}</div>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Budget</label>
              <select name="budget" className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                {['< $1k', '$1k - $5k', '$5k - $15k', '$15k+'].map(v => <option key={v}>{v}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Project details</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Tell us what you want to build or scale…" />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-md">Send Inquiry</button>
            {sent && <span className="text-sm text-green-700">Thanks! Your email client just opened.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
