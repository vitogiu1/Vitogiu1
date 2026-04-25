"use client";

import Image from 'next/image';
import styles from './Footer.module.css';
import { FaHeart } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/vitogiu1"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span>{t("footer.madeWith")}</span>
        <FaHeart className={styles.heart} />
        <span>{t("footer.by")}</span>
        <Image 
          src="https://github.com/vitogiu1.png" 
          alt="Vito Giuliano Profile" 
          className={styles.logo} 
          width={24} 
          height={24}
          unoptimized
        />
      </a>
    </footer>
  );
}
