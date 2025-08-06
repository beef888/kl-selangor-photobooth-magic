import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Create Unforgettable Memories?
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90 max-w-3xl mx-auto">
            Join 500+ satisfied clients across KL & Selangor who chose Instamedia for their special events
          </p>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Get your free consultation and personalized quote within 2 hours. No commitment required.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Response</h3>
              <p className="opacity-80">Call now for immediate assistance and same-day quotes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Chat</h3>
              <p className="opacity-80">Quick questions? Chat with us on WhatsApp for instant replies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Quote</h3>
              <p className="opacity-80">Fill our form for a comprehensive proposal within 2 hours</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              📋 Get Free Detailed Quote
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +60 12-345-6789
              </Button>
              
              <Button variant="outline" size="lg" className="bg-green-600 border-green-500 text-white hover:bg-green-700 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Available 7 Days a Week</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="font-medium">
                📍 Serving KL, PJ, Shah Alam, Subang & All Selangor
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="font-medium">
                ⚡ Same-Day Booking Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;