import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";
import profileImage from "@/assets/yatan-profile.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >

            <div>

              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
                👋 Welcome to My Portfolio
              </span>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text animate-gradient">
                  Yatan Kaushal
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-4">
                Data Analyst | Machine Learning Enthusiast
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-8">
                Master of Computer Applications (MCA) student at
                <strong> Lovely Professional University</strong> with a strong
                interest in Data Analytics, Machine Learning, Business
                Intelligence, and Software Development.
              </p>

              <p className="text-lg text-muted-foreground mt-5 leading-8">
                I enjoy transforming raw data into meaningful insights using
                <strong> Python</strong>,
                <strong> SQL</strong>,
                <strong> Power BI</strong>,
                <strong> Excel</strong>, and
                <strong> Machine Learning</strong>. I love building
                real-world applications that solve practical business
                problems through data.
              </p>

            </div>

            {/* Skills */}

            <div className="flex flex-wrap gap-3">

              {[
                "Python",
                "SQL",
                "Power BI",
                "Excel",
                "Machine Learning",
                "React",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {skill}
                </span>
              ))}

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Button
                size="lg"
                className="group shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Projects

                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2" size={20} />
                Let's Connect
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  window.open("/YatanKaushal_CV.pdf", "_blank")
                }
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>

            </div>

          </div>

          {/* Right Content */}

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >

            <div className="relative w-full max-w-md mx-auto">

              <div className="absolute -top-5 -left-5 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />

              <div
                className="absolute -bottom-5 -right-5 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              <div className="relative z-10">

                <div className="rounded-full overflow-hidden border-8 border-background shadow-2xl hover:scale-105 transition duration-500">

                  <img
                    src={profileImage}
                    alt="Yatan Kaushal"
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card px-6 py-3 rounded-full shadow-xl border">

                  <p className="flex items-center gap-2 font-semibold">

                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>

                    Available for Data Analyst Internships

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;