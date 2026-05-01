export default function Experience() {
  const certifications = [
    {
      title: "LangGraph — Certificate of Completion",
      issuer: "LangChain Academy",
      detail: "Building stateful, multi-step AI agents with graph-based orchestration"
    },
    {
      title: "Introduction to AI — Certificate of Completion",
      issuer: "Online Certification",
      detail: "Foundational concepts in artificial intelligence, search algorithms, and knowledge representation"
    },
    {
      title: "Multi-Agent Systems Course — Certificate of Completion",
      issuer: "Online Certification",
      detail: "Design and implementation of cooperative and competitive multi-agent architectures"
    },
    {
      title: "Mathematics for Machine Learning",
      issuer: "Online Certification",
      detail: "Linear algebra, calculus, probability, and statistics for ML foundations"
    },
    {
      title: "Introduction to ChatGPT and Generative AI",
      issuer: "Online Certification",
      detail: "Transformer architectures, prompt engineering, and LLM application development"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-cardinal mb-1.5 font-normal">Certifications &amp; Courses</h2>
      <div className="w-4 h-[2px] bg-cardinal mb-6"></div>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-start text-[15px] text-[#4d4f53] leading-relaxed">
            <span className="text-cardinal mr-2 text-[10px] mt-[6px]">■</span>
            <div>
              <span className="font-semibold text-[#2e2d29]">{cert.title}</span>
              <br />
              <span className="text-gray-500 text-[13px]">{cert.issuer}</span>
              <p className="text-[13px] text-gray-500 mt-0.5 italic">{cert.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
