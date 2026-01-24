export function DanielleBioPage() {
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                BOARD OF DIRECTOR
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                SECRETARY
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              DANIELLE ORTEGA
            </h1>
            <p className="text-gray-600">
              DORTEGA@wamalliance.org
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Early Life & Foundation</h3>
                <p className="text-gray-700 leading-relaxed">
                  My name is Danielle, and I have always been an attentive observer, sensitive to subtle details and the emotional effects of traumatic experiences on those around me. My own childhood was marked by hardship: my father was incarcerated throughout my life, we lived in poverty, and my stepfather was distant and unwelcoming. Yet, my mother was a source of unwavering love and support, valuing each of us deeply. Thanks to her, I learned to appreciate my own worth, which empowered me to strive for a better future when I faced my own struggles as an adult.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Personal Struggles & Awakening</h3>
                <p className="text-gray-700 leading-relaxed">
                  As a young adult, I began college and became actively involved in my church, but I was still haunted by a sense of emptiness. My battles with an eating disorder eventually led to a drug addiction and a period of incarceration. During my time in jail, I witnessed the inhumanity of some guards, inspiring me to seek out legal resources, and with the help of a kind staff member, I obtained printed copies of our constitutional rights for everyone in my unit.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Transformation & Career Path</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upon my release, I soon became pregnant and resolved to pursue a career in law. I earned a degree in paralegal studies focused on social sciences and began working in addiction recovery as a peer support specialist, as well as with unsheltered individuals. While my involvement has been intermittent due to having children, my commitment to peer support remains strong. The encouragement and guidance I received from others helped me build a life richer than I could have imagined, and I believe everyone deserves that same opportunity.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Philosophy & Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Self-compassion and self-love are lifelong pursuits that often require continual encouragement. I am passionate about helping others on their journeys, knowing firsthand the transformative power of support and grace.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Attentive Observation and Sensitivity</li>
                  <li>• Addiction, Eating Disorders, and Recovery</li>
                  <li>• Peer Support and Mentorship</li>
                  <li>• Constitutional and Legal Advocacy</li>
                  <li>• Self-Compassion and Transformation</li>
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
