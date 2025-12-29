import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Reel Production', href: '#' },
      { name: 'Creator Management', href: '#' },
      { name: 'PR & Communications', href: '#' },
      { name: 'Growth Strategy', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#work' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'YouTube', icon: Youtube, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'Twitter', icon: Twitter, href: '#' },
    ],
  };

  return (
    <footer id="about" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-6">
              <span className="font-display text-2xl text-foreground">
                REELIFY<span className="text-primary">MEDIA</span>
              </span>
            </a>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
              India's leading reel agency. We create viral content that converts for creators and brands.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Get in Touch</h4>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <p>hello@reelifymedia.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Reelifymedia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
