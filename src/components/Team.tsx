
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    id: "jennifer-harrison",
    name: "Jennifer Harrison",
    role: "Founding Partner",
    image: "/placeholder.svg",
    bio: "20+ years experience in corporate law",
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Senior Partner",
    image: "/placeholder.svg",
    bio: "Expert in intellectual property law",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Partner",
    image: "/placeholder.svg",
    bio: "Specializes in family law",
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "Partner",
    image: "/placeholder.svg",
    bio: "Criminal defense specialist",
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-neutral-light max-w-2xl mx-auto">
            Our team of experienced attorneys is dedicated to providing the highest quality legal services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-neutral-light text-sm mb-4">{member.bio}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a href="#" className="text-neutral-light hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-neutral-light hover:text-primary transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-neutral-light hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                  <Link to={`/team/${member.id}`}>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
