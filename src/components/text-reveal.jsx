import { motion } from "framer-motion";

const textReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const textTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export default function TextReveal({ children, className = "", delay = 0, duration }) {
  return (
    <motion.div
      className={`text-reveal ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={textReveal}
      transition={{ ...textTransition, ...(duration ? { duration } : {}), delay }}
    >
      {children}
    </motion.div>
  );
}

export { textReveal, textTransition };
