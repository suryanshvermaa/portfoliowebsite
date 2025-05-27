
import React from 'react';
import { Download, Code, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Passionate Full Stack Developer currently pursuing Electrical Engineering at 
                <span className="font-semibold text-blue-600"> National Institute of Technology Patna</span>. 
                With a strong academic background (CGPA: 8.3), I've developed expertise in modern web technologies 
                and cloud solutions.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Currently working as a Web Developer at <span className="font-semibold text-blue-600">Tesla </span> 
                  and <span className="font-semibold text-blue-600">Hackslash</span>
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                I have solved 220+ problems on LeetCode <br />
                Ranked in the top 5% of NPTEL Joy of Computing using Python.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2" onClick={() => window.open("https://drive.google.com/file/d/16tvACD2uHmADKMQz1iBkpWEquG0eHtYx/","_blank")}>
                  Download Resume
                </button>
                <button className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"onClick={() => window.open("#projects","_self")}>
                  View Projects
                </button>
              </div>
            </div>

            {/* Right Column - Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-600 mb-3">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">220+</h3>
                <p className="text-slate-600">LeetCode Problems Solved</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-600 mb-3">
                  <Zap size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Top 5%</h3>
                <p className="text-slate-600">NPTEL Python Course</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-purple-600 mb-3">
                  <Globe size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">300+</h3>
                <p className="text-slate-600">NPM Package Downloads</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-orange-600 mb-3">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">8.3</h3>
                <p className="text-slate-600">CGPA at NIT Patna</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
