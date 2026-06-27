'use client';
import styles from './PageShell.module.css';

const navLinks = [
  { label: 'about me', href: '/about' },
  { label: 'graphics', href: '/graphics' },
  { label: 'videos', href: '/videos' },
  { label: 'tech', href: '/tech' },
];

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
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
      <div className={styles.stage}>{children}</div>
    </main>
  );
}
