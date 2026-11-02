import PageShell from '../components/PageShell';
import FlipBook from './_book/FlipBook';
import { bookPages } from './_book/pages';
import styles from './page.module.css';

export default function Graphics() {
  return (
    <PageShell>
      <div className={styles.graphicsContent}>
        <header className={styles.bio}>
          <p className={styles.pageLead}>
            flyer and event graphics i&apos;ve designed
          </p>
          <p className={styles.pageLead}>
            🫟 click a page to turn it 🫟
          </p>
        </header>

        <FlipBook pages={bookPages} />
      </div>
    </PageShell>
  );
}
