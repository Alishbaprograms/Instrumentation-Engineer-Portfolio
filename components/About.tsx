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
  { icon: <Cpu size={18} />, text: "Control Systems", color: "#00C8FF" },
  { icon: <TrendingUp size={18} />, text: "Process Reliability", color: "#00D084" },
  { icon: <Shield size={18} />, text: "Safety-First Mindset", color: "#FF9F43" },
  { icon: <Zap size={18} />, text: "Industrial Automation", color: "#00C8FF" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Engineering with{" "}
            <span className="text-gradient-blue">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Photo / Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Profile image placeholder — elegant engineering-themed */}
            <div className="relative">
              <div
                className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl glass-card flex items-center justify-center overflow-hidden glow-blue"
                style={{ border: "1px solid rgba(0,200,255,0.2)" }}
              >
                {/* Engineering blueprint avatar */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full p-6 opacity-60"
                  aria-label="Engineer profile illustration"
                >
                  <circle cx="100" cy="65" r="35" fill="none" stroke="#00C8FF" strokeWidth="1.5" />
                  <path d="M40 190 Q40 140 100 135 Q160 140 160 190" fill="none" stroke="#00C8FF" strokeWidth="1.5" />
                  <circle cx="100" cy="65" r="25" fill="rgba(0,200,255,0.08)" stroke="#00C8FF" strokeWidth="0.5" />
                  {/* Helmet */}
                  <path d="M65 55 Q65 30 100 30 Q135 30 135 55" fill="rgba(0,200,255,0.15)" stroke="#00C8FF" strokeWidth="1" />
                  <line x1="55" y1="55" x2="145" y2="55" stroke="#00C8FF" strokeWidth="1" />
                  {/* Clipboard lines */}
                  <rect x="70" y="145" width="60" height="35" rx="3" fill="none" stroke="#00D084" strokeWidth="0.8" />
                  <line x1="78" y1="155" x2="122" y2="155" stroke="#00D084" strokeWidth="0.5" />
                  <line x1="78" y1="162" x2="115" y2="162" stroke="#00D084" strokeWidth="0.5" />
                  <line x1="78" y1="169" x2="108" y2="169" stroke="#00D084" strokeWidth="0.5" />
                </svg>
              </div>
              {/* Glow ring */}
              <div
                className="absolute -inset-3 rounded-2xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(0,200,255,0.06) 0%, transparent 70%)" }}
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs sm:max-w-sm">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card p-3 text-center hover:border-[rgba(0,200,255,0.3)] transition-all duration-300 group"
                >
                  <div className="text-xl sm:text-2xl font-bold text-gradient-blue group-hover:scale-105 transition-transform">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] text-[#8899AA] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-[#8899AA] text-base leading-relaxed">
              <p>
                I am a <strong className="text-white">Graduate Instrumentation & Controls Engineer</strong> at{" "}
                <strong className="text-[#00C8FF]">Engro Fertilizers</strong>, one of Pakistan's largest industrial
                operations. My work sits at the intersection of safety-critical hardware and advanced
                software — ensuring that processes run reliably, efficiently, and safely around the clock.
              </p>
              <p>
                With a <strong className="text-white">Bachelor's in Electronic Engineering from NED University</strong>{" "}
                (GPA 3.70 / 4.00), I bridge theoretical knowledge and hands-on plant experience.
                From commissioning <strong className="text-[#00D084]">GE Mark VIe</strong> gas turbine controllers
                to configuring <strong className="text-[#00D084]">Yokogawa DCS</strong> loops and calibrating
                precision instruments, I operate where precision genuinely matters.
              </p>
              <p>
                I am driven by <strong className="text-white">industrial digital transformation</strong> — applying
                Edge AI, modern SCADA, and intelligent control to make legacy plants smarter,
                safer, and more productive. Safety is not a checkbox for me; it is an engineering philosophy.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {traits.map((t) => (
                <div
                  key={t.text}
                  className="glass-card flex items-center gap-2 px-3 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default"
                  style={{ color: t.color }}
                >
                  {t.icon}
                  {t.text}
                </div>
              ))}
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "Location", value: "Pakistan" },
                { label: "Company", value: "Engro Fertilizers" },
                { label: "Degree", value: "B.E. Electronic Engineering" },
                { label: "GPA", value: "3.70 / 4.00" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card px-4 py-3"
                  style={{ border: "1px solid rgba(0,200,255,0.08)" }}
                >
                  <div className="text-[10px] uppercase tracking-widest text-[#8899AA] mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
