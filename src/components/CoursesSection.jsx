import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiServer, FiGlobe, FiShield } from "react-icons/fi";

const courseCategories = [
  {
    title: "Networking",
    icon: <FiServer className="text-3xl" />,
    color: "#3b82f6",
    courses: [
      {
        name: "CCNA",
        desc: "Cisco Certified Network Associate - Routing & Switching fundamentals.",
      },
      {
        name: "CCNP R&S",
        desc: "Cisco Certified Network Professional - Advanced routing and switching.",
      },
      {
        name: "CCNP Security",
        desc: "Enterprise-level network security implementation and management.",
      },
    ],
  },
  {
    title: "Load Balancer",
    icon: <FiGlobe className="text-3xl" />,
    color: "#8b5cf6",
    courses: [
      {
        name: "F5 BIG-IP LTM",
        desc: "Local Traffic Manager - Application delivery and load balancing.",
      },
      {
        name: "F5 BIG-IP DNS",
        desc: "Global traffic management and DNS load balancing solutions.",
      },
    ],
  },
  {
    title: "Network Security",
    icon: <FiShield className="text-3xl" />,
    color: "#ef4444",
    courses: [
      {
        name: "Cisco ISE",
        desc: "Identity Services Engine - Network access control and policy enforcement.",
      },
      {
        name: "Palo Alto",
        desc: "Next-Gen Firewall - Threat prevention and security operations.",
      },
      {
        name: "Fortigate",
        desc: "Enterprise firewall with advanced threat protection and SD-WAN.",
      },
      {
        name: "ASA",
        desc: "Cisco Adaptive Security Appliance - VPN and firewall solutions.",
      },
      {
        name: "Checkpoint",
        desc: "Unified threat management and advanced cybersecurity solutions.",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CoursesSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          entry.target
            .querySelectorAll(".fade-in-up")
            .forEach((el) => el.classList.add("visible"));
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--theme-section-alt)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-50" />

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
            Our Programs
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--theme-text)" }}
          >
            Professional <span className="gradient-text">IT Training</span>{" "}
            Courses
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--theme-text)", opacity: 0.7 }}
          >
            Industry-aligned curriculum designed by experts to make you
            job-ready in networking, security, and cloud technologies.
          </p>
        </div>

        {/* Course Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courseCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden group"
              style={{
                borderLeft: `4px solid ${category.color}`,
              }}
            >
              {/* Category Header */}
              <div
                className="p-6 pb-4 border-b"
                style={{ borderColor: "var(--theme-border)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${category.color}15`,
                    color: category.color,
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--theme-text)" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Course List */}
              <div className="p-6 space-y-4">
                {category.courses.map((course) => (
                  <div
                    key={course.name}
                    className="group/course p-4 rounded-xl transition-all duration-200 hover:bg-secondary/5 cursor-default"
                    style={{ backgroundColor: "var(--theme-bg)" }}
                  >
                    <h4
                      className="font-semibold text-base mb-1 transition-colors group-hover/course:text-secondary"
                      style={{ color: "var(--theme-text)" }}
                    >
                      {course.name}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--theme-text)", opacity: 0.6 }}
                    >
                      {course.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                  style={{ color: category.color }}
                >
                  Enroll Now
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
