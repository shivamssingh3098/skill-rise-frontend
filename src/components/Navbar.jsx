import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "Demo Classes", href: "#demo-classes" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.body.style.overflow = "";
    setMenuOpen(false);

    // get the target element
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      // wait a tick for the menu close / DOM to settle, then scroll
      setTimeout(() => {
        const navbarHeight = 64; // h-16 on mobile
        const top =
          target.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
      style={{
        background: scrolled ? "var(--theme-navbar)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-105">
              SR
            </div>
            <span
              className="text-xl md:text-2xl font-bold"
              style={{ color: "var(--theme-text)" }}
            >
              Skill<span className="text-secondary">Rise</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-200 hover:text-secondary"
                style={{ color: "var(--theme-text)" }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919670095005"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-200 hover:bg-secondary/10"
              style={{ color: "var(--theme-text)" }}
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FiSun className="text-xl" />
              ) : (
                <FiMoon className="text-xl" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-[#dc2626] transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30"
            >
              Register Now
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-full transition-all duration-200 hover:bg-secondary/10"
              style={{ color: "var(--theme-text)" }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "var(--theme-card)",
              borderTop: "1px solid var(--theme-border)",
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-base font-medium py-2 transition-colors hover:text-secondary"
                  style={{ color: "var(--theme-text)" }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919670095005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white hover:bg-[#1da851] transition-all mx-auto"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block text-center px-5 py-3 rounded-full bg-secondary text-white font-semibold hover:bg-[#dc2626] transition-all"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
