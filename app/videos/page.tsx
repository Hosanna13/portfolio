import PageShell from '../components/PageShell';
import VideoWall from './_reel/VideoWall';
import { videos } from './_reel/videos';
import styles from './page.module.css';

export default function Videos() {
  return (
    <PageShell stageClassName={styles.videoStage}>
      <div className={styles.videoContent}>
        <VideoWall videos={videos} />
      </div>
    </PageShell>
  );
}
