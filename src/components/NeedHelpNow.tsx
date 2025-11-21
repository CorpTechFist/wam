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
import { useTranslation } from "./TranslationContext";

export function NeedHelpNow() {
  const { t } = useTranslation();

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
        "service_u6abwjq",
        "template_jgqip1u",
        formRef.current!,
        "OFD7Qlv7yYlrGs42z"
      )
      .then(
        () => {
          setIsSending(false);
          setSuccessMessage(t("needHelp.success"));
          formRef.current?.reset();
          setConsentChecked(false);
        },
        (err) => {
          console.error(err);
          setIsSending(false);
          setErrorMessage(t("needHelp.error"));
        }
      );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Accent Border Top */}
    
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
                <span className="text-sm tracking-wider text-red-800">
                  {t("needHelp.crisisSupport")}
                </span>
              </div>

              <h3
                className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight pb-2 font-bold tracking-tight text-violet-700"
                style={{ WebkitTextFillColor: "#7c3aed" }}
              >
                {t("needHelp.heading")}
              </h3>

              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mb-6"></div>

              {/* Contact Info */}
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-300 p-8 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Phone className="w-6 h-6 text-purple-700" />
                  <h2 className="text-2xl text-purple-800">
                    {t("needHelp.call")}
                  </h2>
                </div>

                <div className="space-y-4 text-gray-800">
                  <div className="flex items-start gap-3 justify-center">
                    <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      {t("needHelp.replyTime")}
                    </p>
                  </div>

                  <div className="border-t-2 border-purple-200 pt-4 mt-4">
                    <p className="text-sm text-gray-700 mb-2">
                      {t("needHelp.loveStrength")}
                    </p>
                    <p className="text-purple-700 font-medium">
                      {t("needHelp.team")}
                    </p>
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
                        <h3 className="text-lg text-red-900 mb-2">
                          {t("needHelp.emergencyTitle")}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {t("needHelp.emergencyMessage")}
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
                  <h3 className="text-2xl text-purple-900">
                    {t("needHelp.formHeader")}
                  </h3>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-5">
                      <div>
                        <Label
                          className="block font-semibold text-gray-700"
                          htmlFor="name"
                        >
                          {t("needHelp.name")}
                        </Label>
                        <Input
                          className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="name"
                          name="name"
                          required
                          placeholder={t("needHelp.namePlaceholder")}
                        />
                      </div>

                      <div>
                        <Label htmlFor="age">{t("needHelp.age")}</Label>
                        <Input
                          className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="age"
                          name="age"
                          type="number"
                          placeholder={t("needHelp.agePlaceholder")}
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">{t("needHelp.email")}</Label>
                        <Input
                          className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder={t("needHelp.emailPlaceholder")}
                        />
                      </div>

                      <div>
                        <Label htmlFor="regarding">{t("needHelp.regarding")}</Label>
                        <Input
                          className="w-full border border-purple-300 bg-purple--50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="regarding"
                          name="regarding"
                          placeholder={t("needHelp.regardingPlaceholder")}
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">{t("needHelp.phone")}</Label>
                        <Input
                          className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="phone"
                          name="phone"
                          placeholder={t("needHelp.phonePlaceholder")}
                        />
                      </div>

                      <div>
                        <Label htmlFor="location">{t("needHelp.location")}</Label>
                        <Input
                          className="w-full border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                          id="location"
                          name="location"
                          placeholder={t("needHelp.locationPlaceholder")}
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="needs">{t("needHelp.needs")}</Label>
                        <Textarea
                          id="needs"
                          name="needs"
                          required
                          placeholder={t("needHelp.needsPlaceholder")}
                          className="border border-purple-300 bg-purple-50 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 min-h-[280px] lg:min-h-[360px]"
                        />
                      </div>

                      <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-md">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="consent"
                            checked={consentChecked}
                            onCheckedChange={(checked) =>
                              setConsentChecked(!!checked)
                            }
                          />
                          <Label htmlFor="consent" className="text-sm text-gray-800">
                            {t("needHelp.consent")}
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
                      {isSending ? t("needHelp.sending") : t("needHelp.sendButton")}
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
                  <h3 className="text-2xl">{t("needHelp.notAloneTitle")}</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  {t("needHelp.notAloneMessage")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accent Bottom */}
      
    </div>
  );
}
