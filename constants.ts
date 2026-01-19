import { Article, TagColor } from './types';

export const NAV_LINKS = [
  { label: 'TOOLS', href: '/tools' },
  { label: 'TUTORIALS', href: '/tutorials' },
  { label: 'ETHICS', href: '/ethics' },
  { label: 'COMMUNITY', href: '/community' },
];

export const HERO_TAGS = [
  '#GENERATIVE', '#SYNTHETIC', '#DIFFUSION', '#MODEL'
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Midjourney V7: The End of Photography?',
    category: 'BREAKING',
    author: 'Sarah Jenkins',
    date: 'OCT 24',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    bgColor: TagColor.LIME,
  },
  {
    id: '2',
    title: 'How to Train Your Own LoRA Model',
    category: 'TUTORIAL',
    author: 'Devin K.',
    date: 'OCT 23',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    bgColor: TagColor.PURPLE,
  },
  {
    id: '3',
    title: 'Design Systems for the AI Age',
    category: 'OPINION',
    author: 'M. Robson',
    date: 'OCT 22',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    bgColor: TagColor.YELLOW,
  },
  {
    id: '4',
    title: 'The Legal Landscape of Copyright',
    category: 'LEGAL',
    author: 'Legal Eagle',
    date: 'OCT 21',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    bgColor: TagColor.ORANGE,
  },
  {
    id: '5',
    title: 'Runway Gen-3 Alpha Review',
    category: 'REVIEW',
    author: 'Video Synth',
    date: 'OCT 20',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    bgColor: TagColor.BLUE,
  },
  {
    id: '6',
    title: 'Prompt Engineering is Dead. Long Live Context.',
    category: 'ANALYSIS',
    author: 'AI Whisperer',
    date: 'OCT 19',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    bgColor: TagColor.PINK,
  },
];

export const MARQUEE_TEXT = "BREAKING NEWS +++ AI TAKES OVER PIXELS +++ NEW MODELS RELEASED +++ GENERATIVE FILL IS MAGIC +++ ";
