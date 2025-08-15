import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Extracurriculars = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const activities = [
    {
      title: "First Racquet",
      role: "Director of Austin Operations",
      period: "2022 - Present",
      type: "Service",
      description: "Lead operations for a nonprofit organization dedicated to helping those less well-off through tennis programs.",
      achievements: [
        "Expanded Austin program reach by 200%",
        "Coordinated with 15+ local facilities",
        "Helped 100+ underprivileged youth access tennis"
      ],
      location: "Austin, TX",
      commitment: "10 hours/month"
    },
    {
      title: "Westwood High School Varsity Tennis",
      role: "Captain",
      period: "2023 - Present",
      type: "Leadership",
      description: "Lead the varsity tennis team as captain while competing at Line 3 position.",
      achievements: [
        "Captain leadership role",
        "Line 3 varsity position",
        "Team leadership and mentoring"
      ],
      location: "Westwood High School",
      commitment: "15 hours/week"
    },
    {
      title: "Westwood High School Varsity Tennis",
      role: "Team Member",
      period: "2023 - Present",
      type: "Sports",
      description: "Compete at Line 3 position on varsity tennis team.",
      achievements: [
        "Line 3 varsity position",
        "Consistent team performance",
        "Athletic dedication"
      ],
      location: "Westwood High School",
      commitment: "15 hours/week"
    },
    {
      title: "Westwood High School Varsity Tennis",
      role: "Team Member",
      period: "2022 - 2023",
      type: "Sports",
      description: "Competed at Line 6 position and won State Championship in sophomore year.",
      achievements: [
        "State Champion (Sophomore year)",
        "Line 6 varsity position",
        "Reached second round of Regionals"
      ],
      location: "Westwood High School",
      commitment: "15 hours/week"
    },
    {
      title: "Round Rock High School Varsity Tennis",
      role: "Team Member",
      period: "2021 - 2022",
      type: "Sports",
      description: "Competed at Line 2 position as a freshman and reached district second round.",
      achievements: [
        "Line 2 varsity position (Freshman year)",
        "Reached district second round",
        "Youngest varsity team member"
      ],
      location: "Round Rock High School",
      commitment: "15 hours/week"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership": return "from-red-500 to-red-700";
      case "Sports": return "from-red-400 to-orange-500";
      case "Academic": return "from-gray-600 to-red-600";
      case "Service": return "from-red-600 to-black";
      default: return "from-gray-600 to-gray-800";
    }
  };

  const types = ["All", "Leadership", "Sports", "Service"];

  const filteredActivities = selectedFilter === "All" 
    ? activities 
    : activities.filter(activity => activity.type === selectedFilter);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Extracurricular Activities
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My involvement in campus life, community service, and leadership development
          </p>
        </div>

        {/* Activity Type Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {types.map((type) => (
            <Badge 
              key={type} 
              variant={selectedFilter === type ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary/80 transition-smooth"
              onClick={() => setSelectedFilter(type)}
            >
              {type}
            </Badge>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="space-y-6 mb-16">
          {filteredActivities.map((activity, index) => (
            <Card key={index} className="hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getTypeColor(activity.type)}`}></div>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-1">{activity.title}</CardTitle>
                    <p className="text-lg font-medium text-primary">{activity.role}</p>
                  </div>
                  
                  <div className="lg:text-right space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{activity.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{activity.commitment}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{activity.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {activity.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="p-8 bg-gradient-primary rounded-lg text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6 text-center">Impact Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">4</div>
              <div className="text-primary-foreground/80">Years Varsity Tennis</div>
            </div>
            <div>
              <div className="text-3xl font-bold">2</div>
              <div className="text-primary-foreground/80">Leadership Positions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-primary-foreground/80">Hours/Month</div>
            </div>
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-primary-foreground/80">Youth Helped</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;