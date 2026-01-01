import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    // { name: 'Results', href: '#results' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Clients', href: '#clients' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 cursor-pointer">
            {/* <span className="font-display text-2xl md:text-3xl tracking-wide text-foreground">
              REELIFY<span className="text-primary">MEDIA</span>
            </span> */}
            <img src="REELIFY LOGO WHITE - PNG.png" alt="Reelify Media Logo"  className="h-10 md:h-18 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 line-reveal"
              >
                {link.name}
              </a>
            ))}
            <a href="https://forms.gle/NM2mwcZw4cRqcEvG7" target='_blank'>
              <Button variant="hero" size="default">
                Let's Talk
              </Button>
            </a>  
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSetsgIPP8hevrexzqLJi2Hh5SgM-xX_CS6T565-cH2FzNV93g/viewform" target='_blank'>
             <Button variant="hero" size="lg" className="mt-2">
                Let's Talk
              </Button></a> 
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
