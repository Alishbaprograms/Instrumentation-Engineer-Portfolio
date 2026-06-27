"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const experiences = [
  {
    role: "Instrumentation & Control Graduate Trainee Engineer",
    company: "Engro Fertilizers",
    period: "July 2025 – Present",
    location: "Karachi, Sindh",
    current: true,
    color: "#00C8FF",
    responsibilities: [
      "Gas turbine troubleshooting and operational support for 13 MW units",
      "GE Mark VIe controller diagnostics, configuration, and maintenance",
      "Yokogawa Distributed Control System (DCS) loop configuration and tuning",
      "Allen-Bradley PLC programming review and fault diagnostics",
      "Precision instrument calibration (pressure, temperature, flow, level)",
      "Root Cause Analysis (RCA) for recurring instrumentation failures",
      "Coordinating shutdown maintenance and pre-commissioning activities",
      "SAP PM work order creation, tracking, and closure",
      "Permit-to-Work (PTW) and Lock-Out/Tag-Out (LOTO) compliance",
      "HSE compliance and Job Risk Assessment (JRA) preparation",
    ],
    technologies: ["GE Mark VIe", "Yokogawa DCS", "Allen-Bradley PLC", "SAP PM", "HART", "PTW/LOTO"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(0,200,255,0.03) 0%, transparent 70%)" }} aria-hidden="true" />

      <div className="relative" style={{ maxWidth: "768px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <span className="section-label">Career</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Work <span className="text-gradient-blue">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: "20px" }}>
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px timeline-line opacity-25"
            style={{ left: "38px" }}
            aria-hidden="true"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.12)}
              className="relative mb-10"
              style={{ paddingLeft: "68px" }}
            >
              {/* Dot */}
              <div
                className="absolute top-6 w-4 h-4 rounded-full"
                style={{
                  left: "30px",
                  background: exp.color,
                  boxShadow: `0 0 0 4px rgba(0,200,255,0.12), 0 0 14px ${exp.color}66`,
                }}
                aria-hidden="true"
              />

              {/* Card */}
              <div
                className="glass-card p-6 sm:p-8 transition-all duration-300 hover:border-[rgba(0,200,255,0.28)]"
                style={{ border: "1px solid rgba(0,200,255,0.15)" }}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <div className="mb-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(0,208,132,0.12)", color: "#00D084", border: "1px solid rgba(0,208,132,0.25)" }}
                      >
                        Current
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Briefcase size={13} className="text-[#00C8FF]" />
                      <span className="text-[#00C8FF] font-semibold text-sm">{exp.company}</span>
                      <span className="text-[#8899AA] text-sm">· {exp.location}</span>
                    </div>
                  </div>
                  <div
                    className="text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap self-start"
                    style={{ background: "rgba(255,255,255,0.04)", color: "#8899AA", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {exp.period}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((r, ri) => (
                    <motion.li
                      key={ri}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + ri * 0.04, ease: "easeOut" }}
                      className="flex items-start gap-2.5 text-sm text-[#8899AA] leading-relaxed"
                    >
                      <CheckCircle2 size={14} className="text-[#00D084] mt-0.5 shrink-0" />
                      {r}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full mt-3"
                      style={{ background: "rgba(0,200,255,0.08)", color: "#00C8FF", border: "1px solid rgba(0,200,255,0.14)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
