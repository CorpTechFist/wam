import { useTranslation } from "../TranslationContext";

export function TonyaBioPage() {
   const { t } = useTranslation();
  return (
    <div className="py-8 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-gray-200">
            <span className="text-purple-600 uppercase tracking-wider mb-2 block">
              BOARD OF DIRECTOR • PRESIDENT
            </span>
            <h1 className="gradient-text mb-3">
             {t('bio.tonya.name')}
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
                <h3 className="text-purple-700 mb-3">Bio</h3>
                <p className="text-gray-700 leading-relaxed">
                 {t('bio.tonya.overview')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.tonya.professionalBackground')}</h3>
                <p className="text-gray-700 leading-relaxed">
                   {t('bio.tonya.background')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.tonya.keyAccomplishments')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.tonya.accomplishments')}
                </p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.tonya.educationCertifications')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('bio.tonya.education')}</p>
              </div>
              
              <div>
                <h3 className="text-purple-700 mb-3">{t('bio.tonya.leadershipPhilosophy')}</h3>
                <p className="text-gray-700 leading-relaxed">
                   {t('bio.tonya.philosophy')}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200 mt-6">
                <h3 className="text-purple-700 mb-4">Areas of Expertise</h3>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                 <li> {t('bio.tonya.skill1')}</li>
                  <li> {t('bio.tonya.skill2')}</li>
                  <li> {t('bio.tonya.skill3')}</li>
                  <li> {t('bio.tonya.skill4')}</li>
                  <li> {t('bio.tonya.skill5')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
