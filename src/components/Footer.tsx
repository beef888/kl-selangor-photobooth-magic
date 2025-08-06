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
            <div className="mb-4 space-y-2">
              <p className="opacity-80 leading-relaxed">
                Premier AI photobooth rental Kuala Lumpur & Selangor. Creating unforgettable moments with cutting-edge technology since 2016.
              </p>
              <div className="text-sm opacity-70">
                <strong>Business Address:</strong><br />
                123 Jalan Photobooth, Petaling Jaya<br />
                47400 Selangor, Malaysia
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm opacity-80">5.0/5 Rating • 150+ Local Reviews</span>
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
              AI Photobooth Rental Service Areas
            </h4>
            <div className="grid grid-cols-1 gap-1 text-sm">
              {serviceAreas.map((area, index) => (
                <div key={index} className="opacity-80 hover:opacity-100 transition-opacity">
                  ✓ {area}
                </div>
              ))}
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255290.2825056165!2d101.51416983359374!3d3.1390089434678037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e0d3%3A0x232e1ff540d86c99!2sPetaling%20Jaya%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1642345678901!5m2!1sen!2smy"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg opacity-80"
                title="Instamedia AI Photobooth Service Area - Kuala Lumpur & Selangor"
              />
            </div>
            
            <p className="text-xs opacity-60 mt-3">
              *Free delivery within KL & Selangor service areas
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 px-4 font-medium transition-colors">
                📋 Get Free Quote for Selangor Events
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 px-4 font-medium transition-colors">
                💬 WhatsApp for KL AI Photobooth
              </button>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-3 px-4 font-medium transition-colors">
                📞 Call for Kuala Lumpur Booking
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
            © 2024 Instamedia - Premier AI Photobooth Rental Kuala Lumpur & Selangor. All rights reserved.
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