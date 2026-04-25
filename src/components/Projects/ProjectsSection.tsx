import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ArzaOS / ArzaKernel",
      description:
        "A custom operating system kernel x86_64, developed from scratch. This project explores deep low-level mechanics, including GDT/IDT configurations, paging, and Monolithic Kernel architecture model.",
      imageUrl:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      tags: ["C", "Assembly", "Kernel Dev", "x86 Architecture"],
      repoUrl: "https://github.com/vitogiu1/arzaos",
    },
    {
      title: "Jornada Cielo",
      description:
        "An educational RPG designed for business manager training. I focused on the software engineering architecture, developing complex backend systems for inventory management and progress tracking.",
      imageUrl: "jornada-cielo.png",
      tags: ["Software Engineering", "System Architecture", "Academic"],
      repoUrl: "https://github.com/vitogiu1/jornada-cielo",
      liveUrl: "https://vitogiu1.github.io/Jornada-Cielo/",
    },
    {
      title: "Edutech21 - Scheduler",
      description:
        "A specialized resource management system developed to schedule VR headset usage for the Edutech21 project. The platform facilitates the integration of Virtual Reality into Mathematics classes, ensuring organized and efficient access to immersive learning tools.",
      imageUrl: "scheduler.png",
      tags: [
        "Software Engineering",
        "System Architecture",
        "Resource Management",
        "Education Tech",
      ],
      liveUrl: "https://scheduler-edutech21.vercel.app/",
    },
    {
      title: "LFS & Custom Environment",
      description:
        "A complete Linux environment built entirely from the ground up using Linux From Scratch (LFS 13.0) - Still in progress - Not public",
      imageUrl:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
      tags: ["Arch Linux", "LFS", "Bash", "Neovim"],
      repoUrl: "https://github.com/vitogiu1/dotfiles",
    },
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className="section-title">
        <span className="highlight">#</span> Some Projects
      </h2>
      <p className={styles.subtitle}>
        A curated selection of my work, bridging the gap between high-level
        Software Engineering and core system mechanics.
      </p>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} imageUrl={project.imageUrl} />
        ))}
      </div>
    </section>
  );
}
