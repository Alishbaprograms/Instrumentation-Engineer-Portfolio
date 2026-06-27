"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 px-6 sm:px-10 lg:px-16 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-label">Academic Background</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            <span className="text-gradient-blue">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card overflow-hidden"
          style={{ border: "1px solid rgba(0,200,255,0.2)" }}
        >
          {/* Accent bar */}
          <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #00C8FF, #00D084, #FF9F43)" }} aria-hidden="true" />

          <div className="p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.25)" }}
              >
                <GraduationCap size={30} className="text-[#00C8FF]" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">NED University of Engineering & Technology</h3>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full self-start"
                    style={{ background: "rgba(0,200,255,0.12)", color: "#00C8FF", border: "1px solid rgba(0,200,255,0.25)" }}
                  >
                    2021 – 2025
                  </span>
                </div>

                <p className="text-[#00C8FF] font-semibold text-lg mb-1">Bachelor of Engineering</p>
                <p className="text-[#8899AA] mb-5">Electronic Engineering · Karachi, Pakistan</p>

                {/* GPA */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  <div
                    className="rounded-xl p-4 text-center"
                    style={{ background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.15)" }}
                  >
                    <div className="text-3xl font-bold text-gradient-blue">3.70</div>
                    <div className="text-[#8899AA] text-xs mt-1">GPA / 4.00</div>
                  </div>
                  <div
                    className="rounded-xl p-4 text-center"
                    style={{ background: "rgba(0,208,132,0.06)", border: "1px solid rgba(0,208,132,0.15)" }}
                  >
                    <div className="text-3xl font-bold" style={{ color: "#00D084" }}>Top</div>
                    <div className="text-[#8899AA] text-xs mt-1">Student Ranking</div>
                  </div>
                  <div
                    className="rounded-xl p-4 text-center col-span-2 sm:col-span-1"
                    style={{ background: "rgba(255,159,67,0.06)", border: "1px solid rgba(255,159,67,0.15)" }}
                  >
                    <div className="text-3xl font-bold" style={{ color: "#FF9F43" }}>4yr</div>
                    <div className="text-[#8899AA] text-xs mt-1">Programme Duration</div>
                  </div>
                </div>

                {/* Key Areas */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} className="text-[#00C8FF]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#8899AA]">Core Subjects</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Control Systems",
                      "Industrial Automation",
                      "Signal Processing",
                      "Embedded Systems",
                      "Power Electronics",
                      "Digital Logic Design",
                      "Instrumentation",
                      "Communication Systems",
                    ].map((subj) => (
                      <span
                        key={subj}
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(0,200,255,0.07)",
                          color: "#8899AA",
                          border: "1px solid rgba(0,200,255,0.12)",
                        }}
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: "rgba(255,159,67,0.05)", border: "1px solid rgba(255,159,67,0.12)" }}
                >
                  <Award size={18} className="text-[#FF9F43] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">Academic Achievement</div>
                    <p className="text-[#8899AA] text-xs leading-relaxed">
                      Maintained a 3.70 GPA across a challenging Electronic Engineering curriculum while concurrently
                      developing a deep interest in industrial automation, control systems, and reliability engineering —
                      culminating in an Edge AI final year project.
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
