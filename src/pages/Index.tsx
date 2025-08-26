import HeroSection from "@/components/HeroSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import VirtualTryOn from "@/components/VirtualTryOn";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Products Showcase */}
      <ProductsShowcase />
      
      {/* Virtual Try-On Section */}
      <VirtualTryOn />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to help you find the perfect eyewear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">support@faceframevision.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">1-800-GLASSES</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">123 Vision Street, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
                FaceFrame Vision
              </h3>
              <p className="text-background/80 mb-4">
                Experience the future of eyewear with AI-powered virtual try-on technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#glasses" className="hover:text-accent transition-smooth">Glasses</a></li>
                <li><a href="#sunglasses" className="hover:text-accent transition-smooth">Sunglasses</a></li>
                <li><a href="#contacts" className="hover:text-accent transition-smooth">Contact Lenses</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#try-on" className="hover:text-accent transition-smooth">Virtual Try-On</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">AI Recommendations</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Free Shipping</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-accent transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Returns</a></li>
                <li><a href="#" className="hover:text-accent transition-smooth">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 FaceFrame Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
