"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaFileAlt, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      className="mb-28 max-w[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/pfp.jpg"
              alt="Navya Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-52 w-52 rounded-full object-cover border-[0.1rem] border-teal-400 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center relative text-4xl mb-4 mt-4 px-4 text-0xl font-medium !leading-[1.5] sm:text-1xl"
      >
        Hi there, I'm Navya!
      </motion.div>
      <motion.p
        className="mb-4 mt-2 px-4 text-0xl font-medium !leading-[1.5] sm:text-1xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {" "}
        <span className="font-bold">{`Living life one commit at a time`}</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/#contact"
          className="group bg-gray-900 p-4 flex text-gray-300 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 hover:text-black  active:scale-105 transition border border-gray-300/10"
        >
          <MdEmail className="opacity-90 group-hover" />
        </Link>

        <a
          className="group bg-gray-900 p-4 flex text-gray-300 cursor-pointer items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 hover:text-black active:scale-105 border border-gray-300/10 transition"
          href="/NavyaAhuja.pdf"
          download
        >
          <FaFileAlt className="opacity-90 group-hover" />
        </a>

        <a
          className="group bg-gray-900 p-4 flex text-gray-300 cursor-pointer items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 hover:text-black active:scale-105 border border-gray-300/10 transition"
          href="https://www.linkedin.com/in/navyaahuja/"
          target="_blank"
        >
          <BsLinkedin className="opacity-90 group-hover" />
        </a>

        <a
          className="group bg-gray-900 p-4 flex text-gray-300 cursor-pointer items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-300 hover:text-black active:scale-105 border border-gray-300/10 transition"
          href="https://github.com/navya596"
          target="_blank"
        >
          <FaGithubSquare className="opacity-90 group-hover" />
        </a>
      </motion.div>
    </section>
  );
}
