
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Navbar from "@/components/Navbar";

const expertiseDetails = {
  "environmental-litigation": {
    title: "Environmental Litigation",
    description: "Our Environmental Litigation practice provides comprehensive legal representation in complex environmental disputes and regulatory compliance matters.",
    image: "/photo-1433086966358-54859d0ed716",
    content: {
      overview: "We represent clients in a wide range of environmental litigation matters, from regulatory compliance to complex environmental disputes. Our team has extensive experience in handling cases involving environmental regulations, pollution claims, and natural resource damages.",
      services: [
        "Environmental compliance and enforcement defense",
        "Toxic tort and environmental contamination litigation",
        "Natural resource damage claims",
        "Environmental impact assessment challenges",
        "Regulatory appeals and administrative proceedings",
        "Environmental permit disputes"
      ],
      approach: "We combine deep environmental law expertise with strong litigation skills to achieve optimal results for our clients. Our approach is practical, efficient, and focused on achieving our clients' objectives while promoting environmental protection."
    }
  },
  "climate-policy": {
    title: "Climate Policy",
    description: "Expert guidance on climate change legislation, carbon markets, and environmental regulations.",
    image: "/photo-1501854140801-50d01698950b",
    content: {
      overview: "Our Climate Policy practice helps organizations navigate the complex landscape of climate change legislation and regulation. We provide strategic advice on carbon markets, emissions trading, and climate-related disclosures.",
      services: [
        "Climate change legislation compliance",
        "Carbon market strategy and trading",
        "Climate-related risk assessment",
        "ESG reporting and disclosure",
        "Climate policy advocacy",
        "International climate agreements"
      ],
      approach: "We take a forward-looking approach to climate policy, helping clients anticipate and adapt to regulatory changes while identifying opportunities in the transition to a low-carbon economy."
    }
  },
  "renewable-energy": {
    title: "Renewable Energy",
    description: "Comprehensive legal support for renewable energy projects, from development to implementation.",
    image: "/photo-1523712999610-f77fbcfc3843",
    content: {
      overview: "Our Renewable Energy practice provides end-to-end legal support for renewable energy projects. We help clients navigate the complex regulatory landscape while maximizing project success.",
      services: [
        "Renewable energy project development",
        "Power purchase agreements",
        "Project finance and investment",
        "Regulatory compliance",
        "Land use and permitting",
        "Grid connection agreements"
      ],
      approach: "We combine technical knowledge with legal expertise to help clients develop and implement successful renewable energy projects that contribute to a sustainable future."
    }
  },
  "sustainable-development": {
    title: "Sustainable Development",
    description: "Strategic guidance on sustainable business practices and environmental compliance.",
    image: "/photo-1501854140801-50d01698950b",
    content: {
      overview: "Our Sustainable Development practice helps organizations integrate sustainability into their operations while ensuring compliance with environmental regulations.",
      services: [
        "Sustainable business strategy development",
        "Environmental compliance programs",
        "Sustainability reporting and disclosure",
        "Green building certification",
        "Supply chain sustainability",
        "Circular economy initiatives"
      ],
      approach: "We take a holistic approach to sustainable development, helping clients balance environmental responsibility with business success."
    }
  },
  "green-real-estate": {
    title: "Green Real Estate",
    description: "Expert legal guidance in sustainable building practices and environmental certifications.",
    image: "/photo-1433086966358-54859d0ed716",
    content: {
      overview: "Our Green Real Estate practice specializes in sustainable building development and certification. We help clients navigate green building requirements while maximizing property value.",
      services: [
        "Green building certification",
        "Sustainable development planning",
        "Environmental impact assessments",
        "Energy efficiency compliance",
        "Green leasing",
        "Environmental due diligence"
      ],
      approach: "We combine real estate expertise with environmental knowledge to help clients develop and manage sustainable properties that meet both environmental and business objectives."
    }
  },
  "environmental-protection": {
    title: "Environmental Protection",
    description: "Legal advocacy for conservation efforts and natural resource protection.",
    image: "/photo-1523712999610-f77fbcfc3843",
    content: {
      overview: "Our Environmental Protection practice is dedicated to preserving and protecting natural resources through legal advocacy and compliance guidance.",
      services: [
        "Natural resource conservation",
        "Wildlife protection",
        "Habitat preservation",
        "Environmental impact mitigation",
        "Conservation easements",
        "Environmental permit compliance"
      ],
      approach: "We work to protect and preserve natural resources while helping clients navigate complex environmental regulations and achieve their conservation goals."
    }
  }
};

const Expertise = () => {
  const { id } = useParams();
  const expertise = id ? expertiseDetails[id as keyof typeof expertiseDetails] : null;

  if (!expertise) {
    return <div>Expertise not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={expertise.image}
          alt={expertise.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{expertise.title}</h1>
            <p className="text-xl">{expertise.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/#practice-areas" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Practice Areas
        </Link>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-neutral-light mb-8">{expertise.content.overview}</p>

          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid gap-4">
            {expertise.content.services.map((service, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-light">{service}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Approach</h2>
          <p className="text-neutral-light">{expertise.content.approach}</p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
