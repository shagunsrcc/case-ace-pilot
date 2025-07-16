import { ArrowRight, Sparkles, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-float delay-1000">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float delay-2000">
        <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Users className="w-7 h-7 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-primary">
                <Sparkles className="w-4 h-4" />
                Your unfair edge for every case comp
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Win{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  smarter
                </span>
                ,<br />
                not harder
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                The AI-powered co-pilot for case competitions. Practice, prepare, and perform with the structure and edge that top-tier students trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group shadow-medium hover:shadow-strong transition-all duration-300">
                Start winning today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                See how it works
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Students prepping</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Competitions won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in delay-300">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Case competition success illustration" 
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            
            {/* Background blur effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;