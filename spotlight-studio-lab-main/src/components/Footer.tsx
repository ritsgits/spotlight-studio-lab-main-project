import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'PR Page Management', href: '#' },
      { name: 'Campaign Marketing', href: '#' },
      { name: 'Video Editing', href: '#' },
      { name: 'Social Media Growth', href: '#' },
      { name: 'Graphic Design', href: '#' },
      { name: 'Growth Consultancy', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Work', href: '#work' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    social: [
      { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/reelify.media/' },
      // { name: 'YouTube', icon: Youtube, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/reelify-media/posts/' },
      // { name: 'Twitter', icon: Twitter, href: '#' },
    ],
  };

  return (
    <footer id="about" className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-1 ml-48">
            <a href="#" className="inline-block mb-6 ml-5">
              {/* <span className="font-display text-2xl text-foreground">
                REELIFY<span className="text-primary">MEDIA</span>
              </span> */}
              
                          <img src="REELIFY LOGO WHITE - PNG copy.png" alt="Reelify Media Logo"  className="h-10 md:h-18 w-auto object-contain flex px-12 justify-center" />

            </a>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
              India's leading social media agency. We create <br /> viral  content that converts for creators <br /> and brands.
            </p>
          
          </div>

          {/* Services */}
          {/* <div>
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
          </div> */}

          {/* Company */}
          {/* <div>
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
          </div> */}

            {/* <div className=" border-t border-border flex  md:flex-row items-center justify-center ">
          <p className="font-body text-lg text-muted-foreground select-none text-center align-middle  mt-4 mb-1">
            © {currentYear} Reelifymedia. All rights reserved.
          </p>
          </div> */}

          {/* Contact */}
          <div className="ml-32">
            <h4 className="font-display text-xl mb-6 "> <b>Get in Touch</b></h4>
            <div className="space-y-3 font-body text-sm text-muted-foreground">
              <p>shubham@reelifymedia.com</p>
              <p>+91 94509 40146</p>
              <p>Noida, India</p>
                <div className="flex items-center gap-4">
              {footerLinks.social.map((social) => (
                <a
                target='_blank'
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
              {/* <p className="font-body text-lg text-muted-foreground select-none ">
            © {currentYear} Reelifymedia. All rights reserved.
          </p> */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
         <div className=" border-t border-border flex  md:flex-row items-center justify-center ">
          <p className="font-body text-lg text-muted-foreground select-none text-center align-middle  mt-4 mb-1">
            © {currentYear} Reelifymedia. All rights reserved.
          </p>
        {/*  <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>*/}
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
