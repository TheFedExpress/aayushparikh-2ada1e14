import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Coffee, Music, Camera, Book, Gamepad2 } from "lucide-react";

const About = () => {
  const personalInfo = {
    name: "Aayush Parikh",
    tagline: "Student passionate about Computer Engineering, technology, and tennis",
    description: `Hi there! I'm Aayush, a student who is looking to go into Computer Engineering. I have a passion for technology, sports, and getting things done. When I'm not studying, you can find me on the tennis court.

    I believe in the power of innovation, continuous learning, and using technology to solve real-world problems. My goal is to combine my technical skills with my leadership experience to make a meaningful impact.`,
    location: "Austin, TX",
    interests: [
      { name: "Technology", icon: Gamepad2, description: "Following phone-related news and emerging tech trends" },
      { name: "Photography", icon: Camera, description: "Capturing moments and telling stories through visual art" },
      { name: "Music", icon: Music, description: "Playing piano and violin, discovering new artists across genres" },
      { name: "Reading", icon: Book, description: "Diving into dystopian novels and mystery books" },
      { name: "Coffee", icon: Coffee, description: "Exploring different brewing methods and perfecting the craft" },
      { name: "Volunteering", icon: Heart, description: "Giving back to the community through service and mentorship" }
    ]
  };

  const values = [
    {
      title: "Innovation",
      description: "Always looking for creative solutions to complex problems"
    },
    {
      title: "Integrity",
      description: "Committed to doing the right thing, even when it's difficult"
    },
    {
      title: "Growth",
      description: "Continuously learning and challenging myself to improve"
    },
    {
      title: "Community",
      description: "Believing in the power of collaboration and giving back"
    }
  ];

  const funFacts = [
    "Can solve a Rubik's cube in under a minute",
    "Has visited 5 different continents", 
    "Maintains a 5.75 GPA while playing varsity tennis",
    "Fluent in 2 programming languages and 2 spoken languages",
    "Black belt in taekwondo",
    "State champion in tennis (sophomore year)"
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get to Know Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond the achievements and academics - here's who I really am
          </p>
        </div>

        {/* Personal Introduction */}
        <section className="mb-16">
          <Card className="p-8 hover:shadow-elegant transition-smooth">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
              <p className="text-xl text-primary mb-4">{personalInfo.tagline}</p>
              <Badge variant="outline" className="mb-6">
                📍 {personalInfo.location}
              </Badge>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {personalInfo.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </Card>
        </section>

        {/* Interests & Hobbies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What I Love Doing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.interests.map((interest, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-smooth">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-accent flex items-center justify-center group-hover:scale-110 transition-smooth shadow-red-glow">
                    <interest.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-smooth">
                    {interest.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">My Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-elegant transition-smooth">
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Fun Facts About Me</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 mt-1 shadow-red-glow">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-muted-foreground">{fact}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Contact/Connect */}
        <div className="text-center p-8 bg-gradient-primary rounded-lg text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
          <p className="text-lg mb-6 text-primary-foreground/90">
            I'd love to hear from you. Whether it's about opportunities, collaborations, or just to say hello!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              📧 alex.johnson@university.edu
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              💼 LinkedIn: /in/alexjohnson
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              🐙 GitHub: @alexjohnson
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;