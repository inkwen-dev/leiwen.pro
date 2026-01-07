import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { ExternalLink, Sailboat } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Brand Bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Brand - All centered together */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <Sailboat className="w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37]" />
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-semibold text-foreground">Leiwen</span>
                  <span className="text-base sm:text-lg font-semibold text-[#D4AF37]">Pro</span>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground">Freedom & Dreams</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
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
                    {project.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

