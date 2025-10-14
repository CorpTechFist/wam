import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Phone, Clock, AlertTriangle, Heart, Shield, Users } from "lucide-react";
import { useState } from "react";

export function NeedHelpNow() {
  const [consentChecked, setConsentChecked] = useState(false);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Purple/Gold Accent Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(139 92 246) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
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
              
              {/* Contact Information Box */}
              <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-300 p-8 shadow-lg">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Phone className="w-6 h-6 text-purple-700" />
                  <h2 className="text-2xl text-purple-800">
                    Call 385-414-4144
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-800">
                  <div className="flex items-start gap-3 justify-center">
                    <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-base leading-relaxed">
                      A WAM team member will reply to your message within 24-48 hours. Please stay safe and we will be in touch shortly!
                    </p>
                  </div>
                  
                  <div className="border-t-2 border-purple-200 pt-4 mt-4">
                    <p className="text-sm text-gray-700 mb-2">Love and strength to you-</p>
                    <p className="text-purple-700">The WAM Team</p>
                  </div>
                </div>
              </div>

              {/* Emergency Resources Card */}
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
                          If you are in immediate danger, please call <span className="font-bold text-red-700">911</span> or go to your nearest emergency room. For the National Suicide Prevention Lifeline, call <span className="font-bold text-red-700">988</span>.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-5xl mx-auto">
              <div className="bg-white border-2 border-purple-300 shadow-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-purple-200">
                  <Heart className="w-6 h-6 text-purple-600" />
                  <h3 className="text-2xl text-purple-900">Reach Out to Us</h3>
                </div>
                
                <form className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Form Fields */}
                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="name" className="text-gray-900 mb-2 block">Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="age" className="text-gray-900 mb-2 block">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="Enter your age"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-gray-900 mb-2 block">Your Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="regarding" className="text-gray-900 mb-2 block">Regarding</Label>
                        <Input
                          id="regarding"
                          type="text"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="What is this regarding?"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-900 mb-2 block">Your Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <Label htmlFor="location" className="text-gray-900 mb-2 block">Current Location</Label>
                        <Input
                          id="location"
                          type="text"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="Where can we find you? (shelter, streets, etc.)"
                        />
                      </div>
                    </div>

                    {/* Right Column - Large Text Area */}
                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="needs" className="text-gray-900 mb-2 block">What are your needs and what support are you looking for? *</Label>
                        <Textarea
                          id="needs"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none min-h-[280px] lg:min-h-[360px] resize-none bg-white text-gray-900 placeholder:text-gray-400"
                          placeholder="Please describe your needs and the support you're looking for..."
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div className="bg-purple-50 border-2 border-purple-200 p-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox 
                            id="consent" 
                            className="border-2 border-purple-400 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                            checked={consentChecked}
                            onCheckedChange={(checked) => setConsentChecked(!!checked)}
                          />
                          <Label htmlFor="consent" className="text-sm text-gray-800 leading-relaxed">
                            By checking this box and submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
                          </Label>
                        </div>
                      </div>

                      {/* reCAPTCHA */}
                      {consentChecked && (
                        <div className="flex justify-center pt-4">
                          <div className="bg-gray-50 border-2 border-gray-300 p-4 w-fit">
                            <div className="flex items-center space-x-3">
                              <Checkbox 
                                id="recaptcha" 
                                className="border-2 border-gray-400 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 w-6 h-6"
                              />
                              <Label htmlFor="recaptcha" className="text-sm text-gray-800">
                                I'm not a robot
                              </Label>
                              <div className="ml-4 flex flex-col items-center">
                                <div className="text-xs text-gray-600 mb-1">reCAPTCHA</div>
                                <div className="w-8 h-6 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                                  <div className="w-4 h-3 bg-white/20"></div>
                                </div>
                                <div className="text-xs text-gray-500 mt-1">Privacy - Terms</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-4">
                    <Button 
                      type="submit"
                      className="px-10 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Support Statement */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-white shadow-xl text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-6 h-6" />
                  <h3 className="text-2xl">You're Not Alone</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  WAM Alliance is here to support you through difficult times. Our team is dedicated to providing compassionate care and connecting you with the resources you need. Your message matters, and we're here to listen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Purple/Gold Accent Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
    </div>
  );
}