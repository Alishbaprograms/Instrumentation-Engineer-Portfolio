"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Instrumentation & Control Graduate Trainee Engineer",
    company: "Engro Fertilizers",
    period: "July 2025 – Present",
    location: "Pakistan",
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
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 sm:px-10 lg:px-16 relative" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 0% 50%, rgba(0,200,255,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Career</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Work <span className="text-gradient-blue">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative" style={{ paddingLeft: "16px" }}>
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 w-px timeline-line opacity-30"
            style={{ left: "36px" }}
            aria-hidden="true"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative mb-12"
              style={{ paddingLeft: "72px" }}
            >
              {/* Timeline dot */}
              <div
                className="absolute top-5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  left: "26px",
                  background: exp.current ? exp.color : "rgba(255,255,255,0.1)",
                  boxShadow: exp.current ? `0 0 12px ${exp.color}66` : "none",
                }}
                aria-hidden="true"
              >
                <div className="w-2 h-2 rounded-full bg-[#0B1220]" />
              </div>

              {/* Card */}
              <div
                className="glass-card p-6 hover:border-[rgba(0,200,255,0.25)] transition-all duration-300 group"
                style={{ border: `1px solid ${exp.current ? "rgba(0,200,255,0.2)" : "rgba(255,255,255,0.06)"}` }}
              >
                {/* Top row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.current && (
                        <span
                          className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                          style={{ background: "rgba(0,208,132,0.15)", color: "#00D084", border: "1px solid rgba(0,208,132,0.3)" }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase size={14} className="text-[#00C8FF]" />
                      <span className="text-[#00C8FF] font-semibold text-sm">{exp.company}</span>
                      <span className="text-[#8899AA] text-sm">· {exp.location}</span>
                    </div>
                  </div>
                  <div
                    className="glass-card px-3 py-2 text-xs font-medium whitespace-nowrap self-start"
                    style={{ color: "#8899AA" }}
                  >
                    {exp.period}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((r, ri) => (
                    <motion.li
                      key={ri}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + ri * 0.05 }}
                      className="flex items-start gap-2.5 text-sm text-[#8899AA]"
                    >
                      <CheckCircle2 size={14} className="text-[#00D084] mt-0.5 shrink-0" />
                      {r}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(0,200,255,0.08)",
                        color: "#00C8FF",
                        border: "1px solid rgba(0,200,255,0.15)",
                      }}
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
