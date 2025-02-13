
import * as React from "react";

const logos = [
  { 
    name: "Environmental Protection Agency", 
    src: "/placeholder.svg" 
  },
  { 
    name: "United Nations Environment Programme", 
    src: "/placeholder.svg" 
  },
  { 
    name: "World Wildlife Fund", 
    src: "/placeholder.svg" 
  },
  { 
    name: "International Renewable Energy Agency", 
    src: "/placeholder.svg" 
  },
  { 
    name: "Climate Action Network", 
    src: "/placeholder.svg" 
  },
  { 
    name: "Environmental Law Alliance Worldwide", 
    src: "/placeholder.svg" 
  },
  { 
    name: "Global Green Growth Institute", 
    src: "/placeholder.svg" 
  },
  { 
    name: "Climate Law and Policy Project", 
    src: "/placeholder.svg" 
  }
];

const LogoCloud = () => {
  return (
    <section className="py-12 bg-[#F1F0FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            Championing Environmental Justice
          </h2>
          <p className="mt-2 text-neutral-light">
            Proudly collaborating with leading environmental organizations and regulatory bodies
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-none mx-8 w-[200px] group"
              >
                <div className="h-32 bg-white rounded-lg shadow-sm flex items-center justify-center transition-transform duration-300 transform group-hover:scale-105">
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
