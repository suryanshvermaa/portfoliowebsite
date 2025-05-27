
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["C++", "C", "Java", "Python", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "Redis", "GraphQL", "RESTful APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git", "CI/CD"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MongoDB", "Redis", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Git", "Docker", "Kafka", "LangChain", "LangGraph", "Serverless"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Proficiency */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Technical Proficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { skill: "Full Stack Development", level: 90 },
                { skill: "Cloud Architecture", level: 85 },
                { skill: "Database Design", level: 88 },
                { skill: "DevOps & CI/CD", level: 82 },
                { skill: "Problem Solving", level: 95 },
                { skill: "System Design", level: 80 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-700">{item.skill}</span>
                    <span className="text-blue-600 font-semibold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
