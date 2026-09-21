import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animateOnLoad = false,
  duration,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(animateOnLoad
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: false, amount: 0.15 } })}
      variants={reveal}
      transition={{ ...transition, ...(duration ? { duration } : {}), delay }}
    >
      {children}
    </motion.div>
  );
}

export { reveal, transition };