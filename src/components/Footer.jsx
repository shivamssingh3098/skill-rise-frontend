import { useState } from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FiSend, FiArrowUp } from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const courseLinks = [
  { name: "CCNA", href: "#courses" },
  { name: "CCNP R&S", href: "#courses" },
  { name: "CCNP Security", href: "#courses" },
  { name: "Palo Alto", href: "#courses" },
  { name: "Fortigate", href: "#courses" },
  { name: "F5 BIG-IP", href: "#courses" },
];

const socialLinks = [
  {
    icon: <FaWhatsapp className="text-xl" />,
    href: "https://wa.me/919670095005",
    label: "WhatsApp",
  },
  { icon: <FaLinkedin className="text-xl" />, href: "#", label: "LinkedIn" },
  { icon: <FaYoutube className="text-xl" />, href: "#", label: "YouTube" },
  { icon: <FaTwitter className="text-xl" />, href: "#", label: "Twitter" },
  { icon: <FaInstagram className="text-xl" />, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative"
      style={{
        backgroundColor: "var(--theme-footer-bg)",
        color: "var(--theme-footer-text)",
      }}
    >
      {/* Top Wave Decoration */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background:
            "linear-gradient(90deg, var(--secondary), #f97316, var(--secondary))",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                SR
              </div>
              <span className="text-2xl font-bold text-white">
                Skill<span className="text-secondary">Rise</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              India's premier IT training institute. We specialize in
              networking, cybersecurity, and cloud technologies training with
              hands-on labs and experienced instructors.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-secondary/20 hover:text-secondary"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              {courseLinks.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-white/60 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-secondary" />
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to get the latest course updates and offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-secondary text-white hover:bg-[#dc2626] transition-all duration-200"
                aria-label="Subscribe"
              >
                <FiSend />
              </button>
            </form>
            {subscribed && (
              <p className="text-accent text-xs mt-2">
                ✓ Subscribed successfully!
              </p>
            )}

            <div className="mt-8 space-y-2 text-sm text-white/60">
              <p>📞 +91 9670095005</p>
              <p>✉ a1.kumar@outlook.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 mb-8 h-px"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} SkillRise Institute. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-secondary transition-colors"
            >
              Back to Top
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
