"use client";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ children, delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 120,
              damping: 22,
              delay,
            }
      }
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
