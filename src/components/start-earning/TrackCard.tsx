import { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { TrackCardProps } from '@/types/learning';
import { ANIMATION_DELAY_MULTIPLIER } from '@/constants/learning';

/**
 * Individual learning track card component
 * Displays information about a specific learning track with features and action button
 * Memoized to prevent unnecessary re-renders
 */
const TrackCard = memo<TrackCardProps>(({ track, index, onTrackClick }) => {
  const IconComponent = track.icon;
  const animationDelay = `${index * ANIMATION_DELAY_MULTIPLIER}s`;

  const handleTrackClick = () => {
    onTrackClick(track.title);
  };

  return (
    <Card 
      className="group relative overflow-hidden glass-effect border-header-glow/20 hover:border-header-glow/40 transition-all duration-500 hover:shadow-glow animate-fade-in"
      style={{ animationDelay }}
    >
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-8 h-8 text-header-glow" />
        </div>
        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-header-glow transition-colors duration-300">
          {track.title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {track.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-foreground/90">Key Articles:</h4>
          <div className="space-y-3">
            {track.articles.map((article, articleIndex) => (
              <div key={articleIndex} className="border-l-2 border-header-glow/30 pl-3 space-y-1">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-medium text-foreground">{article.title}</h5>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{article.description}</p>
                <span className="inline-block text-xs px-2 py-1 rounded bg-header-glow/10 text-header-glow">
                  {article.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Button 
          variant="secondary" 
          className="w-full group/btn"
          type="button"
          onClick={handleTrackClick}
        >
          Browse Articles
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
});

TrackCard.displayName = 'TrackCard';

export default TrackCard;