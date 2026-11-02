import Image from 'next/image';
import type { Ref } from 'react';
import type { BookPage } from './pages';
import styles from './FlyerPage.module.css';

// The page template: one flyer on a sheet of paper.
// FlipBook decides where this sits; this file only decides what a page looks like.
// `ref` is required: react-pageflip uses it to grab each page's DOM element.
export default function FlyerPage({
  page,
  preload = false,
  ref,
}: {
  page: BookPage;
  preload?: boolean;
  ref?: Ref<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className={styles.page}>
      <Image
        src={page.src}
        alt={page.alt}
        fill
        sizes="(max-width: 860px) 90vw, 420px"
        preload={preload}
        className={styles.flyer}
      />
    </div>
  );
}
