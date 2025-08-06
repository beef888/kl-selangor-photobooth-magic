import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";

const Footer = () => {
  const serviceAreas = [
    "Kuala Lumpur City Centre",
    "Petaling Jaya",
    "Shah Alam", 
    "Subang Jaya",
    "Klang",
    "Kajang",
    "Cheras",
    "Ampang",
    "Puchong",
    "Selayang",
    "Cyberjaya",
    "Putrajaya"
  ];

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Instamedia
            </h3>
            <p className="mb-4 opacity-80 leading-relaxed">
              KL & Selangor's premier AI photobooth rental service. Creating unforgettable moments with cutting-edge technology since 2016.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm opacity-80">4.9/5 Rating • 120+ Reviews</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">+60 12-345-6789</p>
                  <p className="text-sm opacity-70">Available 7 days a week</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">hello@instamedia.my</p>
                  <p className="text-sm opacity-70">Quick email response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Mon-Sun: 9AM-11PM</p>
                  <p className="text-sm opacity-70">Emergency bookings welcome</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Service Areas
            </h4>
            <div className="grid grid-cols-1 gap-1 text-sm">
              {serviceAreas.map((area, index) => (
                <div key={index} className="opacity-80 hover:opacity-100 transition-opacity">
                  ✓ {area}
                </div>
              ))}
            </div>
            <p className="text-xs opacity-60 mt-3">
              *Travel charges may apply for areas beyond 30km from KL city center
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 px-4 font-medium transition-colors">
                📋 Get Free Quote
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 px-4 font-medium transition-colors">
                💬 WhatsApp Us
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-3 px-4 font-medium transition-colors">
                📞 Call Now
              </button>
            </div>
            
            <div className="mt-6 text-xs opacity-60">
              <p>Licensed & Insured</p>
              <p>Professional Equipment</p>
              <p>Backup Systems Included</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm opacity-70">
            © 2024 Instamedia. All rights reserved. | AI Photobooth Rental KL & Selangor
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <span className="opacity-70">Powered by Lovable</span>
            <span className="opacity-70">•</span>
            <span className="text-green-400">🟢 Currently Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;