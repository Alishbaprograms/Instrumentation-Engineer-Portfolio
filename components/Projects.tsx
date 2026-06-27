"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Cpu, Zap, Brain } from "lucide-react";

const projects = [
  {
    id: "gt602",
    icon: <Zap size={24} />,
    accent: "#00C8FF",
    label: "Control Systems",
    title: "GT-602 Gas Turbine Control System Retrofit",
    summary:
      "Led the migration from a legacy GE Mark V control system to a modern integrated control architecture, enhancing turbine reliability and safety.",
    challenge:
      "The aging GE Mark V controller on GT-602 was becoming unreliable, with obsolete hardware components and limited diagnostic capability — creating safety and uptime risks for a 13 MW production-critical turbine.",
    solution:
      "Prepared commissioning documentation and facilitated the retrofit to a modern control platform with Schneider Electric integration. Implemented an Electronic Overspeed Trip (EST) system, replacing mechanical trip mechanisms. Conducted end-to-end loop checking and functional testing.",
    technologies: ["GE Mark V", "GE Mark VIe", "Schneider Electric", "Electronic Overspeed Trip", "Loop Checking", "SCADA", "Commissioning"],
    impact:
      "Enhanced turbine operational reliability, eliminated obsolete hardware risks, and introduced modern diagnostics capability — reducing unplanned downtime and improving safety margin compliance.",
  },
  {
    id: "dcs-integration",
    icon: <Cpu size={24} />,
    accent: "#00D084",
    label: "Instrumentation",
    title: "Pneumatic Controllers Replacement & DCS Integration",
    summary:
      "Replaced legacy pneumatic field controllers with smart digital transmitters and integrated them into the Yokogawa DCS — modernizing process control across multiple loops.",
    challenge:
      "Legacy pneumatic instrumentation offered limited diagnostics, poor accuracy, and no digital communication capability — constraining process optimization and increasing calibration overhead.",
    solution:
      "Installed modern smart transmitters supporting HART communication. Performed complete loop checking and signal testing for each upgraded instrument. Configured DCS tags in the Yokogawa system and verified calibration using precision calibrators. Documented as-built instrument datasheets.",
    technologies: ["Smart Transmitters", "HART Communicator", "Yokogawa DCS", "Loop Checking", "Signal Testing", "Calibration", "As-Built Documentation"],
    impact:
      "Improved measurement accuracy by >1.5%, enabled remote diagnostics via HART, and reduced field calibration frequency by 40% — directly improving process stability and HSE outcomes.",
  },
  {
    id: "edge-ai",
    icon: <Brain size={24} />,
    accent: "#FF9F43",
    label: "Edge AI",
    title: "Edge AI Diabetic Retinopathy Detection",
    summary:
      "Developed a real-time deep learning system for medical image classification, deployed on edge hardware for immediate inference without cloud dependency.",
    challenge:
      "Diabetic retinopathy screening requires specialist ophthalmologists and is scarce in underserved regions. Manual diagnosis is slow, expensive, and inconsistent — creating delays in treatment for high-risk patients.",
    solution:
      "Trained a convolutional neural network on annotated retinal image datasets. Optimized the model using quantization and pruning for edge deployment. Implemented a real-time inference pipeline achieving <200 ms latency on resource-constrained hardware without cloud connectivity.",
    technologies: ["Deep Learning", "Computer Vision", "Edge AI", "TensorFlow Lite", "Model Quantization", "Medical Image Classification", "Python"],
    impact:
      "Achieved 94%+ classification accuracy on test data. Enabled screening in remote clinics without internet access — demonstrating industrial digital transformation methodology applied to healthcare diagnostics.",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-card overflow-hidden group cursor-pointer"
      style={{ border: `1px solid rgba(${project.accent === "#00C8FF" ? "0,200,255" : project.accent === "#00D084" ? "0,208,132" : "255,159,67"},0.15)` }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} aria-hidden="true" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
              style={{ background: `${project.accent}18`, color: project.accent, border: `1px solid ${project.accent}30` }}
            >
              {project.icon}
            </div>
            <div>
              <span
                className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                style={{ background: `${project.accent}15`, color: project.accent }}
              >
                {project.label}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{project.title}</h3>
            </div>
          </div>
          <ExternalLink size={16} className="text-[#8899AA] shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="text-[#8899AA] text-sm leading-relaxed mb-5">{project.summary}</p>

        {/* Expandable details */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4 mb-5"
          >
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(255,100,100,0.04)", border: "1px solid rgba(255,100,100,0.1)" }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#FF6B6B] mb-2">Challenge</div>
              <p className="text-[#8899AA] text-sm leading-relaxed">{project.challenge}</p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: `${project.accent}06`, border: `1px solid ${project.accent}15` }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: project.accent }}
              >
                Solution
              </div>
              <p className="text-[#8899AA] text-sm leading-relaxed">{project.solution}</p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: "rgba(0,208,132,0.04)", border: "1px solid rgba(0,208,132,0.12)" }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#00D084] mb-2">Engineering Impact</div>
              <p className="text-[#8899AA] text-sm leading-relaxed">{project.impact}</p>
            </div>
          </motion.div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
              style={{
                background: `${project.accent}0D`,
                color: project.accent,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-white"
          style={{ color: project.accent }}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse project details" : "Expand project details"}
        >
          {expanded ? (
            <>Less Details <ChevronUp size={14} /></>
          ) : (
            <>View Full Case Study <ChevronDown size={14} /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(0,208,132,0.03) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Major <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-[#8899AA] mt-4 max-w-xl mx-auto text-sm">
            Click "View Full Case Study" on any project to expand the full challenge, solution, and engineering impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
