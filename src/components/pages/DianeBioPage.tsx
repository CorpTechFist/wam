import { useTranslation } from "../TranslationContext";

export function DianeBioPage() {
  const { translations } = useTranslation();
  
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                {translations.boardOfDirectors?.director || "DIRECTOR"}
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                SECRETARY
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              {translations.dianeBio?.name || "DIANE JONES"}
            </h1>
            <p className="text-gray-600">
              info@wamalliance.org
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am Diane Jones and have been a Suicide Loss Survivor from 10 years of age. I was born an empath and have always been able to feel and read others' energy. I have been in abusive relationships that have almost taken my life, which gives me a deep understanding of PTSD, Anxiety and Depression.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Personal Background & Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am currently in management and attending college, completing my BA in Business Management, and recently purchased my first home here in Utah. I'm highly motivated. goal driven. I grew up hunting, camping, and being a part of many extra calicular academic activities as a child. I attended Waterford for 2 years, after my father passed, any stigma around suicide loss was removed for me by attending Waterford, and my experience was significant, and I received some of the best education while there.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Understanding Trauma & Healing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Although my life has been filled with challenges since a young age, they have brought great lessons and knowledge with them. Learning to love yourself is essential in healing and moving forward in life and love. This is one of the things I continuously work on within myself and learn more about to help others along my way.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Navigating Treatment Systems</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Navigating western medicine and the system has taught me the different methods and tools for PTSD and trauma survivors. I learned that each of us are individuals and no one method or pill fits all. We have a choice, options available to morph into what we need for our own life. I have found a few things that work for me and have catered them to my life to help me incorporate and heal my traumas which cause PTSD, Anxiety, etc.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hard lessons are some of our biggest challenges, and understanding that we are not mentally ill, that we suffer a trauma, and no pill is going to fix that, will alleviate some of the difficulty and depression in dealing with the symptoms and behaviors.
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Mission & Vision</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The many services out there today still do not address Suicide Loss or aggravated trauma aka root cause. Here we simply treat the symptoms (depression, drug use, alcohol abuse, dysmorphia, homelessness) with pills, hospitals, & shame. I want to try to change that ~ WE ARE MUCH MORE THAN OUR TRAUMA!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trauma is at the root of addiction and homelessness, without recognizing that we will never come up with a solution to resolve the way we treat our children, what we expose them to, and the fate of their futures here, if we do not help the healing and addressing the embedded trauma they survived. I hope to help others see and know healing is possible, and each of us are deserving.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• Suicide Loss Survivorship</li>
                  <li>• Empathy and Energy Reading</li>
                  <li>• Trauma, Abuse, and Mental Health</li>
                  <li>• Western Medicine Navigation</li>
                  <li>• Self-Healing and Empowerment</li>
                  <li>• Corporate/Academic Skills (Demonstrated Motivation)</li>
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
              {translations.dianeBio?.backToBoard || "Back to Board of Directors"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}