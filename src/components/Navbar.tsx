
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-neutral-dark">
              Harrison & Associates
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-neutral hover:text-primary transition-colors">About</a>
            <a href="#practice-areas" className="text-neutral hover:text-primary transition-colors">Practice Areas</a>
            <a href="#team" className="text-neutral hover:text-primary transition-colors">Our Team</a>
            <a href="#contact" className="text-neutral hover:text-primary transition-colors">Contact</a>
            <Button variant="default" className="bg-primary hover:bg-primary-dark text-white">
              <Phone className="mr-2 h-4 w-4" />
              (555) 123-4567
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-dark hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              <a href="#about" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">About</a>
              <a href="#practice-areas" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Practice Areas</a>
              <a href="#team" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Our Team</a>
              <a href="#contact" className="block px-3 py-2 text-neutral hover:text-primary transition-colors">Contact</a>
              <Button variant="default" className="w-full bg-primary hover:bg-primary-dark text-white mt-4">
                <Phone className="mr-2 h-4 w-4" />
                (555) 123-4567
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
