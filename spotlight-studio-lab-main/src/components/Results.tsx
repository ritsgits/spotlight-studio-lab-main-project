import { Youtube, Instagram, ExternalLink, TrendingUp, Users, Play } from 'lucide-react';
const youtubeChannels = [{
  name: 'Prashant Kirad Hub',
  handle: '@prashantkirad',
  subscribers: '22,12,396',
  url: 'https://youtube.com/@prashantkirad',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  growth: '+125%'
}, {
  name: 'PWians',
  handle: '@pwians',
  subscribers: '12,17,597',
  url: 'https://youtube.com/@pwians',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  growth: '+89%'
}, {
  name: 'Shubham Classes Army',
  handle: '@shubhamclasses',
  subscribers: '6,958',
  url: 'https://youtube.com/@shubhamclasses',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
  growth: '+210%'
}];
const instagramAccounts = [{
  name: 'Raj Shamani Insights',
  handle: '@rajshamani',
  posts: '292',
  followers: '233K',
  following: '17',
  url: 'https://instagram.com/rajshamani',
  image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
  growth: '+156%'
}, {
  name: 'Prashant Kirad Vibe',
  handle: '@prashantkirad',
  posts: '1,261',
  followers: '121K',
  following: '4',
  url: 'https://instagram.com/prashantkirad',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  growth: '+98%'
}, {
  name: 'Shubham Tiwari',
  handle: '@shubhamtiwari',
  posts: '523',
  followers: '92.6K',
  following: '2',
  url: 'https://instagram.com/shubhamtiwari',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  growth: '+134%'
}];
const Results = () => {
  return <section id="results" className="bg-background relative overflow-hidden py-[66px]">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-3 bg-foreground text-background rounded-full font-display text-xl tracking-wider shadow-lg">
            RESULTS
          </div>
          <p className="mt-6 text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Real growth. Real impact. Here's what we've achieved for our clients.
          </p>
        </div>

        {/* Stats highlight bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-3 px-6 py-3 bg-card border-2 border-foreground/10 rounded-full">
            <TrendingUp className="w-5 h-5 text-brand-green" />
            <span className="font-display text-lg">Avg. Growth: <span className="text-brand-green">+127%</span></span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card border-2 border-foreground/10 rounded-full">
            <Users className="w-5 h-5 text-brand-magenta" />
            <span className="font-display text-lg">Total Reach: <span className="text-brand-magenta">35M+</span></span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-card border-2 border-foreground/10 rounded-full">
            <Play className="w-5 h-5 text-brand-red" />
            <span className="font-display text-lg">Views Generated: <span className="text-brand-red">100M+</span></span>
          </div>
        </div>

        {/* Main content with side labels */}
        <div className="relative">
          {/* In 20 months callout */}
          <div className="absolute -top-8 left-8 md:left-16 flex items-center gap-2 animate-float">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-brand-magenta">
              <path d="M30 35 C20 35, 10 25, 10 15" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M8 20 L10 15 L15 17" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-body text-sm font-semibold bg-brand-magenta/10 text-brand-magenta px-3 py-1 rounded-full">In 20 months</span>
          </div>

          {/* YouTube label - rotated on left */}
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-2">
            <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full">
              <Youtube className="w-5 h-5 rotate-90" />
              <span className="font-display text-sm tracking-wider">YouTube</span>
            </div>
          </div>

          {/* Instagram label - rotated on right */}
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 rotate-90 items-center gap-2">
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full">
              <Instagram className="w-5 h-5 -rotate-90" />
              <span className="font-display text-sm tracking-wider">Instagram</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:px-16">
            {/* YouTube Column */}
            <div className="space-y-6">
              <div className="md:hidden flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full">
                  <Youtube className="w-5 h-5" />
                  <span className="font-display text-sm">YouTube</span>
                </div>
              </div>
              {youtubeChannels.map((channel, index) => <a key={channel.name} href={channel.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-5 bg-card border-2 border-foreground/10 rounded-2xl hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <img src={channel.image} alt={channel.name} className="w-16 h-16 rounded-full object-cover border-3 border-red-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Youtube className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg group-hover:text-red-500 transition-colors">{channel.name}</h3>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground font-body">{channel.handle}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <p className="font-display text-3xl md:text-4xl">{channel.subscribers}</p>
                      <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{channel.growth}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground">Total subscribers</p>
                  </div>
                </a>)}
            </div>

            {/* Instagram Column */}
            <div className="space-y-6">
              <div className="md:hidden flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full">
                  <Instagram className="w-5 h-5" />
                  <span className="font-display text-sm">Instagram</span>
                </div>
              </div>
              {instagramAccounts.map((account, index) => <a key={account.name} href={account.url} target="_blank" rel="noopener noreferrer" className="group block p-5 bg-card border-2 border-foreground/10 rounded-2xl hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-pink-500/5 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-3 mb-4 relative">
                    <div className="relative">
                      <img src={account.image} alt={account.name} className="w-14 h-14 rounded-full object-cover border-3 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-[2px] group-hover:scale-110 transition-transform duration-300" style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #833AB4, #E1306C, #F77737) border-box',
                    border: '3px solid transparent'
                  }} />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                        <Instagram className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base group-hover:text-pink-500 transition-colors">{account.name}</h3>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground font-body">{account.handle}</p>
                    </div>
                    <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">{account.growth}</span>
                  </div>
                  
                  <div className="flex justify-between text-center relative">
                    <div className="flex-1 py-2">
                      <p className="font-display text-2xl">{account.posts}</p>
                      <p className="font-body text-xs text-muted-foreground">posts</p>
                    </div>
                    <div className="w-px bg-foreground/10" />
                    <div className="flex-1 py-2">
                      <p className="font-display text-2xl text-pink-500">{account.followers}</p>
                      <p className="font-body text-xs text-muted-foreground">followers</p>
                    </div>
                    <div className="w-px bg-foreground/10" />
                    <div className="flex-1 py-2">
                      <p className="font-display text-2xl">{account.following}</p>
                      <p className="font-body text-xs text-muted-foreground">following</p>
                    </div>
                  </div>
                </a>)}
            </div>
          </div>

          {/* And many more text */}
          <div className="flex justify-end mt-8 mr-4">
            <div className="flex items-center gap-2 animate-float" style={{
            animationDelay: '0.5s'
          }}>
              <span className="font-display text-xl italic text-muted-foreground">and many more...</span>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-brand-teal">
                <path d="M5 15 C15 15, 20 20, 25 25" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M20 27 L25 25 L23 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground mb-4">Want to see your channel here?</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-display text-lg hover:bg-foreground/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Let's Grow Together
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>;
};
export default Results;