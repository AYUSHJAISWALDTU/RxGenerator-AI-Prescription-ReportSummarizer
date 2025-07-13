import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload, 
  FileImage, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  X,
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadZoneProps {
  onAnalysisComplete?: (result: any) => void;
}

export const UploadZone = ({ onAnalysisComplete }: UploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  }, []);

  const handleFileSelection = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    setUploadedFile(file);
    setError(null);
    setResult(null);
    
    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    toast({
      title: "File uploaded successfully",
      description: `${file.name} is ready for analysis`
    });
  };

  const simulateProcessing = async () => {
    setIsProcessing(true);
    setProgress(0);
    setError(null);

    try {
      // Simulate OCR processing
      for (let i = 0; i <= 30; i += 5) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      // Simulate AI analysis
      for (let i = 35; i <= 90; i += 10) {
        setProgress(i);
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      // Complete
      setProgress(100);
      await new Promise(resolve => setTimeout(resolve, 500));

      // Mock result
      const mockResult = {
        summary: "This prescription contains Amoxicillin 500mg to be taken three times daily for 7 days to treat a bacterial infection.",
        medications: [
          {
            name: "Amoxicillin",
            dosage: "500mg",
            frequency: "3 times daily",
            duration: "7 days",
            purpose: "Antibiotic for bacterial infection"
          }
        ],
        instructions: [
          "Take with food to reduce stomach upset",
          "Complete the full course even if you feel better",
          "Do not skip doses"
        ],
        warnings: [
          "May cause nausea or diarrhea",
          "Inform doctor if allergic reactions occur"
        ]
      };

      setResult(mockResult);
      onAnalysisComplete?.(mockResult);
      
      toast({
        title: "Analysis complete!",
        description: "Your medical document has been successfully analyzed"
      });

    } catch (err) {
      setError("Failed to process the document. Please try again.");
      toast({
        title: "Processing failed",
        description: "There was an error analyzing your document",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    setResult(null);
    setError(null);
    setProgress(0);
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Upload Your Medical Document
          </h2>
          <p className="text-xl text-muted-foreground">
            Drag and drop your prescription or medical report, or click to browse
          </p>
        </div>

        <Card className="overflow-hidden shadow-medical">
          <CardContent className="p-8">
            {!uploadedFile ? (
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  isDragging 
                    ? 'border-primary bg-primary/5 scale-105' 
                    : 'border-border hover:border-primary/50 hover:bg-accent/30'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Upload className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Drop your medical document here</h3>
                    <p className="text-muted-foreground">
                      Supports JPG, PNG, PDF, and other image formats up to 10MB
                    </p>
                  </div>

                  <Button 
                    variant="medical" 
                    size="lg"
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    <FileImage className="w-5 h-5 mr-2" />
                    Browse Files
                  </Button>

                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelection(file);
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* File Preview */}
                <div className="flex items-center justify-between p-4 bg-accent rounded-lg">
                  <div className="flex items-center space-x-4">
                    {previewUrl && (
                      <img 
                        src={previewUrl} 
                        alt="Document preview"
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                    )}
                    <div>
                      <div className="font-semibold">{uploadedFile.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={clearFile}
                    disabled={isProcessing}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Processing State */}
                {isProcessing && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" />
                      <span className="font-medium">
                        {progress < 30 ? 'Extracting text...' : 
                         progress < 90 ? 'Analyzing with AI...' : 
                         'Finalizing results...'}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                {/* Error State */}
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Success State */}
                {result && (
                  <Alert className="border-primary/20 bg-primary/5">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-primary">
                      Document analysis completed successfully!
                    </AlertDescription>
                  </Alert>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {!isProcessing && !result && (
                    <Button 
                      variant="medical" 
                      size="lg" 
                      onClick={simulateProcessing}
                      className="flex-1"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Analyze Document
                    </Button>
                  )}
                  {result && (
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={clearFile}
                      className="flex-1"
                    >
                      Analyze Another Document
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};