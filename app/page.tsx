'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  // true = already played intro skip, else false, null = storage 
  const [introDone, setIntroDone] = useState<boolean | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // if already seen video skip

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('introPlayed') === 'true';
    console.log(hasPlayed);
    setIntroDone(hasPlayed);
  }, []); 

  const finishIntro = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setIntroDone(true);
  };
  // any key skips intro 
  useEffect(() => {
    if (introDone !== false) return;
    const handleSkip = () => finishIntro();
    window.addEventListener('keypress', handleSkip);
    return () => window.removeEventListener('keypress', handleSkip);
  }, [introDone]);

  const navLinks = [
    { label: 'about me', href: '/about' },
    { label: 'graphics', href: '/graphics' },
    { label: 'video', href: '/video' },
    { label: 'tech', href: '/tech' },
  ];

  // shows nothing until we knoe if intro should play
  // prevent flash intro glkitch, when users navigates back from another page 
  if (introDone === null) {
    return <main className={styles.main} />;
  }

  return (
    <main className={styles.main}>
      {/* intro video */}
      {!introDone && (
        <div className={styles.introWrapper} onClick={finishIntro}>
          <video
            ref={videoRef}
            src="/intro2.mp4"
            autoPlay
            muted
            playsInline
            onEnded={finishIntro}
            className={styles.introVideo}
          />
          <button onClick={finishIntro} className={styles.skipButton}>
            skip intro →
          </button>
        </div>
      )}

      {/* home screen */}
      <div className={`${styles.home} ${introDone ? styles.homeVisible : ''}`}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.stage}>
          <div className={styles.rockContainer}>
            <img
              src="/rock/logo.png"
              alt="Hosanna's rock"
              className={styles.rockImage}
              draggable={false}
            />
          </div>
          <p className={styles.handle}>@Hosanna Otchere</p>
        </div>
      </div>
    </main>
  );
}