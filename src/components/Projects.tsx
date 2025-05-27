
import React from 'react';
import { Github, ExternalLink, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SCS: Cloud Platform",
      description: "Developed a full-stack cloud platform for static website hosting and video transcoding, serving 100+ users. Implemented dynamic container orchestration using AWS ECS and Docker, reducing video processing time by 20%.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Docker"],
      date: "July 2024",
      type: "Full Stack Application",
      github: "https://github.com/suryanshvermaa/scsCloud.git",
      demo: "https://www.linkedin.com/posts/suryanshverma_hey-everyone-i-have-built-my-own-cloud-activity-7223887573729865728-MDNM?utm_source=share&utm_medium=member_android&rcm=ACoAAEZArMoBEv23-MFA49YkPs2pDUKE-UgvhEw",
      highlights: [
        "Served 100+ users with scalable architecture",
        "20% reduction in video processing time",
        "Integrated Cashfree payment gateway"
      ]
    },
    {
      title: "Two-Tier Node.JS and MongoDB App Deployment",
      description: "Developed and deployed a Node.JS and MongoDB application, resulting in a 20% increase in response time. Migrated application to AWS EKS using eksctl, improving fault tolerance by 15%.",
      techStack: ["Node.js", "MongoDB", "Docker", "Kubernetes", "AWS EKS"],
      date: "May 2025",
      type: "DevOps Project",
      github: "https://github.com/suryanshvermaa/Two-Tier-Nodejs-MongoDb-App-deployment.git",
      demo: "#",
      highlights: [
        "20% increase in response time",
        "15% improvement in fault tolerance",
        "Implemented load balancing across multi-node EKS cluster"
      ]
    },
    {
      title: "Byteverse Website",
      description: "Built Byteverse Website (Next.js, Framer Motion) increasing user engagement by 10% via animations. Ensured responsive design & optimized website performance (90% Lighthouse score) across all devices.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      date: "Ongoing",
      type: "Frontend Application",
      github: "https://github.com/HackSlashNITP/Byteverse-25.git",
      demo: "https://byteverse2k25.vercel.app/",
      highlights: [
        "10% increase in user engagement",
        "90% Lighthouse performance score",
        "Responsive design optimization"
      ]
    },
    {
      title: "create-express-mongo-prod",
      description: "Developed and published create-express-mongo-prod to npm, automating Express/MongoDB projects setup with ESLint, Prettier, Docker, and error handling, resulting in 300+ downloads within first month.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Docker", "NPM"],
      date: "Published",
      type: "CLI Tool",
      github: "https://github.com/suryanshvermaa/create-express-mongo-prod.git",
      demo: "https://www.npmjs.com/package/create-express-mongo-prod",
      highlights: [
        "300+ downloads in first month",
        "Automated project setup",
        "Comprehensive error handling"
      ]
    },
    {
      title: "JWT Authentication Middleware",
      description: "Built jwt-auth-pack a TypeScript compatible JWT authentication middleware for express js, featuring customizable token creation/verification and environment based security key management.",
      techStack: ["TypeScript", "Express.js", "JWT", "Node.js"],
      date: "Published",
      type: "NPM Package",
      github: "https://github.com/suryanshvermaa/jwt-auth-pack.git",
      demo: "https://www.npmjs.com/package/jwt-auth-pack",
      highlights: [
        "TypeScript compatible",
        "Customizable token management",
        "Sub-millisecond authentication latency"
      ]
    },
    {
      title: "Hackslash Official Website",
      description: "Developed Hackslash official website's Team page (Next.js, Tailwind CSS) decreasing navigation bounce rate by 15%. Organized 1000+ participant Byteverse National Hackathon under Hackslash.",
      techStack: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
      date: "Current",
      type: "Website Development",
      github: "https://github.com/HackSlashNITP/hackslash-official-site.git",
      demo: "https://hackslashnitp.vercel.app/",
      highlights: [
        "15% decrease in bounce rate",
        "1000+ hackathon participants",
        "Optimized navigation experience"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white delay-450 scroll-smooth">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              A showcase of my work in full-stack development, cloud architecture, and open-source contributions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200">
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {project.type}
                        </span>
                        <div className="flex items-center text-slate-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 p-2 mb-2">{project.title}</h3>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <a
                        href={project.github}
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                        aria-label="View GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 py-4 bg-slate-100 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Code size={16} className="mr-2" />
                      <span>{project.techStack.length} Technologies</span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"onClick={() => window.open("https://github.com/suryanshvermaa?tab=repositories", "_blank")}>
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
