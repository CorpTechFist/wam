import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar, Clock, MapPin, Package, User, Phone, Mail, Truck, ArrowLeft } from "lucide-react";
import { useTranslation } from "../TranslationContext";

export function DonationSchedulingPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("pickup");
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Address Information
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Donation Details
    donationType: "",
    description: "",
    estimatedSize: "",
    
    // Scheduling
    preferredDate: "",
    preferredTime: "",
    alternateDate: "",
    alternateTime: "",
    
    // Special Instructions
    specialInstructions: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scheduling Form Submitted:", { type: activeTab, data: formData });
    // Here you would typically send the data to your backend
    alert(`${activeTab === "pickup" ? "Pickup" : "Drop-off"} scheduled successfully! We'll contact you within 24 hours to confirm details.`);
  };

  const handleBackClick = () => {
    const event = new CustomEvent('navigate', { detail: 'other-donations' });
    window.dispatchEvent(event);
  };

  const inputClassName = "mt-3 bg-white border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-gray-900 placeholder:text-gray-500 rounded-lg px-4 py-3";
  const labelClassName = "text-gray-700" + " " + "font-medium";

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 bg-white" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Button
            onClick={handleBackClick}
            variant="outline"
            className="mb-8 group px-6 py-3 bg-white border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span style={{ fontWeight: '600' }}>Back to Donations</span>
          </Button>
          
          {/* Modern Title with Decorative Elements */}
          <div className="relative mb-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
            <h1 className="relative text-3xl md:text-4xl lg:text-5xl mb-4" style={{ 
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
              DONATION SCHEDULING
            </h1>
          </div>
          
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Schedule a convenient time for donation pickup or plan your drop-off visit. 
            We're here to make donating as easy as possible for you!
          </p>
          
          {/* Decorative Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
          </div>
        </div>

        {/* Main Scheduling Card */}
        <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-xl shadow-purple-100/50 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          
          <CardContent className="p-8 md:p-10">
            {/* Service Type Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-10 bg-gradient-to-r from-purple-100 to-purple-50 p-2 rounded-2xl border border-purple-200/50">
                <TabsTrigger 
                  value="pickup" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3 transition-all duration-300"
                >
                  <Truck className="w-5 h-5 mr-2" />
                  <span style={{ fontWeight: '600' }}>Schedule Pickup</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="dropoff"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-3 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  <span style={{ fontWeight: '600' }}>Plan Drop-off</span>
                </TabsTrigger>
              </TabsList>

              {/* Pickup Tab Content */}
              <TabsContent value="pickup">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service Info */}
                  <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-2xl p-6 border-l-4 border-purple-500 shadow-md mb-8">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <Truck className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-purple-700" style={{ fontWeight: '600', fontSize: '1.125rem' }}>Free Pickup Service</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our team will come to your location to collect your donations. Perfect for large items, 
                      multiple bags, or when you can't make it to our drop-off locations.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <User className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className={labelClassName}>First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className={labelClassName}>Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className={labelClassName}>Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className={labelClassName}>Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pickup Address */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <MapPin className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Pickup Address
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address" className={labelClassName}>Street Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city" className={labelClassName}>City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            required
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <Label htmlFor="state" className={labelClassName}>State *</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            required
                            className={inputClassName}
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode" className={labelClassName}>ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            required
                            className={inputClassName}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Donation Details */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <Package className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Donation Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="donationType" className={labelClassName}>Type of Donation *</Label>
                        <Input
                          id="donationType"
                          value={formData.donationType}
                          onChange={(e) => handleInputChange("donationType", e.target.value)}
                          placeholder="e.g., Clothing, Furniture, Household Items"
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="estimatedSize" className={labelClassName}>Estimated Size *</Label>
                        <Input
                          id="estimatedSize"
                          value={formData.estimatedSize}
                          onChange={(e) => handleInputChange("estimatedSize", e.target.value)}
                          placeholder="e.g., 2-3 bags, Small truck load"
                          required
                          className={inputClassName}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description" className={labelClassName}>Detailed Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Please describe the items you're donating..."
                        className={inputClassName + " min-h-[100px] resize-none"}
                      />
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <Calendar className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Pickup Scheduling
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredDate" className={labelClassName}>Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime" className={labelClassName}>Preferred Time *</Label>
                        <Input
                          id="preferredTime"
                          type="time"
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternateDate" className={labelClassName}>Alternate Date</Label>
                        <Input
                          id="alternateDate"
                          type="date"
                          value={formData.alternateDate}
                          onChange={(e) => handleInputChange("alternateDate", e.target.value)}
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="alternateTime" className={labelClassName}>Alternate Time</Label>
                        <Input
                          id="alternateTime"
                          type="time"
                          value={formData.alternateTime}
                          onChange={(e) => handleInputChange("alternateTime", e.target.value)}
                          className={inputClassName}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="space-y-4">
                    <Label htmlFor="specialInstructions" className={labelClassName}>Special Instructions</Label>
                    <Textarea
                      id="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                      placeholder="Any special instructions for our pickup team (parking, access codes, etc.)"
                      className={inputClassName + " min-h-[80px] resize-none"}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <Button 
                      type="submit"
                      className="group px-12 py-5 transition-all duration-500 shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)] transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 text-white border-2 border-purple-400/30 rounded-full outline-none relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center gap-3 relative z-10">
                        <Calendar className="w-5 h-5" />
                        <span className="text-lg" style={{ fontWeight: '600' }}>Schedule Pickup</span>
                      </div>
                    </Button>
                  </div>
                </form>
              </TabsContent>

              {/* Drop-off Tab Content */}
              <TabsContent value="dropoff">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service Info */}
                  <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50/50 rounded-2xl p-6 border-l-4 border-purple-500 shadow-md mb-8">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-purple-700" style={{ fontWeight: '600', fontSize: '1.125rem' }}>Drop-off Locations</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Plan your visit to one of our convenient drop-off locations. We'll help you unload and provide a donation receipt.
                    </p>
                    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-4 border border-yellow-200/50">
                      <p className="text-gray-800 mb-2" style={{ fontWeight: '600' }}>Main Drop-off Center:</p>
                      <p className="text-gray-700 text-sm">123 Community Drive, Your City, ST 12345</p>
                      <p className="text-gray-700 text-sm">Hours: Monday-Saturday 9AM-6PM, Sunday 12PM-5PM</p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <User className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName-dropoff" className={labelClassName}>First Name *</Label>
                        <Input
                          id="firstName-dropoff"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName-dropoff" className={labelClassName}>Last Name *</Label>
                        <Input
                          id="lastName-dropoff"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email-dropoff" className={labelClassName}>Email Address *</Label>
                        <Input
                          id="email-dropoff"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone-dropoff" className={labelClassName}>Phone Number *</Label>
                        <Input
                          id="phone-dropoff"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donation Details */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <Package className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Donation Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="donationType-dropoff" className={labelClassName}>Type of Donation *</Label>
                        <Input
                          id="donationType-dropoff"
                          value={formData.donationType}
                          onChange={(e) => handleInputChange("donationType", e.target.value)}
                          placeholder="e.g., Clothing, Books, Household Items"
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="estimatedSize-dropoff" className={labelClassName}>Estimated Size *</Label>
                        <Input
                          id="estimatedSize-dropoff"
                          value={formData.estimatedSize}
                          onChange={(e) => handleInputChange("estimatedSize", e.target.value)}
                          placeholder="e.g., 2-3 bags, Car trunk full"
                          required
                          className={inputClassName}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description-dropoff" className={labelClassName}>Detailed Description</Label>
                      <Textarea
                        id="description-dropoff"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Please describe the items you're donating..."
                        className={inputClassName + " min-h-[100px] resize-none"}
                      />
                    </div>
                  </div>

                  {/* Visit Planning */}
                  <div className="space-y-6">
                    <h3 className="flex items-center text-xl mb-6" style={{ 
                      background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '700'
                    }}>
                      <Clock className="w-5 h-5 mr-3" style={{ color: '#7c3aed' }} />
                      Plan Your Visit
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredDate-dropoff" className={labelClassName}>Preferred Date *</Label>
                        <Input
                          id="preferredDate-dropoff"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime-dropoff" className={labelClassName}>Preferred Time *</Label>
                        <Input
                          id="preferredTime-dropoff"
                          type="time"
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                          required
                          className={inputClassName}
                        />
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-5 border-l-4 border-yellow-400 shadow-sm">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong className="text-yellow-700">Note:</strong> While appointments aren't required, scheduling helps us ensure staff availability to assist with your donation and provide proper documentation.
                      </p>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div className="space-y-4">
                    <Label htmlFor="specialInstructions-dropoff" className={labelClassName}>Special Notes</Label>
                    <Textarea
                      id="specialInstructions-dropoff"
                      value={formData.specialInstructions}
                      onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                      placeholder="Any special considerations or questions about your donation"
                      className={inputClassName + " min-h-[80px] resize-none"}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <Button 
                      type="submit"
                      className="group px-12 py-5 transition-all duration-500 shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_20px_60px_rgba(139,92,246,0.4)] transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 text-white border-2 border-purple-400/30 rounded-full outline-none relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <div className="flex items-center gap-3 relative z-10">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg" style={{ fontWeight: '600' }}>Schedule Drop-off</span>
                      </div>
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Information Footer */}
        <Card className="bg-gradient-to-br from-purple-50 via-white to-purple-50/30 border-2 border-purple-200/60 shadow-lg mt-8 rounded-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl mb-4" style={{ 
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #FFD700 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700'
            }}>Need Help?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Have questions about your donation or need assistance with scheduling?
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200/50">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-800" style={{ fontWeight: '500' }}>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-purple-200/50">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-800" style={{ fontWeight: '500' }}>donations@wamalliance.org</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
