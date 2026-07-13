import Link from "next/link";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { projects } from "@/lib/data/projects";
import { ExternalLink, Sailboat } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FriendLinksBand from "@/components/FriendLinksBand";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Enable static rendering - CRITICAL for performance
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Brand Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand - Simplified, only logo */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Sailboat className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-semibold text-foreground">Leiwen</span>
                  <span className="text-base sm:text-lg font-semibold text-[#D4AF37]">Pro</span>
                </div>
              </div>
            </div>
            {/* Language Switcher */}
            <div className="absolute right-4 sm:right-6 lg:right-8">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-2 sm:pb-3 lg:pb-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4 leading-tight">
            <span className="block mb-1">{t('hero.subtitle')}</span>
            <span className="block">
              <span className="text-[#D4AF37]">{t('hero.highlight')}</span>
            </span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 lg:pt-4 pb-4 sm:pb-6 lg:pb-8">
        {/* Projects Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => {
            // Extract domain from URL
            const domain = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
            
            return (
              <Link
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center">
                  {/* Project Name - Large and Prominent */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {project.name}
                  </h2>
                  
                  {/* Domain - Small and Subtle */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span>{domain}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Description - Always visible */}
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 text-center">
                    {t(`projects.${project.id}.description`)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <FriendLinksBand />
      <Footer />
    </div>
  );
}

