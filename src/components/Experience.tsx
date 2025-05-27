
import React from 'react';
import { Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Tesla",
      role: "Web Developer",
      duration: "March 2024 - Present",
      location: "Remote",
      type: "Full-time",
      logo: "🚗",
      responsibilities: [
        "Automated event mails workflows using (NodeJS, Nodemailer) improving communication efficiency by 15%",
        "Organized multiple technical events, boosting member participation by 25% and fostering peer leadership",
        "Coordinated and organized multiple technical events, boosting member engagement and fostering a collaborative community",
        "Collaborated with the design team as a part of web team to deliver polished user-friendly club projects and initiatives"
      ],
      achievements: [
        "15% improvement in communication efficiency",
        "25% boost in member participation",
        "Led multiple technical initiatives"
      ]
    },
    {
      company: "Hackslash",
      role: "Web Developer",
      duration: "May 2024 - Present", 
      location: "NIT Patna",
      type: "Part-time",
      logo: "⚡",
      responsibilities: [
        "Developed Hackslash official website's Team page (Next.js, Tailwind CSS) decreasing navigation bounce rate by 15%",
        "Organized 1000+ participant Byteverse National Hackathon under Hackslash",
        "Build Byteverse Website (Next.js, Framer Motion) increasing user engagement by 10% via animations",
        "Ensured responsive design & optimized website performance (90% Lighthouse score) across all devices"
      ],
      achievements: [
        "15% decrease in navigation bounce rate",
        "1000+ participant hackathon organization",
        "90% Lighthouse performance score"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              Building innovative solutions and leading technical initiatives across multiple organizations
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200">
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">{exp.role}</h3>
                        <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase size={16} />
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Current
                      </span>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Responsibilities */}
                    <div className="md:col-span-2">
                      <h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <Briefcase size={18} className="text-blue-600" />
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-slate-600 flex items-start">
                            <span className="text-blue-500 mr-3 mt-2 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <TrendingUp size={18} className="text-green-600" />
                        Key Achievements
                      </h5>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="bg-green-50 p-3 rounded-lg border border-green-200">
                            <span className="text-green-800 text-sm font-medium">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                I'm always interested in challenging roles that allow me to work with cutting-edge technologies 
                and make a meaningful impact. Feel free to reach out!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
