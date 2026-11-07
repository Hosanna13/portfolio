'use client';
import { useEffect, useRef, useState } from 'react';
import VideoModal from './VideoModal';
import type { Video } from './videos';
import styles from './VideoWall.module.css';

const MIN_COLUMN_WIDTH = 240;
const MAX_COLUMN_COUNT = 4;

export default function VideoWall({ videos }: { videos: Video[] }) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(MAX_COLUMN_COUNT);
  const [open, setOpen] = useState<Video | null>(null);

  // Keep the previews large enough to fill the screen instead of adding many narrow columns.
  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      const count = width < 640
        ? (width >= 320 ? 2 : 1)
        : Math.floor(width / MIN_COLUMN_WIDTH);
      setColumnCount(
        Math.max(1, Math.min(MAX_COLUMN_COUNT, count)),
      );
    });
    observer.observe(wall);
    return () => observer.disconnect();
  }, []);

  // Deal videos into columns left to right, like cards: the newest fill the top row.
  const columns: Video[][] = Array.from({ length: columnCount }, () => []);
  videos.forEach((video, i) => columns[i % columnCount].push(video));

  return (
    <>
      <div ref={wallRef} className={styles.wall}>
        {columns.map((column, c) => (
          <div key={c} className={styles.column}>
            {column.map((video, i) => (
              <VideoTile key={`${c}-${i}`} video={video} onOpen={() => setOpen(video)} />
            ))}
          </div>
        ))}
      </div>

      <VideoModal video={open} onClose={() => setOpen(null)} />
    </>
  );
}

// One tile: a muted preview that plays on hover and opens the full view on click.
function VideoTile({ video, onOpen }: { video: Video; onOpen: () => void }) {
  return (
    <button className={styles.tile} onClick={onOpen} aria-label={`Open ${video.title}`}>
      {video.src ? (
        <video
          className={styles.preview}
          src={video.src}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          onMouseEnter={(e) => e.currentTarget.play()}
          onMouseLeave={(e) => e.currentTarget.pause()}
        />
      ) : (
        <div className={styles.placeholder} style={{ aspectRatio: video.ratio ?? '9 / 16' }}>
          ▶
        </div>
      )}
    </button>
  );
}
