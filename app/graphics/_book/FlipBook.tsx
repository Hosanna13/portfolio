'use client';
import { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import FlyerPage from './FlyerPage';
import type { BookPage } from './pages';
import styles from './FlipBook.module.css';

// Composition settings: size, timing, and behavior of the book.
// The library's types require every option, so they're all listed here.
const bookSettings = {
  width: 420, // one page, in px; height keeps the 4:5 flyer ratio
  height: 525,
  size: 'stretch' as const, // shrink to fit smaller screens, within the min/max below
  minWidth: 260,
  maxWidth: 420,
  minHeight: 325,
  maxHeight: 525,
  startPage: 0,
  flippingTime: 900,
  drawShadow: true,
  maxShadowOpacity: 0.4,
  showCover: true, // first page sits alone like a cover
  usePortrait: true, // single page on narrow screens
  startZIndex: 0,
  autoSize: true,
  mobileScrollSupport: true,
  clickEventForward: false,
  useMouseEvents: true, // click or drag to turn
  swipeDistance: 30,
  showPageCorners: true, // corner curls on hover
  disableFlipByClick: false,
};

type PageFlipApi = { flipNext: () => void; flipPrev: () => void };

export default function FlipBook({ pages }: { pages: BookPage[] }) {
  const bookRef = useRef<{ pageFlip: () => PageFlipApi | undefined }>(null);
  const [current, setCurrent] = useState(0);

  const next = () => bookRef.current?.pageFlip()?.flipNext();
  const prev = () => bookRef.current?.pageFlip()?.flipPrev();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') bookRef.current?.pageFlip()?.flipNext();
      if (e.key === 'ArrowLeft') bookRef.current?.pageFlip()?.flipPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // In two-page mode, the cover (and an even-count back page) sits alone on one half.
  // Slide the book so that single page is centered. (CSS skips this in one-page mode.)
  const isLastAlone = pages.length % 2 === 0 && current >= pages.length - 1;
  const position = current === 0 ? 'start' : isLastAlone ? 'end' : 'open';

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider} data-position={position}>
        <HTMLFlipBook
          {...bookSettings}
          ref={bookRef}
          className={styles.book}
          style={{}}
          onFlip={(e) => setCurrent(e.data)}
        >
          {pages.map((page, i) => (
            <FlyerPage key={page.src} page={page} preload={i === 0} />
          ))}
        </HTMLFlipBook>
      </div>

      <div className={styles.controls}>
        <button onClick={prev} disabled={current === 0}>
          ← prev
        </button>
        <span>
          {current + 1} / {pages.length}
        </span>
        <button onClick={next} disabled={current >= pages.length - 1}>
          next →
        </button>
      </div>
    </div>
  );
}
