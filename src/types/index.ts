export interface Video {
  id: string;
  title: string;
  brand: string;
  category: VideoCategory;
  videoUrl: string;
  views?: number;
  engagement?: string;
  date: string;
}

export type VideoCategory = 'home' | 'food' | 'tech';

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  logoUrl?: string;
}

export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  industry: string;
}

export interface NavItem {
  label: string;
  href: string;
}