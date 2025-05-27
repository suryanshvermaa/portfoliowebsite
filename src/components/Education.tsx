
import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "National Institute of Technology Patna, Bihar",
      degree: "Electrical Engineering",
      duration: "2023 - 2027",
      grade: "CGPA: 8.3",
      type: "Bachelor's Degree",
      icon: "🎓"
    },
    {
      institution: "Pt. Deen Dayal Upadhyay SVM Inter College, Lakhimpur Kheri",
      degree: "UP Board (Class XII)",
      duration: "2021 - 2022",
      grade: "Percentage: 82.8",
      type: "Higher Secondary",
      icon: "📚"
    },
    {
      institution: "Pt. Deen Dayal Upadhyay SVM Inter College, Lakhimpur Kheri",
      degree: "UP Board (Class X)",
      duration: "2019 - 2020",
      grade: "Percentage: 86.17",
      type: "Secondary",
      icon: "📖"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
              My academic journey showcasing consistent performance and dedication to learning
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full"></div>
            
            {educationData.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="bg-slate-50 hover:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{item.degree}</h3>
                    <p className="text-slate-600 mb-3 font-medium">{item.institution}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={16} />
                        <span className="font-semibold text-green-600">{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Stack */}
          <div className="md:hidden space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="bg-slate-50 hover:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{item.icon}</span>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.degree}</h3>
                <p className="text-slate-600 mb-3 font-medium">{item.institution}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award size={16} />
                    <span className="font-semibold text-green-600">{item.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
