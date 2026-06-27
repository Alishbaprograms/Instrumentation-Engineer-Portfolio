"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Download, Eye, ChevronDown } from "lucide-react";
import HeroBackground from "./HeroBackground";
import { useEffect, useState } from "react";

const ROLES = [
  "Instrumentation & Controls Engineer",
  "Industrial Automation Specialist",
  "Gas Turbine Control Expert",
  "Process Reliability Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [3, -3]);
  const rotateY = useTransform(springX, [-300, 300], [-3, 3]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set(e.clientX - cx);
      mouseY.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Typewriter
  useEffect(() => {
    const target = ROLES[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, rgba(0,200,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(0,208,132,0.04) 0%, transparent 60%), #0B1220",
      }}
    >
      <HeroBackground />

      {/* Decorative rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(0,200,255,0.04)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(0,200,255,0.06)",
          animation: "pulse-glow 4s ease-in-out infinite 1s",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(0,200,255,0.08)",
          animation: "pulse-glow 4s ease-in-out infinite 2s",
        }}
        aria-hidden="true"
      />

      {/* SVG Turbine Icon */}
      <motion.div
        className="absolute right-8 top-1/3 opacity-10 pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      >
        <svg width="280" height="280" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="120" fill="none" stroke="#00C8FF" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="80" fill="none" stroke="#00C8FF" strokeWidth="0.5" />
          <circle cx="140" cy="140" r="20" fill="rgba(0,200,255,0.1)" stroke="#00C8FF" strokeWidth="1" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle}, 140, 140)`}>
              <path
                d="M140 120 Q160 100 170 60 Q150 75 140 80 Q130 75 110 60 Q120 100 140 120"
                fill="rgba(0,200,255,0.15)"
                stroke="#00C8FF"
                strokeWidth="0.5"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Left decorative SVG — pipeline / valve */}
      <div
        className="absolute left-8 bottom-1/3 opacity-8 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <svg width="120" height="200" viewBox="0 0 120 200">
          <line x1="60" y1="0" x2="60" y2="200" stroke="#00D084" strokeWidth="0.5" strokeDasharray="4 8" />
          <rect x="40" y="80" width="40" height="40" rx="4" fill="none" stroke="#00D084" strokeWidth="0.8" />
          <line x1="60" y1="100" x2="80" y2="100" stroke="#00D084" strokeWidth="0.5" />
          <circle cx="60" cy="100" r="8" fill="rgba(0,208,132,0.1)" stroke="#00D084" strokeWidth="0.8" />
          <circle cx="60" cy="30" r="4" fill="rgba(0,208,132,0.2)" stroke="#00D084" strokeWidth="0.5" />
          <circle cx="60" cy="170" r="4" fill="rgba(0,208,132,0.2)" stroke="#00D084" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm"
        >
          <span
            className="w-2 h-2 rounded-full bg-[#00D084]"
            style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
          />
          <span className="text-[#8899AA]">Available for Opportunities</span>
          <span className="text-[#00C8FF] font-medium">· Karachi, Sindh</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-white">Zainab</span>
          <br />
          <span className="text-gradient-multi">Rafi</span>
        </motion.h1>

        {/* Typewriter Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[#00C8FF] mb-6 h-10 flex items-center justify-center"
          aria-label="Instrumentation & Controls Engineer"
        >
          {displayed}
          <span className="ml-1 w-0.5 h-7 bg-[#00C8FF] inline-block" style={{ animation: "pulse-glow 1s ease-in-out infinite" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-[#8899AA] text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Designing reliable industrial automation systems, troubleshooting mission-critical
          equipment, and improving process reliability through modern control engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary flex items-center gap-2 text-base"
            aria-label="View Projects"
          >
            <Eye size={18} />
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="btn-secondary flex items-center gap-2 text-base"
            aria-label="Download Resume"
            download
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: "20–30", label: "Monthly Work Orders" },
            { value: "15+", label: "DCS Tags Configured" },
            { value: "13 MW", label: "GT Retrofit" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 text-center hover:border-[rgba(0,200,255,0.3)] transition-colors"
            >
              <div className="text-xl sm:text-2xl font-bold text-gradient-blue">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-[#8899AA] mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8899AA] text-xs"
        aria-label="Scroll down"
      >
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
