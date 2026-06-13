import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Network Training", href: "#courses", dropdown: true },
  { name: "Courses", href: "#courses" },
  { name: "Demo Classes", href: "#demo-classes" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const networkCourses = [
  {
    category: "Network",
    items: [
      { name: "CCNA", href: "/CCNA-SYLLABUS.pdf", isPdf: true },
      { name: "CCNP R&S", href: "/CCNP.pdf", isPdf: true },
      { name: "CCNA Devops", href: "/demo.pdf", isPdf: true },
    ],
  },
  {
    category: "Cyber security",
    items: [
      { name: "Paloalto", href: "/Paloalto.pdf", isPdf: true },
      { name: "FortiGate", href: "/Fortinet.pdf", isPdf: true },
      { name: "ASA", href: "/demo.pdf", isPdf: true },
      { name: "CEH", href: "/demo.pdf", isPdf: true },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS", href: "/demo.pdf", isPdf: true },
      { name: "Azure", href: "/demo.pdf", isPdf: true },
      { name: "GCP", href: "/demo.pdf", isPdf: true },
    ],
  },
];


export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

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
            <img
              src="/logoSkillRise.png"
              alt="SkillRise Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-secondary transition-transform group-hover:scale-105"
            />
            <span
              className="text-xl md:text-2xl font-bold"
              style={{ color: "var(--theme-text)" }}
            >
              Skill<span className="text-secondary">Risers</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-secondary cursor-pointer py-2"
                      style={{ color: "var(--theme-text)" }}
                    >
                      {link.name}
                      <FiChevronDown
                        className={`transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-[560px] rounded-2xl shadow-2xl overflow-hidden z-50 border"
                          style={{
                            background: "var(--theme-card)",
                            borderColor: "var(--theme-border)",
                            borderTop: "4px solid var(--secondary)",
                          }}
                        >
                          <div className="grid grid-cols-3 gap-6 p-6">
                            {networkCourses.map((cat) => (
                              <div key={cat.category} className="space-y-3">
                                <h4
                                  className="text-xs font-bold uppercase tracking-wider pb-2 border-b flex items-center gap-1.5"
                                  style={{
                                    color: "var(--theme-text)",
                                    borderColor: "var(--theme-border)",
                                  }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                  {cat.category}
                                </h4>
                                <ul className="space-y-2">
                                  {cat.items.map((item) => (
                                    <li key={item.name}>
                                      <a
                                        href={item.href}
                                        target={item.isPdf ? "_blank" : undefined}
                                        rel={item.isPdf ? "noopener noreferrer" : undefined}
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block text-sm transition-all duration-200 hover:text-secondary hover:translate-x-1 font-medium"
                                        style={{ color: "var(--theme-text)", opacity: 0.8 }}
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors duration-200 hover:text-secondary group"
                  style={{ color: "var(--theme-text)" }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
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
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="space-y-1">
                      <button
                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center justify-between w-full text-base font-medium py-2 transition-colors hover:text-secondary cursor-pointer"
                        style={{ color: "var(--theme-text)" }}
                      >
                        <span>{link.name}</span>
                        <FiChevronDown
                          className={`transition-transform duration-200 ${
                            mobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l border-[var(--theme-border)] ml-2 space-y-3 py-2"
                          >
                            {networkCourses.map((cat) => (
                              <div key={cat.category} className="space-y-1">
                                <span
                                  className="block text-xs font-bold uppercase tracking-wider"
                                  style={{ color: "var(--theme-text)", opacity: 0.5 }}
                                >
                                  {cat.category}
                                </span>
                                <div className="space-y-1 pl-2 flex flex-col">
                                  {cat.items.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      target={item.isPdf ? "_blank" : undefined}
                                      rel={item.isPdf ? "noopener noreferrer" : undefined}
                                      onClick={(e) => {
                                        setMenuOpen(false);
                                        if (!item.isPdf) {
                                          handleNavClick(e, item.href);
                                        }
                                      }}
                                      className="block text-sm py-1.5 transition-colors hover:text-secondary font-medium"
                                      style={{ color: "var(--theme-text)", opacity: 0.8 }}
                                    >
                                      {item.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-base font-medium py-2 transition-colors hover:text-secondary"
                    style={{ color: "var(--theme-text)" }}
                  >
                    {link.name}
                  </a>
                );
              })}
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
