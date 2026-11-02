'use client';
import { useEffect, useRef } from 'react';
import type { Video } from './videos';
import styles from './VideoModal.module.css';

const CONTACT_EMAIL = 'nothao.mp4@gmail.com';

// The full view: video on the left, contact + title + description on the right.
// Uses <dialog>, which handles Esc-to-close and the dark backdrop for free.
export default function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (video && !dialog.open) dialog.showModal();
    if (!video && dialog.open) dialog.close();
  }, [video]);

  const mailto = video
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`About "${video.title}"`)}`
    : `mailto:${CONTACT_EMAIL}`;

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      // A click on the backdrop lands on the <dialog> itself, not the card inside it.
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {video && (
        <div className={styles.card}>
          <div className={styles.media}>
            <button className={styles.back} onClick={onClose} aria-label="Close">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 12H5m0 0 6-6m-6 6 6 6" />
              </svg>
            </button>
            {video.src ? (
              <video className={styles.video} src={video.src} controls autoPlay playsInline />
            ) : (
              <div className={styles.placeholder} style={{ aspectRatio: video.ratio ?? '9 / 16' }}>
                ▶
              </div>
            )}
          </div>

          <div className={styles.info}>
            <div className={styles.toolbar}>
              <a className={styles.contact} href={mailto}>
                contact
              </a>
            </div>
            <h2 className={styles.title}>{video.title}</h2>
            <p className={styles.description}>{video.description}</p>
          </div>
        </div>
      )}
    </dialog>
  );
}
