"use client";

import React from "react";
import SkillCard from "./SkillCard";
import styles from "./SkillsSection.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaRust,
  FaMicrochip,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiC, SiNextdotjs } from "react-icons/si";
import {
  DiJava,
  DiVisualstudio,
  DiMongodb,
  DiLinux,
  DiVim,
  DiMysql,
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandCSharp } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();

  const languages = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Javascript", icon: <FaJs /> },
    { name: "Typescript", icon: <SiTypescript /> },
    { name: "Java", icon: <DiJava /> },
    { name: "C#", icon: <TbBrandCSharp /> },
    { name: "C++", icon: <CgCPlusPlus /> },
    { name: "C", icon: <SiC /> },
    { name: "Assembly x86_64 - Linux", icon: <FaMicrochip /> },
    { name: "Rust", icon: <FaRust /> },
    { name: "Python", icon: <FaPython /> },
  ];

  const frameworks = [
    { name: "Angular", icon: <FaAngular /> },
    { name: "Node.JS", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.JS", icon: <SiNextdotjs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Spring Boot", icon: <DiJava /> },
  ];

  const tools = [
    { name: "Github", icon: <FaGithub />, link: "https://github.com/vitogiu1" },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Visual Studio", icon: <DiVisualstudio /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "MySQL", icon: <DiMysql /> },
    {
      name: "Linux",
      icon: <DiLinux />,
      link: "https://github.com/vitogiu1/dotfiles",
    },
    { name: "Vim / Neovim", icon: <DiVim /> },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.sectionBlock}>
        <h2 className="section-title">
          <span className="highlight">#</span> {t("skills.languages")}
        </h2>
        <div className={styles.grid}>
          {languages.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.sectionBlock}>
        <h2 className="section-title">
          <span className="highlight">#</span> {t("skills.frameworks")}
        </h2>
        <div className={styles.grid}>
          {frameworks.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.sectionBlock}>
        <h2 className="section-title">
          <span className="highlight">#</span> {t("skills.tools")}
        </h2>
        <div className={styles.grid}>
          {tools.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              link={skill.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
