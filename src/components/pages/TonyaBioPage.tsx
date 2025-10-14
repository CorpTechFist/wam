import { useTranslation } from "../TranslationContext";

export function TonyaBioPage() {
  const { translations } = useTranslation();
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <span className="text-purple-600 uppercase tracking-wider mb-2 block">
              {translations.tonyaBio?.role || "PRESIDENT"}
            </span>
            <h1 className="gradient-text mb-3">
              {translations.tonyaBio?.name || "TONYA JONES SMITH"}
            </h1>
            <p className="text-gray-600">
              tjonesmith@wamalliance.org
            </p>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-purple-700 mb-3">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.tonyaBio?.bio || "Tonya Jones-Smith is an accomplished nonprofit leader and suicide-loss survivor dedicated to advancing holistic healing and trauma recovery. With 30 years of multidisciplinary experience spanning behavioral health, holistic wellness, psychology, law, finance, and software engineering, she combines technical rigor, compassionate leadership, and evidence-based practice to drive organizational impact."}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Professional Background</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.tonyaBio?.background || "Her professional background spans many areas. She founded We All Matter Alliance, a 501(c)(3) nonprofit offering trauma-informed support and resources for individuals affected by suicide loss, injustice, PTSD, mental illness, and homelessness. She developed inclusive programs and strategic partnerships that address service gaps creating safe healing environments."}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Key Accomplishments</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.tonyaBio?.accomplishments || "Tonya Launched Love Me Teas, an herbal wellness brand crafting organic blends to alleviate symptoms of PTSD and anxiety. She is an Author of an upcoming memoir series on surviving trauma, weaving personal narrative with natural healing modalities, slated for publication in the near future. She has led enterprise-level initiatives in quality assurance, Agile project management, cloud infrastructure, and SDLC."}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Education & Certifications</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.tonyaBio?.education || "Tonya's education started in the computer sciences and progressed into neuroscience, nutrition, psychology and law. She has a BS from Westminster College in Computer Science and Mathematics. Her desire for continued learning and education is why she now holds a Harvard Certificate in Constitutional Law, as well as Medicinal Herbalism Certification, while she continues to pursue PTSD Hypnotherapy License. Tonya also has the gift of being an Akashic Record Reader."}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">Leadership Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  {translations.tonyaBio?.philosophy || "Tonya's leadership philosophy centers on the belief that every life holds intrinsic value and that holistic, evidence-based approaches can transform trauma into resilience. She empowers individuals to reclaim autonomy, cultivate self-love, and build sustainable pathways to wellness."}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">{translations.tonyaBio?.expertise || "Areas of Expertise"}</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• {translations.tonyaBio?.skill1 || "Trauma-Informed Program Design & Implementation"}</li>
                  <li>• {translations.tonyaBio?.skill2 || "Holistic Healing & Herbal Medicine"}</li>
                  <li>• {translations.tonyaBio?.skill3 || "Behavioral Health Strategies & Hypnotherapy"}</li>
                  <li>• {translations.tonyaBio?.skill4 || "Strategic Partnerships & Resource Development"}</li>
                  <li>• {translations.tonyaBio?.skill5 || "Scalable Systems Architecture & Quality Assurance"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}