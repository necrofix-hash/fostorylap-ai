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
