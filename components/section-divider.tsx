"use client";
import React from "react";
import { motion } from "framer-motion";
export default function SectionDivider() {
  return (
    <motion.div
      className="text-center my-10 text-3xl leading-relaxed font-mono whitespace-pre"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      {`𓆝 𓆟 𓆞 𓆝 𓆟`}
    </motion.div>
  );
}
