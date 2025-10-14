import { useTranslation } from "../TranslationContext";

export function TermsOfServicePage() {
  const { translations } = useTranslation();

  return (
    <div className="relative">
      <main className="relative z-10 py-5 overflow-hidden border-t border-b border-white/50 bg-gradient-to-br from-slate-50/85 via-purple-50/70 to-slate-50/85 bg-[length:400%_400%] animate-[gradientShift_15s_ease_infinite]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/95 via-white/90 to-slate-50/92 backdrop-blur-[30px] backdrop-saturate-[1.3] backdrop-brightness-110 border border-primary/40 rounded-3xl p-8 md:p-12 shadow-[0_32px_100px_rgba(139,92,246,0.25),0_20px_60px_rgba(255,215,0,0.15),0_8px_25px_rgba(167,139,250,0.12),0_4px_12px_rgba(139,92,246,0.1)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_45px_120px_rgba(139,92,246,0.35),0_25px_70px_rgba(255,215,0,0.22),0_15px_35px_rgba(167,139,250,0.18),0_8px_20px_rgba(139,92,246,0.12)] transition-all duration-500 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/60 before:to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-yellow-400 via-purple-600 via-purple-300 to-primary bg-clip-text text-transparent">
                Terms of Service
              </h1>
              
              <div className="prose prose-lg max-w-none text-black space-y-8">
                <div className="text-center mb-8">
                  <span className="text-2xl text-[#FFD700]">×</span>
                </div>

                <p className="leading-relaxed text-center">
                  This Web site is a complimentary information service offered by WAM Alliance. To provide free access to this site, we must require visitors to agree to certain terms and conditions. WAM Alliance wants you to understand that you agree to these terms and conditions when you use this site. Please read the explanation of these terms and conditions that appears below. Once again, WAM Alliance welcomes you and hopes that your visit to this Web site is both informative and enjoyable.
                </p>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Terms and Conditions of Use</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#FFD700] mb-3">Trademark Information:</h3>
                      <p className="leading-relaxed">
                        You may not use the WAM Alliance's name or logo in any way without the written permission of WAM Alliance, The WAM Alliance name and logo are registered trademarks of WAM Alliance and are protected by federal law. Requests for permission should be sent to <a href="mailto:info@wamalliance.org" className="text-[#FFD700] hover:text-primary transition-colors">info@wamalliance.org</a>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FFD700] mb-3">Copyright Information:</h3>
                      <p className="leading-relaxed">
                        The text, graphics and all other materials appearing on this Web site are protected by U.S. copyright laws.
                        You may not use the materials on this Web site in any way without the written permission of WAM Alliance, Inc. Requests for permission should be sent to <a href="mailto:info@wamalliance.org" className="text-[#FFD700] hover:text-primary transition-colors">info@wamalliance.org</a>.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FFD700] mb-3">Governing Law and Jurisdiction:</h3>
                      <p className="leading-relaxed">
                        This Web site is controlled by WAM Alliance, which is located in the state of Utah. It can be accessed from all 50 states, as well as from other countries. As each of these places has laws that may differ from those of Utah state, you agree by accessing this Web site that these terms and conditions will be governed and interpreted according to the laws of the state of Utah, notwithstanding any conflicts of law principles. If any of these provisions is determined to be unenforceable, that part will be deemed severable and will not affect the enforceability of any other provisions. In addition, you and WAM Alliance agree to submit to the exclusive personal jurisdiction of the appropriate state or federal court for Salt Lake City, UT.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FFD700] mb-3">Disclaimer of Warranty:</h3>
                      <p className="leading-relaxed">
                        WAM Alliance does not warrant that wamalliance.org is free of technical defects, that defects will be corrected, or that our Web site or the server that makes it available are free of viruses or other harmful elements. The materials on this Web site are provided to you "as is" without any express or implied warranties of any kind, including warranties of merchantability and fitness for a particular purpose. You use this Web site at your own risk.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#FFD700] mb-3">Limitations on WAM Alliance's Liability:</h3>
                      <p className="leading-relaxed">
                        You agree that WAM Alliance and its officers, directors, employees, and volunteers will not be liable for any damages arising from your use of this Web site. Examples of such damages include but are not limited to those caused by any failure of performance, error, omission, interruption, defect, delay in operation of transmission, computer virus, or line failure. WAM Alliance will not be liable for any special or consequential damages that result from the use or inability to use this Web site, even if WAM Alliance is negligent or has been notified of the possibility of such damages. WAM Alliance's total liability to you for all losses, damages, and causes of action will in no case be greater than the amount you paid to access this Web site. This is the entire agreement between you and WAM Alliance.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="text-center pt-8 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    © 2025 We All Matter Alliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}