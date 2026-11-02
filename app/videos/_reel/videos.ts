// The "project panel" for the video wall: every entry is one video, newest first.
// To add a video: drop the file in /public/videos, copy one block, paste it at the TOP,
// and fill in src/title/description. Each tile sizes itself to the video's own shape.
//
// `ratio` is only for placeholders (no src yet) so the empty tile has a shape.
// Delete it once the real file is in.

export type Video = {
  src: string;
  title: string;
  description: string;
  ratio?: string;
};

export const videos: Video[] = [
  {
    src: '/videos/summer-recap-2025.mp4',
    title: 'Winter Recap 2025',
    description: 'A recap of Winter Break 2025 focusing on experimentation with new styles and mixed media animation.',
  },
  {
    src: '/videos/obessed-artist-trope.mp4',
    title: 'Obsessed Artist Trope',
    description: 'Exploring the obsession-driven parallels in Black Swan and Whiplash, and how society rewards male ambition while punishing female drive.',
  },
  {
    src: '/videos/lebron-james.mp4',
    title: 'LeBron James',
    description: "A retrospective video edit tracing LeBron James's carrer trajectory.",
  },
  {
    src: '/videos/moonlight.mp4',
    title: 'Moonlight',
    description: "A Moonlight video edit set to 'The Middle of the World,' retelling Chiron's growth and matching the film's pacing to the music.",
  },
  {
    src: '/videos/blow-my-load-lyric-video.mp4',
    title: 'Blow My Load (Lyric Video)',
    description: 'A lyric video snippet for Tyler, The Creator\'s "Blow My Load," showcasing an experimental editing style with tight transitions and rhythm-synced text.',
  },
  {
    src: '/videos/belle.mp4',
    title: 'Belle',
    description: 'A video edit featuring Belle.',
  },
  {
    src: '/videos/Stressed%20Out%20(Final)-1.m4v',
    title: 'Stressed Out Animation Video',
    description: 'Made in 2023 (senior year) using Blender and After Effects. All assets created by me.',
  },
];
