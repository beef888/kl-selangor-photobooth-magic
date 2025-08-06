import { MapPin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ServiceArea = () => {
  const serviceAreas = [
    {
      area: "Kuala Lumpur",
      districts: ["KLCC", "Bukit Bintang", "Mont Kiara", "Bangsar", "Cheras"]
    },
    {
      area: "Petaling Jaya",
      districts: ["PJ Old Town", "PJ New Town", "Damansara", "Kelana Jaya", "SS2"]
    },
    {
      area: "Subang Jaya",
      districts: ["USJ", "Subang", "Bandar Sunway", "Puchong", "Seri Kembangan"]
    },
    {
      area: "Shah Alam",
      districts: ["Section 7", "Section 13", "Section 15", "Alam Impian", "Setia Alam"]
    },
    {
      area: "Klang Valley",
      districts: ["Klang", "Port Klang", "Kajang", "Ampang", "Cyberjaya"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Photobooth Rental Service Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional AI photobooth rental serving Kuala Lumpur, Selangor, and the entire Klang Valley. 
            We deliver and setup across all major areas with our experienced local team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">{area.area}</h3>
              </div>
              <div className="space-y-2">
                {area.districts.map((district, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>{district}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">30km+</h4>
              <p className="text-muted-foreground">Coverage Radius from KL</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">Free</h4>
              <p className="text-muted-foreground">Delivery & Setup in Service Areas</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-primary mb-2">Same Day</h4>
              <p className="text-muted-foreground">Booking Available for KL & Selangor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;