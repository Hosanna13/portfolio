import Image from 'next/image';
import PageShell from '../components/PageShell';
import styles from './page.module.css';

const links = {
  resume: '/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/hosannaao/',
  github: 'https://github.com/Hosanna13',
};

const tools = [
  'Java script',
  'typescript',
  'python',
  'C',
  'C++',
  'blender',
  'After Effects',
  'Adobe Premiere Pro',
  'Illustrator',
];

// One polaroid: photo behind the frame's transparent window, optional caption on the strip.
function Polaroid({ src, alt, caption, className }: { src: string; alt: string; caption?: string; className: string }) {
  return (
    <div className={`${styles.polaroid} ${className}`}>
      <div className={styles.photo}>
        <Image src={src} alt={alt} fill sizes="320px" preload={!!caption} />
      </div>
      <Image src="/about/polaroid-frame.png" alt="" fill sizes="340px" className={styles.frame} />
      {caption && <span className={styles.caption}>{caption}</span>}
    </div>
  );
}

export default function About() {
  return (
    <PageShell>
      <div className={styles.layout}>
        <section className={styles.scene}>
          <p className={styles.greeting}>Pleasure to meet you!</p>

          <div className={styles.polaroids}>
            <Polaroid src="/about/hosanna-red.png" alt="" className={styles.back} />
            <Polaroid
              src="/about/hosanna-teal.jpeg"
              alt="Portrait of Hosanna Otchere"
              caption="Hosanna"
              className={styles.front}
            />
          </div>

          <p className={styles.location}>
            Based in:
            <br />
            Columbus OH → Arlington VA
          </p>
        </section>

        <article className={styles.notes}>
          <h1 className={styles.title}>About Me</h1>

          <p className={styles.lined}>
            My name is Hosanna Otchere, and I&apos;m a junior studying electrical and computer
            engineering at The Ohio State University. I like making video edits, writing stories,
            and of course building new tools to help, with motion and graphic design.
          </p>

          <p className={styles.lined}>
            I am familiar with{' '}
            {tools.map((tool) => (
              <span key={tool}>
                <span className={styles.tool}>{tool}</span>,{' '}
              </span>
            ))}
            <span className={styles.tool}>Figma</span> and More!
          </p>

          <div className={styles.actions}>
            <a href={links.resume} className={styles.pill} download>
              resume
              <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.icon}>
                <path d="M8 1.5v8m0 0L4.8 6.3M8 9.5l3.2-3.2M2.5 11v3h11v-3" />
              </svg>
            </a>
            <a href={links.linkedin} className={styles.pill} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href={links.github} className={styles.pill} target="_blank" rel="noreferrer">
              github
            </a>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
