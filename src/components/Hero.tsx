
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-primary/5">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-900/[0.02] bg-[size:32px_32px] opacity-100"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <span className="inline-flex animate-fadeIn opacity-0 [--animation-delay:200ms] items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary-dark ring-1 ring-inset ring-primary/20 mb-8">
          Trusted Legal Excellence
        </span>
        
        <h1 className="animate-fadeIn opacity-0 [--animation-delay:400ms] text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-dark tracking-tight mb-6">
          Expert Legal Solutions for
          <span className="text-primary"> Your Future</span>
        </h1>
        
        <p className="animate-fadeIn opacity-0 [--animation-delay:600ms] max-w-2xl text-lg sm:text-xl text-neutral-light mb-8">
          We provide comprehensive legal services with a commitment to excellence,
          integrity, and personalized attention to each client's unique needs.
        </p>
        
        <div className="animate-fadeIn opacity-0 [--animation-delay:800ms] flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-dark text-white min-w-[200px]"
            onClick={() => navigate('/schedule')}
          >
            Free Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 min-w-[200px]">
            Learn More
          </Button>
        </div>
        
        <div className="animate-fadeIn opacity-0 [--animation-delay:1000ms] mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "20+", label: "Years Experience" },
            { number: "1000+", label: "Cases Won" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Client Support" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary mb-2">{stat.number}</span>
              <span className="text-neutral-light text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
