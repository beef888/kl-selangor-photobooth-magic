import { Building2, Rocket, ArrowRight, Users, Trophy, Zap, Camera, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import corporateCase from "@/assets/case-study-corporate.jpg";
import productLaunchCase from "@/assets/case-study-product-launch.jpg";
import weddingCase from "@/assets/case-study-wedding.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Tech Company Corporate Event",
      client: "Malaysian Tech Unicorn",
      location: "KLCC Convention Centre, Kuala Lumpur",
      event: "Annual Company Meeting",
      guests: 500,
      image: corporateCase,
      icon: Building2,
      highlights: [
        "Custom Aipixel branding with logo overlays",
        "Professional headshots for LinkedIn profiles", 
        "Team building photo activities",
        "Real-time social media integration",
        "Executive portraits with city backdrop"
      ],
      results: {
        photos: "2,400+ photos",
        sharing: "95% instant sharing rate",
        engagement: "4.8/5 guest satisfaction",
        impact: "Featured in company newsletter"
      },
      testimonial: "Aipixel's AI photobooth was the highlight of our event. Professional quality photos that our employees are still using as profile pictures months later!",
      person: "Sarah Chen",
      role: "Event Manager"
    },
    {
      id: 2,
      title: "Luxury Wedding Reception",
      client: "Elite Wedding at Grand Hyatt",
      location: "Grand Hyatt Kuala Lumpur",
      event: "Wedding Reception",
      guests: 200,
      image: weddingCase,
      icon: Crown,
      highlights: [
        "Elegant wedding-themed AI backgrounds",
        "Instant guest book photo prints",
        "Custom couple branding integration",
        "Traditional Malaysian cultural filters",
        "Premium photo album generation"
      ],
      results: {
        photos: "1,800+ photos",
        sharing: "100% guest participation",
        engagement: "5.0/5 satisfaction rating",
        impact: "Viral social media content"
      },
      testimonial: "Aipixel transformed our wedding with magical AI photography that captured memories beyond our imagination. Our guests couldn't stop raving about it!",
      person: "Priya & Ahmad",
      role: "Wedding Couple"
    },
    {
      id: 3,
      title: "Product Launch Event",
      client: "Global Electronics Brand",
      location: "Pavilion KL, Kuala Lumpur",
      event: "Smartphone Launch",
      guests: 300,
      image: productLaunchCase,
      icon: Rocket,
      highlights: [
        "Futuristic sci-fi themed backgrounds",
        "Product integration in photo compositions",
        "Influencer and media portraits",
        "Brand color scheme customization by Aipixel",
        "Tech-themed AR filters and effects"
      ],
      results: {
        photos: "1,500+ photos",
        sharing: "Social media viral content",
        engagement: "30% increase in event hashtag usage",
        impact: "Extended brand reach"
      },
      testimonial: "Aipixel's AI photobooth created buzz-worthy content that extended our product launch reach far beyond the event venue.",
      person: "Marcus Lee",
      role: "Marketing Director"
    },
    {
      id: 4,
      title: "Banking Conference",
      client: "Regional Banking Summit",
      location: "Mandarin Oriental, Kuala Lumpur",
      event: "FinTech Conference 2024",
      guests: 400,
      image: corporateCase,
      icon: Users,
      highlights: [
        "Professional networking portraits",
        "Conference-branded AI backgrounds",
        "QR code instant sharing system",
        "Executive headshot sessions",
        "Award ceremony photography"
      ],
      results: {
        photos: "2,000+ photos",
        sharing: "85% LinkedIn profile updates",
        engagement: "4.9/5 professional rating",
        impact: "Enhanced networking experience"
      },
      testimonial: "Aipixel delivered exceptional professional photography that enhanced our conference's networking value significantly.",
      person: "David Tan",
      role: "Conference Director"
    },
    {
      id: 5,
      title: "Shopping Mall Activation",
      client: "Luxury Retail Brand",
      location: "Suria KLCC, Kuala Lumpur",
      event: "Fashion Week Activation",
      guests: 800,
      image: productLaunchCase,
      icon: Camera,
      highlights: [
        "Fashion-forward AI styling filters",
        "Brand ambassador photo sessions",
        "Social media contest integration",
        "Real-time fashion trends analysis",
        "Influencer collaboration features"
      ],
      results: {
        photos: "3,200+ photos",
        sharing: "50% social media engagement boost",
        engagement: "Record mall foot traffic",
        impact: "Brand awareness campaign success"
      },
      testimonial: "Aipixel's innovative approach to retail activation drove unprecedented engagement and brand visibility for our fashion campaign.",
      person: "Isabella Wong",
      role: "Brand Manager"
    }
  ];

  const industryUseCases = [
    {
      industry: "Corporate Events",
      icon: Building2,
      applications: [
        "Product launches",
        "Annual meetings", 
        "Team building events",
        "Award ceremonies",
        "Conference activations"
      ]
    },
    {
      industry: "Marketing & Retail",
      icon: Rocket,
      applications: [
        "Mall activations",
        "Brand experiences",
        "Store openings",
        "Fashion events",
        "Trade shows"
      ]
    },
    {
      industry: "Luxury & Premium",
      icon: Crown,
      applications: [
        "Weddings & celebrations",
        "VIP events",
        "Gala dinners",
        "Premium launches",
        "High-end activations"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Success Stories from 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> KL & Selangor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how leading organizations across Kuala Lumpur and Selangor have elevated their events 
            with <strong>Aipixel's</strong> AI photobooth technology. Join over 1,500+ successful events powered by Aipixel.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className="overflow-hidden animate-slide-up hover:shadow-elegant transition-all duration-500" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} overflow-hidden`}>
                  <img
                    src={study.image}
                    alt={`${study.title} - Aipixel AI Photobooth Case Study in Kuala Lumpur & Selangor`}
                    className="w-full h-full object-cover min-h-[300px] hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <study.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{study.title}</h3>
                      <p className="text-muted-foreground">{study.client}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{study.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Guests</p>
                      <p className="font-medium">{study.guests} attendees</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Aipixel Features Used:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {study.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <p className="font-semibold text-primary">{value}</p>
                        <p className="text-xs text-muted-foreground capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">
                    "{study.testimonial}"
                    <footer className="mt-2 text-sm font-medium text-foreground">
                      — {study.person}, {study.role}
                    </footer>
                  </blockquote>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Use Cases */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted Across Industries in Malaysia
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Following the success of global leaders, <strong>Aipixel</strong> brings enterprise-grade AI photobooth 
              solutions to Malaysian events across every industry sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-elegant transition-all duration-300 animate-slide-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{useCase.industry}</h4>
                  <div className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="m-1 text-xs hover:bg-primary hover:text-white transition-colors">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
              Start Your Aipixel Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Join 1,500+ successful events across KL & Selangor powered by Aipixel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;