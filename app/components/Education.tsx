export default function Education() {
  const education = [
    {
      degree: "Cloud Native AI Engineer (2-Year Program)",
      university: "PIAIC — Presidential Initiative for Artificial Intelligence and Computing",
      date: "(2025 – Present)",
      details: "Focus: Artificial Intelligence, Machine Learning, Deep Learning, Agentic AI, Cloud Computing"
    },
    {
      degree: "BS Chemistry — CGPA 3.37 / 4.0",
      university: "Government College University Faisalabad (GCUF)",
      date: "(2019 – 2023)",
      details: "Core coursework in Organic, Inorganic, Physical & Analytical Chemistry, Biochemistry, and Research Methodology"
    },
    {
      degree: "FSc Pre-Medical — 933 / 1100 (84.8%)",
      university: "Alfalah Grammar Higher Secondary School, Jhumra",
      date: "(2017 – 2019)",
      details: "Biology, Chemistry, Physics"
    },
    {
      degree: "Matriculation — 888 / 1100 (80.7%)",
      university: "Govt. High School 103 JB, Barnala",
      date: "(2014 – 2016)",
      details: "Science Group"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-cardinal mb-1.5 font-normal">Education</h2>
      <div className="w-4 h-[2px] bg-cardinal mb-6"></div>
      <ul className="space-y-5">
        {education.map((edu, index) => (
          <li key={index} className="flex items-start text-[15px] text-[#4d4f53] leading-relaxed">
            <span className="text-cardinal mr-2 text-[10px] mt-[6px]">■</span>
            <div>
              <span className="font-semibold text-[#2e2d29]">{edu.degree}</span>
              <br />
              <span>{edu.university}</span>{' '}
              <span className="text-gray-500">{edu.date}</span>
              {edu.details && (
                <p className="text-[13px] text-gray-500 mt-0.5 italic">{edu.details}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
