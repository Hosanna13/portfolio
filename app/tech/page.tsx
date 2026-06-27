'use client';
import PageShell from '../components/PageShell';
import styles from './page.module.css';

const techCards = [
  {
    title: 'Log.ai',
    subtitle: 'Design & Development',
    description: 'A web app with AI-powered reflections, progress notes, and visual summaries.',
  },
  {
    title: 'Grade Predictor',
    subtitle: 'Next.js + Tailwind',
    description: 'A clean project card structure for grade tracking and data visualization.',
  },
  {
    title: 'AE-SYNC',
    subtitle: 'Audio & Transcript Flow',
    description: 'A placeholder card for a media workflow app that syncs audio with text layers.',
  },
];

export default function Tech() {
  return (
    <PageShell>
      <div className={styles.techContent}>
        <div className={styles.headerBlock}>
          <h1 className={styles.pageTitle}>Tech Projects</h1>
          <p className={styles.pageLead}>
            These cards are easy to add or remove. Update the <code>techCards</code> array.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {techCards.map((card) => (
            <article key={card.title} className={styles.techCard}>
              <div className={styles.cardIcon}>{card.title.charAt(0)}</div>
              <div className={styles.cardBody}>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
