import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment: "The virtual try-on feature is incredible! I found the perfect glasses without leaving my home. The AI recommendations were spot on.",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 2,
      name: "Mike Chen",
      location: "San Francisco, CA",
      rating: 5,
      comment: "Amazing technology! The face detection was so accurate, and I could see exactly how the glasses would look. Highly recommend!",
      avatar: "/api/placeholder/64/64"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Austin, TX",
      rating: 5,
      comment: "Love the convenience and the quality of frames. The virtual try-on saved me so much time, and the glasses fit perfectly!",
      avatar: "/api/placeholder/64/64"
    }
  ];

  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect frames
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="glass-card shadow-glass">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    onError={(e) => {
                      e.currentTarget.src = "/api/placeholder/64/64";
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card inline-flex items-center px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-accent fill-current mr-2" />
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-white/80 ml-2">from 2,847 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;