"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div {...fadeUp()} className="text-center mb-20">
          <span className="section-label">Academic Background</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            <span className="text-gradient-blue">Education</span>
          </h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="glass-card overflow-hidden"
          style={{ border: "1px solid rgba(0,200,255,0.18)" }}
        >
          <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #00C8FF, #00D084, #FF9F43)" }} aria-hidden="true" />

          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.22)" }}
              >
                <GraduationCap size={28} className="text-[#00C8FF]" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">NED University of Engineering & Technology</h3>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full self-start shrink-0"
                    style={{ background: "rgba(0,200,255,0.1)", color: "#00C8FF", border: "1px solid rgba(0,200,255,0.22)" }}
                  >
                    2021 – 2025
                  </span>
                </div>

                <p className="text-[#00C8FF] font-semibold text-lg mb-1">Bachelor of Engineering</p>
                <p className="text-[#8899AA] mb-7">Electronic Engineering · Karachi, Pakistan</p>

                {/* GPA cards */}
                <div className="grid grid-cols-3 gap-3 mb-7">
                  {[
                    { val: "3.70", sub: "GPA / 4.00", color: "#00C8FF", bg: "rgba(0,200,255,0.06)" },
                    { val: "Top", sub: "Class Ranking", color: "#00D084", bg: "rgba(0,208,132,0.06)" },
                    { val: "4yr", sub: "Duration", color: "#FF9F43", bg: "rgba(255,159,67,0.06)" },
                  ].map((item) => (
                    <div
                      key={item.sub}
                      className="rounded-xl p-4 text-center"
                      style={{ background: item.bg, border: `1px solid ${item.color}22` }}
                    >
                      <div className="text-2xl font-bold" style={{ color: item.color }}>{item.val}</div>
                      <div className="text-[#8899AA] text-xs mt-1">{item.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Subjects */}
                <div className="mb-7">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={13} className="text-[#00C8FF]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8899AA]">Core Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Control Systems", "Industrial Automation", "Signal Processing", "Embedded Systems", "Power Electronics", "Digital Logic Design", "Instrumentation", "Communication Systems"].map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: "rgba(0,200,255,0.06)", color: "#8899AA", border: "1px solid rgba(0,200,255,0.1)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievement */}
                <div
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: "rgba(255,159,67,0.04)", border: "1px solid rgba(255,159,67,0.1)" }}
                >
                  <Award size={17} className="text-[#FF9F43] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">Academic Achievement</div>
                    <p className="text-[#8899AA] text-xs leading-relaxed">
                      Maintained a 3.70 GPA across a rigorous Electronic Engineering curriculum while developing deep expertise in industrial automation and control systems, culminating in a real-world Edge AI final year project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
