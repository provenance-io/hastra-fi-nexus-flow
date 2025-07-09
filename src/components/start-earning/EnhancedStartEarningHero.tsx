import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, BookOpen, TrendingUp, Users, ArrowRight } from 'lucide-react';

const learningPaths = [
  {
    id: 1,
    title: "Beginner",
    description: "Start with the basics of DeFi",
    duration: "2-3 hours",
    modules: 4,
    color: "bg-green-500/20 border-green-500/30 text-green-300"
  },
  {
    id: 2,
    title: "Intermediate", 
    description: "Advanced strategies and platforms",
    duration: "4-5 hours",
    modules: 6,
    color: "bg-blue-500/20 border-blue-500/30 text-blue-300"
  },
  {
    id: 3,
    title: "Expert",
    description: "Master yield optimization",
    duration: "6-8 hours", 
    modules: 8,
    color: "bg-purple-500/20 border-purple-500/30 text-purple-300"
  }
];

const quickStats = [
  { icon: BookOpen, label: "18 Guides", value: "Complete tutorials" },
  { icon: TrendingUp, label: "95% Success", value: "User completion rate" },
  { icon: Users, label: "12.4k", value: "Active learners" }
];

const EnhancedStartEarningHero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-header-glow/5 to-crypto-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTAsIDIwLCA0MCwwLjA1KSI+PGQgcGF0aD0iTTAtMSAwIDEgTS0xIDAgMSAwIj48L2Q+PC9zdmc+')] opacity-40"></div>
      
      <div className="container relative">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-6 bg-header-glow/20 border-header-glow/30 text-header-glow hover:bg-header-glow/30">
            <Play className="w-3 h-3 mr-2" />
            Interactive Learning Experience
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-gradient">Master DeFi</span>
            <span className="block text-muted-foreground text-3xl md:text-4xl font-medium mt-2">
              From Zero to Yield Hero
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive video guides and hands-on tutorials to navigate the DeFi ecosystem like a pro
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-header-glow/20 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-header-glow" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Choose Your Learning Path
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {learningPaths.map((path) => (
              <Card key={path.id} className={`glass-effect border ${path.color.split(' ')[1]} hover:scale-105 transition-all duration-300 cursor-pointer group`}>
                <CardContent className="p-6">
                  <div className="text-center">
                    <Badge className={`mb-4 ${path.color}`}>
                      {path.title}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{path.title} Path</h3>
                    <p className="text-muted-foreground mb-4">{path.description}</p>
                    
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>{path.duration}</span>
                      <span>{path.modules} modules</span>
                    </div>
                    
                    <Button className="w-full group-hover:bg-header-glow/20 transition-colors">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Video Preview */}
          <Card className="glass-effect border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Badge className="mb-4 bg-crypto-accent/20 border-crypto-accent/30 text-crypto-accent">
                    Featured Tutorial
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">DeFi Fundamentals: Your First $100</h3>
                  <p className="text-muted-foreground mb-6">
                    A comprehensive 15-minute video guide covering everything you need to know to start earning your first yields in DeFi safely and effectively.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="btn-gradient">
                      <Play className="mr-2 h-5 w-5" />
                      Watch Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-header-glow/30 text-header-glow hover:bg-header-glow/10">
                      View All Tutorials
                    </Button>
                  </div>
                </div>
                
                <div className="relative w-full md:w-80 h-48 bg-header-glow/10 rounded-lg border border-header-glow/20 flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 bg-header-glow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-header-glow ml-1" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                    15:32
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnhancedStartEarningHero;