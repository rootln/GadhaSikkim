"use client";

import { motion } from "framer-motion";

export default function PrototypeFrame() {
  return (
    <motion.main
      className="prototype-shell"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <iframe
        className="prototype-frame"
        src="/prototype/index.html"
        title="Interactive Sikkim travel planner"
      />
    </motion.main>
  );
}
