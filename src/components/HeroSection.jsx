import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiShield, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const courseCategories = [
  {
    title: "Networking",
    color: "#3b82f6",
    courses: ["CCNA", "CCNP R&S", "CCNP Security"],
  },
  {
    title: "Load Balancer",
    color: "#8b5cf6",
    courses: ["F5 BIG-IP LTM", "F5 BIG-IP DNS"],
  },
  {
    title: "Network Security",
    color: "#ef4444",
    courses: ["Cisco ISE", "Palo Alto", "Fortigate", "ASA", "Checkpoint"],
  },
];

export default function HeroSection() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [openUpward, setOpenUpward] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // If space below is less than 340px, open upward
      setOpenUpward(spaceBelow < 340);
    }
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleButtonClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsHovered(!isHovered);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in-up").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--theme-bg)" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animated-gradient opacity-20" />
        <div className="absolute inset-0 pattern-dots" />

        {/* Glowing Orbs */}
        <div className="hero-glow bg-secondary top-20 -left-20" />
        <div className="hero-glow bg-accent bottom-20 -right-20" />
        <div className="hero-glow bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--theme-text) 1px, transparent 1px), linear-gradient(90deg, var(--theme-text) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fade-in-up text-center sm:text-left"
            >
              <span
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-bold badge-pulse"
                style={{
                  background: "linear-gradient(135deg, #FFD600 0%, #FFAB00 100%)",
                  color: "#1a1a00",
                  border: "1.5px solid #FFD600",
                  boxShadow: "0 0 18px rgba(255, 214, 0, 0.45), 0 2px 8px rgba(255, 171, 0, 0.25)",
                  letterSpacing: "0.02em",
                }}
              >
                <FiShield className="text-base sm:text-xl" />
                🔥 Limited Time: 50% OFF on All Courses
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="fade-in-up text-sm sm:text-base font-bold uppercase tracking-widest"
              style={{ color: "var(--secondary)" }}
            >
              Train with the best to become best
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: "var(--theme-text)" }}
            >
              Build Skills. <span className="gradient-text">Secure</span>{" "}
              <span style={{ color: "var(--theme-text)" }}>Your Future.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="fade-in-up text-lg md:text-xl max-w-xl leading-relaxed"
              style={{ color: "var(--theme-text)", opacity: 0.8 }}
            >
              India's premier IT training institute for Networking,
              Cybersecurity, and Cloud Technologies. Learn from industry experts
              with 15+ years of real-world experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="fade-in-up flex flex-wrap gap-4"
            >
              {isHovered && (
                <div
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
                  onClick={() => setIsHovered(false)}
                />
              )}

              <div
                className="relative z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  ref={buttonRef}
                  href="#courses"
                  onClick={handleButtonClick}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-semibold text-lg hover:bg-[#dc2626] transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30"
                >
                  Explore Courses
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
      
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`fixed sm:absolute z-50 w-[290px] sm:w-[540px] max-w-[90vw]
                        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        sm:top-auto sm:left-0 sm:translate-x-0 sm:translate-y-0
                        ${openUpward ? "sm:bottom-full sm:pb-2 sm:pt-0" : "sm:top-full sm:pt-2 sm:pb-0"}`}
                    >
                      <div
                        className="relative rounded-2xl shadow-2xl border-2 p-5 glass"
                        style={{
                          background: "var(--theme-card)",
                          borderColor: "rgba(239, 68, 68, 0.45)",
                          boxShadow: "0 20px 45px -10px rgba(239, 68, 68, 0.4), 0 0 30px rgba(239, 68, 68, 0.25)",
                        }}
                      >
                        {/* Modal Header */}
                        <div
                          className="flex items-center justify-between pb-2 mb-3.5 border-b"
                          style={{ borderColor: "var(--theme-border)" }}
                        >
                          <span className="text-xs sm:text-sm font-bold gradient-text tracking-wide uppercase">
                            📚 Select a Course
                          </span>
                          <button
                            onClick={() => setIsHovered(false)}
                            className="text-var(--theme-text) opacity-70 hover:opacity-100 sm:hidden p-1 rounded-full hover:bg-secondary/10 cursor-pointer"
                            style={{ color: "var(--theme-text)" }}
                          >
                            <FiX className="text-lg" />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {courseCategories.map((cat) => (
                            <div key={cat.title} className="space-y-2.5">
                              <h4
                                className="text-xs font-bold uppercase tracking-wider pb-1.5 border-b flex items-center gap-1.5"
                                style={{
                                  color: "var(--theme-text)",
                                  borderColor: "var(--theme-border)",
                                }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full"
                                  style={{ backgroundColor: cat.color }}
                                />
                                {cat.title}
                              </h4>
                              <ul className="space-y-1">
                                {cat.courses.map((course) => (
                                  <li key={course}>
                                    <a
                                      href="#courses"
                                      onClick={() => {
                                        setIsHovered(false);
                                      }}
                                      className="block text-xs sm:text-sm transition-all duration-200 hover:translate-x-1 font-semibold py-0.5 rounded cursor-pointer"
                                      style={{
                                        color: "var(--theme-text)",
                                        opacity: 0.85,
                                      }}
                                      onMouseEnter={(e) => {
                                        e.target.style.color = cat.color;
                                        e.target.style.opacity = "1";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.target.style.color = "var(--theme-text)";
                                        e.target.style.opacity = "0.85";
                                      }}
                                    >
                                      {course}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="https://wa.me/919670095005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 font-semibold text-lg transition-all duration-200 hover:shadow-xl"
                style={{
                  borderColor: "#25D366",
                  color: "#25D366",
                }}
              >
                <FaWhatsapp className="text-xl" />
                Contact Now
              </a>
            </motion.div>

            {/* Trust Badges / Key highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="fade-in-up flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm sm:text-base font-bold"
              style={{ color: "var(--accent)" }}
            >
              <div className="flex items-center gap-2">
                <FiShield className="text-lg" />
                <span>Placement Assistance Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <FiShield className="text-lg" />
                <span>Lifetime Interview Support</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="fade-in-up flex flex-wrap gap-8 pt-4"
            >
              <div>
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p
                  className="text-sm"
                  style={{ color: "var(--theme-text)", opacity: 0.7 }}
                >
                  Students Trained
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p
                  className="text-sm"
                  style={{ color: "var(--theme-text)", opacity: 0.7 }}
                >
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">95%</p>
                <p
                  className="text-sm"
                  style={{ color: "var(--theme-text)", opacity: 0.7 }}
                >
                  Placement Rate
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="fade-in-up hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="glass-card rounded-2xl overflow-hidden p-2">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="Network Operations Center - Cybersecurity and IT Infrastructure"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge 1 */}
              {/* <div
                className="absolute -top-4 -right-4 glass-card rounded-xl px-4 py-3 shadow-xl"
                style={{ background: "var(--theme-card)" }}
              >
                <p className="text-sm font-semibold gradient-text">50% OFF</p>
                <p
                  className="text-xs"
                  style={{ color: "var(--theme-text)", opacity: 0.7 }}
                >
                  Limited Period
                </p>
              </div> */}

              {/* Floating Badge 2 */}
              {/* <div
                className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-xl"
                style={{ background: "var(--theme-card)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <FiShield className="text-accent" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--theme-text)" }}
                    >
                      Hands-on Labs
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--theme-text)", opacity: 0.7 }}
                    >
                      Real Equipment
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 z-10"
        style={{
          background: "linear-gradient(to top, var(--theme-bg), transparent)",
        }}
      />
    </section>
  );
}
