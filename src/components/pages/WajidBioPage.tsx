export function WajidBioPage() {
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                Board of Directors
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                ENGINEERING
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              WAJID BHAT
            </h1>
            <p className="text-gray-600">
              wbhat@wamalliance.org
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Visionary Leadership</h3>
                <p className="text-gray-700 leading-relaxed">
                  Widely recognized for his visionary approach and pragmatic leadership, Wajid Bhat stands at the forefront of digital innovation, empowering organizations to excel in an ever-evolving technological landscape. His reputation is built upon a foundation of strategic foresight, exceptional problem-solving abilities, and an unwavering commitment to excellence.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Collaborative Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wajid's collaborative spirit and keen understanding of business objectives allow him to bridge communication between executive stakeholders, IT teams, and operational divisions, ensuring every transformation journey is aligned with measurable outcomes.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Technical Mastery & Team Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  His dynamic skill set combines technical mastery with a passion for mentoring and talent development, fostering high-performing teams that thrive in complex enterprise environments.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Innovation & Continuous Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Wajid's analytical acumen and creativity shine in architecting bespoke solutions tailored for unique business challenges, while his dedication to continuous learning keeps him ahead of emerging trends in AI, data science, cybersecurity, and cloud ecosystem evolution.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Strategic Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Through his resilience, adaptability, and drive to deliver value, Wajid inspires trust and confidence, making him an indispensable strategic partner for our organizations as we seek lasting growth.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Strategic Foresight and Pragmatic Leadership</li>
                  <li>• Digital Transformation and Business Alignment</li>
                  <li>• Technical Mastery and Solution Architecture</li>
                  <li>• Team and Talent Development</li>
                  <li>• Emerging Technology Trends</li>
                  <li>• Problem-Solving and Value Delivery</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => {
                const event = new CustomEvent('navigate', { detail: 'board-of-directors' });
                window.dispatchEvent(event);
              }}
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