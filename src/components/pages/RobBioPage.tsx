import { useTranslation } from "../TranslationContext";

export function RobBioPage() {
  const { translations } = useTranslation();
  
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                {translations.boardOfDirectors?.vicePresident || "VICE PRESIDENT"}
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                CFO
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              {translations.robBio?.name || "ROBERT SMITH"}
            </h1>
            <p className="text-gray-600">
              robertsmith@wamalliance.org
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  My name is Rob, and I am an empathetic healer who uses my personal experiences to help and heal others. Living in different cultures around the globe, I have learned to understand other beings and walks of life, and that there are different paths to healing and happiness. Sharing that knowledge is important, it's a collaboration for the benefit of all humans.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Journey with Addiction & Recovery</h3>
                <p className="text-gray-700 leading-relaxed">
                  At age 23 I spearheaded an intervention to help my father to become sober from abuse of alcohol and substances. Over 29 years I would learn first-hand about addiction, addict behavior, how to manage relationships steeped in addiction, and the long journey of treating addiction. I participated in AA, NA and CA with my father, and Al-Anon on my own. While the step-programs are effective in the beginning, I believe that the real healing occurs when we confront the truth of our own traumas and work through them. Loving ourselves is paramount, especially if we are to love others.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Personal Transformation</h3>
                <p className="text-gray-700 leading-relaxed">
                  In 2008 I nearly lost my life and while the experience was physically very traumatic, the spiritual experience is unparalleled. I wouldn't trade it for the world!
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Understanding Suicide Loss</h3>
                <p className="text-gray-700 leading-relaxed">
                  A few years later I met my wife and my stepchildren and learned they are Suicide Loss Survivors – a complex topic and largely misunderstood. Attending workshops, reading blogs and books about Suicide and Suicide Loss Survivors, I endeavor to learn as much as I can. Regardless of the source, PTSD is real, and it can be debilitating as it's uncontrollable by the one who suffers.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Healing Philosophy</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The goal of helping those suffering trauma is to empower people to find their path to healing, and each human is unique. The key is to learn the individual and their story – this spawns a more effective treatment – enabling them to heal and move forward with their life goals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All I ask is that they help others in turn, to share what they have learned and accomplished –and the ripple moves forward!
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Empathy and Cross-Cultural Healing</li>
                  <li>• Addiction and Recovery</li>
                  <li>• Trauma and Self-Healing</li>
                  <li>• Suicide Loss and PTSD</li>
                  <li>• Personalized Healing Methodology</li>
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
              {translations.robBio?.backToBoard || "Back to Board of Directors"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}