import { Code2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript / TypeScript", "Go", "C++", "Java", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Next.js", "Node.js", "PyTorch", "TensorFlow", "Tailwind CSS"]
    },
    {
      title: "Tools & Infrastructure",
      skills: ["Git", "Docker", "Kubernetes", "AWS", "GCP", "CI/CD"]
    },
    {
      title: "Concepts",
      skills: ["Distributed Systems", "Machine Learning", "System Design", "Agile Methodologies", "Data Structures", "Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto bg-stone-50 rounded-3xl my-12">
      <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 border-b border-gray-200 pb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stanford-black flex items-center gap-3">
          <Code2 className="text-cardinal" size={32} />
          Technical Skills
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-stanford-black mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-stone-50 border border-gray-200 text-stanford-black rounded-lg text-sm font-medium hover:border-cardinal/30 hover:bg-cardinal/5 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
