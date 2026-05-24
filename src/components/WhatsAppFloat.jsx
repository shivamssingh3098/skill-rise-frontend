import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/919670095005"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl text-white" />
    </motion.a>
  );
}
