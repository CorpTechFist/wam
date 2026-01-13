import { useTranslation } from "../TranslationContext";

export function WajidBioPage() {
  const { t } = useTranslation();
  
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center gap-4 mb-2">
              <span className="text-purple-600 uppercase tracking-wider">
                {t('bio.wajid.role')}
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-purple-600 uppercase tracking-wider">
                {t('bio.wajid.department')}
              </span>
            </div>
            <h1 className="gradient-text mb-3">
              {t('bio.wajid.name')}
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
                <h3 className="text-purple-700 mb-3">{t('bio.wajid.visionaryLeadership')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.wajid.leadership')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.wajid.collaborativeExcellence')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.wajid.collaboration')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.wajid.technicalMastery')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.wajid.mastery')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.wajid.innovation')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.wajid.innovationDesc')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.wajid.strategicImpact')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.wajid.impact')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>• {t('bio.wajid.skill1')}</li>
                  <li>• {t('bio.wajid.skill2')}</li>
                  <li>• {t('bio.wajid.skill3')}</li>
                  <li>• {t('bio.wajid.skill4')}</li>
                  <li>• {t('bio.wajid.skill5')}</li>
                  <li>• {t('bio.wajid.skill6')}</li>
                </ul>
              </div>
            </div>
          </div>
          
      
        </div>
      </div>
    </div>
  );
}
