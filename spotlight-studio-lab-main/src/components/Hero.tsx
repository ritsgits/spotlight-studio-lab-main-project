import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating service tags - like Reelifymedia */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="service-tag service-tag-1 absolute top-[20%] left-[10%] -rotate-12">Graphic Design</div>
        <div className="service-tag service-tag-2 absolute top-[15%] right-[15%] rotate-6">Video Editing</div>
        <div className="service-tag service-tag-3 absolute top-[35%] left-[5%] rotate-12">SMM</div>
        <div className="service-tag service-tag-4 absolute bottom-[35%] right-[8%] -rotate-6">Social Media Campaigns</div>
        <div className="service-tag service-tag-5 absolute bottom-[25%] left-[15%] rotate-3">Content Strategy</div>
        <div className="service-tag service-tag-6 absolute top-[45%] right-[20%] -rotate-3">Brand Growth</div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main headline - Rainbow REELIFY like their branding */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-4 animate-slide-up">
            <span className="text-gradient"><b>REELIFY MEDIA</b></span>
          </h1>
          {/* <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 animate-slide-up stagger-1">
          <b>MEDIA</b>  
          </h2> */}

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground mb-4 animate-slide-up stagger-2">
            Scaling Digital Presence With
          </p>
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground mb-10 animate-slide-up stagger-2">
            Precision & Creativity
          </p>

          {/* Subtitle */}
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up stagger-3">
            Empowering creators and brands with scroll-stopping content. 
            From concept to viral — we make your story unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up stagger-4">
            <a href="https://forms.gle/NM2mwcZw4cRqcEvG7" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group" >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#portfolio">
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                View Portfolio
              </Button>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
