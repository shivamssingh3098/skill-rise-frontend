import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const demoClasses = [
  {
    id: 1,
    title: "FortiGate Routing & Switching Demo",
    description:
      "Get a hands-on preview of our CCNA training — real devices, real configurations, real networking.",
    videoId: "cDxxlGVj5wA",
  },
  {
    id: 2,
    title: "FortiGate Networking Demo",
    description:
      "Explore advanced networking concepts with live lab demonstrations and expert guidance.",
    videoId: "Hs_fsvmOMbc",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DemoClassesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      id="demo-classes"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--theme-bg)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

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
            Demo Classes
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--theme-text)" }}
          >
            Watch Our <span className="gradient-text">Free Demo Sessions</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--theme-text)", opacity: 0.7 }}
          >
            Experience our teaching style before you enroll. Watch recorded demo
            classes led by industry experts.
          </p>
        </div>

        {/* Video Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {demoClasses.map((demo) => (
            <motion.div
              key={demo.id}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Video Embed */}
              <div className="relative w-full aspect-video overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${demo.videoId}`}
                  title={demo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                {/* Play Button Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2 transition-colors group-hover:text-secondary"
                  style={{ color: "var(--theme-text)" }}
                >
                  {demo.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--theme-text)", opacity: 0.6 }}
                >
                  {demo.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
