import { Metadata } from 'next';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import React from 'react';

export const metadata: Metadata = {
  title: 'Experience | Santhi Sowjanya',
};

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Akrivia HCM",
    duration: "Aug 2025 - Present",
    points: [
      "Engineered enterprise HRMS and payroll modules using React.js, TypeScript, and Ember.js.",
      "Built enterprise payroll engine handling salary computation, tax deductions, compliance rules, and automated payslip generation.",
      "Designed RBAC-based access control system supporting multiple user roles and secure enterprise-level permissions.",
      "Reduced redundant API calls by 40% using React Query caching strategies.",
      "Developed reusable component architecture using Tailwind CSS improving development speed by 30%.",
      "Implemented unit testing using Jest and React Testing Library ensuring application stability."
    ],
    icon: <Briefcase className="text-gray-400" size={24} />
  },
  {
    role: "Frontend Developer",
    company: "Atforte Consultancy Services",
    duration: "Dec 2023 - Jul 2025",
    points: [
      "Built scalable CRM platforms handling large datasets with optimized rendering, improving UI responsiveness under heavy data loads.",
      "Developed high-performance dashboards using D3.js, Recharts, and Chart.js for real-time analytics.",
      "Optimized frontend performance for large-scale data visualization and improved load times.",
      "Integrated REST APIs and managed asynchronous data flows efficiently.",
      "Created interactive UI components using D3.js, SVG, and Three.js."
    ],
    icon: <Briefcase className="text-gray-400" size={24} />
  }
];

const achievements = [
  "Reduced API load by 40% using caching and optimization strategies.",
  "Built scalable payroll system handling complex enterprise business logic.",
  "Improved UI development speed by 30% through reusable component design."
];

const education = [
  {
    degree: "B.Tech - Electronics and Communication Engineering",
    school: "Aditya College of Engineering",
    duration: "Jun 2018 - May 2022",
    icon: <GraduationCap className="text-gray-400" size={24} />
  },
  {
    degree: "Intermediate (10+2)",
    school: "Narayana Junior College",
    duration: "Jun 2016 - May 2018",
    icon: <GraduationCap className="text-gray-400" size={24} />
  }
];

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gray-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-64 h-64 bg-gray-600/10 rounded-full blur-[80px] pointer-events-none" />
      
      <h1 className="text-4xl font-bold mb-12 text-white relative z-10 tracking-tight">
        Experience & <span className="text-gray-400">Education</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
            <Briefcase className="text-gray-400" /> Professional Experience
          </h2>
          <div className="space-y-10 border-l border-white/10 ml-3 pl-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[45px] top-0 w-[41px] h-[41px] bg-black border border-white/10 rounded-full flex items-center justify-center">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-gray-400 font-medium my-1">{exp.company}</h4>
                <p className="text-sm text-gray-500 mb-4 font-mono">{exp.duration}</p>
                <ul className="list-disc text-gray-400 space-y-2 ml-4 text-sm leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
           <div>
             <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
              <Award className="text-gray-400" /> Key Achievements
            </h2>
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <ul className="list-disc text-gray-400 space-y-4 ml-4 text-sm leading-relaxed">
                {achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
           </div>

           <div>
             <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3 mt-4">
              <GraduationCap className="text-gray-400" /> Education
            </h2>
            <div className="space-y-8 border-l border-white/10 ml-3 pl-8">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[45px] top-0 w-[41px] h-[41px] bg-black border border-white/10 rounded-full flex items-center justify-center">
                    {edu.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                  <h4 className="text-gray-400 font-medium my-1">{edu.school}</h4>
                  <p className="text-sm text-gray-500 font-mono">{edu.duration}</p>
                </div>
              ))}
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
