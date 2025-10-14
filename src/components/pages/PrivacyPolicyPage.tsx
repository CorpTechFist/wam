import { useTranslation } from "../TranslationContext";

export function PrivacyPolicyPage() {
  const { translations } = useTranslation();

  return (
    <div className="relative">
      <main className="relative z-10 py-5 overflow-hidden border-t border-b border-white/50 bg-gradient-to-br from-slate-50/85 via-purple-50/70 to-slate-50/85 bg-[length:400%_400%] animate-[gradientShift_15s_ease_infinite]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/95 via-white/90 to-slate-50/92 backdrop-blur-[30px] backdrop-saturate-[1.3] backdrop-brightness-110 border border-primary/40 rounded-3xl p-8 md:p-12 shadow-[0_32px_100px_rgba(139,92,246,0.25),0_20px_60px_rgba(255,215,0,0.15),0_8px_25px_rgba(167,139,250,0.12),0_4px_12px_rgba(139,92,246,0.1)] hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_45px_120px_rgba(139,92,246,0.35),0_25px_70px_rgba(255,215,0,0.22),0_15px_35px_rgba(167,139,250,0.18),0_8px_20px_rgba(139,92,246,0.12)] transition-all duration-500 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/60 before:to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-yellow-400 via-purple-600 via-purple-300 to-primary bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg max-w-none text-black space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">We Care About Your Privacy</h2>
                  <p className="leading-relaxed">
                    WAM Alliance respects the privacy of our online visitors and donors. Any personal information you provide is voluntary, and we do not require you to register in order to view our site. There are times, such as when you donate online or use our online advocacy tool, we will collect specific information, such as your name, mailing address, zip/postal codes, and/or e-mail address. If you choose to provide personally identifiable data, you may receive communications from us — by mail or electronically — advising you of upcoming WAM Alliance events, advocacy action alerts, or volunteer and support opportunities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">No Computer Tracking of Identifiable Information</h2>
                  <p className="leading-relaxed">
                    Although WAM Alliance does not monitor your personal activity on our site, we do track aggregated, anonymous user data to evaluate the effectiveness of our Web site and help us improve our service. For example, we may compile statistics about our daily number of site visitors or specific page requests. This data is generic in nature and contains no personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Security of the Information You Provide Us</h2>
                  <p className="leading-relaxed mb-4">
                    WAM Alliance uses secure socket layer (SSL) 128-bit encryption to protect transmission of the information you submit to us when you use our secure online forms.
                  </p>
                  <p className="leading-relaxed">
                    The information you provide to us is stored securely. WAM Alliance ensures the safety of your credit card data with high-quality encryption software and the https:// industry standard security protocol to communicate with your browser. This technology makes online credit card transactions extremely secure. However, if you are uncomfortable with donating online, you may also contribute by calling <a href="tel:385-414-4144" className="text-[#FFD700] hover:text-primary transition-colors">(385) 414-4144</a>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Terms and Conditions</h2>
                  <p className="leading-relaxed">
                    This Web site is a complimentary information service offered by WAM Alliance. To provide free access to this Web site, we must require visitors to agree to certain terms and conditions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Links to Other Sites</h2>
                  <p className="leading-relaxed">
                    Our Web site contains numerous links to sites developed by other companies and organizations. Be aware that other sites' privacy policies may differ from ours and WAM Alliance has no influence over third-party privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Notice to Parents</h2>
                  <p className="leading-relaxed">
                    Children are welcome on the WAM Alliance Web site. While here, they can learn more about us, and when appropriate, locate opportunities to serve their communities through our training programs and volunteer activities. Although our Web site currently does not have material directed specifically toward children, WAM Alliance supports the guidelines for interactive electronic media published by the Children's Advertising Review Unit of the Better Business Bureau.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Notice to Children Younger than Age 13</h2>
                  <p className="leading-relaxed">
                    Do not send any information about yourself to us, such as your name, address, or e-mail address. We do not knowingly collect personally identifiable information from children aged 13 or younger. In the event that we learn that we have collected any personal information from a child without verification of parental consent, we will delete that information from our database as quickly as possible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">To Modify Your Mailings</h2>
                  <p className="leading-relaxed mb-4">
                    You have a choice in how often we contact you, whether by mail or e-mail. We value your support and care about your time and want you to feel good about the support you provide to help people in need. We realize that you may not be able to help each time we ask. Or, that you may prefer to make a charitable gift only at certain times of the year. Like many people, you may also be concerned about the volume of mail you receive and the impact it has on our environment. We value your support and your trust and therefore, we want to offer you options that will enhance our relationship.
                  </p>
                  <p className="leading-relaxed mb-2">
                    To modify your mailing preferences, please email us at <a href="mailto:info@wamalliance.org" className="text-[#FFD700] hover:text-primary transition-colors">info@wamalliance.org</a> and tell us the following:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>The name and address that appears on the mailing pieces you receive from us.</li>
                    <li>If you would like to receive periodic e-mail updates.</li>
                    <li>How many times you would like to receive mail from us. The Choices are: No change in the frequency of mailings; mailings six times a year; mailings four times a year; mailings two times a year; a mailing once a year; or no mailings.</li>
                    <li>To keep costs down, WAM Alliance exchanges list with other reputable organizations. If you do not want your name exchanged, please email us at <a href="mailto:info@wamalliance.org" className="text-[#FFD700] hover:text-primary transition-colors">info@wamalliance.org</a>.</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Notification of Changes to Privacy Policy</h2>
                  <p className="leading-relaxed mb-4">
                    WAM Alliance reserves the right to amend this privacy policy as necessary.
                  </p>
                  <p className="leading-relaxed">
                    Please watch this space for future changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#FFD700] mb-4">For Additional Information</h2>
                  <p className="leading-relaxed">
                    If you have questions or comments regarding this privacy policy, we encourage you to contact us via e-mail at <a href="mailto:info@wamalliance.org" className="text-[#FFD700] hover:text-primary transition-colors">info@wamalliance.org</a>.
                  </p>
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