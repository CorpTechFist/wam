import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useTranslation } from "./TranslationContext";
import emailjs from "@emailjs/browser";

export function ContactUs() {
  const { translations } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError("");
    setSent(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_u6abwjq", // ⚡ Replace this
        "template_m0j6w73", // ⚡ Replace this
        formRef.current,
        "OFD7Qlv7yYlrGs42z"   // ⚡ Replace this
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          formRef.current?.reset();
        },
        (err) => {
          console.error(err);
          setError("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="py-12 relative overflow-hidden border-t border-b border-gray-200 border-opacity-50">
      <section className="py-8">
        <div className="container mx-auto px-4 pt-4">
          <div className="max-w-6xl mx-auto glass-morphism glass-shine rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              
              {/* Left Side */}
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

              {/* Right Side - EmailJS Form */}
              <div className="p-8 md:p-12 flex items-center">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4 w-full">
                  <input type="hidden" name="formSource" value="Contact Us Page" />

                  <div className="space-y-2">
                    <Label htmlFor="fullName">{translations.contactUsPage?.fullName || "Full Name *"}</Label>
                    <Input name="fullName" required placeholder="Enter your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{translations.contactUsPage?.yourEmail || "Your email *"}</Label>
                    <Input type="email" name="email" required placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{translations.contactUsPage?.yourPhone || "Your phone"}</Label>
                    <Input name="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cityState">{translations.contactUsPage?.cityState || "City and State"}</Label>
                    <Input name="cityState" placeholder="Enter your city and state" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regarding">{translations.contactUsPage?.regarding || "Regarding"}</Label>
                    <Input name="regarding" placeholder="Subject of your inquiry" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{translations.contactUsPage?.yourMessage || "Your Message *"}</Label>
                    <Textarea name="message" rows={6} required placeholder="Tell us how we can help you..." />
                  </div>

                  {/* Status messages */}
                  {sent && <p className="text-green-600 text-center">✅ Message sent successfully!</p>}
                  {error && <p className="text-red-600 text-center">{error}</p>}

                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSending}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full shadow-lg hover:-translate-y-1 transition"
                    >
                      {isSending ? "Sending..." : translations.contactUsPage?.sendMessage || "Send Message"}
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
