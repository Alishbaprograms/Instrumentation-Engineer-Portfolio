"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.6 4.87 2 2 0 0 1 3.57 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z"/>
  </svg>
);

const links = [
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "linkedin.com/in/zainab-rafi",
    href: "https://www.linkedin.com/in/zainab-rafi",
    color: "#0A66C2",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "rafizainab7817@gmail.com",
    href: "mailto:rafizainab7817@gmail.com",
    color: "#00C8FF",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+92 335 2238647",
    href: "tel:+923352238647",
    color: "#00D084",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Karachi, Sindh",
    href: null,
    color: "#FF9F43",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-10 lg:px-16 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.04) 0%, transparent 60%)" }} aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div {...fadeUp()} className="text-center mb-20">
          <span className="section-label">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Let's <span className="text-gradient-blue">Connect</span>
          </h2>
          <p className="text-[#8899AA] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Open to instrumentation engineering roles, industrial automation projects, and collaborative opportunities in process control.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div {...fadeUp(0.1)} className="space-y-3">
            <h3 className="text-lg font-bold text-white mb-5">Contact Information</h3>
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.08, ease: "easeOut" }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card flex items-center gap-4 p-4 hover:border-[rgba(0,200,255,0.28)] hover:translate-y-[-2px] transition-all duration-300 block"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${link.color}12`, color: link.color, border: `1px solid ${link.color}25` }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8899AA] mb-0.5">{link.label}</div>
                      <div className="text-sm font-medium text-white">{link.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card flex items-center gap-4 p-4">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${link.color}12`, color: link.color, border: `1px solid ${link.color}25` }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#8899AA] mb-0.5">{link.label}</div>
                      <div className="text-sm font-medium text-white">{link.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Availability */}
            <motion.div
              {...fadeUp(0.42)}
              className="glass-card p-5 mt-2"
              style={{ border: "1px solid rgba(0,208,132,0.18)" }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00D084]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
                <span className="font-semibold text-white text-sm">Open to Opportunities</span>
              </div>
              <p className="text-[#8899AA] text-xs leading-relaxed">
                Currently at Engro Fertilizers while actively exploring advanced roles in instrumentation, control systems, and industrial automation globally.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeUp(0.18)}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-4" style={{ border: "1px solid rgba(0,200,255,0.12)" }}>
              <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your Name", key: "name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com", key: "email" },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-[10px] font-bold text-[#8899AA] mb-1.5 uppercase tracking-wider">{f.label}</label>
                    <input
                      id={f.id}
                      type={f.type}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,200,255,0.12)" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.45)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.12)")}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] font-bold text-[#8899AA] mb-1.5 uppercase tracking-wider">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Collaboration Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,200,255,0.12)" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.45)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.12)")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-[#8899AA] mb-1.5 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all resize-none"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(0,200,255,0.12)" }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.45)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.12)")}
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm font-semibold py-3 disabled:opacity-60"
                aria-label="Send message"
              >
                {sent ? (
                  <><CheckCircle2 size={17} />Message Sent!</>
                ) : loading ? (
                  <><span className="w-4 h-4 border-2 border-[#0B1220] border-t-transparent rounded-full animate-spin" />Sending...</>
                ) : (
                  <><Send size={17} />Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
