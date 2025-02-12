
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/20 text-primary-light ring-1 ring-inset ring-primary/30 mb-6">
              About Our Firm
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Legacy of Excellence in Legal Services
            </h2>
            <p className="text-gray-300 mb-8">
              Founded in 2000, Harrison & Associates has established itself as a leading law firm, 
              serving clients with dedication, expertise, and unwavering commitment to justice.
            </p>
            
            <div className="space-y-4">
              {[
                "Over 20 years of legal excellence",
                "Team of experienced attorneys",
                "Personalized client attention",
                "Outstanding track record",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary mb-2">2000+</h3>
                <p className="text-gray-300">Cases Won</p>
              </div>
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
                <p className="text-gray-300">Success Rate</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-300">Expert Lawyers</p>
              </div>
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-gray-300">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
