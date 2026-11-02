'use client';
import PageShell from '../components/PageShell';
import styles from './page.module.css';

const techCards = [
  {
    title: 'Bidirectional Ai Glasses Communication',
    subtitle: 'Design & Development',
    description: 'Senior Capstone project given by Qualcommn.',
  },
  {
    title: 'Grade Predictor',
    subtitle: 'Next.js + Tailwind',
    description: 'A clean project card structure for grade tracking and data visualization.',
    githubUrl: 'https://github.com/Hosanna13/Grade-Predictor-React',
  },
  {
    title: 'AE-SYNC',
    subtitle: 'Audio & Transcript Flow',
    description: 'A placeholder card for a media workflow app that syncs audio with text layers.',
    githubUrl: 'https://github.com/Hosanna13/aesync-react-demo',
  },
  {
    title: 'Labels4Free',
    subtitle: 'Adobe After Effects Plugin',
    description: 'A free label-color panel for quickly applying colors to layers, keyframes, and project items.',
    githubUrl: 'https://github.com/Hosanna13/labels-ae',
  },
  {
    title: 'MarkerNav',
    subtitle: 'Adobe After Effects Plugin',
    description: 'A lightweight panel for navigating composition markers with looping previous and next controls.',
    githubUrl: 'https://github.com/Hosanna13/MakerNav-Ae',
  },
];

export default function Tech() {
  return (
    <PageShell>
      <div className={styles.techContent}>
        <div className={styles.cardGrid}>
          {techCards.map((card) => (
            <article key={card.title} className={styles.techCard}>
              <div className={styles.cardIcon}>{card.title.charAt(0)}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                {card.githubUrl && (
                  <a
                    className={styles.githubLink}
                    href={card.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
