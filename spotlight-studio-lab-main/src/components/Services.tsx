import { Video, Users, TrendingUp, Megaphone, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'PR Page Management',
    description: 'We manage public-facing pages, handle communications, and maintain a consistent, credible brand presence online.',

  },
  {
    icon: Users,
    title: 'Campaign Marketing',
    description: 'We plan and execute targeted campaigns that drive visibility, engagement, and measurable results across digital platforms.',

  },
  {
    icon: TrendingUp,
    title: 'Social Media Growth',
    description: 'We grow social accounts organically using data-driven strategies, trend analysis, and consistent high-performing content.',

  },
  {
    icon: Video,
    title: 'Video Editing',
    description: 'We grow social accounts organically using data-driven strategies, trend analysis, and consistent high-performing content.',

  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'We deliver fast, high-retention video edits optimized for reels, shorts, and platform-specific audience behavior.',

  },
  {
    icon: Zap,
    title: 'Growth Consultancy',
    description: 'We provide strategic guidance on content direction, posting schedules, and platform-specific tactics to accelerate sustainable growth.',

  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-50"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="font-body text-sm text-primary uppercase tracking-widest mb-4">What We Do</p>


          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            OUR SERVICES
            <br />
            <span className="text-gradient"></span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From ideation to execution, we provide everything you need to dominate on social media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-elevated p-8 rounded-lg magnetic-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-2xl mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;