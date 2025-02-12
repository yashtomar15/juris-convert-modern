
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "John Smith",
    role: "Business Owner",
    content: "Harrison & Associates provided exceptional legal counsel for my business. Their expertise and dedication were invaluable.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Client",
    content: "The team's professionalism and attention to detail made a difficult legal situation much easier to navigate.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Corporate Client",
    content: "Outstanding service and results. The firm's strategic approach helped us achieve our objectives efficiently.",
    rating: 5
  }
];

const Testimonials = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-neutral mb-6">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                <p className="text-sm text-neutral-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
