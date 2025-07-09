import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, DollarSign, TrendingUp, ExternalLink, ArrowRight } from 'lucide-react';

const HOMESPortfolio = () => {
  const properties = [
    {
      id: 1,
      name: "Manhattan Premium Office",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      totalValue: "$12.5M",
      tokenized: "85%",
      apy: "8.2%",
      status: "Active",
      type: "Commercial"
    },
    {
      id: 2,
      name: "Miami Luxury Condos",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      totalValue: "$8.3M",
      tokenized: "92%",
      apy: "6.8%",
      status: "Active",
      type: "Residential"
    },
    {
      id: 3,
      name: "Austin Tech Hub",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      totalValue: "$15.2M",
      tokenized: "76%",
      apy: "9.1%",
      status: "Coming Soon",
      type: "Mixed Use"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30" id="homes-portfolio">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our curated selection of premium real estate investments, each offering unique opportunities for growth and income generation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {property.type}
                  </Badge>
                  <Badge 
                    className={property.status === 'Active' ? 'bg-green-500/90 text-white' : 'bg-amber-500/90 text-white'}
                  >
                    {property.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-header-glow transition-colors">
                  {property.name}
                </CardTitle>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-header-glow" />
                    <span className="font-medium">{property.totalValue}</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                    <span className="font-medium">{property.apy} APY</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tokenized</span>
                    <span className="font-medium">{property.tokenized}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-header-glow h-2 rounded-full transition-all duration-500"
                      style={{ width: property.tokenized }}
                    ></div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 group/btn"
                  variant={property.status === 'Active' ? 'default' : 'outline'}
                  disabled={property.status !== 'Active'}
                >
                  {property.status === 'Active' ? 'Invest Now' : 'Coming Soon'}
                  {property.status === 'Active' && (
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="glass-effect">
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HOMESPortfolio;