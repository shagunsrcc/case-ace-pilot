import { 
  Brain, 
  Calendar, 
  FileText, 
  MessageSquare, 
  Presentation, 
  TrendingUp, 
  Users2, 
  Zap 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users2,
    title: "Mock Case Interviews",
    description: "Practice with matched partners and get real-time feedback on your performance.",
    color: "text-primary"
  },
  {
    icon: Brain,
    title: "AI Case Deck Evaluator",
    description: "Upload your decks and get instant AI-powered feedback on structure and logic.",
    color: "text-secondary"
  },
  {
    icon: FileText,
    title: "Curated Resource Bank",
    description: "Access frameworks, past winning decks, and cheat sheets from top competitions.",
    color: "text-primary"
  },
  {
    icon: Calendar,
    title: "Competition Calendar",<a 
  href="https://docs.google.com/spreadsheets/d/1_b_IwI9WyYyqkK4a2sxVGcWe-vTwNW-cfo4l-FIgu_E/edit?gid=580001184#gid=580001184"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline mt-2 inline-block"
>
  View Full Competition Calendar
</a>

    description: "Never miss a deadline with our comprehensive corporate case competition tracker.",
    color: "text-secondary"
  },
  {
    icon: TrendingUp,
    title: "Trending Competitions",
    description: "Top 20 trending case competitions on Unstop, updated in real-time.",
    color: "text-primary"
  },
  {
    icon: MessageSquare,
    title: "Case Buddy AI",
    description: "Your personal AI coach that gives feedback on structure, logic, and delivery.",
    color: "text-secondary"
  },
  {
    icon: Presentation,
    title: "Mock Presentation Room",
    description: "Timed, format-ready practice sessions that simulate real competition environments.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Performance Analytics",
    description: "Track your progress and identify areas for improvement with detailed insights.",
    color: "text-secondary"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary mb-6">
            <Zap className="w-4 h-4" />
            Everything you need to dominate
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              prep meets
            </span>{" "}
            performance
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From mock interviews to AI feedback, we've built the complete toolkit 
            that transforms ambitious students into case competition winners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;