import { Award, Code, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OurDifference = () => {
  const achievements = [
    {
      icon: Award,
      number: "8",
      label: "Years Serving KL & Selangor",
      description: "Professional AI photobooth rental experience across Kuala Lumpur and Selangor"
    },
    {
      icon: Users,
      number: "1200+",
      label: "Events Completed",
      description: "Over 1,200 successful events across KL, Petaling Jaya, Shah Alam & Selangor"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Star Rating",
      description: "Consistent 5-star reviews from clients across KL & Selangor areas"
    },
    {
      icon: Code,
      number: "100%",
      label: "Custom AI Software",
      description: "Proprietary AI algorithms developed in-house for superior photobooth performance"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another photobooth rental - we're KL's leading AI event technology specialists
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{achievement.label}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Advantage</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">🚀 Latest Technology</h4>
              <p className="opacity-90">Always updated with the newest AI features and hardware upgrades</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">🎯 Local Expertise</h4>
              <p className="opacity-90">Deep understanding of Malaysian events and cultural preferences</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">⚡ Reliable Service</h4>
              <p className="opacity-90">Professional setup, backup equipment, and on-site technical support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDifference;