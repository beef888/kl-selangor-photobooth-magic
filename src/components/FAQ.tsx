import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Clock, Shield, Smartphone } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Which areas in KL & Selangor do you cover?",
      answer: "We provide full coverage across Kuala Lumpur and Selangor including KL City Centre, Petaling Jaya, Shah Alam, Subang Jaya, Klang, Kajang, Cheras, Ampang, and surrounding areas. Travel charges may apply for locations beyond 30km from KL city center."
    },
    {
      question: "How much space do you need for setup?",
      answer: "Our AI photobooth requires a minimum space of 3m x 3m (10ft x 10ft) with access to power outlets. We provide all equipment including lighting, backdrop, and props. The setup is compact and suitable for most indoor venues."
    },
    {
      question: "Can you set up outdoors for garden parties or weddings?",
      answer: "Yes! We offer weather-resistant setups for outdoor events. However, we require covered areas or tents to protect the equipment from direct sunlight and rain. Additional weatherproofing fees may apply."
    },
    {
      question: "What branding and customization options are available?",
      answer: "We offer comprehensive branding including custom backgrounds, photo frames, event logos, company branding, wedding themes, and personalized overlays. All designs are included in our packages with unlimited photo templates."
    },
    {
      question: "How do guests get their photos instantly?",
      answer: "Guests receive photos through multiple channels: instant QR code scanning (no app needed), direct WhatsApp sharing, email delivery, and optional USB/cloud gallery access. All photos are available immediately after capture."
    },
    {
      question: "What's included in the rental package?",
      answer: "Complete package includes: AI photobooth with latest software, professional lighting setup, custom backdrop, unlimited instant prints, QR sharing system, on-site technician, setup & breakdown, and 4-6 hours of operation time."
    },
    {
      question: "How far in advance should we book?",
      answer: "We recommend booking 2-4 weeks in advance, especially for weekend events. However, we can accommodate last-minute bookings subject to availability. Peak seasons (CNY, Raya, wedding seasons) require earlier booking."
    },
    {
      question: "Do you provide backup equipment?",
      answer: "Absolutely! We always bring backup cameras, printers, and essential components to every event. Our technicians are trained to handle any technical issues immediately to ensure uninterrupted service."
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
                  📞 Call: +60 12-345-6789
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-lg py-3 px-4 font-medium">
                  💬 WhatsApp Us Now
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-lg py-3 px-4 font-medium">
                  ✉️ hello@instamedia.my
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