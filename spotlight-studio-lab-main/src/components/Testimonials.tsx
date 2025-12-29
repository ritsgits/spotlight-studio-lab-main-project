import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Reelifymedia transformed our content strategy. Their understanding of viral content is unmatched. Our engagement increased by 300% in just 3 months.",
    author: "Raj Shamani",
    role: "Entrepreneur & Content Creator",
    avatar: "RS",
  },
  {
    quote: "The team's creativity and professionalism made our collaboration seamless. They delivered beyond expectations every single time.",
    author: "Marketing Head",
    role: "Physics Wallah",
    avatar: "PW",
  },
  {
    quote: "Working with Reelifymedia was a game-changer for our brand presence on social media. They truly understand the pulse of short-form content.",
    author: "Brand Manager",
    role: "Unacademy",
    avatar: "UA",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-sm text-primary uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            WHAT OUR <span className="text-gradient">CLIENTS SAY</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-8 rounded-lg relative"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <span className="font-display text-lg text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground">{testimonial.author}</p>
                  <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
