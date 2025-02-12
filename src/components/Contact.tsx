
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary-dark ring-1 ring-inset ring-primary/20 mb-6">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
              Get in Touch with Our Legal Experts
            </h2>
            <p className="text-neutral-light mb-8">
              Schedule a consultation with our experienced attorneys to discuss your legal needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-dark">Phone</h3>
                  <p className="text-neutral-light">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-dark">Email</h3>
                  <p className="text-neutral-light">contact@harrison-law.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-dark">Office</h3>
                  <p className="text-neutral-light">123 Legal Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-dark">Hours</h3>
                  <p className="text-neutral-light">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white">
                Schedule Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
