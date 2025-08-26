import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: string[];
  category: "glasses" | "sunglasses" | "contacts";
}

const ProductCard = ({ 
  id, 
  name, 
  brand, 
  price, 
  originalPrice, 
  image, 
  colors = [],
  category 
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <Card className="group hover:shadow-glass transition-smooth cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-lg">
          <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              onError={(e) => {
                e.currentTarget.src = `/api/placeholder/300/300`;
              }}
            />
          </div>
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Button size="sm" className="gradient-primary text-primary-foreground shadow-glow mr-2">
              <Eye className="w-4 h-4 mr-1" />
              Try On
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-accent' : ''}`} />
            </Button>
          </div>

          {/* Sale Badge */}
          {originalPrice && (
            <div className="absolute top-3 left-3 gradient-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
              Sale
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 right-3 glass-card px-2 py-1 rounded-md text-xs font-medium capitalize">
            {category}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-sm text-muted-foreground">{brand}</p>
              <h3 className="font-semibold text-card-foreground line-clamp-1">{name}</h3>
            </div>
          </div>

          {/* Color Options */}
          {colors.length > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-muted-foreground">Colors:</span>
              <div className="flex gap-1">
                {colors.slice(0, 4).map((color, index) => (
                  <button
                    key={index}
                    className="w-5 h-5 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-smooth"
                    style={{ backgroundColor: color }}
                    onMouseEnter={() => setHoveredColor(color)}
                    onMouseLeave={() => setHoveredColor(null)}
                  />
                ))}
                {colors.length > 4 && (
                  <span className="text-xs text-muted-foreground ml-1">+{colors.length - 4}</span>
                )}
              </div>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">${price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
              )}
            </div>
            <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;