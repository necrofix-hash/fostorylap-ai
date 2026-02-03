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
  {
    id: '7',
    title: 'Generative Fill: A Complete Guide',
    category: 'TUTORIAL',
    author: 'Adobe Expert',
    date: 'OCT 18',
    imageUrl: 'https://picsum.photos/800/600?random=7',
    bgColor: TagColor.PURPLE,
  },
  {
    id: '8',
    title: 'DALL-E 3 vs Midjourney: Ultimate Comparison',
    category: 'REVIEW',
    author: 'AI Compare',
    date: 'OCT 17',
    imageUrl: 'https://picsum.photos/800/600?random=8',
    bgColor: TagColor.BLUE,
  },
  {
    id: '9',
    title: 'The Rise of Synthetic Media in Advertising',
    category: 'ANALYSIS',
    author: 'Media Watch',
    date: 'OCT 16',
    imageUrl: 'https://picsum.photos/800/600?random=9',
    bgColor: TagColor.PINK,
  },
  {
    id: '10',
    title: 'Stable Diffusion XL: New Features Explained',
    category: 'BREAKING',
    author: 'Tech Reporter',
    date: 'OCT 15',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    bgColor: TagColor.LIME,
  },
  {
    id: '11',
    title: 'Building a Custom Diffusion Model',
    category: 'TUTORIAL',
    author: 'ML Engineer',
    date: 'OCT 14',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    bgColor: TagColor.PURPLE,
  },
  {
    id: '12',
    title: 'AI Art in Museums: A New Era',
    category: 'OPINION',
    author: 'Art Critic',
    date: 'OCT 13',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    bgColor: TagColor.YELLOW,
  },
  {
    id: '13',
    title: 'ComfyUI Workflow Masterclass',
    category: 'TUTORIAL',
    author: 'Node Master',
    date: 'OCT 12',
    imageUrl: 'https://picsum.photos/800/600?random=13',
    bgColor: TagColor.PURPLE,
  },
  {
    id: '14',
    title: 'AI Model Training: Legal Implications',
    category: 'LEGAL',
    author: 'IP Lawyer',
    date: 'OCT 11',
    imageUrl: 'https://picsum.photos/800/600?random=14',
    bgColor: TagColor.ORANGE,
  },
  {
    id: '15',
    title: 'Generative AI in Game Development',
    category: 'ANALYSIS',
    author: 'Game Dev Pro',
    date: 'OCT 10',
    imageUrl: 'https://picsum.photos/800/600?random=15',
    bgColor: TagColor.PINK,
  },
];

export const MARQUEE_TEXT = "BREAKING NEWS +++ AI TAKES OVER PIXELS +++ NEW MODELS RELEASED +++ GENERATIVE FILL IS MAGIC +++ ";

export interface Tool {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  rating: number;
  externalUrl: string;
  features: string[];
  pricing: string;
  platforms: string[];
}

export const TOOLS_DATA: Tool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI image generation with stunning artistic quality',
    fullDescription: 'Midjourney is an independent research lab that produces an AI program under the same name that creates images from textual descriptions. It is one of the most popular AI art generators, known for its distinctive artistic style and high-quality outputs.',
    category: 'IMAGE',
    rating: 4.9,
    externalUrl: 'https://midjourney.com',
    features: ['Text-to-image generation', 'Style variations', 'Upscaling', 'Pan and zoom', 'Remix mode'],
    pricing: 'From $10/month',
    platforms: ['Discord', 'Web'],
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open-source image generation model',
    fullDescription: 'Stable Diffusion is a deep learning, text-to-image model released in 2022. It is primarily used to generate detailed images conditioned on text descriptions, and can also be used for inpainting, outpainting, and image-to-image translations.',
    category: 'IMAGE',
    rating: 4.7,
    externalUrl: 'https://stability.ai',
    features: ['Open-source', 'Local installation', 'LoRA training', 'ControlNet support', 'Inpainting'],
    pricing: 'Free (self-hosted)',
    platforms: ['Local', 'Web', 'API'],
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'AI-powered video editing and generation',
    fullDescription: 'Runway is an applied AI research company building the next generation of creative tools. Their Gen-2 model enables text-to-video and image-to-video generation, revolutionizing video content creation.',
    category: 'VIDEO',
    rating: 4.8,
    externalUrl: 'https://runwayml.com',
    features: ['Text-to-video', 'Image-to-video', 'Video editing', 'Green screen', 'Motion tracking'],
    pricing: 'From $15/month',
    platforms: ['Web', 'iOS'],
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    description: "OpenAI's text-to-image generation",
    fullDescription: 'DALL-E 3 is OpenAI\'s latest image generation model, integrated with ChatGPT. It understands significantly more nuance and detail than previous systems, allowing you to easily translate your ideas into exceptionally accurate images.',
    category: 'IMAGE',
    rating: 4.6,
    externalUrl: 'https://openai.com/dall-e-3',
    features: ['ChatGPT integration', 'High accuracy', 'Text rendering', 'Style control', 'Safety features'],
    pricing: 'Included with ChatGPT Plus ($20/month)',
    platforms: ['Web', 'API', 'Bing'],
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    description: 'AI-assisted design tools in Figma',
    fullDescription: 'Figma AI brings intelligent features directly into the design workflow. From generating design variations to automating repetitive tasks, it helps designers work faster and more creatively.',
    category: 'DESIGN',
    rating: 4.5,
    externalUrl: 'https://figma.com',
    features: ['Auto layout suggestions', 'Content generation', 'Design search', 'Asset recommendations', 'Prototype assistance'],
    pricing: 'Included with Figma Pro',
    platforms: ['Web', 'Desktop'],
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Generative AI for creative workflows',
    fullDescription: 'Adobe Firefly is a family of creative generative AI models designed to be safe for commercial use. It\'s integrated across Adobe Creative Cloud apps, enabling text-to-image, generative fill, and text effects.',
    category: 'DESIGN',
    rating: 4.4,
    externalUrl: 'https://firefly.adobe.com',
    features: ['Generative fill', 'Text effects', 'Adobe CC integration', 'Commercial safe', 'Style transfer'],
    pricing: 'From $4.99/month',
    platforms: ['Web', 'Photoshop', 'Illustrator'],
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    description: 'AI-powered asset generation for games and creative projects',
    fullDescription: 'Leonardo AI is a powerful creative platform that enables users to generate production-quality visual assets for games, concept art, and design projects with unprecedented speed and style consistency.',
    category: 'IMAGE',
    rating: 4.6,
    externalUrl: 'https://leonardo.ai',
    features: ['Game asset generation', 'Character design', 'Texture creation', 'Model training', 'Real-time canvas'],
    pricing: 'Free tier available',
    platforms: ['Web'],
  },
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    description: 'AI video generation and editing platform',
    fullDescription: 'Pika is an AI video generation platform that creates and edits videos from text, images, or existing video clips. It offers intuitive controls for camera movement, style, and motion.',
    category: 'VIDEO',
    rating: 4.5,
    externalUrl: 'https://pika.art',
    features: ['Text-to-video', 'Lip sync', 'Video editing', 'Camera controls', 'Style presets'],
    pricing: 'Free tier available',
    platforms: ['Web', 'Discord'],
  },
];
