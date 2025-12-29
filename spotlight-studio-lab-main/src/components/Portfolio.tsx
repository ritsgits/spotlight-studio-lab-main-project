import { useState } from 'react';
import { Play, Instagram, Youtube, ExternalLink } from 'lucide-react';
const portfolioItems = [{
  id: 1,
  title: 'Viral Growth Campaign',
  client: 'Raj Shamani',
  category: 'Influencer',
  views: '25M+',
  thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=800&fit=crop',
  platform: 'instagram',
  color: 'from-brand-purple to-brand-magenta',
  link: 'https://www.instagram.com/reels/DSzqVcWE1wf/'
}, {
  id: 2,
  title: 'Education Revolution',
  client: 'Physics Wallah',
  category: 'EdTech',
  views: '15M+',
  thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=800&fit=crop',
  platform: 'instagram',
  color: 'from-brand-red to-brand-orange',
  link: 'https://www.instagram.com/reels/DSzqVcWE1wf/'
}, {
  id: 3,
  title: 'Show Promotion',
  client: 'Netflix India',
  category: 'Entertainment',
  views: '10M+',
  thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=600&h=800&fit=crop',
  platform: 'instagram',
  color: 'from-brand-teal to-brand-green',
  link: 'https://www.instagram.com/reels/DSzqVcWE1wf/'
}, {
  id: 4,
  title: 'Learning Campaign',
  client: 'Unacademy',
  category: 'EdTech',
  views: '20M+',
  thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop',
  platform: 'youtube',
  color: 'from-brand-orange to-brand-yellow',
  link: 'https://www.youtube.com/shorts/rEwtC4SNweo'
}, {
  id: 5,
  title: 'Streaming Promo',
  client: 'Prime Video',
  category: 'OTT',
  views: '8M+',
  thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=800&fit=crop',
  platform: 'youtube',
  color: 'from-brand-blue to-brand-teal',
  link: 'https://www.youtube.com/shorts/rEwtC4SNweo'
}, {
  id: 6,
  title: 'Sports Content',
  client: 'JioHotstar',
  category: 'Sports & Entertainment',
  views: '12M+',
  thumbnail: 'https://goqii.com/blog/wp-content/uploads/6-Health-Benefits-of-Playing-Sports.jpg',
  platform: 'youtube',
  color: 'from-brand-pink to-brand-purple',
  link: 'https://www.youtube.com/shorts/rEwtC4SNweo'
}];
const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'instagram' | 'youtube'>('all');
  const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.platform === filter);
  return <section id="portfolio" className="bg-background py-[45px]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="font-body text-sm text-primary uppercase tracking-widest mb-4">Our Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
              <span className="text-gradient">PORTFOLIO</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl">
              Showcasing our best work that drove massive engagement and viral growth for top creators and brands.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 bg-muted p-1 rounded-full">
            {(['all', 'instagram', 'youtube'] as const).map(tab => <button key={tab} onClick={() => setFilter(tab)} className={`px-4 py-2 rounded-full font-body text-sm transition-all ${filter === tab ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {tab === 'all' ? 'All' : tab === 'instagram' ? 'Instagram' : 'YouTube'}
              </button>)}
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => <a key={item.id} href={item.link} target={'_blank'} className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer magnetic-hover" onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
              {/* Image */}
              <img src={item.thumbnail} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              
              {/* Platform badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full">
                {item.platform === 'instagram' ? <Instagram className="w-4 h-4 text-brand-pink" /> : <Youtube className="w-4 h-4 text-brand-red" />}
                <span className="font-body text-xs font-medium text-foreground">{item.platform}</span>
              </div>

              {/* Views badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary rounded-full">
                <span className="font-body text-xs font-bold text-primary-foreground">{item.views} views</span>
              </div>
              
              {/* Play button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <div className="w-20 h-20 rounded-full bg-primary-foreground flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-body text-xs text-primary-foreground/80 uppercase tracking-wider bg-primary/80 px-2 py-1 rounded">
                  {item.category}
                </span>
                <h3 className="font-display text-xl text-primary-foreground mt-3 mb-1">{item.title}</h3>
                <p className="font-body text-sm text-primary-foreground/90">{item.client}</p>
              </div>
            </a>)}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSetsgIPP8hevrexzqLJi2Hh5SgM-xX_CS6T565-cH2FzNV93g/viewform" target='_blank' className="inline-flex items-center gap-2 font-body text-primary hover:text-primary/80 transition-colors">
            <span>Get similar results for your brand</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>;
};
export default Portfolio;