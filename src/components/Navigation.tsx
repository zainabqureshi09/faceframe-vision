import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              FaceFrame Vision
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#glasses" className="text-foreground hover:text-primary transition-smooth">
                Glasses
              </a>
              <a href="#sunglasses" className="text-foreground hover:text-primary transition-smooth">
                Sunglasses
              </a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-smooth">
                Contacts
              </a>
              <a href="#try-on" className="text-foreground hover:text-primary transition-smooth">
                Virtual Try-On
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden sm:flex gradient-accent text-accent-foreground hover:shadow-glow transition-smooth">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Cart (0)
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-card mt-2 rounded-lg">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#glasses"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Glasses
              </a>
              <a
                href="#sunglasses"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Sunglasses
              </a>
              <a
                href="#contacts"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacts
              </a>
              <a
                href="#try-on"
                className="block px-3 py-2 text-foreground hover:text-primary transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Virtual Try-On
              </a>
              <div className="px-3 py-2">
                <Button size="sm" className="w-full gradient-accent text-accent-foreground">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart (0)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;