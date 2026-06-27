'use client';
import PageShell from '../components/PageShell';
import styles from './page.module.css';

const skillLogos = ['JS', 'TS', 'PY', 'C++', 'AE', 'FIG'];
const words = ['🙈', 'In', 'Development', '-', 'Launching', 'Soon'];
const frameSrc = '/frame.png';

export default function About() {
  return (
    <PageShell>
      <div className={styles.contentGrid}>
        <aside className={styles.leftPane}>
          <div className={styles.skillSection}>
            <div className={styles.skillIcons}>
              {skillLogos.map((logo) => (
                <span key={logo} className={styles.skillIcon}>
                  {logo}
                </span>
              ))}
            </div>
            <span className={styles.skillLabel}>SKILLS!</span>
          </div>

          <div className={styles.frameWrapper}>
            <div className={styles.frameBack} />
            <div className={styles.frameSide} />
            <div className={styles.photoHeader}>Pleasure to meet you!</div>
            <div className={styles.photoFrame}>
              <img
                className={styles.frameImage}
                src={frameSrc}
                alt="Photo frame"
                width={320}
                height={340}
              />
              <div className={styles.frameCaption}>Hosanna</div>
            </div>
          </div>

          <p className={styles.location}>
            Based in:
            <br />
            Columbus OH → Arlington VA
          </p>
        </aside>

        <article className={styles.rightPane}>
          <h1 className={styles.pageTitle}>About Me</h1>

          <div className={styles.notebookPaper}>
            <div className={styles.notebookLine}>
              <span>
                My name is Hosanna Otchere, and I’m a junior studying electrical
                and computer engineering at The Ohio State University.
              </span>
            </div>
            <div className={styles.notebookLine}>
              <span>
                I like making video edits, writing stories, and building new tools
                to help with motion and graphic design.
              </span>
            </div>
            <div className={styles.notebookLine}>
              <span>
                I am familiar with{' '}
                <span className={styles.toolCode}>JavaScript</span>,{' '}
                <span className={styles.toolCode}>TypeScript</span>,{' '}
                <span className={styles.toolCode}>Python</span>,{' '}
                <span className={styles.toolCode}>C</span>,{' '}
                <span className={styles.toolCode}>C++</span>,{' '}
                <span className={styles.toolDesign}>Blender</span>,{' '}
                <span className={styles.toolDesign}>After Effects</span>,{' '}
                <span className={styles.toolDesign}>Adobe Premiere Pro</span>,{' '}
                <span className={styles.toolDesign}>Illustrator</span>,{' '}
                <span className={styles.toolDesign}>Figma</span>, and more.
              </span>
            </div>
            <div className={styles.notebookLineEmpty} />
            <div className={styles.notebookLineEmpty} />
          </div>

          <div className={styles.actionRow}>
            <button className={styles.actionButton}>resume</button>
            <button className={styles.actionButton}>in</button>
            <button className={styles.actionButton}>github</button>
            <span className={styles.clickMe}>Click me →</span>
          </div>
        </article>
      </div>

      <div className={styles.devMessage}>
        {words.map((word, i) => (
          <span
            key={i}
            className={styles.word}
            style={{ animationDelay: `${i * 0.13}s` }}
          >
            {word}
          </span>
        ))}
      </div>
    </PageShell>
  );
}
