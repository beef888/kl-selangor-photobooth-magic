import { Star, Award, Users, MapPin } from "lucide-react";

const TrustStrip = () => {
  const stats = [
    { icon: Award, label: "8+ years serving KL & Selangor", value: "8+" },
    { icon: Users, label: "events completed", value: "1,200+" },
    { icon: Star, label: "Google rating", value: "5★" },
    { icon: MapPin, label: "locations covered", value: "15+" }
  ];

  return (
    <div className="bg-gradient-to-r from-muted to-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-6">
        {/* Client Logos Carousel */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground mb-4">Trusted by leading brands across KL & Selangor</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-24 h-12 bg-card rounded border flex items-center justify-center">
              <span className="text-xs font-semibold text-muted-foreground">KLCC</span>
            </div>
            <div className="w-24 h-12 bg-card rounded border flex items-center justify-center">
              <span className="text-xs font-semibold text-muted-foreground">MITEC</span>
            </div>
            <div className="w-24 h-12 bg-card rounded border flex items-center justify-center">
              <span className="text-xs font-semibold text-muted-foreground">PICC</span>
            </div>
            <div className="w-24 h-12 bg-card rounded border flex items-center justify-center">
              <span className="text-xs font-semibold text-muted-foreground">MAEPS</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Review */}
        <div className="text-center mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              "Professional team at Shah Alam expo" - Sarah L.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;