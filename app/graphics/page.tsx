'use client';
import styles from './page.module.css';       

// Graphics Page
export default function Graphics() {
const navLinks = [
  { label: 'about me', href: '/about' },
  { label: 'graphics', href: '/graphics' },
  { label: 'videos', href: '/videos' },
  { label: 'tech', href: '/tech' },
];   
const words = ['🎨 ', 'In ', 'Development', ' - ', 'Launching ', 'Soon' ];

 return (
   <main className={styles.main}>
        <nav className={styles.nav}> 
            <ul className={styles.navList}>
                {navLinks.map((link) => (
                    <li key = {link.href}>
                        <a href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

        <div className={styles.stage}>
            {/* adding animation bc i can  */}
          <h1 className={styles.devMessage}>
          {words.map((word, i) => (
            <span
              key={i}
              className={styles.word}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {word}
            </span>
          ))}
        </h1>
      </div>
    </main>
  );

}
