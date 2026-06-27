"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Cpu, TrendingUp, Zap } from "lucide-react";

const stats = [
  { value: 30, suffix: "+", label: "Monthly Work Orders" },
  { value: 15, suffix: "+", label: "DCS Tags Configured" },
  { value: 13, suffix: " MW", label: "Gas Turbine Retrofit" },
];

const traits = [
  { icon: <Cpu size={16} />, text: "Control Systems", color: "#00C8FF" },
  { icon: <TrendingUp size={16} />, text: "Process Reliability", color: "#00D084" },
  { icon: <Shield size={16} />, text: "Safety-First Mindset", color: "#FF9F43" },
  { icon: <Zap size={16} />, text: "Industrial Automation", color: "#00C8FF" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,200,255,0.04) 0%, transparent 60%)" }} aria-hidden="true" />

      <div className="relative" style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <span className="section-label">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Engineering with <span className="text-gradient-blue">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — avatar + stats */}
          <motion.div {...fadeUp(0.1)} className="flex flex-col items-center gap-8">
            {/* Avatar card */}
            <div className="relative w-full max-w-sm">
              <div
                className="w-full aspect-square rounded-2xl glass-card flex items-center justify-center overflow-hidden"
                style={{ border: "1px solid rgba(0,200,255,0.18)" }}
              >
                <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 opacity-50" aria-label="Engineer profile illustration">
                  <circle cx="100" cy="65" r="35" fill="none" stroke="#00C8FF" strokeWidth="1.2" />
                  <path d="M40 190 Q40 140 100 135 Q160 140 160 190" fill="none" stroke="#00C8FF" strokeWidth="1.2" />
                  <circle cx="100" cy="65" r="22" fill="rgba(0,200,255,0.07)" stroke="#00C8FF" strokeWidth="0.5" />
                  <path d="M65 55 Q65 30 100 30 Q135 30 135 55" fill="rgba(0,200,255,0.12)" stroke="#00C8FF" strokeWidth="0.8" />
                  <line x1="55" y1="55" x2="145" y2="55" stroke="#00C8FF" strokeWidth="0.8" />
                  <rect x="70" y="148" width="60" height="34" rx="3" fill="none" stroke="#00D084" strokeWidth="0.7" />
                  <line x1="78" y1="157" x2="122" y2="157" stroke="#00D084" strokeWidth="0.5" />
                  <line x1="78" y1="164" x2="114" y2="164" stroke="#00D084" strokeWidth="0.5" />
                  <line x1="78" y1="171" x2="107" y2="171" stroke="#00D084" strokeWidth="0.5" />
                </svg>
              </div>
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,200,255,0.05) 0%, transparent 70%)" }} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUp(0.2 + i * 0.08)}
                  className="glass-card p-4 text-center group hover:border-[rgba(0,200,255,0.3)] transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-gradient-blue group-hover:scale-105 transition-transform">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] text-[#8899AA] mt-1 leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div {...fadeUp(0.15)} className="space-y-7">
            <div className="space-y-4 text-[#8899AA] text-base leading-relaxed">
              <p>
                I am a <strong className="text-white">Graduate Instrumentation & Controls Engineer</strong> at{" "}
                <strong className="text-[#00C8FF]">Engro Fertilizers</strong>, one of Pakistan's largest industrial
                operations. My work sits at the intersection of safety-critical hardware and advanced software —
                ensuring that processes run reliably, efficiently, and safely around the clock.
              </p>
              <p>
                With a <strong className="text-white">Bachelor's in Electronic Engineering from NED University</strong>{" "}
                (GPA 3.70 / 4.00), I bridge theoretical knowledge and hands-on plant experience. From commissioning{" "}
                <strong className="text-[#00D084]">GE Mark VIe</strong> gas turbine controllers to configuring{" "}
                <strong className="text-[#00D084]">Yokogawa DCS</strong> loops, I operate where precision genuinely matters.
              </p>
              <p>
                I am driven by <strong className="text-white">industrial digital transformation</strong> — applying
                Edge AI and intelligent control to make legacy plants smarter and safer. Safety is not a checkbox;
                it is an engineering philosophy.
              </p>
            </div>

            {/* Trait tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {traits.map((t, i) => (
                <motion.div
                  key={t.text}
                  {...fadeUp(0.25 + i * 0.06)}
                  className="glass-card flex items-center gap-2 px-3 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  style={{ color: t.color }}
                >
                  {t.icon}
                  {t.text}
                </motion.div>
              ))}
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              {[
                { label: "Location", value: "Karachi, Sindh" },
                { label: "Company", value: "Engro Fertilizers" },
                { label: "Degree", value: "B.E. Electronic Engineering" },
                { label: "GPA", value: "3.70 / 4.00" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  {...fadeUp(0.3 + i * 0.06)}
                  className="glass-card px-4 py-3"
                  style={{ border: "1px solid rgba(0,200,255,0.08)" }}
                >
                  <div className="text-[10px] uppercase tracking-widest text-[#8899AA] mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
