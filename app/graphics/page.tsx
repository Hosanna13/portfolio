'use client';
import type { ReactNode } from 'react';
import PageShell from '../components/PageShell';
import styles from './page.module.css';

const bookPages = [
  {
    title: 'ColorStack Poster',
    subtitle: 'Event Identity',
    description:
      'A layered graphic layout with bold type, photographic texture, and room for a high-impact image.',
    imageLabel: 'Placeholder image',
  },
  {
    title: 'EOS Campaign',
    subtitle: 'Promo Design',
    description:
      'A comic-inspired visual direction with bright typography, halftone shadows, and a polished layout.',
    imageLabel: 'Placeholder image',
  },
  {
    title: 'Future Spread',
    subtitle: 'Artboard Preview',
    description:
      'A page design waiting for your photos and concept sketches to fill the textured placeholder space.',
    imageLabel: 'Placeholder image',
  },
];

export default function Graphics() {
  return (
    <PageShell>
      <div className={styles.graphicsContent}>
        <div className={styles.headerBlock}>
          <div>
            <h1 className={styles.pageTitle}>Graphics Book</h1>
            <p className={styles.pageLead}>
              A stacked book layout with placeholder spreads. Add or remove pages
              by updating the <code>bookPages</code> array.
            </p>
          </div>
          <p className={styles.bookHint}>
            Hover a page to see the book flip effect and keep your placeholders ready
            for photo content.
          </p>
        </div>

        <div className={styles.book}>
          {bookPages.map((page, index) => (
            <article
              key={page.title}
              className={styles.bookPage}
              style={{ '--page-index': index } as React.CSSProperties}
            >
              <div className={styles.pageCover}>
                <span className={styles.pageSubtitle}>{page.subtitle}</span>
                <h2 className={styles.bookTitle}>{page.title}</h2>
              </div>
              <div className={styles.pagePreview}>
                <div className={styles.imagePlaceholder}>{page.imageLabel}</div>
                <p>{page.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
