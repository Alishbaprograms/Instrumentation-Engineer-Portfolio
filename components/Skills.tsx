"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Wrench, Settings, BarChart2, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Automation",
    icon: <Cpu size={22} />,
    accent: "#00C8FF",
    skills: [
      "Yokogawa DCS",
      "Allen-Bradley PLC",
      "Siemens STEP-7",
      "GE Mark V",
      "GE Mark VI",
      "GE Mark VIe",
    ],
  },
  {
    title: "Instrumentation",
    icon: <Wrench size={22} />,
    accent: "#00D084",
    skills: [
      "Calibration",
      "Loop Checking",
      "Signal Testing",
      "HART Communication",
      "Commissioning",
      "Smart Transmitters",
    ],
  },
  {
    title: "Maintenance",
    icon: <Settings size={22} />,
    accent: "#FF9F43",
    skills: [
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Root Cause Analysis",
      "Reliability Engineering",
      "Shutdown Coordination",
      "Failure Mode Analysis",
    ],
  },
  {
    title: "Engineering Tools",
    icon: <BarChart2 size={22} />,
    accent: "#00C8FF",
    skills: [
      "SAP PM",
      "MATLAB",
      "Proteus",
      "Multisim",
      "OrCAD",
      "AutoCAD",
    ],
  },
  {
    title: "Safety",
    icon: <Shield size={22} />,
    accent: "#00D084",
    skills: [
      "Permit-to-Work (PTW)",
      "LOTO",
      "HSE Compliance",
      "Job Risk Assessment",
      "Hazard Identification",
      "Safety Audits",
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 sm:px-10 lg:px-16 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,200,255,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Technical <span className="text-gradient-blue">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card p-6 group hover:border-[rgba(0,200,255,0.25)] transition-all duration-300"
              style={{
                border: `1px solid ${cat.accent}18`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${cat.accent}18`, color: cat.accent, border: `1px solid ${cat.accent}30` }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-lg">{cat.title}</h3>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full cursor-default transition-all"
                    style={{
                      background: `${cat.accent}0D`,
                      color: "#CBD5E1",
                      border: `1px solid ${cat.accent}20`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Languages card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-6 group hover:border-[rgba(255,159,67,0.3)] transition-all duration-300"
            style={{ border: "1px solid rgba(255,159,67,0.15)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 text-lg"
                style={{ background: "rgba(255,159,67,0.12)", border: "1px solid rgba(255,159,67,0.25)" }}
              >
                🌐
              </div>
              <h3 className="font-bold text-white text-lg">Languages</h3>
            </div>
            <div className="space-y-3">
              {[
                { lang: "English", level: "Professional Proficiency", pct: 90 },
                { lang: "Urdu", level: "Native", pct: 100 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-white">{l.lang}</span>
                    <span className="text-[#8899AA] text-xs">{l.level}</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${l.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #FF9F43, #FF6B6B)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="glass-card p-6 group hover:border-[rgba(0,208,132,0.3)] transition-all duration-300"
            style={{ border: "1px solid rgba(0,208,132,0.12)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 text-lg"
                style={{ background: "rgba(0,208,132,0.12)", border: "1px solid rgba(0,208,132,0.25)" }}
              >
                🏅
              </div>
              <h3 className="font-bold text-white text-lg">Certifications</h3>
            </div>
            <div className="space-y-3">
              <div
                className="rounded-xl p-4 group/cert hover:border-[rgba(0,208,132,0.3)] transition-all"
                style={{ background: "rgba(0,208,132,0.05)", border: "1px solid rgba(0,208,132,0.15)" }}
              >
                <div className="font-semibold text-white text-sm">Industrial Automation</div>
                <div className="text-[#8899AA] text-xs mt-1">AutoCon Institute</div>
                <div
                  className="text-[10px] font-semibold uppercase tracking-widest mt-2 px-2 py-0.5 rounded-full inline-block"
                  style={{ background: "rgba(0,208,132,0.15)", color: "#00D084" }}
                >
                  Certified
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
