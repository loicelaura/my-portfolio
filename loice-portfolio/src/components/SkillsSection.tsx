import { useState } from "react";


const skills = [
  // Fontend
  {name: "HTML/CSS",level: 95, category: "frontend"},
  {name: "JavaScript",level: 80, category: "frontend"},
  {name: "React",level: 85, category: "frontend"},
  {name: "TypeScript",level: 85, category: "frontend"},
  {name: "Tailwind CSS",level: 85, category: "frontend"},
  {name: "Next.js",level: 80, category: "frontend"},

  // Backend
  {name: "Firebase", level: 80, category: "backend"},
  {name: "RESTful APIs", level: 85, category: "backend"},
  {name: "GraphQL", level: 65, category: "backend"},

  // Mobile
  {name: "React Native", level: 70, category: "mobile"},
  {name: "Expo", level: 70, category: "mobile"},
  {name: "Expo Router", level: 65, category: "mobile"},

   // Tools
  {name: "Git & GitHub", level: 90, category: "tools"},
  {name: "VS Code", level: 95, category: "tools"},
  {name: "NPM / Yarn", level: 85, category: "tools"},
  {name: "Figma", level: 65, category: "tools"},
  {name: "Vercel/Netlify", level: 70, category: "tools"},

]
const categories = ["all", "frontend", "backend", "mobile", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filtered list based on selected category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary hover:bg-primary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mt-2">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};