import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { Filter, Search } from "lucide-react";

const ProductsShowcase = () => {
  const products = {
    glasses: [
      {
        id: "g1",
        name: "Classic Round Frame",
        brand: "VisionPro",
        price: 149,
        originalPrice: 199,
        image: "/api/placeholder/300/300",
        colors: ["#1a1a1a", "#8B4513", "#2F4F4F"],
        category: "glasses" as const
      },
      {
        id: "g2",
        name: "Modern Square",
        brand: "FrameCraft",
        price: 179,
        image: "/api/placeholder/300/300",
        colors: ["#1a1a1a", "#8B4513"],
        category: "glasses" as const
      },
      {
        id: "g3",
        name: "Designer Cat Eye",
        brand: "LuxeVision",
        price: 229,
        image: "/api/placeholder/300/300",
        colors: ["#8B4513", "#DC143C", "#1a1a1a"],
        category: "glasses" as const
      },
      {
        id: "g4",
        name: "Minimalist Titanium",
        brand: "TechFrame",
        price: 299,
        image: "/api/placeholder/300/300",
        colors: ["#C0C0C0", "#1a1a1a"],
        category: "glasses" as const
      }
    ],
    sunglasses: [
      {
        id: "s1",
        name: "Aviator Classic",
        brand: "SunStyle",
        price: 199,
        originalPrice: 249,
        image: "/api/placeholder/300/300",
        colors: ["#FFD700", "#C0C0C0", "#1a1a1a"],
        category: "sunglasses" as const
      },
      {
        id: "s2",
        name: "Sport Wrap",
        brand: "ActiveVision",
        price: 159,
        image: "/api/placeholder/300/300",
        colors: ["#1a1a1a", "#FF4500"],
        category: "sunglasses" as const
      },
      {
        id: "s3",
        name: "Vintage Wayfarer",
        brand: "RetroFrame",
        price: 189,
        image: "/api/placeholder/300/300",
        colors: ["#8B4513", "#1a1a1a", "#2F4F4F"],
        category: "sunglasses" as const
      },
      {
        id: "s4",
        name: "Oversized Glam",
        brand: "LuxeStyle",
        price: 249,
        image: "/api/placeholder/300/300",
        colors: ["#8B4513", "#DC143C"],
        category: "sunglasses" as const
      }
    ],
    contacts: [
      {
        id: "c1",
        name: "Daily Clear",
        brand: "ClearVision",
        price: 29,
        image: "/api/placeholder/300/300",
        colors: [],
        category: "contacts" as const
      },
      {
        id: "c2",
        name: "Monthly Comfort",
        brand: "ComfortLens",
        price: 49,
        originalPrice: 59,
        image: "/api/placeholder/300/300",
        colors: [],
        category: "contacts" as const
      },
      {
        id: "c3",
        name: "Color Enhancement",
        brand: "ColorVision",
        price: 89,
        image: "/api/placeholder/300/300",
        colors: ["#4169E1", "#228B22", "#8B4513"],
        category: "contacts" as const
      },
      {
        id: "c4",
        name: "Toric Astigmatism",
        brand: "PrecisionLens",
        price: 79,
        image: "/api/placeholder/300/300",
        colors: [],
        category: "contacts" as const
      }
    ]
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of glasses, sunglasses, and contact lenses
          </p>
        </div>

        <Tabs defaultValue="glasses" className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <TabsList className="grid w-full max-w-md grid-cols-3 glass-card">
              <TabsTrigger value="glasses" className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
                Glasses
              </TabsTrigger>
              <TabsTrigger value="sunglasses" className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
                Sunglasses
              </TabsTrigger>
              <TabsTrigger value="contacts" className="data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground">
                Contacts
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <TabsContent value="glasses">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.glasses.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sunglasses">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.sunglasses.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.contacts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-smooth">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;