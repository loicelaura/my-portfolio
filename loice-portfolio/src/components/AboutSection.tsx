import { Briefcase, User, Code } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {''}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Bridging Commerce and Code
            </h3>

            <p className="text-muted-foreground">
              I'm a frontend developer with a unique background that blends
              technical proficiency with a strong understanding of business
              operations. With a Bachelor of Commerce in Procurement and
              hands-on experience as a Technical & Administrative Specialist, I
              approach development with a holistic perspective. My expertise
              lies in building responsive and dynamic user interfaces using
              modern web technologies like React, JavaScript, and Tailwind CSS.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating efficient and elegant solutions that
              not only look great but also solve real-world problems. My journey
              from commerce to code gives me a distinctive edge in creating web
              applications that are both technically robust and strategically
              aligned with business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="Okello-Loice CV.pdf"
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building modern, responsive, and dynamic applications with React,
                    JavaScript, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Interface</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user experiences with a focus on usability,
                    accessibility, and aesthetics.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Business & Strategy</h4>
                  <p className="text-muted-foreground">
                    Leveraging a commerce background to align development
                    solutions with real business objectives.
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
