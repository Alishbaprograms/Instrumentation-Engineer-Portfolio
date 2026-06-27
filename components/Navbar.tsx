"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-6"
      }`}
    >
      <div className="grid grid-cols-3 items-center px-6 sm:px-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00C8FF] to-[#0080FF] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap size={16} className="text-[#0B1220]" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">
            <span className="text-gradient-blue">ZR</span>
            <span className="text-[#8899AA] text-sm ml-1 hidden sm:inline">/ I&C Eng</span>
          </span>
        </button>

        {/* Desktop Links — truly centered */}
        <ul className="hidden md:flex items-center gap-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.href)}
                className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{
                  color: active === link.href.slice(1) ? "#00C8FF" : "#8899AA",
                }}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(0,200,255,0.08)", border: "1px solid rgba(0,200,255,0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("#contact"); }}
            className="hidden md:block btn-primary text-sm"
            aria-label="Get in touch"
          >
            Get in Touch
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#8899AA] hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-[rgba(0,200,255,0.1)]"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-[#8899AA] hover:text-[#00C8FF] transition-colors rounded-lg hover:bg-[rgba(0,200,255,0.06)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full btn-primary text-sm text-center"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
