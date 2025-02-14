
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neutral-900/[0.02] bg-[size:32px_32px] opacity-100"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <span className="inline-flex animate-fadeIn opacity-0 [--animation-delay:200ms] items-center rounded-full px-3 py-1 text-sm font-medium bg-white/20 text-white ring-1 ring-inset ring-white/30 mb-8">
          Pioneering Climate Justice
        </span>
        
        <h1 className="animate-fadeIn opacity-0 [--animation-delay:400ms] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Shaping a Sustainable
          <span className="text-white/90"> Legal Future</span>
        </h1>
        
        <p className="animate-fadeIn opacity-0 [--animation-delay:600ms] max-w-2xl text-lg sm:text-xl text-white/80 mb-8">
          We specialize in environmental law, climate policy, and sustainable development,
          providing expert legal guidance for a greener tomorrow.
        </p>
        
        <div className="animate-fadeIn opacity-0 [--animation-delay:800ms] flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 min-w-[200px]"
            onClick={() => navigate('/schedule')}
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 min-w-[200px]"
          >
            Our Impact
          </Button>
        </div>
        
        <div className="animate-fadeIn opacity-0 [--animation-delay:1000ms] mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "15+", label: "Years in Climate Law" },
            { number: "500+", label: "Environmental Cases" },
            { number: "95%", label: "Success Rate" },
            { number: "100+", label: "Policy Changes" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-2">{stat.number}</span>
              <span className="text-white/80 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
