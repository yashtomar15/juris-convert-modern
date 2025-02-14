
import { GavelIcon, HomeIcon, ScaleIcon, HeartHandshakeIcon, BuildingIcon, ShieldIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const practices = [
  {
    id: "environmental-litigation",
    icon: GavelIcon,
    title: "Environmental Litigation",
    description: "Representing clients in complex environmental disputes and regulatory compliance matters."
  },
  {
    id: "climate-policy",
    icon: HomeIcon,
    title: "Climate Policy",
    description: "Advising on climate change legislation, carbon markets, and environmental regulations."
  },
  {
    id: "renewable-energy",
    icon: ScaleIcon,
    title: "Renewable Energy",
    description: "Legal support for renewable energy projects, from development to implementation."
  },
  {
    id: "sustainable-development",
    icon: HeartHandshakeIcon,
    title: "Sustainable Development",
    description: "Guidance on sustainable business practices and environmental compliance."
  },
  {
    id: "green-real-estate",
    icon: BuildingIcon,
    title: "Green Real Estate",
    description: "Legal expertise in sustainable building practices and environmental certifications."
  },
  {
    id: "environmental-protection",
    icon: ShieldIcon,
    title: "Environmental Protection",
    description: "Advocacy for conservation efforts and natural resource protection."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Our Environmental Expertise
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto">
            We provide comprehensive legal services focused on environmental protection and sustainable development.
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
              <Link to={`/expertise/${practice.id}`}>
                <Button variant="link" className="text-primary hover:text-primary-dark p-0">
                  Learn More →
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
