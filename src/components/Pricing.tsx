import { Check, Star, Zap, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const packages = [
    {
      name: "Standard",
      icon: Zap,
      price: "RM 1,288",
      duration: "4 hours",
      popular: false,
      description: "Perfect for small gatherings and intimate events",
      coverage: "KL & Selangor delivery included",
      features: [
        "Professional AI photobooth setup",
        "3 AI transformation themes",
        "Instant 2R prints (unlimited)",
        "QR code & WhatsApp sharing",
        "Basic event branding overlay",
        "Professional lighting setup",
        "On-site technical support",
        "Live photo gallery display"
      ],
      addOns: ["Extra hour: RM 200", "4R prints: RM 150", "Custom branding: RM 300"]
    },
    {
      name: "Premium",
      icon: Star,
      price: "RM 1,888",
      duration: "6 hours",
      popular: true,
      description: "Most popular choice for weddings and corporate events",
      coverage: "Free delivery across KL & Selangor",
      features: [
        "Everything in Standard package",
        "6 AI transformation themes",
        "Both 2R and 4R prints available",
        "Custom event branding package",
        "Social media integration",
        "Analytics dashboard access",
        "Backup equipment included",
        "Extended live gallery features",
        "Green screen capabilities",
        "Priority customer support"
      ],
      addOns: ["Extra hour: RM 180", "Additional themes: RM 200", "Video messages: RM 400"]
    },
    {
      name: "Corporate",
      icon: Crown,
      price: "RM 2,688",
      duration: "8 hours",
      popular: false,
      description: "Enterprise solution for large events and exhibitions",
      coverage: "Peninsula Malaysia coverage available",
      features: [
        "Everything in Premium package",
        "Unlimited AI transformation themes",
        "Lead capture & contact forms",
        "Advanced analytics & reporting",
        "Multi-station setup options",
        "Corporate branding integration",
        "Data export capabilities",
        "Dedicated account manager",
        "Custom software integration",
        "White-label solutions",
        "Extended technical support",
        "Event planning consultation"
      ],
      addOns: ["Multi-location setup: RM 500", "Custom integrations: Quote", "Dedicated staff: RM 400/day"]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Photobooth Rental Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for Kuala Lumpur & Selangor events. No hidden fees, 
            setup and delivery included.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${
                pkg.popular 
                  ? 'border-primary bg-card shadow-elegant scale-105' 
                  : 'border-border bg-card'
              } hover:shadow-glow transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">/ {pkg.duration}</span>
                </div>
                <p className="text-xs text-muted-foreground">{pkg.coverage}</p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Popular Add-ons:</h4>
                <div className="space-y-1">
                  {pkg.addOns.map((addOn, addOnIndex) => (
                    <p key={addOnIndex} className="text-xs text-muted-foreground">• {addOn}</p>
                  ))}
                </div>
              </div>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-gradient-primary hover:shadow-glow' 
                    : 'bg-secondary hover:bg-secondary/90'
                } text-primary-foreground`}
              >
                Select & Book {pkg.name}
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Free consultation • Setup included • Same-day booking available
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Service Coverage & Delivery
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Free Delivery Areas:</h4>
                <p className="text-sm text-muted-foreground">
                  Kuala Lumpur, Petaling Jaya, Shah Alam, Subang Jaya, Puchong, 
                  Klang, Ampang, Cheras, Kajang, Selayang
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Setup Requirements:</h4>
                <p className="text-sm text-muted-foreground">
                  3m x 3m space, power outlet, indoor/covered outdoor areas. 
                  Outdoor setup available with weather protection.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Request Custom Quote
              </Button>
              <Button className="bg-gradient-primary hover:shadow-glow">
                Get Instant Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;