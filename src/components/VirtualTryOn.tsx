import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, RotateCw, Download, Share2 } from "lucide-react";
import { useState } from "react";

const VirtualTryOn = () => {
  const [selectedGlasses, setSelectedGlasses] = useState<string | null>(null);
  const [isCamera, setIsCamera] = useState(false);

  const glassesOptions = [
    { id: "1", name: "Classic Round", color: "black", preview: "#1a1a1a" },
    { id: "2", name: "Modern Square", color: "brown", preview: "#8B4513" },
    { id: "3", name: "Aviator Style", color: "gold", preview: "#FFD700" },
    { id: "4", name: "Cat Eye", color: "tortoise", preview: "#8B4513" },
  ];

  return (
    <section id="try-on" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Virtual Try-On Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how you look in different frames with our AI-powered virtual try-on technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Try-On Interface */}
          <div className="lg:col-span-2">
            <Card className="glass-card shadow-glass">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Virtual Try-On</span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={isCamera ? "default" : "outline"}
                      onClick={() => setIsCamera(true)}
                    >
                      <Camera className="w-4 h-4 mr-1" />
                      Camera
                    </Button>
                    <Button
                      size="sm"
                      variant={!isCamera ? "default" : "outline"}
                      onClick={() => setIsCamera(false)}
                    >
                      <Upload className="w-4 h-4 mr-1" />
                      Upload
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 animate-glow"></div>
                  <div className="relative z-10 text-center">
                    {isCamera ? (
                      <>
                        <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-foreground text-lg mb-2">Camera View</p>
                        <p className="text-muted-foreground text-sm">AI face detection active</p>
                      </>
                    ) : (
                      <>
                        <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-foreground text-lg mb-2">Upload a Photo</p>
                        <p className="text-muted-foreground text-sm">Drag & drop or click to select</p>
                      </>
                    )}
                  </div>
                  
                  {/* Simulated face detection overlay */}
                  {selectedGlasses && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-32 h-8 rounded-full border-2" 
                             style={{ borderColor: glassesOptions.find(g => g.id === selectedGlasses)?.preview }}
                        />
                        <div className="absolute left-1/2 top-1/2 w-4 h-1 bg-current transform -translate-x-1/2 -translate-y-1/2"
                             style={{ color: glassesOptions.find(g => g.id === selectedGlasses)?.preview }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="outline">
                    <RotateCw className="w-4 h-4 mr-1" />
                    Adjust
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Glasses Selection */}
          <div>
            <Card className="glass-card shadow-glass">
              <CardHeader>
                <CardTitle>Choose Glasses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {glassesOptions.map((glasses) => (
                    <button
                      key={glasses.id}
                      onClick={() => setSelectedGlasses(glasses.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-smooth text-left ${
                        selectedGlasses === glasses.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{glasses.name}</h4>
                          <p className="text-sm text-muted-foreground capitalize">{glasses.color}</p>
                        </div>
                        <div 
                          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: glasses.preview }}
                        />
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-3">AI Recommendations</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Face Shape:</span>
                      <span className="font-medium">Oval</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best Match:</span>
                      <span className="font-medium text-primary">Classic Round</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Confidence:</span>
                      <span className="font-medium text-secondary">92%</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 gradient-accent text-accent-foreground hover:shadow-glow transition-smooth">
                  Add to Cart - $149
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTryOn;