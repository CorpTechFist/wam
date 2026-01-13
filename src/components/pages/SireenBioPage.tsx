export function SireenBioPage() {
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
                Project Coordinator
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              SIREEN BESEISO
            </h1>
            <p className="text-gray-600">
              weallmatter@wamalliance.org
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Sireen is a devoted mother, tireless volunteer, and fierce advocate for the people of Gaza and Palestine. Originally from Gaza, she now lives in Utah with her son Aden and her parents, where she continues her mission to uplift those affected by war, displacement, and humanitarian crisis.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  As a single mother, Sireen balances the demands of parenting with an unwavering commitment to justice. She has helped deliver life-saving aid to families in Gaza and supported those who fled to Egypt, organizing donations, coordinating relief efforts, and raising awareness about the urgent need for ceasefire and compassion.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Her work is deeply personal—rooted in love for her homeland and the people still suffering under siege. Whether she's gathering supplies, speaking out for peace, or building support networks, Sireen leads with empathy, resilience, and purpose.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At WAM Alliance, Sireen brings lived experience, cultural insight, and a warrior's heart to every initiative. Her presence reminds us that advocacy is not just a cause—it's a calling.
                </p>
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
