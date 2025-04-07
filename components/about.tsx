"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I’m a software engineering student who enjoys tinkering with projects
        that solve problems or are simply fun to create — whether through code,
        design, or side projects sparked by late-night "what if" ideas.
      </p>

      <p>
        I’m passionate about smart tech that enhances creativity without
        overshadowing it. I focus on clean systems, clear visuals, and ideas
        that *resonate*, blending engineering with a bit of creativity and
        rebellion.
      </p>

      <p>
        Outside of tech, I’m dancing, biking across town, walking everywhere, or
        expressing myself through different fashion styles.
      </p>
    </motion.section>
  );
}
