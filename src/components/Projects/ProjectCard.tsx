"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectCard.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  repoUrl,
  liveUrl,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <FaGithub /> {t("projects.sourceCode")}
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <FaExternalLinkAlt /> {t("projects.visit")}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
