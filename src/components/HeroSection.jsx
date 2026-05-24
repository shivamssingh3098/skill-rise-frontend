import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const sectionRef = useRef(null);

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
              className="fade-in-up"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/20 badge-pulse">
                <FiShield className="text-lg" />
                Limited Time: 50% OFF on All Courses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
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
              <a
                href="#courses"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-semibold text-lg hover:bg-[#dc2626] transition-all duration-200 hover:shadow-xl hover:shadow-secondary/30"
              >
                Explore Courses
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
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
              <div
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
              </div>

              {/* Floating Badge 2 */}
              <div
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
              </div>
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
