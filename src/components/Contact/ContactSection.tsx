import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactBox}>
        <h2 className={styles.title}>Let&apos;s build your next idea?</h2>
        <p className={styles.subtitle}>
          I am always open to discussing new project ideas, career
          opportunities, or simply having a chat about tech and systems
          engineering.
        </p>

        <div className={styles.links}>
          <a href="mailto:vitogiu1@outlook.com" className={styles.button}>
            <FaEnvelope className={styles.icon} />
            <span>Send me an E-mail</span>
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
