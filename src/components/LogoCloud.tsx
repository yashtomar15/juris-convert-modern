
import * as React from "react";

const logos = [
  { name: "Client 1", src: "/placeholder.svg" },
  { name: "Client 2", src: "/placeholder.svg" },
  { name: "Client 3", src: "/placeholder.svg" },
  { name: "Client 4", src: "/placeholder.svg" },
  { name: "Client 5", src: "/placeholder.svg" },
  { name: "Client 6", src: "/placeholder.svg" },
  { name: "Client 7", src: "/placeholder.svg" },
  { name: "Client 8", src: "/placeholder.svg" },
];

const LogoCloud = () => {
  return (
    <section className="py-12 bg-[#F1F0FB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            Trusted By Leading Organizations
          </h2>
          <p className="mt-2 text-neutral-light">
            Partnering with businesses and institutions across industries
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
