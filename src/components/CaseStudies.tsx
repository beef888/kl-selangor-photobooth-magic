import { Building2, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import corporateCase from "@/assets/case-study-corporate.jpg";

import productLaunchCase from "@/assets/case-study-product-launch.jpg";

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
        "Custom company branding with logo overlays",
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
      testimonial: "The AI photobooth was the highlight of our event. Professional quality photos that our employees are still using as profile pictures months later!",
      person: "Sarah Chen",
      role: "Event Manager"
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
        "Brand color scheme customization",
        "Tech-themed AR filters and effects"
      ],
      results: {
        photos: "1,500+ photos",
        sharing: "Social media viral content",
        engagement: "30% increase in event hashtag usage",
        impact: "Extended brand reach"
      },
      testimonial: "The AI photobooth created buzz-worthy content that extended our product launch reach far beyond the event venue.",
      person: "Marcus Lee",
      role: "Marketing Director"
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
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Success Stories from 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> KL & Selangor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how leading organizations across Kuala Lumpur and Selangor have elevated their events 
            with our AI photobooth technology. Inspired by industry leaders like Snapbar who serve 
            Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {caseStudies.map((study, index) => (
            <Card key={study.id} className="overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={study.image}
                    alt={`${study.title} - AI Photobooth Case Study in Kuala Lumpur & Selangor`}
                    className="w-full h-full object-cover min-h-[300px]"
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
                    <h4 className="font-semibold mb-3">Key Features Used:</h4>
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
                      <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
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
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted Across Industries in Malaysia
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Following the success of global leaders like Snapbar (trusted by Dell, Adobe, Coca-Cola), 
              we bring enterprise-grade AI photobooth solutions to Malaysian events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-4">{useCase.industry}</h4>
                  <div className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <Badge key={idx} variant="secondary" className="m-1 text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Join 1200+ successful events across KL & Selangor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;