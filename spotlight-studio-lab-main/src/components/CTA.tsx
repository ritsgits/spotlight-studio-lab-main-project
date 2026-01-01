import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Decorative elements */}
      {/* <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse stagger-2" /> */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-primary">Ready to go viral?</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight mb-6">
            LET'S CREATE
            <br />
            <span className="text-gradient">SOMETHING EPIC</span>
          </h2>
          
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're a creator looking to scale or a brand seeking viral content, 
            we're here to make it happen. Let's discuss your next big project.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@reelifymedia.com" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="xl" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button></a> 
            <Button variant="outline" size="xl">
              shubham@reelifymedia.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
