import { projects, type Project } from '@/lib/data/projects';

export type FriendLink = {
  id: string;
  name: string;
  url: string;
};

/** Hub site — fixed #2 on product sites; #1 when current */
export const LEIWEN_PRO: FriendLink = {
  id: 'leiwenpro',
  name: 'Leiwen Pro',
  url: 'https://leiwen.pro',
};

export const CURRENT_SITE_ID = LEIWEN_PRO.id;

const portfolioLinks: FriendLink[] = projects.map((p: Project) => ({
  id: p.id,
  name: p.name,
  url: p.url,
}));

/**
 * Friend-link order:
 * 1. current site (self)
 * 2. Leiwen Pro (skipped when current is already leiwen.pro)
 * 3+. remaining portfolio sites in leiwen.pro projects.ts order
 */
export function buildFriendLinks(currentSiteId: string): FriendLink[] {
  const self =
    currentSiteId === LEIWEN_PRO.id
      ? LEIWEN_PRO
      : portfolioLinks.find((l) => l.id === currentSiteId);

  if (!self) {
    throw new Error(`Unknown friend-link site id: ${currentSiteId}`);
  }

  const rest = portfolioLinks.filter((l) => l.id !== currentSiteId);
  if (currentSiteId === LEIWEN_PRO.id) {
    return [self, ...rest];
  }
  return [self, LEIWEN_PRO, ...rest];
}

export const friendLinks = buildFriendLinks(CURRENT_SITE_ID);
