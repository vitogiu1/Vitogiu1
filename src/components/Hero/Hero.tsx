"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src="https://github.com/vitogiu1.png"
            alt="Vito Giuliano Profile"
            width={200}
            height={200}
            className={styles.avatar}
            priority
            unoptimized
          />
        </div>

        <h1 className={styles.greeting}>Howdy 👋!</h1>

        <h2 className={styles.nameTitle}>
          {"I'm "}
          <span className="highlight">
            <Typewriter words={["Vito Giuliano"]} />
          </span>
        </h2>

        <p className={styles.description}>
          {"I'm a "}
          <span className={styles.roles}>
            <Typewriter
              words={[
                "A Developer who loves to learn",
                "Full-Stack Developer",
                "Software Engineer",
                "Low-Level Enthusiast",
              ]}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              loop
            />
          </span>
        </p>
      </div>
    </section>
  );
}
