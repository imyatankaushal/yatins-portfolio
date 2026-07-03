import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yatan-kaushal/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/imyatankaushal",
      label: "GitHub",
    },
    {
      icon: Mail,
      href: "mailto:yatinsharma3913@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 px-4 border-t bg-muted/30">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Side */}

          <div className="text-center md:text-left">

            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Yatan Kaushal
            </h3>

            <p className="text-muted-foreground mt-2">
              Data Analyst | Machine Learning Enthusiast
            </p>

          </div>

          {/* Social Icons */}

          <div className="flex gap-4">

            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2 border-border hover:border-primary hover:scale-110"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">

          <p>
            © {currentYear} Yatan Kaushal. All Rights Reserved.
          </p>

          <p className="mt-2">
            Designed & Developed by <strong>Yatan Kaushal</strong> using React,
            TypeScript & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;