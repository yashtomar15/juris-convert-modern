
import { GavelIcon, HomeIcon, ScaleIcon, HeartHandshakeIcon, BuildingIcon, ShieldIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const practices = [
  {
    icon: GavelIcon,
    title: "Criminal Law",
    description: "Expert defense in criminal cases with a proven track record of successful outcomes."
  },
  {
    icon: HomeIcon,
    title: "Family Law",
    description: "Compassionate guidance through divorce, custody, and other family matters."
  },
  {
    icon: ScaleIcon,
    title: "Civil Litigation",
    description: "Strategic representation in complex civil disputes and lawsuits."
  },
  {
    icon: HeartHandshakeIcon,
    title: "Personal Injury",
    description: "Dedicated advocacy for accident victims seeking fair compensation."
  },
  {
    icon: BuildingIcon,
    title: "Real Estate Law",
    description: "Comprehensive legal services for all real estate transactions."
  },
  {
    icon: ShieldIcon,
    title: "Corporate Law",
    description: "Strategic business counsel for companies of all sizes."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Our Practice Areas
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto">
            We offer comprehensive legal services across multiple practice areas, providing expert counsel and representation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <practice.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                {practice.title}
              </h3>
              <p className="text-neutral-light mb-4">
                {practice.description}
              </p>
              <Button variant="link" className="text-primary hover:text-primary-dark p-0">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
