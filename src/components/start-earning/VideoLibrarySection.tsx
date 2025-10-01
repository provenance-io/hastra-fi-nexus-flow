import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Search, BookOpen, Clock, Star, Filter } from "lucide-react";

const videoCategories = [
  { id: "all", label: "All Videos", count: 18 },
  { id: "basics", label: "DeFi Basics", count: 6 },
  { id: "platforms", label: "Platforms", count: 8 },
  { id: "advanced", label: "Advanced", count: 4 },
];

const videos = [
  {
    id: 1,
    title: "Getting Started with PRIME Token",
    description:
      "Learn how to acquire and use PRIME tokens for earning stable yields",
    duration: "12:45",
    difficulty: "Beginner",
    category: "basics",
    thumbnail: "/placeholder-video-1.jpg",
    views: "2.3k",
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    title: "Raydium Liquidity Pools Explained",
    description:
      "Deep dive into providing liquidity on Raydium and earning trading fees",
    duration: "18:20",
    difficulty: "Intermediate",
    category: "platforms",
    thumbnail: "/placeholder-video-2.jpg",
    views: "1.8k",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Kamino Lending Strategies",
    description: "Advanced lending and borrowing techniques on Kamino Finance",
    duration: "15:30",
    difficulty: "Intermediate",
    category: "platforms",
    thumbnail: "/placeholder-video-3.jpg",
    views: "1.2k",
    rating: 4.7,
  },
  {
    id: 4,
    title: "sPRIME Staking Pool Participation",
    description: "How to participate in staking pools through sPRIME",
    duration: "22:15",
    difficulty: "Advanced",
    category: "advanced",
    thumbnail: "/placeholder-video-4.jpg",
    views: "956",
    rating: 4.9,
  },
  {
    id: 5,
    title: "Bridge HASH to SOL-HASH",
    description: "Step-by-step guide to bridging tokens using Figure Markets",
    duration: "8:45",
    difficulty: "Beginner",
    category: "basics",
    thumbnail: "/placeholder-video-5.jpg",
    views: "3.1k",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Portfolio Risk Management",
    description: "Advanced strategies for managing risk in your DeFi portfolio",
    duration: "25:10",
    difficulty: "Advanced",
    category: "advanced",
    thumbnail: "/placeholder-video-6.jpg",
    views: "678",
    rating: 4.8,
  },
];

const difficultyColors = {
  Beginner: "bg-green-500/20 border-green-500/30 text-green-300",
  Intermediate: "bg-blue-500/20 border-blue-500/30 text-blue-300",
  Advanced: "bg-purple-500/20 border-purple-500/30 text-purple-300",
};

const VideoLibrarySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredVideo = videos.find((v) => v.featured);

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Video Learning Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive video tutorials covering everything from DeFi basics
            to advanced yield strategies
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <Card className="glass-effect border-border/50 mb-12 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="relative lg:w-96 h-48 bg-header-glow/10 rounded-lg border border-header-glow/20 flex items-center justify-center group cursor-pointer flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-16 h-16 bg-header-glow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-header-glow ml-1" />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-crypto-accent/80 text-white">
                    Featured
                  </Badge>
                  <div className="absolute bottom-3 right-3 text-sm text-white bg-black/50 px-2 py-1 rounded">
                    {featuredVideo.duration}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={
                        difficultyColors[
                          featuredVideo.difficulty as keyof typeof difficultyColors
                        ]
                      }
                    >
                      {featuredVideo.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {featuredVideo.rating}
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {featuredVideo.views} views
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {featuredVideo.description}
                  </p>
                  <Button size="lg" className="btn-gradient">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filter */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-effect border-border/50"
              />
            </div>
            <Button
              variant="outline"
              className="border-header-glow/30 text-header-glow hover:bg-header-glow/10"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4 glass-effect">
              {videoCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm"
                >
                  {category.label} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Video Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card
                key={video.id}
                className="glass-effect border-border/50 hover:border-header-glow/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 bg-header-glow/10 rounded-t-lg border-b border-border/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-header-glow/20 to-crypto-accent/20 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 bg-header-glow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-header-glow ml-0.5" />
                  </div>
                  <div className="absolute bottom-3 right-3 text-sm text-white bg-black/50 px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      className={
                        difficultyColors[
                          video.difficulty as keyof typeof difficultyColors
                        ]
                      }
                    >
                      {video.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {video.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {video.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="line-clamp-2 mb-4">
                    {video.description}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {video.duration}
                    </div>
                    <span>{video.views} views</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoLibrarySection;
