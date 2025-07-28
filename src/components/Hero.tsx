import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  useScrollAnimation();
  
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Content */}
          <div className="space-y-8 scroll-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full text-sm font-medium text-secondary glow-spotlight scroll-scale-in">
                <Sparkles className="w-4 h-4 accent-pop" />
                Your unfair edge for every case comp
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-high-contrast scroll-slide-left">
                Win{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent glow-primary">
                  smarter
                </span>
                ,<br />
                not harder
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto scroll-slide-right">
                The AI-powered co-pilot for case competitions. Practice, prepare, and perform with the structure and edge that top-tier students trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-scale-in">
              <Button size="lg" className="group shadow-medium hover:shadow-strong transition-all duration-300 glow-accent hover:glow-primary">
                Start winning today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform accent-pop" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-muted hover:bg-card text-high-contrast">
                See how it works
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-muted/50 scroll-fade-in">
              <div className="text-center scroll-slide-left">
                <div className="text-3xl font-bold text-secondary accent-pop">10k+</div>
                <div className="text-sm text-muted-foreground text-high-contrast">Students prepping</div>
              </div>
              <div className="text-center scroll-scale-in">
                <div className="text-3xl font-bold text-secondary accent-pop">500+</div>
                <div className="text-sm text-muted-foreground text-high-contrast">Competitions won</div>
              </div>
              <div className="text-center scroll-slide-right">
                <div className="text-3xl font-bold text-secondary accent-pop">95%</div>
                <div className="text-sm text-muted-foreground text-high-contrast">Success rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;