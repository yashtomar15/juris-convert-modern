
import { Star, Quote } from 'lucide-react';
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    content: "Harrison & Associates provided exceptional legal counsel for my business. Their expertise and dedication were invaluable.",
    rating: 5,
    avatar: "/placeholder.svg",
    bgColor: "bg-[#F2FCE2]"
  },
  {
    name: "Emily Johnson",
    role: "Client",
    content: "The team's professionalism and attention to detail made a difficult legal situation much easier to navigate.",
    rating: 5,
    avatar: "/placeholder.svg",
    bgColor: "bg-[#FEF7CD]"
  },
  {
    name: "Michael Brown",
    role: "Corporate Client",
    content: "Outstanding service and results. The firm's strategic approach helped us achieve our objectives efficiently.",
    rating: 5,
    avatar: "/placeholder.svg",
    bgColor: "bg-[#E5DEFF]"
  },
  {
    name: "Sarah Davis",
    role: "Family Law Client",
    content: "The compassion and understanding shown by the team made a challenging family situation more manageable.",
    rating: 5,
    avatar: "/placeholder.svg",
    bgColor: "bg-[#FFDEE2]"
  },
  {
    name: "Robert Wilson",
    role: "Corporate Executive",
    content: "Their expertise in corporate law has been instrumental in our company's growth and success.",
    rating: 5,
    avatar: "/placeholder.svg",
    bgColor: "bg-[#D3E4FD]"
  }
];

const Testimonials = () => {
  const autoplayPlugin = React.useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Client Testimonials
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto">
            See what our clients have to say about their experience working with our firm.
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className={`${testimonial.bgColor} p-8 rounded-lg shadow-lg relative h-full flex flex-col`}>
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
                  
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                      <p className="text-sm text-neutral-light">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-neutral flex-1">{testimonial.content}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
