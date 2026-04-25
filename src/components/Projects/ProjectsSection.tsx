"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();

  const baseProjects = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/vitogiu1/arzaos",
    },
    {
      imageUrl: "jornada-cielo.png",
      repoUrl: "https://github.com/vitogiu1/jornada-cielo",
      liveUrl: "https://vitogiu1.github.io/Jornada-Cielo/",
    },
    {
      imageUrl: "scheduler.png",
      liveUrl: "https://scheduler-edutech21.vercel.app/",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
      repoUrl: "https://github.com/vitogiu1/dotfiles",
    },
  ];

  const translatedProjects: any[] = t("projects.list") || [];

  const projects = baseProjects.map((base, index) => {
    const translation = translatedProjects[index] || {};
    return {
      ...base,
      title: translation.title || "",
      description: translation.description || "",
      tags: translation.tags || [],
    };
  });

  return (
    <section className={styles.container} id="projects">
      <h2 className="section-title">
        <span className="highlight">#</span> {t("projects.sectionTitle")}
      </h2>
      <p className={styles.subtitle}>{t("projects.subtitle")}</p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} imageUrl={project.imageUrl} />
        ))}
      </div>
    </section>
  );
}
