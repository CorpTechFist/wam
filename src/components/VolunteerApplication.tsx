import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";
import { CalendarIcon, Heart, User, Mail, Phone, MapPin, Award, CheckCircle2, Sparkles } from "lucide-react";

export function VolunteerApplication() {
  const [dateAvailable, setDateAvailable] = useState<Date>();
  const [showRecaptcha, setShowRecaptcha] = useState<boolean>(false);

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
            {/* Page Title */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-purple-50 border-2 border-purple-200 rounded-none mb-6">
                <Heart className="w-5 h-5 text-purple-600" />
                <span className="text-sm tracking-wider text-purple-800">JOIN OUR TEAM</span>
              </div>
              <h1 className="text-3xl md:text-5xl tracking-tight text-purple-900 mb-4">
                Volunteer Sign Up
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Side - Information */}
              <div className="space-y-8">
                {/* Welcome Message */}
                <Card className="bg-gradient-to-br from-purple-50 via-white to-yellow-50 border-2 border-purple-300 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-2"></div>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl text-purple-900 mb-3">
                          Do Something Great!
                        </h2>
                        <p className="text-gray-800 leading-relaxed">
                          We are always looking for innovative ideas that serve our mission!
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t-2 border-purple-200 pt-6 mt-6">
                      <h3 className="text-lg text-purple-700 mb-4 italic">
                        Everything Counts in Large Amounts!
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        All volunteers are screened and subject to approval.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Benefits Section */}
                <Card className="bg-white border-2 border-yellow-400 shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2"></div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-6 h-6 text-yellow-600" />
                      <h3 className="text-xl text-purple-900">
                        Volunteer Benefits
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          Fulfill community service hours
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          Make a real difference in people's lives
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          Join a supportive community of changemakers
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">
                          Develop new skills and experiences
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Application Form */}
              <Card className="bg-white border-2 border-purple-300 shadow-2xl">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                  <h3 className="text-2xl mb-2">Application Form</h3>
                  <p className="text-purple-100 text-sm">Fill out the form below to join our volunteer team</p>
                </div>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="fullName" className="text-gray-900 flex items-center gap-2 text-sm">
                          <User className="w-3 h-3 text-purple-600" />
                          Full Name *
                        </Label>
                        <Input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="email" className="text-gray-900 flex items-center gap-2 text-sm">
                          <Mail className="w-3 h-3 text-purple-600" />
                          Email *
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Volunteer For */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="text-gray-900 flex items-center gap-2 text-sm">
                          <Phone className="w-3 h-3 text-purple-600" />
                          Phone Number
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder="(123) 456-7890"
                        />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="volunteerFor" className="text-gray-900 flex items-center gap-2 text-sm">
                          <Heart className="w-3 h-3 text-purple-600" />
                          What do you want to volunteer for?
                        </Label>
                        <Input
                          type="text"
                          id="volunteerFor"
                          name="volunteerFor"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder="e.g., Advocacy, Events, Meal Prep"
                        />
                      </div>
                    </div>

                    {/* Row 3: Date Available & Transportation */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="dateAvailable" className="text-gray-900 flex items-center gap-2 text-sm">
                          <CalendarIcon className="w-3 h-3 text-purple-600" />
                          Date Available
                        </Label>
                        <Popover>
                          <PopoverTrigger className="w-full block">
                            <div className="w-full border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 px-3 py-2 h-9 text-sm flex items-center justify-start cursor-pointer hover:bg-purple-50">
                              <CalendarIcon className="mr-2 h-3 w-3" />
                              {dateAvailable ? dateAvailable.toLocaleDateString() : "Select a date"}
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
                          id="dateAvailable"
                          name="dateAvailable"
                          value={dateAvailable ? dateAvailable.toISOString().split('T')[0] : ''}
                        />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="transportation" className="text-gray-900 flex items-center gap-2 text-sm">
                          <MapPin className="w-3 h-3 text-purple-600" />
                          Do you have transportation?
                        </Label>
                        <Input
                          type="text"
                          id="transportation"
                          name="transportation"
                          className="border-2 border-purple-200 focus:border-purple-500 rounded-none bg-white text-gray-900 h-9"
                          placeholder="Yes/No"
                        />
                      </div>
                    </div>

                    {/* Skills - Full Width */}
                    <div className="space-y-1">
                      <Label htmlFor="skills" className="text-gray-900 flex items-center gap-2 text-sm">
                        <Award className="w-3 h-3 text-purple-600" />
                        What are your skills?
                      </Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        rows={3}
                        className="border-2 border-purple-200 focus:border-purple-500 rounded-none resize-none bg-white text-gray-900"
                        placeholder="Tell us about your skills and experience..."
                        style={{ resize: 'none' }}
                      />
                    </div>

                    {/* Agreement Checkbox */}
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
                          You are submitting your information so our Volunteer Unit may contact you via the information provided. We All Matter thanks you for your love and support!
                        </label>
                      </div>
                    </div>
                    
                    {/* reCAPTCHA Section */}
                    {showRecaptcha && (
                      <div className="flex justify-center pt-2">
                        <div className="bg-gray-50 border-2 border-gray-300 p-3 w-fit">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="recaptcha"
                              className="w-4 h-4 accent-purple-600"
                            />
                            <span className="text-xs text-gray-700">I'm not a robot</span>
                            <div className="ml-3 flex flex-col items-center">
                              <div className="text-xs text-gray-600 mb-0.5">reCAPTCHA</div>
                              <div className="w-7 h-5 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
                                <div className="w-3 h-2 bg-white/20"></div>
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">Privacy - Terms</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4 flex justify-center">
                      <Button
                        type="submit"
                        className="px-8 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-2 border-purple-400 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <Heart className="w-3 h-3 mr-2" />
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Purple/Gold Accent Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-yellow-500 to-purple-600"></div>
    </div>
  );
}