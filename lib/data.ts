import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dermalyticsImg from "@/public/dermalytics.jpg";
import simplifiImg from "@/public/simplifi.png";
import recyclingImg from "@/public/recyclingSystem.webp";
import villainsImg from "@/public/disneyVillains.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Simplifi",
    description:
      "Chrome extension that scrapes text from web pages and simplifies it across four readability levels. It also includes a chatbot for content-related questions.",
    tags: ["HTML", "CSS", "JavaScript", "Cohere API"],
    imageUrl: simplifiImg,
    link: "https://github.com/navya596/deltahacks-chrome-ext",
  },
  {
    title: "Baddie or Not",
    description:
      "A terminal app that matches users with a fictional villain based on their 'gaming'  personality. Includes mini-games like Wordle, Hangman, and Memory Match, built with C and Bash.",
    tags: ["C", "Bash", "Command Line Interface", "Version Control", "Makefile", "Test Scripts"],
    imageUrl: villainsImg,
    link: "https://github.com/navya596/Baddie-or-Not",
  },
  {
    title: "Dermalytics (In progress)",
    description:
      "Currently developing a platform to explore skincare products, analyze ingredients, and get personalized recommendations. Users can search, compare, and save products.",
    tags: ["Next.js", "REST APIs", "SQL", "MongoDB", "web scraping"],
    imageUrl: dermalyticsImg,
    link: "",
  },
  {
    title: "Revenge of the Recycling System",
    description:
      "A self-driven recycling system in Python that sorts and transfers recyclable containers using ultrasonic and color sensors. It was tested in both a simulated environment and with a physical mechanism, featuring a Q-bot for transport.",
    tags: ["Python", "Quanser Simulation", "Sensors", "Q-bot"],
    imageUrl: recyclingImg,
    link: "https://vintage-sleep-1df.notion.site/Project-3-Revenge-of-the-Recycling-System-2a21c05f46bd484d815b2564a5208041",
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "D3.js",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Linux",
  "AutoDesk Inventor", 
  "Bash shell scripting",
  "Tailwind CSS",
  "Framer Motion",
] as const;