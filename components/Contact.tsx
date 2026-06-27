"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const links = [
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-karam",
    href: "https://www.linkedin.com/in/muhammad-karam",
    color: "#0A66C2",
  },
  {
    icon: <GithubIcon />,
    label: "GitHub",
    value: "github.com/muhammad-karam",
    href: "https://github.com/muhammad-karam",
    color: "#8899AA",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "m.karam@engineer.com",
    href: "mailto:m.karam@engineer.com",
    color: "#00C8FF",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Pakistan",
    href: null,
    color: "#00D084",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,200,255,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Let's <span className="text-gradient-blue">Connect</span>
          </h2>
          <p className="text-[#8899AA] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Open to instrumentation engineering roles, industrial automation projects,
            and collaborative opportunities in process control and reliability engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card flex items-center gap-4 p-4 hover:border-[rgba(0,200,255,0.3)] hover:scale-[1.02] transition-all duration-300 block"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${link.color}15`, color: link.color, border: `1px solid ${link.color}25` }}
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
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${link.color}15`, color: link.color, border: `1px solid ${link.color}25` }}
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

            {/* Availability Badge */}
            <div
              className="glass-card p-5 mt-6"
              style={{ border: "1px solid rgba(0,208,132,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-2.5 h-2.5 rounded-full bg-[#00D084]"
                  style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
                />
                <span className="font-semibold text-white text-sm">Open to Opportunities</span>
              </div>
              <p className="text-[#8899AA] text-xs leading-relaxed">
                Currently gaining hands-on experience at Engro Fertilizers while actively exploring
                advanced roles in instrumentation, control systems, and industrial automation globally.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#8899AA] mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(0,200,255,0.15)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.15)")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#8899AA] mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(0,200,255,0.15)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.15)")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-[#8899AA] mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Collaboration Opportunity"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,200,255,0.15)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.15)")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#8899AA] mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-[#8899AA] outline-none transition-all resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,200,255,0.15)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,200,255,0.15)")}
                />
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full btn-primary flex items-center justify-center gap-2 text-sm font-semibold py-3.5 disabled:opacity-60"
                aria-label="Send message"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent!
                  </>
                ) : loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#0B1220] border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
