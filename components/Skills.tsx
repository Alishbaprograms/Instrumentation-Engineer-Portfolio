"use client";

import { motion } from "framer-motion";
import { Cpu, Wrench, Settings, BarChart2, Shield } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const skillCategories = [
  {
    title: "Automation",
    icon: <Cpu size={20} />,
    accent: "#00C8FF",
    skills: ["Yokogawa DCS", "Allen-Bradley PLC", "Siemens STEP-7", "GE Mark V", "GE Mark VI", "GE Mark VIe"],
  },
  {
    title: "Instrumentation",
    icon: <Wrench size={20} />,
    accent: "#00D084",
    skills: ["Calibration", "Loop Checking", "Signal Testing", "HART Communication", "Commissioning", "Smart Transmitters"],
  },
  {
    title: "Maintenance",
    icon: <Settings size={20} />,
    accent: "#FF9F43",
    skills: ["Preventive Maintenance", "Corrective Maintenance", "Root Cause Analysis", "Reliability Engineering", "Shutdown Coordination", "Failure Mode Analysis"],
  },
  {
    title: "Engineering Tools",
    icon: <BarChart2 size={20} />,
    accent: "#00C8FF",
    skills: ["SAP PM", "MATLAB", "Proteus", "Multisim", "OrCAD", "AutoCAD"],
  },
  {
    title: "Safety",
    icon: <Shield size={20} />,
    accent: "#00D084",
    skills: ["Permit-to-Work (PTW)", "LOTO", "HSE Compliance", "Job Risk Assessment", "Hazard Identification", "Safety Audits"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,200,255,0.03) 0%, transparent 60%)" }} aria-hidden="true" />

      <div className="relative" style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div {...fadeUp()} className="text-center mb-20">
          <span className="section-label">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Technical <span className="text-gradient-blue">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => {
            const rgb = cat.accent === "#00C8FF" ? "0,200,255" : cat.accent === "#00D084" ? "0,208,132" : "255,159,67";
            return (
              <motion.div
                key={cat.title}
                {...fadeUp(ci * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-6 group transition-all duration-300"
                style={{ border: `1px solid rgba(${rgb},0.12)` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: `rgba(${rgb},0.1)`, color: cat.accent, border: `1px solid rgba(${rgb},0.22)` }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.035 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="text-[11px] font-medium px-3 py-1.5 rounded-full cursor-default"
                      style={{ background: `rgba(${rgb},0.07)`, color: "#CBD5E1", border: `1px solid rgba(${rgb},0.15)` }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Languages */}
          <motion.div
            {...fadeUp(0.42)}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-6 group transition-all duration-300"
            style={{ border: "1px solid rgba(255,159,67,0.12)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-transform group-hover:scale-110" style={{ background: "rgba(255,159,67,0.1)", border: "1px solid rgba(255,159,67,0.22)" }}>🌐</div>
              <h3 className="font-bold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {[
                { lang: "English", level: "Professional", pct: 90 },
                { lang: "Urdu", level: "Native", pct: 100 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-white">{l.lang}</span>
                    <span className="text-[#8899AA] text-xs">{l.level}</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "linear-gradient(90deg, #FF9F43, #FF6B6B)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            {...fadeUp(0.48)}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-card p-6 group transition-all duration-300"
            style={{ border: "1px solid rgba(0,208,132,0.12)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base transition-transform group-hover:scale-110" style={{ background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.22)" }}>🏅</div>
              <h3 className="font-bold text-white">Certifications</h3>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(0,208,132,0.04)", border: "1px solid rgba(0,208,132,0.14)" }}
            >
              <div className="font-semibold text-white text-sm">Industrial Automation</div>
              <div className="text-[#8899AA] text-xs mt-1 mb-2">AutoCon Institute</div>
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ background: "rgba(0,208,132,0.14)", color: "#00D084" }}
              >
                Certified
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
