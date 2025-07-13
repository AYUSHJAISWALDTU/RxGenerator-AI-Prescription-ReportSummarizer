import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Pill, 
  Clock, 
  AlertTriangle, 
  Info, 
  Download, 
  Share,
  FileText,
  Heart
} from "lucide-react";

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  purpose: string;
}

interface AnalysisResult {
  summary: string;
  medications: Medication[];
  instructions: string[];
  warnings: string[];
}

interface ResultsDisplayProps {
  result: AnalysisResult;
}

export const ResultsDisplay = ({ result }: ResultsDisplayProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <FileText className="w-4 h-4 mr-2" />
            Analysis Results
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Your Medical Document Summary
          </h2>
          <p className="text-xl text-muted-foreground">
            Clear, easy-to-understand information about your prescription
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Summary
                </CardTitle>
                <CardDescription>
                  What this prescription is for and how to take it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-foreground">
                  {result.summary}
                </p>
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5 text-primary" />
                  Medications ({result.medications.length})
                </CardTitle>
                <CardDescription>
                  Detailed information about each medication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {result.medications.map((med, index) => (
                  <div key={index} className="p-4 bg-gradient-accent rounded-lg border border-primary/10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <h4 className="text-xl font-semibold text-foreground">
                        {med.name}
                      </h4>
                      <Badge variant="secondary" className="text-sm">
                        {med.dosage}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-muted-foreground mb-1">Frequency</div>
                        <div className="text-foreground">{med.frequency}</div>
                      </div>
                      <div>
                        <div className="font-medium text-muted-foreground mb-1">Duration</div>
                        <div className="text-foreground">{med.duration}</div>
                      </div>
                      <div>
                        <div className="font-medium text-muted-foreground mb-1">Purpose</div>
                        <div className="text-foreground">{med.purpose}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Instructions
                </CardTitle>
                <CardDescription>
                  Important guidelines for taking your medication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {result.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground leading-relaxed">
                        {instruction}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Warnings */}
            <Card className="shadow-soft border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertTriangle className="w-5 h-5" />
                  Important Warnings
                </CardTitle>
                <CardDescription className="text-orange-600">
                  Please read carefully
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-orange-700 text-sm leading-relaxed">
                        {warning}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Share className="w-5 h-5 text-primary" />
                  Actions
                </CardTitle>
                <CardDescription>
                  Save or share your results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share className="w-4 h-4 mr-2" />
                  Share with Doctor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Save to Health Records
                </Button>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="shadow-soft border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 text-sm">
                  <Info className="w-4 h-4" />
                  Medical Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-blue-600 leading-relaxed">
                  This analysis is for informational purposes only. Always consult 
                  your healthcare provider for medical advice and never stop taking 
                  prescribed medications without professional guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="medical" size="lg">
            Analyze Another Document
          </Button>
        </div>
      </div>
    </section>
  );
};