import { Button } from "@/components/ui/button";
import { Camera, Upload, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-card rounded-full mb-8 animate-float">
            <Sparkles className="w-5 h-5 text-accent mr-2" />
            <span className="text-sm font-medium">AI-Powered Virtual Try-On</span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Try Glasses
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Before You Buy
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Experience the future of eyewear shopping with our AI-powered virtual try-on technology. 
            Find your perfect frames instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="gradient-accent text-accent-foreground hover:shadow-glow transition-smooth">
              <Camera className="w-5 h-5 mr-2" />
              Try with Camera
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-smooth backdrop-blur-md"
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload Photo
            </Button>
          </div>

          {/* Demo Preview */}
          <div className="relative max-w-3xl mx-auto">
            <div className="glass-card rounded-2xl p-8 shadow-glass">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 animate-glow"></div>
                <div className="relative z-10 text-center">
                  <Camera className="w-16 h-16 text-white/60 mx-auto mb-4" />
                  <p className="text-white/80 text-lg">Virtual Try-On Preview</p>
                  <p className="text-white/60 text-sm mt-2">Experience will appear here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Real-time Try-On</h3>
              <p className="text-white/70 text-sm">See how glasses look on you instantly with live camera</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">AI Recommendations</h3>
              <p className="text-white/70 text-sm">Get personalized suggestions based on your face shape</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Photo Upload</h3>
              <p className="text-white/70 text-sm">Try glasses on any photo for the perfect fit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;