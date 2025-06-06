export interface WorkItem {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  likes: number;
  comments: number;
  shares: number;
}

const workItems: WorkItem[] = [
  {
    id: 'shark',
    title: 'Shark Collaboration',
    description: 'Showcasing innovative cleaning products for modern homes',
    videoSrc: '/videos/shark.mp4',
    likes: 12546,
    comments: 243,
    shares: 189
  },
  {
    id: 'pampers',
    title: 'Pampers Campaign',
    description: 'Creating heartwarming content for parents and families',
    videoSrc: '/videos/pampers.mp4',
    likes: 9867,
    comments: 132,
    shares: 76
  },
  {
    id: 'palmolive',
    title: 'Palmolive Feature',
    description: 'Highlighting the sensory experience of premium dishwashing',
    videoSrc: '/videos/palmolive.mp4',
    likes: 24153,
    comments: 432,
    shares: 321
  },
  {
    id: 'oreo',
    title: 'Oreo Cookie Campaign',
    description: 'Fun and playful content for the iconic cookie brand',
    videoSrc: '/videos/oreo.mp4',
    likes: 8234,
    comments: 156,
    shares: 98
  },
  {
    id: 'dove',
    title: 'Dove Beauty Series',
    description: 'Authentic beauty content promoting self-confidence',
    videoSrc: '/videos/dove.mp4',
    likes: 18432,
    comments: 342,
    shares: 278
  },
  {
    id: 'charmin',
    title: 'Charmin Collaboration',
    description: 'Creative household essentials content with a touch of humor',
    videoSrc: '/videos/charmin.mp4',
    likes: 7521,
    comments: 189,
    shares: 103
  }
];

export default workItems; 