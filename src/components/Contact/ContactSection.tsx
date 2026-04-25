"use client";

import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./ContactSection.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactBox}>
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <p className={styles.subtitle}>
          {t("contact.subtitle")}
        </p>

        <div className={styles.links}>
          <a href="mailto:vitogiu1@outlook.com" className={styles.button}>
            <FaEnvelope className={styles.icon} />
            <span>{t("contact.email")}</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vito-bertolai-b88260206/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            <FaLinkedin className={styles.icon} />
          </a>

          <a
            href="https://github.com/vitogiu1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            <FaGithub className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
}
