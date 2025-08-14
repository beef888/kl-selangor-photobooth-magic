import { Camera, Wand2, Share2, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Capture",
      description: "Guests take photos using our AI-powered photobooth with professional lighting and backdrops",
      detail: "High-quality cameras and studio lighting ensure perfect shots every time"
    },
    {
      icon: Wand2,
      title: "AI Transform",
      description: "Our advanced AI applies custom transformations, AR filters, and themed overlays in real-time",
      detail: "From superhero themes to traditional Malaysian costumes"
    },
    {
      icon: Share2,
      title: "Print & Share",
      description: "Instant high-quality prints with QR codes for immediate WhatsApp sharing and digital copies",
      detail: "2R/4R prints ready in seconds, plus instant digital sharing"
    },
    {
      icon: Monitor,
      title: "Display",
      description: "Live gallery displays all photos on screens or social walls for guests to enjoy and share",
      detail: "Real-time photo slideshow creates engagement throughout your event"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Our AI Photobooth Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From capture to share in under 30 seconds. Experience the future of event photography
            across KL & Selangor.
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-16 bg-border mt-4 ml-6"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                <p className="text-xs text-muted-foreground italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-primary"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={index} className="relative p-6 bg-card border-border hover:shadow-elegant transition-all duration-300">
                  {/* Step Number Circle */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center border-4 border-background">
                      <step.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="pt-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    <p className="text-xs text-muted-foreground italic">{step.detail}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to see our AI photobooth in action at your KL or Selangor event?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
               href="tel:+60126616973"
               className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
             >
               Call for Demo Request
             </a>
            <button className="inline-flex items-center px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;