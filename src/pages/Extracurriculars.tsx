import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Clock } from "lucide-react";

const Extracurriculars = () => {
  const activities = [
    {
      title: "Student Government",
      role: "President",
      period: "2023 - Present",
      type: "Leadership",
      description: "Lead student body initiatives, organize campus events, and represent student interests to administration.",
      achievements: [
        "Increased student participation by 40%",
        "Launched mental health awareness campaign",
        "Secured $50K budget for student activities"
      ],
      location: "University Campus",
      commitment: "15 hours/week"
    },
    {
      title: "Varsity Basketball Team",
      role: "Team Captain",
      period: "2021 - Present",
      type: "Sports",
      description: "Compete at the collegiate level while maintaining academic excellence and leading team development.",
      achievements: [
        "Led team to conference championship",
        "Awarded MVP for 2023 season",
        "Mentored 10+ junior players"
      ],
      location: "Athletic Center",
      commitment: "20 hours/week"
    },
    {
      title: "Coding Club",
      role: "Vice President",
      period: "2022 - Present",
      type: "Academic",
      description: "Organize coding competitions, workshops, and hackathons to promote programming skills on campus.",
      achievements: [
        "Organized 3 successful hackathons",
        "Increased membership to 150+ students",
        "Partnered with tech companies for mentorship"
      ],
      location: "Computer Science Building",
      commitment: "8 hours/week"
    },
    {
      title: "Community Tutoring Program",
      role: "Volunteer Tutor",
      period: "2022 - Present",
      type: "Service",
      description: "Provide free tutoring in mathematics and computer science to underprivileged high school students.",
      achievements: [
        "Tutored 25+ students",
        "Improved student grades by average 1.5 points",
        "Developed online learning resources"
      ],
      location: "Local Community Center",
      commitment: "6 hours/week"
    },
    {
      title: "Environmental Club",
      role: "Sustainability Coordinator",
      period: "2021 - 2023",
      type: "Service",
      description: "Organized campus sustainability initiatives and environmental awareness campaigns.",
      achievements: [
        "Reduced campus waste by 30%",
        "Planted 200+ trees on campus",
        "Initiated campus recycling program"
      ],
      location: "Campus Wide",
      commitment: "5 hours/week"
    },
    {
      title: "Debate Society",
      role: "Active Member",
      period: "2021 - 2022",
      type: "Academic",
      description: "Participated in competitive debates and developed public speaking and critical thinking skills.",
      achievements: [
        "Won regional debate championship",
        "Represented university at nationals",
        "Improved public speaking rating to 9.5/10"
      ],
      location: "Student Union",
      commitment: "4 hours/week"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Leadership": return "from-purple-400 to-blue-500";
      case "Sports": return "from-red-400 to-orange-500";
      case "Academic": return "from-blue-400 to-cyan-500";
      case "Service": return "from-green-400 to-teal-500";
      default: return "from-gray-400 to-gray-500";
    }
  };

  const types = ["All", "Leadership", "Sports", "Academic", "Service"];

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
              variant={type === "All" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary/80 transition-smooth"
            >
              {type}
            </Badge>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="space-y-6 mb-16">
          {activities.map((activity, index) => (
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
              <div className="text-3xl font-bold">6</div>
              <div className="text-primary-foreground/80">Active Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-primary-foreground/80">Leadership Positions</div>
            </div>
            <div>
              <div className="text-3xl font-bold">58+</div>
              <div className="text-primary-foreground/80">Hours/Week</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-foreground/80">People Impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extracurriculars;