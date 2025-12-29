import { useState } from 'react';
import { Play, Eye, TrendingUp, ExternalLink } from 'lucide-react';

const reels = [
  {
    id: 1,
    title: 'Viral Growth Strategy',
    client: 'Raj Shamani',
    views: '25M+',
    engagement: '12%',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop',
    platform: 'Instagram',
  },
  {
    id: 2,
    title: 'Education Simplified',
    client: 'Physics Wallah',
    views: '15M+',
    engagement: '8.5%',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=800&fit=crop',
    platform: 'YouTube Shorts',
  },
  {
    id: 3,
    title: 'Show Promotion',
    client: 'Netflix India',
    views: '10M+',
    engagement: '15%',
    thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=800&fit=crop',
    platform: 'Instagram',
  },
  {
    id: 4,
    title: 'Learning Revolution',
    client: 'Unacademy',
    views: '20M+',
    engagement: '10%',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop',
    platform: 'YouTube Shorts',
  },
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-body text-sm text-primary uppercase tracking-widest mb-4">Our Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
              BEST <span className="text-gradient">PERFORMING REELS</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl">
              Showcasing our top viral content that drove massive engagement for our clients
            </p>
          </div>
          <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 line-reveal">
            Get Similar Results <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer magnetic-hover"
              onMouseEnter={() => setHoveredId(reel.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Platform badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 rounded-full">
                <span className="font-body text-xs text-primary-foreground font-medium">{reel.platform}</span>
              </div>
              
              {/* Play button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                hoveredId === reel.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-effect">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-body text-xs text-primary uppercase tracking-wider mb-2">
                  {reel.client}
                </p>
                <h3 className="font-display text-xl mb-3">{reel.title}</h3>
                
                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-foreground">{reel.views}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-body text-sm text-foreground">{reel.engagement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;