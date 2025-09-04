import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Daily Activity Planner',
    image: '/projects/project1.png',
    tags: ['React', 'Vite', 'Tailwind'],
    demoUrl: 'https://vercel.com/loice-okellos-projects/daily-activity-planner',
    githubUrl: 'https://github.com/loicelaura/LOICE-capstone-project',
    description:
      'A web app for planning daily activities, setting goals, and managing tasks.',
  },
  {
    id: 2,
    title: 'Daily Activity Planner',
    image: '/projects/project2.png',
    tags: ['React', 'Vite', 'Tailwind'],
    demoUrl: 'https://vercel.com/loice-okellos-projects/daily-activity-planner',
    githubUrl: 'https://github.com/loicelaura/LOICE-capstone-project',
    description:
      'Another version of my daily planner showcasing UI improvements.',
  },
  {
    id: 3,
    title: 'Mobile-App',
    image: '/projects/project3.png',
    tags: ['React Native', 'Expo Go', 'Tailwind'],
    githubUrl: 'https://github.com/loicelaura/prodev-mobile-setup',
    description: 'Mobile app setup project using Expo and Tailwind.',
  },
  {
    id: 4,
    title: 'Mobile-App',
    image: '/projects/project4.png',
    tags: ['React Native', 'Expo Go', 'Tailwind'],
    githubUrl: 'https://github.com/loicelaura/prodev-mobile-app',
    description: 'Another mobile app built with React Native and Expo.',
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank"
          href="https://github.com/loicelaura"
          
          >
            Check My Github <ArrowRight size={16} />
          </a>

        </div>
      </div>
    </section>
  );
};
