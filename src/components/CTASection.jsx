import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight, FiUserCheck } from "react-icons/fi";

export default function CTASection() {
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
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--theme-section-alt)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--primary) 0%, #0f172a 50%, #1e293b 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="fade-in-up">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: "rgba(239, 68, 68, 0.15)",
                    color: "#ef4444",
                  }}
                >
                  <FiUserCheck className="text-3xl" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Trainer with <span className="text-secondary">15 Years</span>{" "}
                  Experience
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Learn directly from an industry expert who has worked on
                  enterprise networks, designed security architectures, and
                  trained hundreds of successful professionals.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/919670095005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-all duration-200 hover:shadow-lg hover:shadow-[#25D366]/30"
                  >
                    <FaWhatsapp className="text-xl" />
                    Chat on WhatsApp
                  </a>

                  <div className="pt-4">
                    <a
                      href="mailto:a1.kumar@outlook.com"
                      className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2"
                    >
                      <span>✉</span> a1.kumar@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Register Form */}
            <div
              className="p-8 md:p-12 flex items-center"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-full fade-in-up">
                <h4 className="text-xl font-bold text-white mb-6">
                  Start Your Journey Today
                </h4>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://wa.me/919670095005?text=I%27m%20interested%20in%20your%20IT%20training%20courses",
                      "_blank",
                    );
                  }}
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-secondary/50 transition-colors"
                    required
                  />
                  <select
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:border-secondary/50 transition-colors"
                    required
                    style={{ color: "white" }}
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="bg-gray-800 text-white"
                    >
                      Select Course
                    </option>
                    <option value="ccna" className="bg-gray-800 text-white">
                      CCNA
                    </option>
                    <option value="ccnp-rs" className="bg-gray-800 text-white">
                      CCNP R&S
                    </option>
                    <option
                      value="ccnp-security"
                      className="bg-gray-800 text-white"
                    >
                      CCNP Security
                    </option>
                    <option value="f5-ltm" className="bg-gray-800 text-white">
                      F5 BIG-IP LTM
                    </option>
                    <option value="f5-dns" className="bg-gray-800 text-white">
                      F5 BIG-IP DNS
                    </option>
                    <option
                      value="cisco-ise"
                      className="bg-gray-800 text-white"
                    >
                      Cisco ISE
                    </option>
                    <option value="paloalto" className="bg-gray-800 text-white">
                      Palo Alto
                    </option>
                    <option
                      value="fortigate"
                      className="bg-gray-800 text-white"
                    >
                      Fortigate
                    </option>
                    <option value="asa" className="bg-gray-800 text-white">
                      ASA
                    </option>
                    <option
                      value="checkpoint"
                      className="bg-gray-800 text-white"
                    >
                      Checkpoint
                    </option>
                  </select>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold hover:bg-[#dc2626] transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30"
                  >
                    Register Now
                    <FiArrowRight />
                  </button>
                </form>

                <p className="text-white/40 text-xs text-center mt-4">
                  We'll connect with you on WhatsApp to confirm your
                  registration
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
