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
  {
    id: '16',
    title: 'The Future of AI-Assisted Music Production',
    category: 'ANALYSIS',
    author: 'Sound Wave',
    date: 'OCT 09',
    imageUrl: 'https://picsum.photos/800/600?random=16',
    bgColor: TagColor.PURPLE,
  },
  {
    id: '17',
    title: 'Mastering Negative Prompts: Advanced Techniques',
    category: 'TUTORIAL',
    author: 'Prompt Pro',
    date: 'OCT 08',
    imageUrl: 'https://picsum.photos/800/600?random=17',
    bgColor: TagColor.LIME,
  },
  {
    id: '18',
    title: 'OpenAI Sora: What We Know So Far',
    category: 'BREAKING',
    author: 'Tech Insider',
    date: 'OCT 07',
    imageUrl: 'https://picsum.photos/800/600?random=18',
    bgColor: TagColor.ORANGE,
  },
  {
    id: '19',
    title: 'Building a Personal AI Art Brand',
    category: 'OPINION',
    author: 'Brand Builder',
    date: 'OCT 06',
    imageUrl: 'https://picsum.photos/800/600?random=19',
    bgColor: TagColor.YELLOW,
  },
  {
    id: '20',
    title: 'IP-Adapter Deep Dive: Face Consistency',
    category: 'TUTORIAL',
    author: 'Face Master',
    date: 'OCT 05',
    imageUrl: 'https://picsum.photos/800/600?random=20',
    bgColor: TagColor.BLUE,
  },
  {
    id: '21',
    title: 'AI Ethics in Commercial Photography',
    category: 'LEGAL',
    author: 'Ethics Board',
    date: 'OCT 04',
    imageUrl: 'https://picsum.photos/800/600?random=21',
    bgColor: TagColor.PINK,
  },
  {
    id: '22',
    title: 'Flux.1: The New Open Source King?',
    category: 'REVIEW',
    author: 'Model Tester',
    date: 'OCT 03',
    imageUrl: 'https://picsum.photos/800/600?random=22',
    bgColor: TagColor.LIME,
  },
  {
    id: '23',
    title: 'Creating Seamless Textures with AI',
    category: 'TUTORIAL',
    author: 'Texture Artist',
    date: 'OCT 02',
    imageUrl: 'https://picsum.photos/800/600?random=23',
    bgColor: TagColor.PURPLE,
  },
  {
    id: '24',
    title: 'The Psychology of AI-Generated Faces',
    category: 'ANALYSIS',
    author: 'Mind Reader',
    date: 'OCT 01',
    imageUrl: 'https://picsum.photos/800/600?random=24',
    bgColor: TagColor.ORANGE,
  },
  {
    id: '25',
    title: 'ControlNet 1.1: Complete Feature Guide',
    category: 'TUTORIAL',
    author: 'Control Freak',
    date: 'SEP 30',
    imageUrl: 'https://picsum.photos/800/600?random=25',
    bgColor: TagColor.BLUE,
  },
  {
    id: '26',
    title: 'AI Art Galleries: A New Market Emerges',
    category: 'OPINION',
    author: 'Art Dealer',
    date: 'SEP 29',
    imageUrl: 'https://picsum.photos/800/600?random=26',
    bgColor: TagColor.YELLOW,
  },
  {
    id: '27',
    title: 'Inpainting Secrets: Professional Techniques',
    category: 'TUTORIAL',
    author: 'Paint Master',
    date: 'SEP 28',
    imageUrl: 'https://picsum.photos/800/600?random=27',
    bgColor: TagColor.PINK,
  },
  {
    id: '28',
    title: 'Google Imagen 3: First Impressions',
    category: 'REVIEW',
    author: 'Google Watch',
    date: 'SEP 27',
    imageUrl: 'https://picsum.photos/800/600?random=28',
    bgColor: TagColor.LIME,
  },
  {
    id: '29',
    title: 'The Death of Stock Photography?',
    category: 'ANALYSIS',
    author: 'Industry Expert',
    date: 'SEP 26',
    imageUrl: 'https://picsum.photos/800/600?random=29',
    bgColor: TagColor.ORANGE,
  },
  {
    id: '30',
    title: 'AnimateDiff: Bringing Images to Life',
    category: 'TUTORIAL',
    author: 'Animation Pro',
    date: 'SEP 25',
    imageUrl: 'https://picsum.photos/800/600?random=30',
    bgColor: TagColor.PURPLE,
  },
];

export const MARQUEE_TEXT = "BREAKING NEWS +++ AI TAKES OVER PIXELS +++ NEW MODELS RELEASED +++ GENERATIVE FILL IS MAGIC +++ ";

export interface CommunityMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  bio: string;
  joinedDate: string;
  points: number;
  badges: string[];
  socialLinks: { platform: string; url: string }[];
  recentWork: { title: string; imageUrl: string }[];
  skills: string[];
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'battle' | 'showcase' | 'workshop' | 'meetup';
  host: string;
  attendees: number;
  maxAttendees: number;
  location: string;
  topics: string[];
  requirements: string[];
}

export interface LeaderboardEntry {
  rank: number;
  userId: string;
  username: string;
  points: number;
  avatar: string;
  color: string;
  wins: number;
  streak: number;
}

export const COMMUNITY_MEMBERS: CommunityMember[] = [
  {
    id: 'sarah-j',
    name: 'Sarah Jenkins',
    role: 'AI Artist',
    avatar: 'SJ',
    color: 'bg-lime-300',
    bio: 'Professional AI artist specializing in surrealist landscapes and character design. Former traditional painter turned digital creator. Passionate about pushing the boundaries of AI-assisted creativity.',
    joinedDate: 'March 2024',
    points: 4850,
    badges: ['Top Contributor', 'Prompt Master', 'Community Helper', 'Tutorial Creator'],
    socialLinks: [{ platform: 'Twitter', url: '#' }, { platform: 'Instagram', url: '#' }, { platform: 'Portfolio', url: '#' }],
    recentWork: [
      { title: 'Neon Dreams', imageUrl: 'https://picsum.photos/400/300?random=101' },
      { title: 'Digital Sunset', imageUrl: 'https://picsum.photos/400/300?random=102' },
      { title: 'Cyber Garden', imageUrl: 'https://picsum.photos/400/300?random=103' },
    ],
    skills: ['Midjourney', 'Stable Diffusion', 'ComfyUI', 'Photoshop'],
  },
  {
    id: 'devin-k',
    name: 'Devin K.',
    role: 'Prompt Engineer',
    avatar: 'DK',
    color: 'bg-purple-300',
    bio: 'Prompt engineering specialist with a background in computational linguistics. Helping others master the art of AI communication. Regular workshop host and tutorial creator.',
    joinedDate: 'January 2024',
    points: 5120,
    badges: ['Prompt Master', 'Workshop Host', 'Top 10 Weekly', 'Mentor'],
    socialLinks: [{ platform: 'Twitter', url: '#' }, { platform: 'GitHub', url: '#' }],
    recentWork: [
      { title: 'Prompt Guide V2', imageUrl: 'https://picsum.photos/400/300?random=104' },
      { title: 'Style Transfer Study', imageUrl: 'https://picsum.photos/400/300?random=105' },
      { title: 'Character Consistency', imageUrl: 'https://picsum.photos/400/300?random=106' },
    ],
    skills: ['Prompt Engineering', 'DALL-E 3', 'Claude', 'Technical Writing'],
  },
  {
    id: 'm-robson',
    name: 'M. Robson',
    role: 'Designer',
    avatar: 'MR',
    color: 'bg-cyan-300',
    bio: 'UX/UI designer integrating AI tools into professional workflows. Focused on practical applications of generative AI in design systems and brand identity work.',
    joinedDate: 'February 2024',
    points: 3890,
    badges: ['Design Expert', 'Community Helper', 'Beta Tester'],
    socialLinks: [{ platform: 'Dribbble', url: '#' }, { platform: 'LinkedIn', url: '#' }],
    recentWork: [
      { title: 'AI Brand System', imageUrl: 'https://picsum.photos/400/300?random=107' },
      { title: 'Generative Icons', imageUrl: 'https://picsum.photos/400/300?random=108' },
      { title: 'UI Kit Concept', imageUrl: 'https://picsum.photos/400/300?random=109' },
    ],
    skills: ['Figma', 'Adobe Firefly', 'UI Design', 'Brand Identity'],
  },
  {
    id: 'ai-whisperer',
    name: 'AI Whisperer',
    role: 'Researcher',
    avatar: 'AW',
    color: 'bg-pink-300',
    bio: 'AI researcher and ethicist exploring the intersection of machine learning and creative expression. Contributing to open-source AI tools and writing about responsible AI use.',
    joinedDate: 'December 2023',
    points: 6200,
    badges: ['Researcher', 'Ethics Advocate', 'Top Contributor', 'Founding Member'],
    socialLinks: [{ platform: 'Twitter', url: '#' }, { platform: 'Blog', url: '#' }, { platform: 'GitHub', url: '#' }],
    recentWork: [
      { title: 'Ethics Framework', imageUrl: 'https://picsum.photos/400/300?random=110' },
      { title: 'Model Comparison', imageUrl: 'https://picsum.photos/400/300?random=111' },
      { title: 'Training Analysis', imageUrl: 'https://picsum.photos/400/300?random=112' },
    ],
    skills: ['Research', 'Python', 'Machine Learning', 'Technical Writing'],
  },
];

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: 'weekly-prompt-battle',
    title: 'Weekly Prompt Battle',
    date: 'Every Friday',
    time: '8PM EST',
    description: 'Compete against fellow community members in our weekly prompt battle! Each week features a new theme. Participants have 30 minutes to create their best image using the given prompt constraints. Winners receive points and exclusive badges.',
    type: 'battle',
    host: 'Community Team',
    attendees: 89,
    maxAttendees: 150,
    location: 'Discord #prompt-battle',
    topics: ['Competition', 'Prompt Writing', 'Speed Creation', 'Community Voting'],
    requirements: ['Discord account', 'Any AI image generator', 'Creative spirit!'],
  },
  {
    id: 'ai-art-showcase',
    title: 'AI Art Showcase',
    date: 'Jan 25, 2025',
    time: '6PM EST',
    description: 'Monthly showcase where community members present their best work from the past month. Get feedback from peers, discover new techniques, and celebrate creative achievements together.',
    type: 'showcase',
    host: 'Sarah Jenkins',
    attendees: 156,
    maxAttendees: 200,
    location: 'Discord #showcase-stage',
    topics: ['Art Presentation', 'Feedback Session', 'Technique Sharing', 'Networking'],
    requirements: ['At least one piece to share', 'Constructive attitude'],
  },
  {
    id: 'comfyui-workshop',
    title: 'Tool Workshop: ComfyUI',
    date: 'Jan 28, 2025',
    time: '3PM EST',
    description: 'Deep dive into ComfyUI with our resident expert. Learn to build custom workflows, integrate ControlNet, and automate your creative process. Suitable for intermediate users.',
    type: 'workshop',
    host: 'Devin K.',
    attendees: 45,
    maxAttendees: 50,
    location: 'Discord #workshop-room',
    topics: ['ComfyUI Basics', 'Custom Nodes', 'Workflow Building', 'ControlNet Integration'],
    requirements: ['ComfyUI installed', 'Basic Stable Diffusion knowledge', 'GPU with 8GB+ VRAM'],
  },
  {
    id: 'virtual-meetup-feb',
    title: 'Virtual Meetup: AI in 2025',
    date: 'Feb 5, 2025',
    time: '7PM EST',
    description: 'Casual virtual hangout to discuss the future of AI in creative fields. Share predictions, concerns, and excitement about upcoming developments. All experience levels welcome!',
    type: 'meetup',
    host: 'AI Whisperer',
    attendees: 78,
    maxAttendees: 100,
    location: 'Discord #voice-lounge',
    topics: ['Industry Trends', 'Future Predictions', 'Open Discussion', 'Q&A'],
    requirements: ['Curiosity about AI future'],
  },
];

export const LEADERBOARD_DATA: LeaderboardEntry[] = [
  { rank: 1, oderId: 'pm99', username: 'PromptMaster_99', points: 1250, avatar: 'PM', color: 'bg-yellow-400', wins: 12, streak: 5 },
  { rank: 2, oderId: 'aiart', username: 'AIArtisan', points: 1100, avatar: 'AA', color: 'bg-gray-300', wins: 9, streak: 3 },
  { rank: 3, oderId: 'pixel', username: 'PixelDreamer', points: 950, avatar: 'PD', color: 'bg-orange-400', wins: 7, streak: 2 },
  { rank: 4, userId: 'neon', username: 'NeonNinja', points: 890, avatar: 'NN', color: 'bg-purple-300', wins: 6, streak: 4 },
  { rank: 5, oderId: 'synth', username: 'SynthWave', points: 820, avatar: 'SW', color: 'bg-cyan-300', wins: 5, streak: 1 },
  { rank: 6, userId: 'dream', username: 'DreamCatcher', points: 780, avatar: 'DC', color: 'bg-pink-300', wins: 5, streak: 2 },
  { rank: 7, userId: 'cyber', username: 'CyberCanvas', points: 720, avatar: 'CC', color: 'bg-lime-300', wins: 4, streak: 0 },
  { rank: 8, userId: 'gen', username: 'GenArtist', points: 680, avatar: 'GA', color: 'bg-orange-300', wins: 4, streak: 1 },
  { rank: 9, userId: 'flux', username: 'FluxMaster', points: 650, avatar: 'FM', color: 'bg-blue-300', wins: 3, streak: 3 },
  { rank: 10, userId: 'vision', username: 'VisionaryAI', points: 600, avatar: 'VA', color: 'bg-red-300', wins: 3, streak: 0 },
];

export interface EthicsTopic {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: 'copyright' | 'deepfake' | 'compensation' | 'environment' | 'framework' | 'legal' | 'checklist' | 'report';
  category: 'topic' | 'resource';
  bgColor: string;
  content: {
    section: string;
    text: string;
  }[];
  keyPoints: string[];
  relatedLinks: { title: string; url: string }[];
}

export const ETHICS_DATA: EthicsTopic[] = [
  {
    id: 'copyright-training-data',
    title: 'Copyright & Training Data',
    shortTitle: 'Copyright',
    description: 'Understanding the complex legal landscape of AI training data, copyright claims, and the rights of original creators.',
    icon: 'copyright',
    category: 'topic',
    bgColor: 'bg-orange-300',
    content: [
      { section: 'The Core Issue', text: 'AI models are trained on vast datasets that often include copyrighted works. This has sparked intense debate about whether this constitutes fair use or copyright infringement. Artists and creators are increasingly concerned about their work being used without consent or compensation.' },
      { section: 'Current Legal Landscape', text: 'Multiple lawsuits are currently challenging AI companies\' use of copyrighted material. Courts are grappling with questions that existing copyright law wasn\'t designed to address. The outcomes of these cases will shape the future of AI-generated content.' },
      { section: 'Different Perspectives', text: 'AI companies argue that training is transformative fair use, similar to how humans learn from existing works. Artists counter that their specific styles and techniques are being replicated without permission. Both sides raise valid concerns that need balanced consideration.' },
      { section: 'Best Practices', text: 'Until legal clarity emerges, creators should: use models trained on licensed data when possible, avoid directly replicating specific artists\' styles, be transparent about AI usage, and consider the ethical implications of their creative choices.' },
    ],
    keyPoints: ['Training data often includes copyrighted works', 'Legal status remains uncertain', 'Multiple ongoing lawsuits', 'Transparency is crucial'],
    relatedLinks: [{ title: 'US Copyright Office on AI', url: '#' }, { title: 'EU AI Act Overview', url: '#' }],
  },
  {
    id: 'deepfakes-misinformation',
    title: 'Deepfakes & Misinformation',
    shortTitle: 'Deepfakes',
    description: 'The dangers of synthetic media, how to identify manipulated content, and the responsibility of creators.',
    icon: 'deepfake',
    category: 'topic',
    bgColor: 'bg-red-300',
    content: [
      { section: 'What Are Deepfakes?', text: 'Deepfakes are AI-generated synthetic media where a person\'s likeness is replaced with someone else\'s. While the technology has legitimate uses in entertainment and education, it poses serious risks when used maliciously for fraud, harassment, or political manipulation.' },
      { section: 'The Misinformation Threat', text: 'AI-generated images and videos can spread false narratives at unprecedented speed. From fake political speeches to fabricated evidence, synthetic media threatens to erode trust in visual information. The phrase "seeing is believing" no longer holds true.' },
      { section: 'Detection Methods', text: 'Look for: unnatural blinking or eye movement, inconsistent lighting, blurry boundaries around faces, audio-visual sync issues, and artifacts in hair or jewelry. Detection tools are improving but struggle to keep pace with generation technology.' },
      { section: 'Creator Responsibility', text: 'As creators, we must never use AI to deceive or harm. Always label synthetic content clearly, never create non-consensual intimate imagery, and consider the potential misuse of realistic generations before sharing.' },
    ],
    keyPoints: ['Deepfakes can be used for fraud and manipulation', 'Detection is increasingly difficult', 'Clear labeling is essential', 'Never create non-consensual content'],
    relatedLinks: [{ title: 'Deepfake Detection Tools', url: '#' }, { title: 'Report Harmful Content', url: '#' }],
  },
  {
    id: 'artist-compensation',
    title: 'Artist Compensation',
    shortTitle: 'Compensation',
    description: 'Exploring fair compensation models for artists whose work contributes to AI training and the future of creative labor.',
    icon: 'compensation',
    category: 'topic',
    bgColor: 'bg-purple-300',
    content: [
      { section: 'The Compensation Gap', text: 'Artists whose work was used to train AI models have received no compensation, while companies profit from these systems. This has created a fundamental tension in the creative industry about the value of original work in the AI age.' },
      { section: 'Proposed Solutions', text: 'Several compensation models are being explored: opt-in licensing systems, collective bargaining through artist unions, royalty structures similar to music streaming, and blockchain-based attribution systems. Each has advantages and implementation challenges.' },
      { section: 'The Value of Human Creativity', text: 'AI cannot create without human creativity as its foundation. Every generated image builds on millions of human-created works. Recognizing and compensating this contribution is both an ethical imperative and essential for sustaining future creativity.' },
      { section: 'Supporting Artists Today', text: 'While systemic solutions develop, individuals can help: commission original art, credit inspirations, support artists on platforms like Patreon, advocate for fair compensation policies, and choose AI tools with ethical training practices.' },
    ],
    keyPoints: ['Artists deserve compensation for training contributions', 'Multiple models being explored', 'Human creativity remains foundational', 'Support artists directly'],
    relatedLinks: [{ title: 'Artist Rights Organizations', url: '#' }, { title: 'Ethical AI Platforms', url: '#' }],
  },
  {
    id: 'environmental-impact',
    title: 'Environmental Impact',
    shortTitle: 'Environment',
    description: 'The carbon footprint of AI training and generation, and how to minimize environmental harm in creative workflows.',
    icon: 'environment',
    category: 'topic',
    bgColor: 'bg-green-300',
    content: [
      { section: 'The Hidden Cost', text: 'Training large AI models requires enormous computational resources. A single large language model training run can emit as much carbon as five cars over their entire lifetimes. Image generation models have similar environmental footprints.' },
      { section: 'Generation Impact', text: 'Every image you generate consumes energy. While individual generations are small, the cumulative impact of millions of daily generations is significant. Cloud providers are working toward renewable energy, but progress varies.' },
      { section: 'Sustainable Practices', text: 'Minimize unnecessary generations by planning prompts carefully. Use smaller, efficient models when possible. Run local models on renewable energy. Choose cloud providers committed to carbon neutrality. Batch similar requests together.' },
      { section: 'Industry Responsibility', text: 'AI companies must invest in efficiency improvements, transparent carbon reporting, and renewable energy infrastructure. As users, we can pressure companies by choosing environmentally responsible platforms.' },
    ],
    keyPoints: ['AI training has significant carbon footprint', 'Every generation consumes energy', 'Choose efficient models', 'Support carbon-neutral providers'],
    relatedLinks: [{ title: 'AI Carbon Calculator', url: '#' }, { title: 'Green AI Initiative', url: '#' }],
  },
  {
    id: 'ai-ethics-framework',
    title: 'AI Ethics Framework',
    shortTitle: 'Framework',
    description: 'A comprehensive framework for ethical AI use in creative work, covering principles, decision-making, and accountability.',
    icon: 'framework',
    category: 'resource',
    bgColor: 'bg-cyan-300',
    content: [
      { section: 'Core Principles', text: 'Our framework rests on four pillars: Transparency (always disclose AI use), Respect (honor the rights of all creators), Responsibility (consider the impact of your creations), and Integrity (never deceive or harm through AI).' },
      { section: 'Decision Framework', text: 'Before creating, ask: Would this harm anyone? Am I respecting others\' rights? Am I being transparent? Would I be comfortable if this were public? Could this be misused? If any answer raises concern, reconsider your approach.' },
      { section: 'Accountability Measures', text: 'Document your AI workflows, maintain records of tools and prompts used, be prepared to explain your creative process, and take responsibility for the outputs you publish, regardless of how they were created.' },
      { section: 'Continuous Learning', text: 'Ethics in AI is rapidly evolving. Stay informed about new developments, engage with diverse perspectives, update your practices as norms develop, and contribute to the ongoing conversation about AI ethics.' },
    ],
    keyPoints: ['Transparency, Respect, Responsibility, Integrity', 'Question before creating', 'Document your workflows', 'Stay informed and adapt'],
    relatedLinks: [{ title: 'Download Framework PDF', url: '#' }, { title: 'Ethics Workshops', url: '#' }],
  },
  {
    id: 'legal-guidelines',
    title: 'Legal Guidelines',
    shortTitle: 'Legal',
    description: 'Navigate the legal aspects of AI-generated content, including copyright, commercial use, and platform policies.',
    icon: 'legal',
    category: 'resource',
    bgColor: 'bg-yellow-300',
    content: [
      { section: 'Copyright Basics', text: 'AI-generated content occupies uncertain legal territory. The US Copyright Office has indicated that purely AI-generated works may not be copyrightable, while works with significant human creative input may qualify. Document your creative contributions.' },
      { section: 'Commercial Use', text: 'Review the terms of service for any AI tool before commercial use. Many free tiers prohibit commercial applications. Paid tiers often grant commercial rights but may have attribution requirements or usage limits.' },
      { section: 'Platform Policies', text: 'Social media and content platforms are developing AI disclosure policies. Many now require labeling of AI-generated content. Failure to comply can result in content removal or account suspension. Stay updated on policy changes.' },
      { section: 'Protecting Yourself', text: 'Keep records of your creative process, use tools with clear commercial licenses, add appropriate disclosures, avoid generating content that infringes on others\' rights, and consult legal counsel for significant commercial projects.' },
    ],
    keyPoints: ['AI copyright law is evolving', 'Check commercial use terms', 'Follow platform disclosure policies', 'Document your process'],
    relatedLinks: [{ title: 'Copyright Office Guidelines', url: '#' }, { title: 'Platform Policy Tracker', url: '#' }],
  },
  {
    id: 'best-practices-checklist',
    title: 'Best Practices Checklist',
    shortTitle: 'Checklist',
    description: 'A practical checklist for ethical AI creation, from project planning through publication and beyond.',
    icon: 'checklist',
    category: 'resource',
    bgColor: 'bg-lime-300',
    content: [
      { section: 'Before Creating', text: '□ Define your creative intent clearly\n□ Choose tools with ethical training practices\n□ Verify commercial use rights if needed\n□ Consider potential negative impacts\n□ Plan how you\'ll disclose AI use' },
      { section: 'During Creation', text: '□ Avoid replicating specific artists\' styles\n□ Don\'t generate harmful or deceptive content\n□ Document your prompts and process\n□ Use efficient generation practices\n□ Review outputs for unintended issues' },
      { section: 'Before Publishing', text: '□ Add clear AI disclosure labels\n□ Credit tools and models used\n□ Check platform policies\n□ Verify you have usage rights\n□ Consider audience impact' },
      { section: 'Ongoing Practices', text: '□ Stay updated on ethics developments\n□ Engage with creator communities\n□ Support fair compensation initiatives\n□ Report misuse when observed\n□ Continuously refine your practices' },
    ],
    keyPoints: ['Plan ethically from the start', 'Document everything', 'Always disclose AI use', 'Stay engaged and updated'],
    relatedLinks: [{ title: 'Printable Checklist', url: '#' }, { title: 'Community Forum', url: '#' }],
  },
  {
    id: 'report-misuse',
    title: 'Report Misuse',
    shortTitle: 'Report',
    description: 'How to identify and report harmful AI-generated content, and resources for those affected by AI misuse.',
    icon: 'report',
    category: 'resource',
    bgColor: 'bg-red-200',
    content: [
      { section: 'What to Report', text: 'Report AI content that: depicts real people without consent, spreads misinformation, constitutes harassment or threats, infringes copyright at scale, enables fraud or scams, or violates platform terms of service.' },
      { section: 'How to Report', text: 'Most platforms have dedicated reporting mechanisms. Use in-app reporting for fastest response. For serious violations, contact platform trust & safety teams directly. Document evidence before reporting as content may be removed.' },
      { section: 'If You\'re a Victim', text: 'If your likeness or work has been misused: document everything, report to platforms immediately, consider consulting legal counsel, contact organizations like NCMEC for intimate imagery, and reach out to support communities.' },
      { section: 'Platform Contacts', text: 'Each major platform has specific reporting channels. Check their help centers for AI-specific reporting options. For cross-platform issues, organizations like the Cyber Civil Rights Initiative can provide guidance and support.' },
    ],
    keyPoints: ['Report harmful content immediately', 'Document evidence first', 'Use platform-specific channels', 'Support resources available'],
    relatedLinks: [{ title: 'Cyber Civil Rights Initiative', url: '#' }, { title: 'Platform Report Links', url: '#' }],
  },
];

export interface Tutorial {
  id: string;
  title: string;
  author: string;
  duration: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';
  bgColor: string;
  description: string;
  topics: string[];
  requirements: string[];
  content: {
    section: string;
    text: string;
  }[];
}

export const TUTORIALS_DATA: Tutorial[] = [
  {
    id: 'midjourney-v7-getting-started',
    title: 'Getting Started with Midjourney V7',
    author: 'Sarah Jenkins',
    duration: '15 min',
    level: 'BEGINNER',
    bgColor: 'bg-lime-300',
    description: 'Learn the basics of Midjourney V7 and create your first AI-generated images. This tutorial covers setup, basic prompts, and essential parameters.',
    topics: ['Discord setup', 'Basic prompts', 'Parameters', 'Aspect ratios', 'Upscaling'],
    requirements: ['Discord account', 'Midjourney subscription'],
    content: [
      { section: 'Introduction', text: 'Midjourney V7 represents a significant leap in AI image generation. With improved understanding of complex prompts and enhanced photorealistic capabilities, it\'s the perfect tool for both beginners and professionals.' },
      { section: 'Setting Up Discord', text: 'First, join the Midjourney Discord server. Navigate to any #newbies channel to start generating images. Use the /imagine command followed by your prompt to begin creating.' },
      { section: 'Writing Your First Prompt', text: 'Start simple: describe what you want to see. For example, "a sunset over mountains" will generate a beautiful landscape. As you progress, add more details like style, mood, and colors.' },
      { section: 'Essential Parameters', text: 'Learn key parameters: --ar for aspect ratio (e.g., --ar 16:9), --v for version, --q for quality, and --s for stylization. These give you control over your outputs.' },
    ],
  },
  {
    id: 'advanced-prompt-engineering',
    title: 'Advanced Prompt Engineering Techniques',
    author: 'Devin K.',
    duration: '25 min',
    level: 'ADVANCED',
    bgColor: 'bg-purple-300',
    description: 'Master the art of crafting prompts that consistently produce stunning results. Learn advanced techniques used by professional AI artists.',
    topics: ['Prompt structure', 'Style mixing', 'Negative prompts', 'Weight balancing', 'Multi-prompting'],
    requirements: ['Basic AI image generation experience', 'Understanding of artistic terminology'],
    content: [
      { section: 'The Anatomy of a Perfect Prompt', text: 'A well-structured prompt follows this pattern: Subject + Environment + Style + Lighting + Camera + Technical specifications. Each element adds precision to your output.' },
      { section: 'Style Mixing Techniques', text: 'Combine multiple artistic styles for unique results. Try "cyberpunk meets art nouveau" or "Miyazaki style with Moebius colors". The AI blends these influences seamlessly.' },
      { section: 'Using Negative Prompts Effectively', text: 'Negative prompts tell the AI what to avoid. Common negatives include: blurry, distorted, low quality, watermark. Use them strategically to refine outputs.' },
      { section: 'Weight Balancing', text: 'Control element emphasis using weights. In Stable Diffusion: (important element:1.5) increases emphasis, while (less important:0.7) reduces it. Balance is key.' },
    ],
  },
  {
    id: 'lora-training-guide',
    title: 'Training Your Own LoRA Model',
    author: 'AI Whisperer',
    duration: '45 min',
    level: 'EXPERT',
    bgColor: 'bg-orange-300',
    description: 'Deep dive into training custom LoRA models. Create personalized AI models that capture specific styles, characters, or concepts.',
    topics: ['Dataset preparation', 'Kohya trainer', 'Hyperparameters', 'Testing', 'Optimization'],
    requirements: ['GPU with 8GB+ VRAM', 'Python knowledge', 'Stable Diffusion installed'],
    content: [
      { section: 'Understanding LoRA', text: 'LoRA (Low-Rank Adaptation) allows you to fine-tune large models efficiently. Instead of training billions of parameters, you train small adapter weights that modify the base model\'s behavior.' },
      { section: 'Preparing Your Dataset', text: 'Collect 15-50 high-quality images. Consistency is key: similar lighting, angles, and quality. Caption each image accurately describing the subject and style.' },
      { section: 'Setting Up Kohya Trainer', text: 'Install Kohya SS GUI for an accessible training interface. Configure your model path, dataset location, and output directory. Select appropriate settings for your GPU.' },
      { section: 'Optimal Hyperparameters', text: 'Start with: Learning rate 1e-4, Network dim 32, Network alpha 16, 1000-2000 steps. Adjust based on results. Lower learning rates for more subtle changes.' },
    ],
  },
  {
    id: 'stable-diffusion-xl-basics',
    title: 'Stable Diffusion XL Basics',
    author: 'M. Robson',
    duration: '20 min',
    level: 'BEGINNER',
    bgColor: 'bg-cyan-300',
    description: 'Get started with Stable Diffusion XL, the latest open-source image generation model. Learn installation, basic usage, and key differences from previous versions.',
    topics: ['Installation', 'Basic generation', 'Refiner model', 'Resolution', 'Samplers'],
    requirements: ['Computer with modern GPU', 'Basic command line knowledge'],
    content: [
      { section: 'What is SDXL?', text: 'Stable Diffusion XL is a significant upgrade with a larger UNet, dual text encoders, and native 1024x1024 resolution. It produces more detailed and coherent images out of the box.' },
      { section: 'Installation Options', text: 'Choose your interface: Automatic1111, ComfyUI, or Invoke AI. Each has strengths - A1111 for extensions, ComfyUI for workflows, Invoke for ease of use.' },
      { section: 'The Refiner Model', text: 'SDXL uses a two-stage process: base model generates the image, refiner adds detail. Use the refiner at 0.7-0.8 denoise for best results.' },
      { section: 'Optimal Settings', text: 'Use 1024x1024 base resolution. DPM++ 2M Karras sampler with 25-30 steps works well. CFG scale 7-8 balances creativity and prompt adherence.' },
    ],
  },
  {
    id: 'comfyui-workflow-masterclass',
    title: 'ComfyUI Workflow Masterclass',
    author: 'Node Master',
    duration: '60 min',
    level: 'ADVANCED',
    bgColor: 'bg-pink-300',
    description: 'Master ComfyUI\'s node-based workflow system. Build complex, reusable pipelines for advanced image generation and manipulation.',
    topics: ['Node basics', 'Custom workflows', 'ControlNet', 'IP-Adapter', 'Automation'],
    requirements: ['ComfyUI installed', 'Understanding of Stable Diffusion'],
    content: [
      { section: 'Why ComfyUI?', text: 'ComfyUI offers unmatched flexibility through its node-based system. Create complex workflows that would be impossible in traditional interfaces. Save and share workflows easily.' },
      { section: 'Essential Nodes', text: 'Master these core nodes: KSampler for generation, VAE Encode/Decode for latent space, CLIP Text Encode for prompts, Load Checkpoint for models.' },
      { section: 'Building ControlNet Workflows', text: 'Add precision with ControlNet. Connect your control image through a ControlNet Apply node. Combine multiple ControlNets for complex control over composition, pose, and depth.' },
      { section: 'IP-Adapter Integration', text: 'Use IP-Adapter for style and face consistency. Load the IP-Adapter model, connect reference images, and blend styles seamlessly. Perfect for character consistency.' },
    ],
  },
  {
    id: 'ai-video-runway',
    title: 'AI Video Generation with Runway',
    author: 'Video Synth',
    duration: '30 min',
    level: 'INTERMEDIATE',
    bgColor: 'bg-yellow-300',
    description: 'Create stunning AI-generated videos using Runway Gen-2. Learn text-to-video, image-to-video, and advanced motion control techniques.',
    topics: ['Text-to-video', 'Image animation', 'Motion brush', 'Camera controls', 'Export settings'],
    requirements: ['Runway account', 'Basic video editing knowledge'],
    content: [
      { section: 'Introduction to Gen-2', text: 'Runway Gen-2 transforms text and images into video. It understands natural language descriptions of motion, style, and scene progression.' },
      { section: 'Text-to-Video Basics', text: 'Start with clear, descriptive prompts. Include motion words: "walking", "flowing", "drifting". Describe camera movement: "slow pan", "zoom in", "tracking shot".' },
      { section: 'Image-to-Video Magic', text: 'Upload a starting image for more control. The AI animates your image while maintaining its style. Perfect for bringing illustrations and photos to life.' },
      { section: 'Motion Brush Technique', text: 'Use the motion brush to specify exactly where and how motion occurs. Paint areas that should move, set direction and intensity. Combine with static areas for professional results.' },
    ],
  },
];

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
