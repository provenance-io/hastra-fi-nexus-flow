
import { innovationFocusAreas } from '@/data/content';
import { CheckCircle, Clock, FlaskConical } from 'lucide-react';

const InnovationFocus = () => {
  const getStatusIcon = (area: any) => {
    if (area.product) return <CheckCircle className="w-5 h-5 text-green-400" />;
    if (area.status === 'In Development') return <Clock className="w-5 h-5 text-yellow-400" />;
    return <FlaskConical className="w-5 h-5 text-header-glow" />;
  };

  const getStatusColor = (area: any) => {
    if (area.product) return 'text-green-400';
    if (area.status === 'In Development') return 'text-yellow-400';
    return 'text-header-glow';
  };

  return (
    <section id="innovation-focus" className="py-24 md:py-32 relative" role="region" aria-labelledby="innovation-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-header-glow/2 to-transparent"></div>
      
      <div className="container relative">
        <div className="text-center space-y-4 mb-16">
          <h2 id="innovation-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
            Innovation <span className="text-gradient">Focus Areas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the next generation of financial infrastructure through regulatory-compliant innovation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {innovationFocusAreas.map((area, index) => (
            <div 
              key={index} 
              className="group floating-card card-gradient card-hover rounded-2xl p-8 space-y-6"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
            >
              {/* Header with status */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(area)}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-header-glow transition-colors">
                    {area.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-base">
                {area.description}
              </p>

              {/* Status/Product info */}
              <div className="space-y-3">
                {area.product && (
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-green-400">{area.product}</p>
                  </div>
                )}
                {area.status && (
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(area)} animate-pulse`}></div>
                    <p className={`text-sm font-medium ${getStatusColor(area)}`}>{area.status}</p>
                  </div>
                )}
              </div>

              {/* Innovation highlight */}
              <div className="pt-4 border-t border-border/30">
                <p className="text-sm text-foreground/90">
                  <span className="font-semibold text-header-glow">Innovation:</span>{' '}
                  <span className="text-muted-foreground">{area.innovation}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationFocus;
