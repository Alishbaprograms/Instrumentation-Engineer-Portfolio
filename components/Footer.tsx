"use client";

import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-6 border-t"
      style={{ borderColor: "rgba(0,200,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Quote */}
        <div className="text-center mb-8">
          <blockquote
            className="text-lg sm:text-xl font-medium italic max-w-xl mx-auto leading-relaxed"
            style={{
              background: "linear-gradient(135deg, #00C8FF, #00D084)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &ldquo;Reliable engineering is built through precision, safety, and continuous improvement.&rdquo;
          </blockquote>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t" style={{ borderColor: "rgba(0,200,255,0.06)" }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#00C8FF] to-[#0080FF] flex items-center justify-center">
              <Zap size={12} className="text-[#0B1220]" />
            </div>
            <span className="font-bold text-sm text-white">Zainab Rafi</span>
            <span className="text-[#8899AA] text-xs">· Instrumentation & Controls Engineer</span>
          </div>
          <div className="text-[#8899AA] text-xs">
            © {new Date().getFullYear()} · Built with precision.
          </div>
        </div>
      </div>
    </footer>
  );
}
