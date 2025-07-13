import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UploadZone } from "@/components/UploadZone";
import { ResultsDisplay } from "@/components/ResultsDisplay";

const Index = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalysisComplete = (result: any) => {
    setAnalysisResult(result);
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <UploadZone onAnalysisComplete={handleAnalysisComplete} />
      
      {analysisResult && (
        <div id="results">
          <ResultsDisplay result={analysisResult} />
        </div>
      )}
    </div>
  );
};

export default Index;
