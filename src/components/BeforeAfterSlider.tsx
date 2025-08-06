import { useState, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import beforeCorporate from "@/assets/before-corporate-portrait.jpg";
import afterSuperhero from "@/assets/after-superhero-transform.jpg";
import beforeWedding from "@/assets/before-wedding-couple.jpg";
import afterFairytale from "@/assets/after-fairytale-wedding.jpg";
import beforeBusiness from "@/assets/before-business-executive.jpg";
import afterAstronaut from "@/assets/after-astronaut-transform.jpg";
import beforeTraditional from "@/assets/before-traditional-costume.jpg";
import afterMalay from "@/assets/after-traditional-malay.jpg";
import beforePirate from "@/assets/before-pirate-adventure.jpg";
import afterPirateCapt from "@/assets/after-pirate-captain.jpg";
import beforeSamurai from "@/assets/before-samurai-warrior.jpg";
import afterSamuraiWarrior from "@/assets/after-samurai-warrior.jpg";

const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderValue, setSliderValue] = useState([50]);
  const containerRef = useRef<HTMLDivElement>(null);

  const transformations = [
    {
      id: 1,
      title: "Corporate to Superhero",
      category: "Professional",
      description: "Transform professional headshots into epic superhero portraits",
      beforeImage: beforeCorporate,
      afterImage: afterSuperhero,
      beforeAlt: "Professional corporate headshot before AI transformation",
      afterAlt: "Superhero-themed AI transformation with cape and cityscape background",
      theme: "Superhero",
      useCase: "Corporate events, team building",
      location: "KLCC Corporate Event",
      event: "Tech Conference 2024"
    },
    {
      id: 2,
      title: "Wedding to Fairytale",
      category: "Social Events",
      description: "Turn wedding photos into magical fairytale moments",
      beforeImage: beforeWedding,
      afterImage: afterFairytale,
      beforeAlt: "Traditional wedding couple photo before AI enhancement",
      afterAlt: "Fairytale-themed wedding transformation with enchanted forest background",
      theme: "Fairytale",
      useCase: "Weddings, anniversaries",
      location: "Shah Alam Wedding",
      event: "Garden Wedding Reception"
    },
    {
      id: 3,
      title: "Executive to Astronaut",
      category: "Professional",
      description: "Turn business portraits into cosmic space adventures",
      beforeImage: beforeBusiness,
      afterImage: afterAstronaut,
      beforeAlt: "Business executive portrait before AI transformation",
      afterAlt: "Astronaut space suit transformation with galaxy background",
      theme: "Space Explorer",
      useCase: "Corporate events, tech conferences"
    },
    {
      id: 4,
      title: "Modern to Traditional Malaysian",
      category: "Cultural",
      description: "Celebrate Malaysian heritage with traditional costume transformations",
      beforeImage: beforeTraditional,
      afterImage: afterMalay,
      beforeAlt: "Modern casual portrait before cultural transformation",
      afterAlt: "Traditional Malaysian Baju Kurung with batik patterns and cultural background",
      theme: "Malaysian Heritage",
      useCase: "Cultural events, Malaysia Day celebrations"
    },
    {
      id: 5,
      title: "Professional to Pirate Captain",
      category: "Adventure",
      description: "Transform into a legendary pirate captain for adventure-themed events",
      beforeImage: beforePirate,
      afterImage: afterPirateCapt,
      beforeAlt: "Professional woman portrait before pirate transformation",
      afterAlt: "Pirate captain transformation with authentic costume and ship background",
      theme: "Pirate Adventure",
      useCase: "Themed parties, team building events"
    },
    {
      id: 6,
      title: "Urban to Samurai Warrior",
      category: "Cultural",
      description: "Channel the spirit of ancient warriors with authentic samurai transformations",
      beforeImage: beforeSamurai,
      afterImage: afterSamuraiWarrior,
      beforeAlt: "Modern urban portrait before samurai transformation",
      afterAlt: "Samurai warrior transformation with traditional armor and dojo setting",
      theme: "Samurai Warrior",
      useCase: "Cultural events, martial arts demonstrations"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length);
    setSliderValue([50]); // Reset slider to center
  }, [transformations.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderValue([50]); // Reset slider to center
  }, [transformations.length]);

  const handleSliderChange = useCallback((value: number[]) => {
    setSliderValue(value);
  }, []);

  const currentTransformation = transformations[currentSlide];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Sparkles className="inline w-8 h-8 mr-2 text-primary" />
            AI Photobooth Rental Kuala Lumpur - Live Demo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive before & after slider from real KL & Selangor events. 
            Drag to see instant AI transformations from our photobooth rental service.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-card border-border">
            <div className="relative">
              {/* Interactive Split-Screen Image Container */}
              <div 
                ref={containerRef}
                className="relative h-96 md:h-[600px] overflow-hidden bg-muted"
              >
                {/* Before Image (Base Layer) */}
                <img
                  src={currentTransformation.beforeImage}
                  alt={currentTransformation.beforeAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* After Image (Clipped Layer) */}
                <div 
                  className="absolute inset-0 overflow-hidden transition-all duration-150"
                  style={{ 
                    clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` 
                  }}
                >
                  <img
                    src={currentTransformation.afterImage}
                    alt={currentTransformation.afterAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Before/After Labels */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    BEFORE
                  </div>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                    AFTER
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    {currentTransformation.category}
                  </div>
                </div>

                {/* Slider Container */}
                <div className="absolute inset-x-4 bottom-8">
                  <div className="relative">
                    <Slider
                      value={sliderValue}
                      onValueChange={handleSliderChange}
                      max={100}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    
                    {/* Slider Handle Indicator */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-0.5 h-full bg-white shadow-lg"
                      style={{ left: `${sliderValue[0]}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-xs text-white/80 mt-2">
                    <span>Original</span>
                    <span>AI Enhanced</span>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/30 text-white hover:bg-black/70 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/30 text-white hover:bg-black/70 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6 bg-card border-t border-border">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">
                      {currentTransformation.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-2">
                    {currentTransformation.description}
                  </p>
                  
                  <p className="text-sm text-primary/80 mb-2">
                    Perfect for: {currentTransformation.useCase}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4 italic">
                    Demo from: {currentTransformation.location} • {currentTransformation.event}
                  </p>
                  
                  {/* Theme Tag */}
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Zap className="w-4 h-4" />
                    {currentTransformation.theme}
                  </div>
                  
                  {/* Slide Indicators */}
                  <div className="flex justify-center gap-2 mb-6">
                    {transformations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentSlide(index);
                          setSliderValue([50]);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${
                          index === currentSlide ? "bg-primary shadow-lg" : "bg-muted hover:bg-muted-foreground/30"
                        }`}
                        aria-label={`View transformation ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    Try This Theme at Your Event
                  </Button>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center justify-center gap-2 p-3 bg-muted/50 rounded-lg border border-border">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <span>Original Photo</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>AI Enhanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Instant Transformation</h4>
              <p className="text-sm text-muted-foreground">
                AI processes and transforms photos in under 30 seconds at your event
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold mb-2">60+ Custom Themes</h4>
              <p className="text-sm text-muted-foreground">
                Malaysian cultural themes, corporate styles, and fantasy adventures
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Interactive Experience</h4>
              <p className="text-sm text-muted-foreground">
                Drag the slider to compare, share instantly via QR code or WhatsApp
              </p>
            </div>
          </div>

          {/* Theme Categories */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-6">Popular Transformation Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Professional", icon: "💼", count: "15+" },
                { name: "Cultural", icon: "🏮", count: "12+" },
                { name: "Adventure", icon: "⚔️", count: "18+" },
                { name: "Fantasy", icon: "✨", count: "20+" }
              ].map((category, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h4 className="font-medium">{category.name}</h4>
                  <p className="text-xs text-muted-foreground">{category.count} themes</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;