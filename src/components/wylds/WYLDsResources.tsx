
import { File, ExternalLink, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';

const resources = [
  {
    title: 'Learn About YLDS',
    description: 'Visit the official YLDS website to understand the underlying technology and ecosystem.',
    href: 'https://ylds.com',
    icon: ExternalLink,
  },
  {
    title: 'YIELD Whitepaper',
    description: 'Read the full technical details and vision for YIELD.',
    href: '#',
    icon: File,
  },
];

const WYLDsResources = () => {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground/90 text-center mb-12">Documentation & Resources</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="card-gradient rounded-2xl hover:bg-background/60 transition-all duration-300">
                <div className="flex items-center p-6">
                  <resource.icon className="h-8 w-8 mr-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WYLDsResources;
