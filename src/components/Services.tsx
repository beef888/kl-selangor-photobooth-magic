import { Camera, Smartphone, Printer, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import setupImage from "@/assets/ai-photobooth-setup.jpg";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "AI Augmented Reality",
      description: "Advanced AR filters and effects that respond to gestures and facial expressions in real-time"
    },
    {
      icon: Printer,
      title: "Instant Professional Prints",
      description: "High-quality photo prints delivered instantly with custom templates and branding options"
    },
    {
      icon: Smartphone,
      title: "QR Code Sharing",
      description: "Guests instantly receive photos via QR codes - no apps needed, direct to their phones"
    },
    {
      icon: Palette,
      title: "Custom Event Branding",
      description: "Personalized overlays, backgrounds, and frames that match your event theme perfectly"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Premium AI Photobooth Rental Features in Kuala Lumpur & Selangor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our exclusive AI photobooth rental Kuala Lumpur & Selangor service brings cutting-edge technology to your events with professional features that create unforgettable memories across KL and Selangor.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src={setupImage} 
              alt="AI Photobooth Rental Setup Kuala Lumpur Selangor - Professional Event Photography"
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-elegant transition-all duration-300 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-muted rounded-2xl p-6">
            <span className="text-3xl">🎯</span>
            <div className="text-left">
              <h3 className="font-semibold">Perfect for Any Event</h3>
              <p className="text-muted-foreground">Weddings • Corporate Events • Birthday Parties • Product Launches • Festivals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;