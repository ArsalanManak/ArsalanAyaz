export default function SOPContent() {
  return (
    <article className="max-w-[800px]">
      
      {/* Applicant Info Block */}
      <div className="mb-10 pb-8 border-b border-gray-200">
        <div className="grid grid-cols-[120px_1fr] gap-y-1.5 text-[14px] text-[#4d4f53]">
          <span className="font-semibold text-[#2e2d29]">Applicant:</span>
          <span>Arsalan Ayaz</span>
          <span className="font-semibold text-[#2e2d29]">Program:</span>
          <span>Master&apos;s Program — AI for Medicine &amp; Public Health</span>
          <span className="font-semibold text-[#2e2d29]">Email:</span>
          <a href="mailto:arsalanayaz821@gmail.com" className="text-cardinal hover:underline">arsalanayaz821@gmail.com</a>
          <span className="font-semibold text-[#2e2d29]">Location:</span>
          <span>Faisalabad, Punjab, Pakistan</span>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">Introduction</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          The convergence of artificial intelligence and the life sciences represents one of the most transformative frontiers 
          of our time. As a Chemistry graduate with advanced training in AI and Machine Learning, I am uniquely positioned 
          to contribute to this frontier. My goal is to pursue a fully funded Master&apos;s program where I 
          can leverage my interdisciplinary background to advance AI-driven solutions for medicine and public health — 
          particularly for underserved populations in the developing world.
        </p>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85]">
          I am drawn to institutions that foster a deeply collaborative culture transcending disciplinary boundaries, 
          with a commitment to using technology for global impact. This aligns precisely with my aspiration: to bridge 
          computational innovation with real-world health outcomes.
        </p>
      </section>

      {/* Section 2: Academic Background */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">Academic Background</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          I completed my Bachelor of Science in Chemistry from Government College University Faisalabad (GCUF) with a 
          CGPA of 3.37/4.0 in 2023. My undergraduate education provided me with a rigorous foundation in organic, 
          inorganic, physical, and analytical chemistry, as well as biochemistry and research methodology. This 
          scientific training instilled in me a systematic approach to problem-solving and a deep appreciation for 
          the molecular basis of biological processes.
        </p>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          My pre-medical background (FSc with 84.8%) further sharpened my understanding of biology and the human body, 
          establishing an intuitive connection between chemistry, biology, and medicine that continues to inform my 
          research perspective.
        </p>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85]">
          Recognizing the transformative potential of artificial intelligence in the sciences, I enrolled in the 
          two-year <strong>Cloud Native AI Engineer</strong> program offered by <strong>PIAIC</strong> (Presidential Initiative for Artificial 
          Intelligence and Computing) — a government-backed initiative to cultivate Pakistan&apos;s next generation of 
          AI professionals. Through this intensive program, I have developed strong competencies in:
        </p>
        <ul className="mt-3 space-y-1.5 ml-6">
          {[
            "Artificial Intelligence — foundational theory, search algorithms, knowledge representation",
            "Machine Learning — supervised, unsupervised, and reinforcement learning paradigms",
            "Deep Learning — convolutional and recurrent networks, transformers, generative models",
            "Agentic AI — autonomous multi-agent systems, LangGraph-based orchestration, tool-using agents",
            "Cloud Computing — scalable deployment of AI systems in production environments"
          ].map((item, i) => (
            <li key={i} className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
              <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 3: Research Vision */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">Research Vision &amp; Motivation</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          My research vision lies at the intersection of <strong>computational chemistry, AI, and public health</strong>. 
          I am motivated by a fundamental question: <em>How can we use artificial intelligence to make healthcare more 
          accessible, affordable, and effective — especially in regions where resources are scarce?</em>
        </p>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          Growing up in Faisalabad, Pakistan, I witnessed firsthand the gap between scientific advancement and 
          healthcare delivery. While cutting-edge drug discoveries are being made in world-class laboratories, 
          communities in South Asia, Sub-Saharan Africa, and other developing regions often lack access to even 
          basic diagnostic tools. This disparity is not merely a resource problem — it is an intelligence and 
          information problem that AI can help solve.
        </p>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85]">
          I envision contributing to the following research directions during my Master&apos;s studies:
        </p>
        <ul className="mt-3 space-y-3 ml-6">
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>AI-Driven Drug Discovery:</strong> Using graph neural networks and transformer architectures to 
              predict molecular properties, model drug-target interactions, and identify promising therapeutic compounds 
              for neglected tropical diseases.
            </div>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>Predictive Public Health Analytics:</strong> Developing multi-agent AI systems that can forecast 
              disease outbreaks, optimize resource allocation, and support evidence-based health policy decisions at scale.
            </div>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>Autonomous Scientific Discovery:</strong> Building agentic AI systems that can autonomously design 
              chemistry experiments, analyze spectral data, and generate novel hypotheses — dramatically accelerating the 
              pace of scientific research.
            </div>
          </li>
        </ul>
      </section>

      {/* Section 4: Why Graduate Studies */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">Why a Master&apos;s Program?</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          I am seeking a Master&apos;s program that offers the following, which are essential to my growth as a researcher:
        </p>
        <ul className="space-y-3 ml-6 mb-4">
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>Interdisciplinary Culture:</strong> An environment that encourages collaboration across 
              departments — from medicine and chemistry to computer science and AI research. This is exactly the 
              setting I need to synthesize my chemistry background with cutting-edge AI research.
            </div>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>World-Class Faculty &amp; Mentorship:</strong> Access to researchers leading exciting work 
              in AI for science — from molecular machine learning to health informatics. I am eager to learn from and 
              contribute to such an ecosystem.
            </div>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>Global Impact Orientation:</strong> A research culture that emphasizes translating discoveries into societal 
              impact resonates deeply with my personal mission. I want my research to not only advance scientific 
              knowledge but also improve lives — particularly in communities that are often excluded from the benefits 
              of technological progress.
            </div>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <div>
              <strong>Scholarship Support:</strong> As a student from Pakistan, a fully funded scholarship is not merely 
              a preference — it is a necessity. I deeply value institutions that are committed to supporting talented 
              students from diverse backgrounds and ensuring that financial constraints do not limit intellectual potential.
            </div>
          </li>
        </ul>
      </section>

      {/* Section 5: What I Bring */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">What I Bring</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          I bring a rare combination of competencies to any Master&apos;s research program:
        </p>
        <ul className="space-y-2 ml-6 mb-4">
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>A <strong>strong scientific foundation</strong> in chemistry and the biological sciences</span>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span><strong>Advanced AI/ML engineering skills</strong> gained through the nationally recognized PIAIC program</span>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>Specialized training in <strong>agentic AI</strong> and multi-agent systems — one of the most rapidly advancing areas in AI</span>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>A <strong>deep personal motivation</strong> to use technology for public health in underserved communities</span>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>A <strong>diverse perspective</strong> as a Pakistani student who understands the healthcare challenges of the developing world</span>
          </li>
        </ul>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85]">
          I am confident that my interdisciplinary profile — one that seamlessly integrates chemistry, AI, and a 
          passion for global health — will enable me to make meaningful contributions to any research community 
          and, ultimately, to the world.
        </p>
      </section>

      {/* Section 6: Long-Term Goals */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">Long-Term Goals</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          Upon completing my Master&apos;s studies, I aspire to:
        </p>
        <ul className="space-y-2 ml-6 mb-4">
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>Establish an <strong>AI for Health</strong> research lab that focuses on developing affordable, deployable AI 
            diagnostics for low-resource healthcare settings</span>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>Contribute to <strong>open-source AI tools</strong> for drug discovery and molecular analysis, making cutting-edge 
            computational chemistry accessible to researchers worldwide</span>
          </li>
          <li className="text-[#4d4f53] text-[14px] leading-relaxed flex items-start">
            <span className="text-cardinal mr-2 text-[10px] mt-[5px]">■</span>
            <span>Return to Pakistan to <strong>mentor the next generation</strong> of AI researchers and build bridges between 
            Pakistani academia and global research institutions</span>
          </li>
        </ul>
      </section>

      {/* Closing */}
      <section className="mb-10">
        <h3 className="text-2xl text-cardinal mb-4 font-normal">Conclusion</h3>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-4">
          I believe that the most impactful research emerges at the boundaries of disciplines. My journey — from 
          chemistry labs in Faisalabad to the frontiers of agentic AI — has prepared me to navigate these 
          boundaries with both scientific rigor and creative vision.
        </p>
        <p className="text-[#4d4f53] text-[15px] leading-[1.85] mb-6">
          I respectfully request the opportunity to pursue my Master&apos;s studies with full 
          scholarship support. I am committed to making the most of this opportunity — not only for my own 
          intellectual growth, but for the communities and causes that have shaped my purpose.
        </p>
        <div className="border-t border-gray-200 pt-6 mt-8">
          <p className="text-[#2e2d29] text-[15px] font-semibold">Arsalan Ayaz</p>
          <p className="text-gray-500 text-[13px]">arsalanayaz821@gmail.com</p>
          <p className="text-gray-500 text-[13px]">Faisalabad, Punjab, Pakistan</p>
        </div>
      </section>
    </article>
  );
}
