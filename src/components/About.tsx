import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lovely Professional University",
      icon: GraduationCap,
      status: "Currently Pursuing",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Guru Nanak Dev Engineering College",
      icon: BookOpen,
      status: "Completed",
    },
    {
      degree: "12th (Science)",
      institution: "T.S.S.M Senior Secondary School",
      icon: BookOpen,
      status: "Completed",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">

      {/* Background Blur Effects */}

      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative">

        {/* Section Heading */}

        <div className="text-center mb-16 animate-fade-in">

          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Educational Background &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A passionate journey towards Data Analytics, Data Science,
            Machine Learning, and Software Development. I enjoy solving
            real-world problems using data, building intelligent systems,
            and continuously learning modern technologies.
          </p>

        </div>

        {/* Education Cards */}

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {education.map((item, index) => (

            <Card
              key={index}
              className="p-6 hover-lift group cursor-pointer animate-fade-in border-2 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <div className="flex flex-col items-center text-center space-y-4">

                <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={32} className="text-primary" />
                </div>

                <div className="space-y-2">

                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-xs font-semibold">
                    {item.status}
                  </div>

                  <h3 className="font-bold text-lg leading-tight">
                    {item.degree}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {item.institution}
                  </p>

                </div>

              </div>

            </Card>

          ))}

        </div>

        {/* Personal Strengths */}

        <div className="mt-16 max-w-4xl mx-auto">

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">

            <h3 className="text-2xl font-bold mb-4 text-center">
              Personal Strengths
            </h3>

            <p className="text-muted-foreground leading-relaxed text-center">
              Passionate about Data Analytics and Machine Learning with strong
              analytical thinking and problem-solving skills. Experienced in
              Python, SQL, Power BI, Excel, Machine Learning, and Data
              Visualization. I enjoy analyzing complex datasets, discovering
              valuable insights, and building intelligent solutions that help
              businesses make data-driven decisions. I am a quick learner,
              adaptable, and always eager to explore new technologies and
              real-world challenges.
            </p>

          </Card>

        </div>

      </div>

    </section>
  );
};

export default About;