import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiAward, FiBookOpen, FiCpu, FiBriefcase } from "react-icons/fi";

const reasons = [
  {
    icon: <FiAward className="text-4xl" />,
    title: "15+ Years Experience",
    desc: "Learn from industry veterans who have trained thousands of professionals in networking and cybersecurity.",
    color: "#ef4444",
  },
  {
    icon: <FiBookOpen className="text-4xl" />,
    title: "Industry-Relevant Curriculum",
    desc: "Our courses are updated regularly to match the latest industry standards and certification requirements.",
    color: "#3b82f6",
  },
  {
    icon: <FiCpu className="text-4xl" />,
    title: "Hands-On Training",
    desc: "Practice on real enterprise equipment and labs. No simulations — real Cisco, Palo Alto, and F5 gear.",
    color: "#8b5cf6",
  },
  {
    icon: <FiBriefcase className="text-4xl" />,
    title: "Placement Support",
    desc: "Dedicated placement assistance with resume building, mock interviews, and job referrals.",
    color: "#22c55e",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
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
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--theme-bg)" }}
    >
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: "var(--secondary)",
              color: "white",
              opacity: 0.9,
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--theme-text)" }}
          >
            Why Skill<span className="text-secondary">Rise</span>?
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--theme-text)", opacity: 0.7 }}
          >
            We don't just teach — we transform careers. Here's what sets us
            apart from other training institutes.
          </p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 text-center group hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: `${item.color}15`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "var(--theme-text)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--theme-text)", opacity: 0.7 }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <div
          className="mt-16 glass rounded-2xl p-8 fade-in-up"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, #1e293b 100%)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-sm text-white/70 mt-1">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">
                15+
              </p>
              <p className="text-sm text-white/70 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">95%</p>
              <p className="text-sm text-white/70 mt-1">Placement Rate</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-white">50+</p>
              <p className="text-sm text-white/70 mt-1">Corporate Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
