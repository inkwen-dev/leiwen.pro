export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 'wallpapersense',
    name: 'WallpaperSense',
    description: 'Discover beautiful wallpapers that understand your aesthetic sense',
    url: 'https://wallpapersense.com',
  },
  {
    id: 'contentqr',
    name: 'ContentQR',
    description: 'AI-Driven Marketing Content to QR Code. Generate marketing content with AI and convert to QR codes in one click. Make marketing simpler, faster, and more effective.',
    url: 'https://contentqr.ai/',
  },
  {
    id: 'inkwellflow',
    name: 'InkwellFlow',
    description: 'Stop Writing Like a Robot，Write Like You',
    url: 'https://inkwellflow.com',
  },
  {
    id: 'startupsense',
    name: 'StartupSense',
    description: 'AI-Powered Startup Validation',
    url: 'https://startupsense.co',
  },
  {
    id: 'humannatureexplained',
    name: 'HumanNature Explained',
    description: 'Understanding Human Nature, Simply Explained. Explore the fascinating world of human behavior, psychology, and what makes us who we are.',
    url: 'https://humannatureexplained.org/',
  },
  {
    id: 'physicsexplained',
    name: 'PhysicsExplained',
    description: 'Understanding Physics, Simply Explained',
    url: 'https://physicsexplained.org',
  },
  {
    id: 'maxtool',
    name: 'MaxTool',
    description: 'Free Online Tools - Simple & Fast. No registration required.',
    url: 'https://maxtool.me/',
  },
];

