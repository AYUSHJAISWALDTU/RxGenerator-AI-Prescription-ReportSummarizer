import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Upload, 
  Eye, 
  Brain, 
  Shield, 
  Clock, 
  Users,
  FileImage,
  MessageSquare,
  Stethoscope 
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: FileImage,
      title: "Smart OCR Technology",
      description: "Advanced text extraction from handwritten prescriptions, typed reports, and medical documents with high accuracy.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Brain,
      title: "AI Medical Assistant",
      description: "GPT-4 powered analysis that understands medical terminology and translates complex jargon into plain language.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your medical information is processed securely with enterprise-grade encryption and privacy protection.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your medical document summary in seconds, not hours. Perfect for urgent medication questions.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: MessageSquare,
      title: "Clear Explanations",
      description: "Receive easy-to-understand summaries with dosage instructions, side effects, and usage guidelines.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect for patients, caregivers, and family members who need to understand medical instructions.",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Stethoscope className="w-4 h-4 mr-2" />
            How It Works
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Simplifying Healthcare, One Document at a Time
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced AI technology makes complex medical information accessible to everyone, 
            improving health literacy and medication compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-gradient-accent border-primary/20">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Ready to Get Started?</h3>
                <p className="text-muted-foreground">
                  Upload your first medical document and see the magic happen
                </p>
              </div>
              <div className="flex gap-3">
                <Upload className="w-8 h-8 text-primary animate-pulse-glow" />
                <Eye className="w-8 h-8 text-primary animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                <Brain className="w-8 h-8 text-primary animate-pulse-glow" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};