import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, GraduationCap, Users, User } from "lucide-react";

const Home = () => {
  const quickLinks = [
    {
      title: "Academic Record",
      description: "Explore my educational journey",
      icon: GraduationCap,
      path: "/academics",
      gradient: "from-red-500 to-red-700"
    },
    {
      title: "Extracurriculars",
      description: "Discover my activities and involvement",
      icon: Users,
      path: "/extracurriculars",
      gradient: "from-gray-600 to-red-600"
    },
    {
      title: "About Me",
      description: "Get to know me personally",
      icon: User,
      path: "/about",
      gradient: "from-red-600 to-black"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Welcome to Aayush
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover my journey through achievements, academics, and personal growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-primary hover:shadow-red-glow transition-smooth">
                Get to Know Me
              </Button>
            </Link>
            <Link to="/academics">
              <Button variant="outline" size="lg" className="hover:bg-secondary/80 transition-smooth">
                View Academics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Explore My Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Card className="group hover:shadow-elegant transition-smooth cursor-pointer h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                      {link.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.0</div>
              <div className="text-muted-foreground">GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Activities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;