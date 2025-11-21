import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "./TranslationContext";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card, CardContent } from "./ui/card";
import {
  CalendarIcon,
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function VolunteerApplication() {
  const { t } = useTranslation();

  const [dateAvailable, setDateAvailable] = useState<Date>();
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    emailjs
      .sendForm(
        "service_u6abwjq",
        "template_m0j6w73",
        formRef.current!,
        "OFD7Qlv7yYlrGs42z"
      )
      .then(
        () => {
          setFormStatus("success");
          setIsSubmitting(false);
          formRef.current?.reset();
          setDateAvailable(undefined);
          setShowRecaptcha(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setFormStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      

      {/* Background Pattern */}
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
            {/* Page Title */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-50 border-2 border-purple-200 rounded-none mb-6">
                <Heart className="w-5 h-5 text-purple-600" />
                <span className="text-sm tracking-wider text-purple-800">
                  {t("OUR VALUED DONORS")}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl tracking-tight text-purple-900 mb-4">
                {t("volunteerApp.title")}
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Section */}
              <div className="space-y-8">
                {/* Welcome */}
                <Card className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-300 shadow-lg overflow-hidden">
                  

                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>

                      <div>
                        <h2 className="text-2xl text-purple-900 mb-3">
                          {t("volunteerApp.doSomethingGreat")}
                        </h2>

                        <p className="text-gray-800 leading-relaxed">
                          {t("volunteerApp.lookingForIdeas")}
                        </p>
                      </div>
                    </div>

                    <div className="border-t-2 border-purple-200 pt-6 mt-6">
                      <h3 className="text-lg text-purple-700 mb-4 italic">
                        {t("volunteerApp.everythingCounts")}
                      </h3>

                      <p className="text-gray-700 leading-relaxed">
                        {t("volunteerApp.screeningNotice")}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits */}
                <Card className="bg-white border-2 border-purple-400 shadow-lg overflow-hidden">
                 

                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-6 h-6 text-yellow-600" />
                      <h3 className="text-xl text-purple-900">
                        {t("volunteerApp.benefits")}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        t("volunteerApp.benefit1"),
                        t("volunteerApp.benefit2"),
                        t("volunteerApp.benefit3"),
                        t("volunteerApp.benefit4"),
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right – Form */}
              <Card className="bg-white shadow-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white" style={{ borderRadius: "12px" }}>
                  <h3 className="text-2xl mb-2">{t("volunteerApp.formTitle")}</h3>
                  <p className="text-purple-100 text-sm">
                    {t("volunteerApp.formSubtitle")}
                  </p>
                </div>

                <CardContent className="p-6">
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <input type="hidden" name="formSource" value="Volunteer Sign Up Page" />

                    {/* Full Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label className="text-gray-900 flex items-center gap-2 text-sm">
                          <User className="w-3 h-3 text-purple-600" />
                          {t("volunteerApp.fullName")}
                        </Label>

                        <Input
                          type="text"
                          name="fullName"
                          className="border-2 border-purple-300 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder={t("volunteerApp.fullNamePlaceholder")}
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <Label className="text-gray-900 flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3 text-purple-600" />
                          {t("volunteerApp.email")}
                        </Label>

                        <Input
                          type="email"
                          name="email"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder={t("volunteerApp.emailPlaceholder")}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone + Volunteer For */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label className="text-gray-900 flex items-center gap-2 text-sm">
                          <Phone className="w-3 h-3 text-purple-600" />
                          {t("volunteerApp.phone")}
                        </Label>

                        <Input
                          type="tel"
                          name="phone"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder={t("volunteerApp.phonePlaceholder")}
                        />
                      </div>

                      <div className="space-y-1">
                        <Label className="text-gray-900 flex items-center gap-2 text-sm">
                          <Heart className="w-3 h-3 text-purple-600" />
                          {t("volunteerApp.volunteerFor")}
                        </Label>

                        <Input
                          type="text"
                          name="regarding"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder={t("volunteerApp.volunteerForPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Date + Transportation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label className="text-gray-900 flex items-center gap-2 text-sm">
                          <CalendarIcon className="w-3 h-3 text-purple-600" />
                          {t("volunteerApp.dateAvailable")}
                        </Label>

                        <Popover>
                          <PopoverTrigger className="w-full block">
                            <div className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 px-3 py-2 h-9 text-sm flex items-center cursor-pointer hover:bg-purple-50">
                              <CalendarIcon className="mr-2 h-3 w-3" />
                              {dateAvailable
                                ? dateAvailable.toLocaleDateString()
                                : t("volunteerApp.selectDate")}
                            </div>
                          </PopoverTrigger>

                          <PopoverContent className="w-auto p-0 bg-white border-2 border-purple-300 shadow-lg" align="start">
                            <Calendar
                              mode="single"
                              selected={dateAvailable}
                              onSelect={setDateAvailable}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <input
                          type="hidden"
                          name="cityState"
                          value={dateAvailable ? dateAvailable.toISOString().split("T")[0] : ""}
                        />
                      </div>

                      <div className="space-y-1">
                        <Label className="text-gray-900 flex items-center gap-2 text-sm">
                          <MapPin className="w-3 h-3 text-purple-600" />
                          {t("volunteerApp.transportation")}
                        </Label>

                        <Input
                          type="text"
                          name="transportation"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder={t("volunteerApp.transportationPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-1">
                      <Label className="text-gray-900 flex items-center gap-2 text-sm">
                        <Award className="w-3 h-3 text-purple-600" />
                        {t("volunteerApp.skills")}
                      </Label>

                      <Textarea
                        name="message"
                        rows={3}
                        className="border-2 border-purple-200 focus:border-purple-500 rounded-none resize-none bg-white text-gray-900"
                        placeholder={t("volunteerApp.skillsPlaceholder")}
                        style={{ resize: "none" }}
                      />
                    </div>

                    {/* Agreement */}
                    <div className="bg-purple-50 border-2 border-purple-200 p-3">
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="agreement"
                          name="agreement"
                          className="mt-0.5 w-4 h-4 accent-purple-600 border-2 border-purple-400 rounded"
                          required
                          onChange={(e) => setShowRecaptcha(e.target.checked)}
                        />

                        <label htmlFor="agreement" className="text-xs text-gray-800 leading-snug cursor-pointer">
                          {t("volunteerApp.agreement")}
                        </label>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4 flex justify-center">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {isSubmitting ? "Submitting..." : (
                          <>
                            <Heart className="w-3 h-3 mr-2" />
                            {t("volunteerApp.submitButton")}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Messages */}
                    {formStatus === "success" && (
                      <p className="text-green-600 text-center text-sm mt-2">
                        ✅ Thank you! Your application has been submitted successfully.
                      </p>
                    )}

                    {formStatus === "error" && (
                      <p className="text-red-600 text-center text-sm mt-2">
                        ❌ Oops! Something went wrong. Please try again later.
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
}
