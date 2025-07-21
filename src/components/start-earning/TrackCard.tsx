import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { LearningArea } from '@/data/learningCategories';

interface TrackCardProps {
  track: LearningArea;
  index: number;
  onTrackClick: (title: string) => void;
}

/**
 * Individual learning track card component
 * Displays information about a specific learning track with features and action button
 */
const TrackCard = ({ track, index, onTrackClick }: TrackCardProps) => {
  const IconComponent = track.icon;
  const animationDelay = `${index * 0.1}s`;

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
        <ul className="space-y-3">
          {track.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-header-glow mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          variant="secondary" 
          className="w-full group/btn"
          type="button"
          onClick={() => onTrackClick(track.title)}
        >
          {track.action}
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TrackCard;