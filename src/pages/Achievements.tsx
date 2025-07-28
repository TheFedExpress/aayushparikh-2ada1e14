import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Academic Excellence Award",
      category: "Academic",
      year: "2024",
      description: "Recognized for maintaining a 5.75 GPA throughout the academic year",
      icon: Trophy,
      color: "from-red-400 to-orange-500"
    },
    {
      title: "Leadership Excellence",
      category: "Leadership",
      year: "2023",
      description: "Led student council initiatives that improved campus life for 2000+ students",
      icon: Star,
      color: "from-red-500 to-red-700"
    },
    {
      title: "Community Service Recognition",
      category: "Service",
      year: "2023",
      description: "Completed 200+ hours of community service in local education programs",
      icon: Award,
      color: "from-gray-600 to-red-600"
    },
    {
      title: "Science Fair Winner",
      category: "Academic",
      year: "2023",
      description: "First place in regional science competition for innovative research project",
      icon: Medal,
      color: "from-red-600 to-black"
    },
    {
      title: "Athletic Achievement",
      category: "Sports",
      year: "2022",
      description: "Team captain and MVP for varsity basketball team",
      icon: Trophy,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Scholarship Recipient",
      category: "Academic",
      year: "2022",
      description: "Awarded merit-based scholarship for academic excellence",
      icon: Award,
      color: "from-gray-700 to-red-800"
    }
  ];

  const categories = ["All", "Academic", "Leadership", "Service", "Sports"];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            My Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of recognitions, awards, and milestones that represent my dedication and hard work
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary/80 transition-smooth"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">
                      {achievement.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {achievement.year}
                    </div>
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-smooth">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 p-8 bg-gradient-primary rounded-lg text-primary-foreground">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Achievement Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-3xl font-bold">{achievements.length}</div>
                <div className="text-primary-foreground/80">Total Awards</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4</div>
                <div className="text-primary-foreground/80">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">3</div>
                <div className="text-primary-foreground/80">Years Active</div>
              </div>
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-primary-foreground/80">Service Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;