"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import styles from "./Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

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

        <h1 className={styles.greeting}>{t("hero.greeting")}</h1>

        <h2 className={styles.nameTitle}>
          {t("hero.im")}
          <span className="highlight">
            {/* Adding key={language} forces the Typewriter to remount and re-read the words array when the language changes */}
            <Typewriter key={language} words={["Vito Giuliano"]} />
          </span>
        </h2>

        <p className={styles.description}>
          {t("hero.im")}
          <span className={styles.roles}>
            <Typewriter
              key={language}
              words={t("hero.roles")}
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
