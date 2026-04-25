import Image from 'next/image';
import styles from './Footer.module.css';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/vitogiu1"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span>Made with</span>
        <FaHeart className={styles.heart} />
        <span>by Vito Giuliano</span>
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
