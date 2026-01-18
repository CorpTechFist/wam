export function RomyBioPage() {
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                Board Member
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                Owner, Colvining Photography
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              ROMY COLVIN
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
                  Romy Colvin is a freelance photographer and the founder of Colvining Photography, where he specializes in authentic visual storytelling that highlights community, culture, and human connection. His work spans portraiture, event coverage, news journalism, and documentary-style projects, with a focus on capturing the dignity and lived experiences of individuals and families across Utah.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  With a strong commitment to service and creative advocacy, Romy brings a unique artistic perspective to the board. His background in visual media strengthens organizational branding, outreach, and community engagement efforts. Romy’s lived experience and deep understanding of the challenges facing underserved populations make him a powerful voice for equity, representation, and inclusive storytelling.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As a board member, he contributes his expertise in creative direction, digital media, and community-centered communication to support mission-driven initiatives and amplify the impact of nonprofit programs.
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
