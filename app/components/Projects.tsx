export default function Projects() {
  const researchInterests = [
    {
      title: "AI-Driven Drug Discovery & Molecular Property Prediction",
      description: "Applying deep learning models (GNNs, Transformers) to predict molecular properties, toxicity profiles, and drug-target interactions for accelerated pharmaceutical development."
    },
    {
      title: "Computational Chemistry & Cheminformatics",
      description: "Leveraging machine learning for molecular simulation, reaction prediction, and materials discovery — bridging classical chemistry with modern AI."
    },
    {
      title: "AI for Public Health & Epidemiology",
      description: "Developing predictive models for disease surveillance, health outcome forecasting, and resource allocation in underserved communities using multi-agent AI systems."
    },
    {
      title: "Agentic AI for Scientific Research Automation",
      description: "Building autonomous AI agents that can design experiments, analyze results, and generate hypotheses — accelerating the scientific discovery pipeline."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-cardinal mb-1.5 font-normal">Research Interests</h2>
      <div className="w-4 h-[2px] bg-cardinal mb-6"></div>
      <ul className="space-y-4">
        {researchInterests.map((interest, index) => (
          <li key={index} className="flex items-start text-[15px] text-[#4d4f53] leading-relaxed">
            <span className="text-cardinal mr-2 text-[10px] mt-[6px]">■</span>
            <div>
              <span className="font-semibold text-[#2e2d29]">{interest.title}</span>
              <p className="text-[13px] text-gray-500 mt-1">{interest.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
