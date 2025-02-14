
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

// This should match the data in the Team component
const teamMembers = [
  {
    id: "jennifer-harrison",
    name: "Jennifer Harrison",
    role: "Founding Partner",
    image: "/placeholder.svg",
    bio: "20+ years experience in corporate law",
    longBio: "Jennifer Harrison is a distinguished legal professional with over two decades of experience in corporate law. As the founding partner of Harrison & Associates, she has built a reputation for excellence in handling complex environmental and corporate cases. Her expertise spans climate policy, sustainable development, and corporate compliance.",
    education: ["J.D., Harvard Law School", "B.A. in Environmental Science, Yale University"],
    expertise: ["Corporate Law", "Environmental Regulations", "Climate Policy", "Sustainable Development"],
    contact: {
      email: "jennifer.harrison@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA"
    }
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Senior Partner",
    image: "/placeholder.svg",
    bio: "Expert in intellectual property law",
    longBio: "Michael Chen brings extensive expertise in intellectual property law, particularly focusing on green technology patents and environmental innovations. His work has been instrumental in protecting breakthrough environmental technologies and supporting sustainable business practices.",
    education: ["J.D., Stanford Law School", "M.S. in Environmental Engineering, MIT"],
    expertise: ["Intellectual Property", "Green Technology Patents", "Environmental Law", "International Law"],
    contact: {
      email: "michael.chen@example.com",
      phone: "(555) 123-4568",
      location: "San Francisco, CA"
    }
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Partner",
    image: "/placeholder.svg",
    bio: "Specializes in family law",
    longBio: "Sarah Johnson is a compassionate and skilled attorney specializing in family law. She has dedicated her career to helping families navigate complex legal situations while maintaining a strong focus on environmental justice and sustainable practices in legal proceedings.",
    education: ["J.D., Columbia Law School", "B.A. in Psychology, UC Berkeley"],
    expertise: ["Family Law", "Mediation", "Environmental Justice", "Child Advocacy"],
    contact: {
      email: "sarah.johnson@example.com",
      phone: "(555) 123-4569",
      location: "San Francisco, CA"
    }
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "Partner",
    image: "/placeholder.svg",
    bio: "Criminal defense specialist",
    longBio: "David Wilson is a seasoned criminal defense attorney with a unique focus on environmental crimes and corporate accountability. His work has been pivotal in establishing precedents for environmental protection and corporate responsibility.",
    education: ["J.D., Georgetown Law", "B.S. in Environmental Science, UCLA"],
    expertise: ["Criminal Defense", "Environmental Crimes", "Corporate Accountability", "Trial Advocacy"],
    contact: {
      email: "david.wilson@example.com",
      phone: "(555) 123-4570",
      location: "San Francisco, CA"
    }
  }
];

const TeamMember = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link to="/#team" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Team
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-neutral-light" />
                <span className="text-neutral-light">{member.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-neutral-light" />
                <span className="text-neutral-light">{member.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-neutral-light" />
                <span className="text-neutral-light">{member.contact.location}</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-neutral-dark mb-2">{member.name}</h1>
            <p className="text-xl text-primary mb-6">{member.role}</p>
            <p className="text-neutral-light mb-8">{member.longBio}</p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Education</h2>
                <ul className="list-disc list-inside space-y-2 text-neutral-light">
                  {member.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Areas of Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((exp, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
