import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

const Academics = () => {
  const education = [
    {
      institution: "University of Excellence",
      degree: "Bachelor of Science in Computer Science",
      period: "2022 - Present",
      gpa: "4.0/4.0",
      status: "Current",
      highlights: [
        "Dean's List - All Semesters",
        "Computer Science Honor Society",
        "Outstanding Student Award"
      ]
    },
    {
      institution: "Excellence High School",
      degree: "High School Diploma",
      period: "2018 - 2022",
      gpa: "3.95/4.0",
      status: "Completed",
      highlights: [
        "Valedictorian",
        "National Honor Society",
        "AP Scholar with Distinction"
      ]
    }
  ];

  const courses = [
    { name: "Data Structures & Algorithms", grade: "A+", credits: 4 },
    { name: "Software Engineering", grade: "A", credits: 3 },
    { name: "Database Systems", grade: "A+", credits: 3 },
    { name: "Computer Networks", grade: "A", credits: 3 },
    { name: "Machine Learning", grade: "A-", credits: 4 },
    { name: "Web Development", grade: "A+", credits: 3 },
    { name: "Operating Systems", grade: "A", credits: 4 },
    { name: "Calculus III", grade: "A", credits: 4 }
  ];

  const skills = [
    { name: "Programming", proficiency: 95 },
    { name: "Mathematics", proficiency: 90 },
    { name: "Problem Solving", proficiency: 98 },
    { name: "Research", proficiency: 85 },
    { name: "Technical Writing", proficiency: 88 },
    { name: "Data Analysis", proficiency: 92 }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Academic Record
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My educational journey, achievements, and academic excellence throughout my studies
          </p>
        </div>

        {/* Education Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{edu.institution}</CardTitle>
                      <p className="text-lg text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className="mb-2"
                      >
                        {edu.status}
                      </Badge>
                      <div className="flex flex-col gap-1">
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="font-semibold text-primary">GPA: {edu.gpa}</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Relevant Coursework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Relevant Coursework
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{course.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {course.credits} cr
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{course.grade}</span>
                    <Award className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Academic Skills</h2>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Academic Summary */}
        <div className="p-8 bg-gradient-primary rounded-lg text-primary-foreground">
          <h3 className="text-2xl font-bold mb-6 text-center">Academic Excellence Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">4.0</div>
              <div className="text-primary-foreground/80">Current GPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold">28</div>
              <div className="text-primary-foreground/80">Credits Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold">8</div>
              <div className="text-primary-foreground/80">A+ Grades</div>
            </div>
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-primary-foreground/80">Honor Societies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;