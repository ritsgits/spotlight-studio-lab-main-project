import physicsWallahLogo from '@/assets/clients/physics-wallah.png';
import unacademyLogo from '@/assets/clients/unacademy.png';
import netflixLogo from '@/assets/clients/netflix.png';
// import primeVideoLogo from '@/assets/clients/prime-video.png';
// import jiohotstarLogo from '@/assets/clients/jiohotstar.jpeg.webp';
import figuringoutLogo from '@/assets/clients/figuringout.png';
import tatamotorsLogo from '@/assets/clients/tatamotors.png';
import addaLogo from '@/assets/clients/adda.png';
import nexttopperLogo from '@/assets/clients/nexttoppers.png';
import instantbollywoodLogo from '@/assets/clients/instantbollywood.png';
import studyIQLogo from '@/assets/clients/studyIQ.png';
import career from '@/assets/clients/career.png';

const clients = [
  { name: 'Physics Wallah', logo: physicsWallahLogo },
  { name: 'Unacademy', logo: unacademyLogo },
  { name: 'Netflix India', logo: netflixLogo },
  // { name: 'Prime Video', logo: primeVideoLogo },
  // { name: 'JioHotstar', logo: jiohotstarLogo },
  { name: 'Figuring Out', logo: figuringoutLogo },
  { name: 'Tata Motors', logo: tatamotorsLogo },
  { name: 'Adda', logo: addaLogo },
  { name: 'Next Topper', logo: nexttopperLogo },
  { name: 'Instant Bollywood', logo: instantbollywoodLogo },
  { name: 'Study IQ', logo: studyIQLogo },
  { name: 'Career', logo: career },
];

const ClientsMarquee = () => {
  return (
    <section id="clients" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="font-body text-sm text-muted-foreground text-center uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>
      
      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/*
          Important: keep EXACTLY two sets of logos for a seamless loop.
          Tailwind marquee keyframe translates -50%.
        */}
        <div className="inline-flex w-max animate-marquee [will-change:transform]">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="flex items-center justify-center px-8 md:px-16 flex-shrink-0">
              <div className="w-32 h-20 md:w-44 md:h-24 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={180}
                  height={96}
                  decoding="async"
                  className="max-w-full max-h-full object-contain mix-blend-multiply brightness-110 contrast-110 drop-shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
