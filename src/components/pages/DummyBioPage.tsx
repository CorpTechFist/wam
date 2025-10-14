interface DummyBioPageProps {
  onNavigate?: (page: string) => void;
}

export function DummyBioPage({ onNavigate }: DummyBioPageProps) {
  const handleBackClick = () => {
    if (onNavigate) {
      onNavigate('board-of-directors');
    }
  };

  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                Board Advisor
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                Strategic Planning
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              JOHN ANDERSON
            </h1>
            <p className="text-gray-600">
              j.anderson@wamalliance.org
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  John Anderson brings over 20 years of strategic planning and organizational development experience to the WAM Alliance board. His expertise in nonprofit governance and community engagement has been instrumental in guiding our strategic initiatives.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Professional Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-600 mb-1">Senior Strategic Consultant</h4>
                    <p className="text-gray-600 mb-2">Global Nonprofit Solutions (2018-Present)</p>
                    <p className="text-gray-700 leading-relaxed">Leading strategic planning initiatives for nonprofit organizations across the country, specializing in governance restructuring and community impact assessment.</p>
                  </div>
                  <div>
                    <h4 className="text-purple-600 mb-1">Director of Operations</h4>
                    <p className="text-gray-600 mb-2">Community Impact Alliance (2015-2018)</p>
                    <p className="text-gray-700 leading-relaxed">Managed organizational development and board governance for a multi-million dollar nonprofit serving underserved communities.</p>
                  </div>
                  <div>
                    <h4 className="text-purple-600 mb-1">Program Manager</h4>
                    <p className="text-gray-600 mb-2">United Way Metro (2012-2015)</p>
                    <p className="text-gray-700 leading-relaxed">Coordinated community engagement programs and volunteer management systems across multiple regional chapters.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-600 mb-1">Master of Public Administration</h4>
                    <p className="text-gray-600 mb-2">Georgetown University (2012)</p>
                    <p className="text-gray-700 leading-relaxed">Specialized in nonprofit management and public policy with focus on community development strategies.</p>
                  </div>
                  <div>
                    <h4 className="text-purple-600 mb-1">Bachelor of Arts in Social Work</h4>
                    <p className="text-gray-600 mb-2">University of Maryland (2010)</p>
                    <p className="text-gray-700 leading-relaxed">Magna Cum Laude graduate with emphasis on community organizing and social justice advocacy.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Certifications</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Certified Nonprofit Professional (CNP)</li>
                  <li>• BoardSource Governance Certification</li>
                  <li>• Project Management Professional (PMP)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Contributions to WAM Alliance</h3>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="text-purple-600">Strategic Planning:</span> Led the development of our 5-year strategic plan, focusing on sustainable growth and community impact expansion.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="text-purple-600">Board Development:</span> Implemented comprehensive board training programs and governance best practices to enhance organizational effectiveness.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="text-purple-600">Community Outreach:</span> Expanded our community partnerships by 40% through strategic relationship building and collaborative initiatives.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Personal Statement</h3>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    "Joining the WAM Alliance board has been one of the most rewarding experiences of my career. The organization's commitment to creating inclusive communities where everyone truly matters aligns perfectly with my personal values and professional mission."
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    "I believe that effective governance requires both strategic vision and practical implementation. My role as an advisor allows me to contribute to the long-term planning while supporting the incredible work being done by our staff and volunteers in communities across the region."
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    "What sets WAM Alliance apart is our unwavering focus on measurable impact. We don't just talk about change – we create it, track it, and continuously improve our approach based on real results and community feedback."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Strategic Planning & Organizational Development</li>
                  <li>• Nonprofit Governance & Board Management</li>
                  <li>• Community Engagement & Partnership Building</li>
                  <li>• Program Management & Impact Assessment</li>
                  <li>• Public Policy & Social Justice Advocacy</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleBackClick}
              className="text-purple-600 hover:text-purple-800 transition-colors duration-300 underline"
            >
              Back to Board of Directors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
