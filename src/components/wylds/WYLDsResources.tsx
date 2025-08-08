
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
    title: 'sYLDS Whitepaper',
    description: 'Read the full technical details and vision for sYLDS.',
    href: '#',
    icon: File,
  },
];

const WYLDsResources = () => {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-platinum/80 leading-relaxed text-center mb-12" 
           style={{ 
             textShadow: "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)" 
           }}>Documentation & Resources</h2>
        <div className="max-w-3xl mx-auto space-y-6">
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
                  <resource.icon className="h-8 w-8 mr-6 text-orange-300 flex-shrink-0" />
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
