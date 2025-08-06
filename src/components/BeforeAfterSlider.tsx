import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import beforeCorporate from "@/assets/before-corporate-portrait.jpg";
import afterSuperhero from "@/assets/after-superhero-transform.jpg";
import beforeWedding from "@/assets/before-wedding-couple.jpg";
import afterFairytale from "@/assets/after-fairytale-wedding.jpg";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBeforeView, setIsBeforeView] = useState(true);

  const transformations = [
    {
      id: 1,
      title: "Corporate to Superhero",
      description: "Transform professional headshots into epic superhero portraits",
      beforeImage: beforeCorporate,
      afterImage: afterSuperhero,
      beforeAlt: "Professional corporate headshot before AI transformation",
      afterAlt: "Superhero-themed AI transformation with cape and cityscape background"
    },
    {
      id: 2,
      title: "Wedding to Fairytale",
      description: "Turn wedding photos into magical fairytale moments",
      beforeImage: beforeWedding,
      afterImage: afterFairytale,
      beforeAlt: "Traditional wedding couple photo before AI enhancement",
      afterAlt: "Fairytale-themed wedding transformation with enchanted forest background"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const currentTransformation = transformations[currentSlide];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Sparkles className="inline w-8 h-8 mr-2 text-primary" />
            AI Photobooth Magic in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI transforms ordinary photos into extraordinary memories. 
            Real transformations from events across Kuala Lumpur and Selangor.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="relative">
              {/* Image Container */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                  src={isBeforeView ? currentTransformation.beforeImage : currentTransformation.afterImage}
                  alt={isBeforeView ? currentTransformation.beforeAlt : currentTransformation.afterAlt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Before/After Toggle */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {isBeforeView ? "BEFORE" : "AFTER"}
                  </div>
                </div>

                {/* Toggle Button */}
                <Button
                  onClick={() => setIsBeforeView(!isBeforeView)}
                  className="absolute top-4 right-4 bg-primary/90 hover:bg-primary text-white"
                  size="sm"
                >
                  {isBeforeView ? "Show After" : "Show Before"}
                </Button>

                {/* Navigation Arrows */}
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {currentTransformation.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {currentTransformation.description}
                  </p>
                  
                  {/* Slide Indicators */}
                  <div className="flex justify-center gap-2 mb-4">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentSlide ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Original Photo</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-3 bg-gradient-primary/10 rounded-lg">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>AI Enhanced Result</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Instant Transformation</h4>
              <p className="text-sm text-muted-foreground">
                AI processes and transforms photos in under 30 seconds
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎨</span>
              </div>
              <h4 className="font-semibold mb-2">Custom Themes</h4>
              <p className="text-sm text-muted-foreground">
                Choose from 50+ themes or create custom branded backgrounds
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Instant Sharing</h4>
              <p className="text-sm text-muted-foreground">
                QR codes, WhatsApp, and social media sharing available immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;