import { Metadata } from 'next';
import { ExternalLink, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Santhi Sowjanya',
};

const projects = [
  {
    title: "HRMS & Payroll Management System",
    description: "Engineered a scalable payroll system handling salary structures, deductions, and compliance logic. Designed RBAC-based secure architecture for multi-role environments and automated payroll workflows.",
    tech: ["React.js", "TypeScript", "Ember.js", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Advanced Data Visualization Dashboard",
    description: "Built high-performance dashboards visualizing large datasets (10k+ records) with optimized rendering performance improving responsiveness for real-time analytics.",
    tech: ["React.js", "D3.js", "Recharts", "Chart.js"],
    link: "#"
  },
  {
    title: "3D Interactive Web Application",
    description: "Developed immersive 3D user interfaces integrating rich interactive animations into standard web architectures.",
    tech: ["Three.js", "React Three Fiber", "D3.js"],
    link: "#"
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <h1 className="text-4xl font-bold mb-4 text-white relative z-10 tracking-tight">
        Featured <span className="text-gray-400">Projects</span>
      </h1>
      <p className="text-gray-400 mb-12 max-w-2xl text-lg relative z-10 leading-relaxed">
        Here are some of the key projects I have built, showcasing my expertise in enterprise systems and advanced web visualizations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-black/60 border border-white/5 rounded-2xl p-6 hover:border-gray-500/50 transition-all duration-300 group flex flex-col items-start backdrop-blur-md hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">{project.title}</h3>
            <p className="text-gray-400 mb-6 flex-grow leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-white/5 text-gray-300 text-xs font-mono rounded-full border border-white/5">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                <Code2 size={20} />
              </a>
              <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
