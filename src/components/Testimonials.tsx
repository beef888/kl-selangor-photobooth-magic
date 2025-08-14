import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import testimonial2 from "@/assets/customer-testimonial-2.jpg";
import testimonial1 from "@/assets/customer-testimonial-1.jpg";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const testimonials = [
    {
      name: "David Tan",
      event: "Corporate Annual Dinner",
      rating: 5,
      text: "Aipixel exceeded our expectations for our company's 10th anniversary celebration. The custom branding looked amazing and the QR sharing feature meant everyone got their photos instantly. Our 200+ employees had a blast!",
      image: testimonial2,
      location: "Petaling Jaya, Selangor",
      company: "TechCorp Malaysia"
    },
    {
      name: "Aisha Rahman",
      event: "Trade Show Activation",
      rating: 5,
      text: "We used Aipixel for our KL trade show booth. The branded overlays and instant QR sharing helped us capture 800+ leads in two days. Seamless and professional.",
      image: testimonial1,
      location: "Kuala Lumpur Convention Centre",
      company: "Digital Solutions Sdn Bhd"
    },
    {
      name: "Dato' Ahmad Ismail",
      event: "Product Launch Event",
      rating: 5,
      text: "The AI photobooth was the highlight of our luxury car launch. Guests loved the instant transformations and our brand visibility increased dramatically. Worth every ringgit!",
      image: null,
      location: "Pavilion KL",
      company: "Premium Motors Malaysia"
    },
    {
      name: "Dr. Sarah Wong",
      event: "Medical Conference",
      rating: 5,
      text: "Aipixel made our healthcare symposium memorable. The professional quality photos and instant sharing helped our attendees network better. Highly recommended for corporate events.",
      image: null,
      location: "Sunway Medical Centre",
      company: "Malaysian Medical Association"
    },
    {
      name: "Chen Wei Ming",
      event: "Banking Annual Gala",
      rating: 5,
      text: "Outstanding service for our bank's gala dinner. 500+ VIP guests were thrilled with the AI photo experiences. The team was professional and the quality exceptional.",
      image: null,
      location: "Mandarin Oriental KL",
      company: "First National Bank Malaysia"
    },
    {
      name: "Fatimah Abdullah",
      event: "Government Function",
      rating: 5,
      text: "Aipixel delivered excellence for our ministry's official event. The technology impressed our international delegates and the photos were shared across social media instantly.",
      image: null,
      location: "Putrajaya International Convention Centre",
      company: "Ministry of Digital Economy"
    },
    {
      name: "James Lim",
      event: "Property Launch",
      rating: 5,
      text: "The AI photobooth created massive buzz at our luxury development launch. Potential buyers loved the experience and our sales team saw immediate engagement increase.",
      image: null,
      location: "Tropicana Golf & Country Resort",
      company: "Tropicana Corporation"
    },
    {
      name: "Priya Nair",
      event: "Retail Grand Opening",
      rating: 5,
      text: "Fantastic addition to our flagship store opening. The queue was endless and customers shared their AI photos online, giving us tremendous organic marketing reach.",
      image: null,
      location: "Pavilion Bukit Jalil",
      company: "Fashion Forward Retail"
    },
    {
      name: "Robert Thompson",
      event: "International Conference",
      rating: 5,
      text: "Aipixel's technology impressed our global delegates. The seamless integration with our event app and professional output quality made it a conference highlight.",
      image: null,
      location: "Kuala Lumpur Convention Centre",
      company: "Global Tech Solutions"
    },
    {
      name: "Siti Nurhaliza Kamal",
      event: "Insurance Awards Ceremony",
      rating: 5,
      text: "The AI photobooth added glamour to our industry awards night. Winners and guests loved the instant professional headshots. Definitely booking again next year!",
      image: null,
      location: "Shangri-La Hotel KL",
      company: "Insurance Malaysia Berhad"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-testimonial-card]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Happy Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real events across Kuala Lumpur and Selangor
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  data-testimonial-card
                  data-index={index}
                  className={`h-full hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    visibleItems.includes(index) 
                      ? 'animate-fade-in animate-slide-up' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    animationDelay: visibleItems.includes(index) ? `${(index % 3) * 100}ms` : '0ms' 
                  }}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <Quote className="w-8 h-8 text-primary mb-4 animate-float" />
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-3 mt-auto">
                      {testimonial.image && (
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} - ${testimonial.event}`}
                          className="w-12 h-12 rounded-full object-cover"
                          loading="lazy"
                          decoding="async"
                          sizes="48px"
                        />
                      )}
                      {!testimonial.image && (
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                        <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12 hidden md:flex" />
          <CarouselNext className="-right-12 hidden md:flex" />
        </Carousel>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-muted rounded-2xl p-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <h3 className="font-semibold">4.9/5 Average Rating</h3>
              <p className="text-muted-foreground">Based on 250+ Google & Facebook Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;