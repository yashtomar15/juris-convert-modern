
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Sample logos - replace these with actual client logos
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
  const autoplayPlugin = React.useMemo(
    () =>
      Autoplay({
        delay: 2000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <section className="py-12 bg-[#F1F0FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">
            Trusted By Leading Organizations
          </h2>
          <p className="mt-2 text-neutral-light">
            Partnering with businesses and institutions across industries
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {logos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="relative h-32 group">
                  <div className="absolute inset-0 flex items-center justify-center bg-white rounded-lg shadow-sm transition-transform duration-300 transform group-hover:scale-105">
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="h-12 w-auto transition-opacity duration-300 group-hover:opacity-80"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCloud;
