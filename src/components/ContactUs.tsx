import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useTranslation } from "./TranslationContext";

export function ContactUs() {
  const { translations } = useTranslation();
  const [showRecaptcha, setShowRecaptcha] = useState(false);
  return (
    <div className="py-12 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50">
      <section className="py-8">
        <div className="container mx-auto px-4 pt-4">
          {/* Section Header */}


          {/* Contact Information */}


          {/* Contact Form */}
          <div className="max-w-6xl mx-auto glass-morphism glass-shine rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-full min-h-[400px] md:min-h-[800px]">
                <img 
                  src="https://images.unsplash.com/photo-1613993995046-07bce4b0bfed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D"
                  alt="Contact Us"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-indigo-900/50 to-purple-800/60"></div>
                <div className="relative h-full flex flex-col justify-center p-8 md:p-12 text-white">
                  <h2 className="text-4xl md:text-5xl mb-6 font-serif">
                    {translations.contactUsPage?.title || "CONTACT US"}
                  </h2>
                  <div className="space-y-4 text-white/90 leading-relaxed">
                    <p>{translations.contactUsPage?.generalInquiries || "For general inquiries, and resumes/bios for Board Member consideration."}</p>
                    <p>{translations.contactUsPage?.volunteerInfo || "For Volunteering, please go to"} <button onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'volunteer' }))} className="text-yellow-300 hover:text-yellow-100 transition-colors duration-300 underline cursor-pointer">{translations.contactUsPage?.volunteerLink || "Volunteer"}</button> page for more info.</p>
                    <p>{translations.contactUsPage?.needHelpInfo || "For those suffering and needing help now, please go to"} <button 
                      onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'need-help-now' }))}
                      className="text-yellow-300 hover:text-yellow-100 underline cursor-pointer transition-colors duration-200"
                    >
                      {translations.contactUsPage?.needHelpLink || "Need Help Now"}
                    </button>.</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 md:p-12 flex items-center">
                <form className="space-y-4 w-full">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">
                      {translations.contactUsPage?.fullName || "Full Name *"}
                    </Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full bg-gray-100 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.fullNamePlaceholder || "Enter your full name"}
                      required
                    />
                  </div>

                  {/* Your Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      {translations.contactUsPage?.yourEmail || "Your email *"}
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.emailPlaceholder || "Enter your email address"}
                      required
                    />
                  </div>

                  {/* Your Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      {translations.contactUsPage?.yourPhone || "Your phone"}
                    </Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.phonePlaceholder || "Enter your phone number"}
                    />
                  </div>

                  {/* City and State */}
                  <div className="space-y-2">
                    <Label htmlFor="cityState" className="text-foreground">
                      {translations.contactUsPage?.cityState || "City and State"}
                    </Label>
                    <Input
                      type="text"
                      id="cityState"
                      name="cityState"
                      className="w-full bg-gray-100 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.cityStatePlaceholder || "Enter your city and state"}
                    />
                  </div>

                  {/* Regarding */}
                  <div className="space-y-2">
                    <Label htmlFor="regarding" className="text-foreground">
                      {translations.contactUsPage?.regarding || "Regarding"}
                    </Label>
                    <Input
                      type="text"
                      id="regarding"
                      name="regarding"
                      className="w-full bg-gray-100 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.regardingPlaceholder || "Subject of your inquiry"}
                    />
                  </div>

                  {/* Your Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      {translations.contactUsPage?.yourMessage || "Your Message *"}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full bg-gray-100 border-gray-300 text-foreground placeholder:text-muted-foreground focus:border-purple-500 focus:ring-purple-500/20 resize-none rounded-lg"
                      placeholder={translations.contactUsPage?.messagePlaceholder || "Tell us how we can help you..."}
                      required
                    />
                  </div>

                  {/* Permission Checkbox */}
                  <div className="flex items-start space-x-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <input
                      type="checkbox"
                      id="permission"
                      name="permission"
                      className="mt-1 w-4 h-4 accent-purple-600 bg-white border-purple-300 rounded focus:ring-2 focus:ring-purple-500/50"
                      onChange={(e) => setShowRecaptcha(e.target.checked)}
                      required
                    />
                    <label htmlFor="permission" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                      {translations.contactUsPage?.permission || "By checking this box and submitting your information, you are granting us permission to email you. *"}
                    </label>
                  </div>

                  {/* reCAPTCHA Placeholder */}
                  {showRecaptcha && (
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4 border border-purple-300 flex items-center space-x-3 shadow-md">
                        <input
                          type="checkbox"
                          id="captcha"
                          name="captcha"
                          className="w-5 h-5 accent-purple-600 bg-white border-purple-300 rounded focus:ring-2 focus:ring-purple-500/50"
                          required
                        />
                        <label htmlFor="captcha" className="text-gray-700 cursor-pointer">
                          {translations.contactUsPage?.notARobot || "I'm not a robot"}
                        </label>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-400 rounded flex items-center justify-center">
                          <span className="text-white text-sm">🔄</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Send Message Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 shadow-lg shadow-purple-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/40 hover:-translate-y-1 flex items-center space-x-2 !rounded-full [&::before]:hidden"
                    >
                      <span>{translations.contactUsPage?.sendMessage || "Send Message"}</span>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}