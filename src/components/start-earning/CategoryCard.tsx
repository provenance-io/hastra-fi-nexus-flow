import { memo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { CategoryCardProps } from '@/types/learning';
import { ANIMATION_DELAY_MULTIPLIER } from '@/constants/learning';

/**
 * Category selection card component
 * Displays a learning category with overview information
 * Memoized to prevent unnecessary re-renders
 */
const CategoryCard = memo<CategoryCardProps>(({ category, index, onClick }) => {
  const IconComponent = category.icon;
  const animationDelay = `${index * ANIMATION_DELAY_MULTIPLIER}s`;

  const handleClick = () => {
    onClick(category.id);
  };

  return (
    <Card 
      className="group relative overflow-hidden glass-effect border-header-glow/20 hover:border-header-glow/40 transition-all duration-500 hover:shadow-glow animate-fade-in cursor-pointer"
      style={{ animationDelay }}
      onClick={handleClick}
    >
      <CardHeader className="text-center pb-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-8 h-8 text-header-glow" />
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {category.trackCount} {category.trackCount === 1 ? 'Track' : 'Tracks'}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {category.level}
          </Badge>
        </div>
        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-header-glow transition-colors duration-300">
          {category.title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground leading-relaxed">
          {category.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-center">
        <div className="flex items-center justify-center text-sm text-header-glow font-medium group-hover:translate-x-1 transition-transform duration-300">
          <span>Explore {category.title}</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
});

CategoryCard.displayName = 'CategoryCard';

export default CategoryCard;