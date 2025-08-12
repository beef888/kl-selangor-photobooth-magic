import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Shield, Smartphone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide AI photobooth rental coverage across Kuala Lumpur and Selangor?",
      answer: "Yes! We provide comprehensive AI photobooth rental services throughout Kuala Lumpur, Selangor, and the entire Klang Valley including Petaling Jaya, Subang Jaya, Shah Alam, Klang, Kajang, and Cyberjaya. Free delivery and setup within our service areas."
    },
    {
      question: "What makes your AI photobooth rental in KL different from regular photobooths?",
      answer: "Our exclusive AI photobooth rental Kuala Lumpur service uses advanced artificial intelligence for real-time background removal, AR filters, and automatic photo enhancement. Unlike traditional photobooths, guests get professional-quality photos with instant background changes and virtual props."
    },
    {
      question: "How much space do you need for AI photobooth setup in Selangor venues?",
      answer: "We typically require a 3m x 3m (10ft x 10ft) space for our standard AI photobooth setup across Selangor venues. This includes room for the photobooth, backdrop, props table, and guest queue area. We can accommodate smaller spaces with our compact setup options."
    },
    {
      question: "Is your photobooth suitable for outdoor events in KL and Selangor?",
      answer: "Yes, our AI photobooth rental works perfectly for outdoor events across KL and Selangor. We provide weather-resistant equipment and can set up under tents or covered areas. Popular for corporate outdoor events, brand activations, and festivals throughout the Klang Valley."
    },
    {
      question: "How fast is the instant sharing for events in Kuala Lumpur?",
      answer: "Our AI photobooth provides lightning-fast instant sharing via QR codes, WhatsApp, and email within 3-5 seconds after photo capture. Perfect for social media sharing during events across Kuala Lumpur and Selangor, keeping your guests engaged and connected."
    },
    {
      question: "Can you customize branding for corporate events in Selangor?",
      answer: "Absolutely! Our AI photobooth rental Selangor service offers complete custom branding including company logos, themed backgrounds, branded photo layouts, and custom AR filters. Perfect for corporate events, product launches, and brand activations across the Klang Valley."
    },
    {
      question: "Do you offer same-day AI photobooth booking in KL?",
      answer: "Yes, we offer same-day AI photobooth rental booking across KL and Selangor subject to availability. Our local team can often accommodate urgent requests. Call us directly for emergency bookings and last-minute events in the Kuala Lumpur area."
    }
  ];

  const highlights = [
    {
      icon: MapPin,
      title: "Full KL & Selangor Coverage",
      description: "Professional service across all major areas"
    },
    {
      icon: Clock,
      title: "Same-Day Booking Available",
      description: "Emergency bookings welcomed"
    },
    {
      icon: Shield,
      title: "Equipment Insurance Included",
      description: "Fully insured and professional grade"
    },
    {
      icon: Smartphone,
      title: "Zero App Downloads Required",
      description: "Instant access via QR codes"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our AI photobooth services in KL & Selangor
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-lg border-2 px-6 hover:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-primary rounded-2xl p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="mb-6 opacity-90">Our team is ready to help you plan the perfect event experience</p>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-lg py-3 px-4 font-medium">
                  📞 Call: +60 12-661 6973
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-lg py-3 px-4 font-medium">
                  💬 WhatsApp Us Now
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-lg py-3 px-4 font-medium">
                  ✉️ Email our team
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-4 rounded-lg border">
                  <div className="bg-gradient-primary p-2 rounded-lg">
                    <highlight.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{highlight.title}</h4>
                    <p className="text-xs text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;