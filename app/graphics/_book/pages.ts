// The "project panel" for the book: every entry is one page, in reading order.
// Newest work goes at the TOP so it's the first page people see.
// To add a page: drop the image in /public/graphics/<year>, copy one block,
// paste it at the top, and change src/alt.

export type BookPage = {
  src: string;
  alt: string;
};

export const bookPages: BookPage[] = [
  // ── 2026 ──────────────────────────────────────────
  { src: '/graphics/2026/day-in-the-life-netflix-engineer.png', alt: 'Day in the Life of a Netflix Engineer flyer' },
  { src: '/graphics/2026/put-her-on-2.png', alt: 'Put Her On 2 event flyer' },
  { src: '/graphics/2026/adobe.png', alt: 'ColorStack @ OSU Adobe event flyer' },
  { src: '/graphics/2026/sherwin-williams.png', alt: 'Sherwin-Williams event flyer' },

  // The Internship Playbook carousel (slides in order)
  { src: '/graphics/2026/internship-playbook-01.png', alt: 'The Internship Playbook: networking and panel discussion' },
  { src: '/graphics/2026/internship-playbook-02.png', alt: 'The Internship Playbook: meet the panelists' },
  { src: '/graphics/2026/internship-playbook-03.png', alt: 'The Internship Playbook, slide 3' },
  { src: '/graphics/2026/internship-playbook-04.png', alt: 'The Internship Playbook, slide 4' },
  { src: '/graphics/2026/internship-playbook-05.png', alt: 'The Internship Playbook, slide 5' },
  { src: '/graphics/2026/internship-playbook-06.png', alt: 'The Internship Playbook, slide 6' },
  { src: '/graphics/2026/internship-playbook-07.png', alt: 'The Internship Playbook, slide 7' },
  { src: '/graphics/2026/internship-playbook-08.png', alt: 'The Internship Playbook, slide 8' },
  { src: '/graphics/2026/internship-playbook-09.png', alt: 'The Internship Playbook, slide 9' },
  { src: '/graphics/2026/internship-playbook-10.png', alt: 'The Internship Playbook: live Q&A' },

  { src: '/graphics/2026/matcha-and-manifest-2.png', alt: 'Matcha & Manifest 2 event flyer' },
  { src: '/graphics/2026/office-hours-announcement.png', alt: 'Office hours announcement' },

  // ── 2025 ──────────────────────────────────────────
  // Stacked Up Summit recap carousel
  { src: '/graphics/2025/stacked-up-summit-title.png', alt: 'Stacked Up Summit 2025 recap' },
  { src: '/graphics/2025/stacked-up-summit-why-you-should-go.png', alt: 'Stacked Up Summit: why you should go next year' },
  { src: '/graphics/2025/stacked-up-summit-national-slack-shoutout.png', alt: 'Stacked Up Summit: national Slack shoutout' },
  { src: '/graphics/2025/stacked-up-summit-tech-talk.png', alt: 'Stacked Up Summit: tech talk' },
  { src: '/graphics/2025/stacked-up-summit-career-impact.png', alt: 'Stacked Up Summit: career impact' },
  { src: '/graphics/2025/stacked-up-summit-free-swag.png', alt: 'Stacked Up Summit: free swag' },

  { src: '/graphics/2025/sep-stat.png', alt: 'Buckeye pizza stat graphic' },
  { src: '/graphics/2025/spring.png', alt: 'Spring semester graphic' },
  { src: '/graphics/2025/fall.png', alt: 'Fall semester graphic' },
  { src: '/graphics/2025/season-recap-24-25.png', alt: 'ColorStack 24-25 season recap' },
  { src: '/graphics/2025/netflix-april-3rd.png', alt: 'Netflix event flyer, April 3rd' },
  { src: '/graphics/2025/pinterest.png', alt: 'Pinterest event flyer' },
  { src: '/graphics/2025/pinterest-qr.png', alt: 'Pinterest event QR code' },
  { src: '/graphics/2025/eboard-applications.png', alt: 'E-Board applications flyer' },
  { src: '/graphics/2025/put-her-on.png', alt: 'ColorStack @ OSU "Put Her On" event flyer' },
  { src: '/graphics/2025/mastercard.png', alt: 'Mastercard event flyer' },
  { src: '/graphics/2025/chase.png', alt: 'ColorStack @ OSU Chase event flyer' },
  { src: '/graphics/2025/progressive-x-colorstack.png', alt: 'Progressive x ColorStack event flyer' },
];
