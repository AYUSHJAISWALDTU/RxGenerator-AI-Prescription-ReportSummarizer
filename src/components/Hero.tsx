import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Brain, FileText, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-secondary flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Medical Assistant
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Complex
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Medical Documents
                </span>
                Into Clear Summaries
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Upload your prescriptions, medical reports, or handwritten notes. 
                Our AI instantly converts complex medical jargon into easy-to-understand language.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="medical" 
                size="lg" 
                className="text-lg px-8 py-4"
              >
                <Upload className="w-5 h-5 mr-2" />
                Start Analyzing Documents
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Documents Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-medical">
              <img 
                src={heroImage} 
                alt="Medical document analysis with AI"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating feature cards */}
            <Card className="absolute -left-4 top-1/4 p-4 shadow-soft bg-card/95 backdrop-blur-sm animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">OCR Processing</div>
                  <div className="text-xs text-muted-foreground">Extract text from images</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -right-4 bottom-1/4 p-4 shadow-soft bg-card/95 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Analysis</div>
                  <div className="text-xs text-muted-foreground">Simplified explanations</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};