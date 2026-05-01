import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="space-y-10">
      {/* Contact Section */}
      <div>
        <h3 className="text-cardinal text-[13px] font-bold tracking-widest uppercase mb-1">Contact</h3>
        <div className="w-4 h-[2px] bg-cardinal mb-4"></div>
        
        <div className="mb-6">
          <h4 className="font-bold text-[#2e2d29] text-[15px] mb-1">Email</h4>
          <a href="mailto:arsalanayaz821@gmail.com" className="text-[#4d4f53] text-[15px] hover:underline">
            arsalanayaz821@gmail.com
          </a>
        </div>

        <div className="mb-6">
          <h4 className="font-bold text-[#2e2d29] text-[15px] mb-1">Phone</h4>
          <span className="text-[#4d4f53] text-[15px]">+92 303 776 4619</span>
        </div>

        <div>
          <h4 className="text-cardinal text-[14px] font-semibold mb-0.5">Location</h4>
          <div className="text-[#4d4f53] text-[14px] leading-relaxed">
            Faisalabad<br />
            Punjab, Pakistan
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-cardinal text-[13px] font-bold tracking-widest uppercase mb-1">Core Skills</h3>
        <div className="w-4 h-[2px] bg-cardinal mb-4"></div>
        
        <div className="flex flex-wrap gap-1.5">
          {[
            "Artificial Intelligence",
            "Machine Learning", 
            "Deep Learning",
            "Agentic AI",
            "LangGraph",
            "Python",
            "Cloud Computing",
            "Chemistry",
            "Biochemistry",
            "Data Analysis",
            "Research Methodology"
          ].map(skill => (
            <span key={skill} className="text-[13px] text-[#4d4f53] bg-gray-100 px-2 py-0.5 rounded-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div>
        <h3 className="text-cardinal text-[13px] font-bold tracking-widest uppercase mb-1">Links</h3>
        <div className="w-4 h-[2px] bg-cardinal mb-4"></div>
        
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <div className="bg-[#333] rounded-full p-1 w-[22px] h-[22px] flex items-center justify-center text-white shrink-0">
              <FaGithub size={12} />
            </div>
            <a href="https://github.com/ArsalanManak" target="_blank" rel="noopener noreferrer" className="text-[#4d4f53] text-[14px] hover:underline">github.com/ArsalanManak</a>
          </li>
          <li className="flex items-center gap-2">
            <div className="bg-[#0077b5] rounded-full p-1 w-[22px] h-[22px] flex items-center justify-center text-white shrink-0">
              <FaLinkedin size={10} />
            </div>
            <a href="https://www.linkedin.com/in/arsalan-ayaz-250057203" target="_blank" rel="noopener noreferrer" className="text-[#4d4f53] text-[14px] hover:underline">LinkedIn Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
