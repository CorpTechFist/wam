import { useState } from "react";
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

          <div className="max-w-6xl mx-auto glass-morphism glass-shine rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left Side - Image */}
              <div className="relative h-full min-h-[400px] md:min-h-[800px]">
                <img 
                  src="https://images.unsplash.com/photo-1613993995046-07bce4b0bfed?w=900&auto=format&fit=crop&q=60"
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
                    <p>
                      {translations.contactUsPage?.volunteerInfo || "For Volunteering, please go to"}{" "}
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "volunteer" }))}
                        className="text-yellow-300 hover:text-yellow-100 underline"
                      >
                        {translations.contactUsPage?.volunteerLink || "Volunteer"}
                      </button>{" "}
                      page for more info.
                    </p>
                    <p>
                      {translations.contactUsPage?.needHelpInfo || "For those suffering and needing help now, please go to"}{" "}
                      <button
                        onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "need-help-now" }))}
                        className="text-yellow-300 hover:text-yellow-100 underline"
                      >
                        {translations.contactUsPage?.needHelpLink || "Need Help Now"}
                      </button>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form (Formspree integrated) */}
              <div className="p-8 md:p-12 flex items-center">
                <form
                  action="https://formspree.io/f/mvgwepor"  // ⬅️ Replace with your Formspree form ID
                  method="POST"
                  className="space-y-4 w-full"
                >
                  <input type="hidden" name="_subject" value="New Message from We All Matter Contact Form" />

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName">{translations.contactUsPage?.fullName || "Full Name *"}</Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="Full Name"
                      required
                      className="bg-gray-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.fullNamePlaceholder || "Enter your full name"}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">{translations.contactUsPage?.yourEmail || "Your email *"}</Label>
                    <Input
                      type="email"
                      id="email"
                      name="Email"
                      required
                      className="bg-gray-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.emailPlaceholder || "Enter your email"}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">{translations.contactUsPage?.yourPhone || "Your phone"}</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="Phone"
                      className="bg-gray-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.phonePlaceholder || "Enter your phone number"}
                    />
                  </div>

                  {/* City and State */}
                  <div className="space-y-2">
                    <Label htmlFor="cityState">{translations.contactUsPage?.cityState || "City and State"}</Label>
                    <Input
                      type="text"
                      id="cityState"
                      name="City and State"
                      className="bg-gray-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.cityStatePlaceholder || "Enter your city and state"}
                    />
                  </div>

                  {/* Regarding */}
                  <div className="space-y-2">
                    <Label htmlFor="regarding">{translations.contactUsPage?.regarding || "Regarding"}</Label>
                    <Input
                      type="text"
                      id="regarding"
                      name="Regarding"
                      className="bg-gray-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                      placeholder={translations.contactUsPage?.regardingPlaceholder || "Subject of your inquiry"}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">{translations.contactUsPage?.yourMessage || "Your Message *"}</Label>
                    <Textarea
                      id="message"
                      name="Message"
                      rows={6}
                      required
                      className="bg-gray-100 border-gray-300 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                      placeholder={translations.contactUsPage?.messagePlaceholder || "Tell us how we can help you..."}
                    />
                  </div>

                  {/* Send Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full shadow-lg hover:-translate-y-1 transition"
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
