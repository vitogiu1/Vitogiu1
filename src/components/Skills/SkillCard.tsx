import React from 'react';
import styles from './SkillCard.module.css';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  link?: string;
}

export default function SkillCard({ name, icon, link }: SkillCardProps) {
  const content = (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {content}
      </a>
    );
  }

  return content;
}
