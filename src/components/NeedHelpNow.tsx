import { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Phone, Clock, AlertTriangle, Heart, Shield, Users } from "lucide-react";
import emailjs from "@emailjs/browser";

export function NeedHelpNow() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_u6abwjq", // ⚡ your EmailJS service ID
        "template_jgqip1u", // ⚡ your EmailJS template ID
        formRef.current!,
        "OFD7Qlv7yYlrGs42z" // ⚡ your EmailJS public key
      )
      .then(
        () => {
          setIsSending(false);
          setSuccessMessage("✅ Your message has been sent successfully!");
          formRef.current?.reset();
          setConsentChecked(false);
        },
        (err) => {
          console.error(err);
          setIsSending(false);
          setErrorMessage("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Accent Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>

      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(139 92 246) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-red-50 border-2 border-red-400 rounded-none mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <span className="text-sm tracking-wider text-red-800">CRISIS SUPPORT</span>
              </div>

              <h1 className="text-3xl md:text-5xl tracking-tight text-purple-900 mb-4">
                Need Help Now?
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>

              {/* Contact Info */}
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-300 p-8 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Phone className="w-6 h-6 text-purple-700" />
                  <h2 className="text-2xl text-purple-800">Call 385-414-4144</h2>
                </div>

                <div className="space-y-4 text-gray-800">
                  <div className="flex items-start gap-3 justify-center">
                    <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      A WAM team member will reply within 24–48 hours. Please stay safe and
                      we’ll be in touch shortly.
                    </p>
                  </div>

                  <div className="border-t-2 border-purple-200 pt-4 mt-4">
                    <p className="text-sm text-gray-700 mb-2">Love and strength to you —</p>
                    <p className="text-purple-700 font-medium">The WAM Team</p>
                  </div>
                </div>
              </div>

              {/* Emergency Card */}
              <div className="max-w-3xl mx-auto mt-6">
                <Card className="bg-white border-2 border-red-300 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 border-2 border-red-400 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg text-red-900 mb-2">Emergency Services</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          If you are in immediate danger, please call{" "}
                          <span className="font-bold text-red-700">911</span> or go to your
                          nearest emergency room. For the National Suicide Prevention Lifeline,
                          call <span className="font-bold text-red-700">988</span>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white border-2 border-purple-300 shadow-2xl p-8 md:p-10 rounded-lg">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-purple-200">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl text-purple-900">Reach Out to Us</h3>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-5">
                      <div>
                        <Label className="block font-semibold text-gray-700" htmlFor="name" >Name *</Label>
                        <Input
                         className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="age">Age</Label>
                        <Input 
                         className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"id="age" name="age" type="number" placeholder="Your age" />
                      </div>

                      <div>
                        <Label htmlFor="email">Your Email *</Label>
                        <Input
                         className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="regarding">Regarding</Label>
                        <Input
                         className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="regarding"
                          name="regarding"
                          placeholder="Subject of your message"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Your Phone</Label>
                        <Input 
                         className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"id="phone" name="phone" placeholder="(123) 456-7890" />
                      </div>

                      <div>
                        <Label htmlFor="location">Current Location</Label>
                        <Input 
                         className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"id="location" name="location" placeholder="City, State" />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="needs">What are your needs? *</Label>
                        <Textarea
                       
                          id="needs"
                          name="needs"
                          required
                          placeholder="Describe how we can help you..."
                          className="  border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[280px] lg:min-h-[360px]"
                        />
                      </div>

                      <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-md">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="consent"
                            checked={consentChecked}
                            onCheckedChange={(checked) => setConsentChecked(!!checked)}
                          />
                          <Label htmlFor="consent" className="text-sm text-gray-800">
                            By checking this box, you grant us permission to email you. You may
                            unsubscribe anytime.
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success or Error Message */}
                  {successMessage && (
                    <div className="text-green-600 font-semibold text-center">
                      {successMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div className="text-red-600 font-semibold text-center">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      disabled={!consentChecked || isSending}
                      className="px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white border-2 border-purple-400 rounded-none shadow-lg hover:-translate-y-1 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Support Message */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white shadow-xl text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-6 h-6" />
                  <h3 className="text-2xl">You're Not Alone</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  WAM Alliance is here to support you through difficult times. Our team is
                  dedicated to providing compassionate care and connecting you with the resources
                  you need. Your message matters, and we're here to listen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accent Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
    </div>
  );
}
