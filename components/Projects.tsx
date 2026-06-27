"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Cpu, Zap, Brain } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const projects = [
  {
    id: "gt602",
    icon: <Zap size={22} />,
    accent: "#00C8FF",
    label: "Control Systems",
    title: "GT-602 Gas Turbine Control System Retrofit",
    summary: "Led the migration from a legacy GE Mark V control system to a modern integrated control architecture, enhancing turbine reliability and safety.",
    challenge: "The aging GE Mark V controller on GT-602 was becoming unreliable, with obsolete hardware components and limited diagnostic capability — creating safety and uptime risks for a 13 MW production-critical turbine.",
    solution: "Prepared commissioning documentation and facilitated the retrofit to a modern control platform with Schneider Electric integration. Implemented an Electronic Overspeed Trip (EST) system, replacing mechanical trip mechanisms. Conducted end-to-end loop checking and functional testing.",
    technologies: ["GE Mark V", "GE Mark VIe", "Schneider Electric", "Electronic Overspeed Trip", "Loop Checking", "SCADA", "Commissioning"],
    impact: "Enhanced turbine operational reliability, eliminated obsolete hardware risks, and introduced modern diagnostics — reducing unplanned downtime and improving safety margin compliance.",
  },
  {
    id: "dcs-integration",
    icon: <Cpu size={22} />,
    accent: "#00D084",
    label: "Instrumentation",
    title: "Pneumatic Controllers Replacement & DCS Integration",
    summary: "Replaced legacy pneumatic field controllers with smart digital transmitters and integrated them into the Yokogawa DCS, modernizing process control across multiple loops.",
    challenge: "Legacy pneumatic instrumentation offered limited diagnostics, poor accuracy, and no digital communication capability — constraining process optimization and increasing calibration overhead.",
    solution: "Installed modern smart transmitters supporting HART communication. Performed complete loop checking and signal testing. Configured DCS tags in the Yokogawa system and verified calibration using precision calibrators.",
    technologies: ["Smart Transmitters", "HART Communicator", "Yokogawa DCS", "Loop Checking", "Signal Testing", "Calibration"],
    impact: "Improved measurement accuracy by >1.5%, enabled remote diagnostics via HART, and reduced field calibration frequency by 40% — directly improving process stability.",
  },
  {
    id: "edge-ai",
    icon: <Brain size={22} />,
    accent: "#FF9F43",
    label: "Edge AI",
    title: "Edge AI Diabetic Retinopathy Detection",
    summary: "Developed a real-time deep learning system for medical image classification, deployed on edge hardware for immediate inference without cloud dependency.",
    challenge: "Diabetic retinopathy screening requires specialist ophthalmologists scarce in underserved regions. Manual diagnosis is slow, expensive, and inconsistent.",
    solution: "Trained a CNN on annotated retinal datasets. Optimized the model using quantization and pruning for edge deployment. Implemented a real-time inference pipeline achieving <200 ms latency on resource-constrained hardware.",
    technologies: ["Deep Learning", "Computer Vision", "Edge AI", "TensorFlow Lite", "Model Quantization", "Python"],
    impact: "Achieved 94%+ classification accuracy. Enabled screening in remote clinics without internet access.",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const rgb = project.accent === "#00C8FF" ? "0,200,255" : project.accent === "#00D084" ? "0,208,132" : "255,159,67";

  return (
    <motion.div
      {...fadeUp(index * 0.1)}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="glass-card overflow-hidden flex flex-col group"
      style={{ border: `1px solid rgba(${rgb},0.14)` }}
    >
      {/* Accent top bar */}
      <div className="h-0.5 w-full shrink-0" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} aria-hidden="true" />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + label */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
            style={{ background: `rgba(${rgb},0.1)`, color: project.accent, border: `1px solid rgba(${rgb},0.22)` }}
          >
            {project.icon}
          </div>
          <span
            className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: `rgba(${rgb},0.1)`, color: project.accent }}
          >
            {project.label}
          </span>
          <ExternalLink size={14} className="ml-auto text-[#8899AA] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-3">{project.title}</h3>
        <p className="text-[#8899AA] text-sm leading-relaxed mb-4">{project.summary}</p>

        {/* Expandable */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-3 mb-4"
          >
            <div className="rounded-xl p-4" style={{ background: "rgba(255,80,80,0.04)", border: "1px solid rgba(255,80,80,0.1)" }}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B6B] mb-2">Challenge</div>
              <p className="text-[#8899AA] text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: `rgba(${rgb},0.04)`, border: `1px solid rgba(${rgb},0.12)` }}>
              <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: project.accent }}>Solution</div>
              <p className="text-[#8899AA] text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div className="rounded-xl p-4" style={{ background: "rgba(0,208,132,0.04)", border: "1px solid rgba(0,208,132,0.1)" }}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#00D084] mb-2">Engineering Impact</div>
              <p className="text-[#8899AA] text-sm leading-relaxed">{project.impact}</p>
            </div>
          </motion.div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{ background: `rgba(${rgb},0.07)`, color: project.accent, border: `1px solid rgba(${rgb},0.18)` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:opacity-80"
          style={{ color: project.accent }}
          aria-expanded={expanded}
        >
          {expanded ? <><ChevronUp size={14} />Collapse</> : <><ChevronDown size={14} />View Case Study</>}
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(0,208,132,0.03) 0%, transparent 70%)" }} aria-hidden="true" />

      <div className="relative" style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div {...fadeUp()} className="text-center mb-20">
          <span className="section-label">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Major <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-[#8899AA] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Expand any card to see the full challenge, solution, and engineering impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
