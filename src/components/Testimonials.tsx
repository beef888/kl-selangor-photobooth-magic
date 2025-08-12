import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonial1 from "@/assets/customer-testimonial-1.jpg";
import testimonial2 from "@/assets/customer-testimonial-2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Ahmad",
      event: "Wedding Reception at The Majestic Hotel KL",
      rating: 5,
      text: "The AI photobooth was the highlight of our wedding! Our guests loved the instant AR filters and the prints came out beautifully. The team was so professional and set everything up perfectly. Highly recommend for any KL wedding!",
      image: testimonial1,
      location: "Kuala Lumpur"
    },
    {
      name: "David Tan",
      event: "Corporate Annual Dinner",
      rating: 5,
      text: "Instamedia exceeded our expectations for our company's 10th anniversary celebration. The custom branding looked amazing and the QR sharing feature meant everyone got their photos instantly. Our 200+ employees had a blast!",
      image: testimonial2,
      location: "Petaling Jaya, Selangor"
    },
    {
      name: "Priya Sharma",
      event: "Birthday Celebration",
      rating: 5,
      text: "Booked for my daughter's 21st birthday party in Shah Alam. The AI effects were so cool and modern - exactly what we wanted! The setup was quick and the team was very helpful throughout the event.",
      image: null,
      location: "Shah Alam, Selangor"
    }
  ];

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
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3">
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
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-muted rounded-2xl p-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <h3 className="font-semibold">4.9/5 Average Rating</h3>
              <p className="text-muted-foreground">Based on 120+ Google & Facebook Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;