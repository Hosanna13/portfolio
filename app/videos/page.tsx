'use client';
import PageShell from '../components/PageShell';
import styles from './page.module.css';

const videoItems = [
  {
    title: 'Campus Promo Reel',
    subtitle: 'Short motion edit',
    status: 'placeholder',
  },
  {
    title: 'Portfolio Intro',
    subtitle: 'Brand teaser',
    status: 'coming soon',
  },
  {
    title: 'Event Highlights',
    subtitle: 'Social cut',
    status: 'placeholder',
  },
  {
    title: 'Vlog Sequence',
    subtitle: 'Story edit',
    status: 'placeholder',
  },
];

export default function Video() {
  return (
    <PageShell>
      <div className={styles.videoContent}>
        <div className={styles.videoHeader}>
          <div>
            <h1 className={styles.pageTitle}>Video Placeholders</h1>
            <p className={styles.pageLead}>
              A simple placeholder gallery for your upcoming edits. Add or remove
              cards by updating the <code>videoItems</code> array.
            </p>
          </div>
        </div>

        <div className={styles.videoGrid}>
          {videoItems.map((item) => (
            <article key={item.title} className={styles.videoCard}>
              <div className={styles.videoPreview}>
                <span>{item.subtitle}</span>
                <div className={styles.playButton}>▶</div>
              </div>
              <div className={styles.videoInfo}>
                <h2>{item.title}</h2>
                <p>{item.status}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
