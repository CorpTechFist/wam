import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DollarSign, CreditCard, Building2, Smartphone, User, Mail, Phone, MapPin, Calendar, Lock } from "lucide-react";
import { useTranslation } from "../TranslationContext";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import wamLogo from "figma:asset/40ba164eeb1ae5b84915550983abfb0f4b5437ab.png";

export function CashDonationsPage() {
  const { translations } = useTranslation();
  const [donationFrequency, setDonationFrequency] = useState("One-Time");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [coverFees, setCoverFees] = useState(false);
  
  // Form state for donor information
  const [formData, setFormData] = useState({
    // Donor Bio Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    
    // Billing Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    
    // Card Information
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: ""
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    
    // Card information validation
    if (!formData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryMonth) newErrors.expiryMonth = "Expiry month is required";
    if (!formData.expiryYear) newErrors.expiryYear = "Expiry year is required";
    if (!formData.cvv.trim()) newErrors.cvv = "CVV is required";
    if (!formData.cardholderName.trim()) newErrors.cardholderName = "Cardholder name is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Card number validation (basic)
    if (formData.cardNumber && formData.cardNumber.replace(/\s/g, '').length < 13) {
      newErrors.cardNumber = "Please enter a valid card number";
    }

    // CVV validation
    if (formData.cvv && (formData.cvv.length < 3 || formData.cvv.length > 4)) {
      newErrors.cvv = "CVV must be 3 or 4 digits";
    }

    // Amount validation
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      newErrors.amount = "Please select or enter a valid donation amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const amount = selectedAmount || parseFloat(customAmount);
      const feeAmount = coverFees ? (amount * 0.029 + 0.30) : 0;
      const totalAmount = amount + feeAmount;
      
      // Simulate form submission
      toast.success(`Donation of $${totalAmount.toFixed(2)} processed successfully! Thank you for your generosity.`);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: "United States",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        cardholderName: ""
      });
      setSelectedAmount(0);
      setCustomAmount("");
      setShowCreditCardForm(false);
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    // Add spaces every 4 digits
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, i) => currentYear + i);
  const months = [
    { value: "01", label: "01 - January" },
    { value: "02", label: "02 - February" },
    { value: "03", label: "03 - March" },
    { value: "04", label: "04 - April" },
    { value: "05", label: "05 - May" },
    { value: "06", label: "06 - June" },
    { value: "07", label: "07 - July" },
    { value: "08", label: "08 - August" },
    { value: "09", label: "09 - September" },
    { value: "10", label: "10 - October" },
    { value: "11", label: "11 - November" },
    { value: "12", label: "12 - December" }
  ];

  const amount = selectedAmount || parseFloat(customAmount) || 0;
  const feeAmount = coverFees ? (amount * 0.029 + 0.30) : 0;
  const totalAmount = amount + feeAmount;

  return (
    <div className="min-h-screen pt-28 pb-8 relative overflow-hidden bg-white" style={{ backgroundColor: '#ffffff !important', background: '#ffffff !important' }}>
      <div className="container mx-auto px-4 max-w-6xl bg-white" style={{ backgroundColor: '#ffffff' }}>
        {/* Our Heart Our Mission Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 opacity-20 blur-3xl rounded-full"></div>
            <h2 className="relative text-2xl md:text-3xl lg:text-4xl mb-4" style={{ 
              fontFamily: 'cursive',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #8b5cf6 50%, #c4b5fd 75%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '700',
              letterSpacing: '-0.02em'
            }}>
              Our Heart Our Mission
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-yellow-400 to-purple-500 rounded-full opacity-40"></div>
            <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 via-yellow-400 to-purple-500 rounded-full opacity-40"></div>
            
            <div className="bg-gradient-to-br from-purple-50/80 via-white to-purple-50/80 border-2 border-purple-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-purple-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 relative z-10" style={{ 
                fontFamily: 'Georgia, serif',
                lineHeight: '1.8'
              }}>
                At We All Matter Alliance, every one of us on the board has <span className="text-purple-700" style={{ fontWeight: '600' }}>faced deep wounds</span> and found our way forward. We know what it feels like to walk through darkness and we have chosen to <span className="text-purple-700" style={{ fontWeight: '600' }}>light the path for others</span>. Our lived experience fuels our compassion and our mission is to <span className="text-purple-700" style={{ fontWeight: '600' }}>uplift every soul</span> who reaches out!
              </p>
              
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Form Section */}
        <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-2xl shadow-purple-200/60 overflow-hidden relative transition-all duration-500 p-8 md:p-10">
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
              
              {/* Header with Logo */}
              <div className="text-center mb-10 relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center shadow-lg shadow-purple-200/50 border-2 border-purple-200/60">
                  <DollarSign className="w-10 h-10 text-purple-600" />
                </div>
                
                <h1 className="text-3xl md:text-4xl mb-3" style={{ 
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                  letterSpacing: '-0.02em'
                }}>
                  Make a Donation
                </h1>
                
                {/* Decorative separator */}
                <div className="flex justify-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
                </div>
                
                <p className="text-gray-600 text-sm">Support WAM Alliance - Together We Are The Change</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* Donation Frequency Tabs */}
                <div>
                  <Label className="text-sm text-gray-700 mb-3 block text-center">Select Frequency</Label>
                  <div className="flex bg-gradient-to-r from-purple-50 to-yellow-50 rounded-full p-1.5 max-w-md mx-auto border-2 border-purple-200/60 shadow-lg">
                    <button 
                      type="button"
                      onClick={() => setDonationFrequency("One-Time")}
                      className={`flex-1 py-3 px-6 rounded-full text-sm transition-all duration-300 ${
                        donationFrequency === "One-Time" 
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-300/50" 
                          : "text-gray-600 hover:text-purple-700 hover:bg-white/50"
                      }`}
                    >
                      One-Time
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDonationFrequency("Monthly")}
                      className={`flex-1 py-3 px-6 rounded-full text-sm transition-all duration-300 ${
                        donationFrequency === "Monthly" 
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-300/50" 
                          : "text-gray-600 hover:text-purple-700 hover:bg-white/50"
                      }`}
                    >
                      Monthly
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDonationFrequency("Yearly")}
                      className={`flex-1 py-3 px-6 rounded-full text-sm transition-all duration-300 ${
                        donationFrequency === "Yearly" 
                          ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-300/50" 
                          : "text-gray-600 hover:text-purple-700 hover:bg-white/50"
                      }`}
                    >
                      Yearly
                    </button>
                  </div>
                </div>

                {/* Donation Amount */}
                <div className="bg-gradient-to-br from-purple-50/50 to-yellow-50/50 rounded-2xl p-6 border border-purple-200/40">
                  <Label className="text-sm text-gray-700 mb-4 block text-center flex items-center justify-center gap-2">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                    Choose Your Impact
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {[10, 20, 50, 100].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 border-2 group hover:-translate-y-1 hover:shadow-lg ${
                          selectedAmount === amount 
                            ? "bg-gradient-to-br from-purple-600 to-purple-700 border-purple-400 text-white shadow-lg shadow-purple-300/50" 
                            : "bg-white hover:bg-purple-50 border-purple-200/60 hover:border-purple-400 text-gray-700"
                        }`}
                      >
                        <div className="text-2xl mb-1">${amount}</div>
                        <div className="text-xs opacity-80">USD</div>
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-4 h-5 w-5 text-purple-400" />
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      className="pl-12 py-4 text-base border-2 border-purple-200/60 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
                      min="1"
                    />
                  </div>
                  {errors.amount && <p className="text-red-500 text-xs mt-3 text-center">{errors.amount}</p>}
                </div>

                {/* Fee Coverage */}
                <div className="bg-white rounded-xl p-5 border-2 border-purple-200/60 hover:border-purple-300 transition-all duration-300 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Checkbox 
                      id="cover-fees" 
                      checked={coverFees}
                      onCheckedChange={setCoverFees}
                      className="h-5 w-5 mt-1 border-purple-300"
                    />
                    <div className="flex-1">
                      <Label htmlFor="cover-fees" className="text-sm text-gray-800 cursor-pointer block mb-1">
                        Help cover processing fees
                      </Label>
                      <p className="text-xs text-gray-600">
                        Add ${feeAmount.toFixed(2)} to ensure 100% of your donation goes directly to our cause
                      </p>
                    </div>
                  </div>
                </div>

                {/* Total Amount Display */}
                {amount > 0 && (
                  <div className="bg-gradient-to-br from-purple-600 to-purple-700 border-2 border-purple-400 rounded-2xl p-6 shadow-xl shadow-purple-300/50">
                    <div className="flex justify-between items-center text-sm text-purple-100 mb-2">
                      <span>Donation Amount</span>
                      <span className="text-white">${amount.toFixed(2)}</span>
                    </div>
                    {coverFees && (
                      <div className="flex justify-between items-center text-sm text-purple-100 mb-2">
                        <span>Processing Fee</span>
                        <span className="text-white">${feeAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-lg border-t border-purple-400 pt-3 mt-3 text-white">
                      <span>Total Amount</span>
                      <span className="text-2xl" style={{ fontWeight: '700' }}>${totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                )}

                {/* Payment Method Selection */}
                <div>
                  <Label className="text-sm text-gray-700 mb-4 block text-center">Choose Payment Method</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="py-3 px-5 text-sm bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-2 border-purple-400 text-white transition-all duration-300 rounded-none shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                      onClick={() => {
                        window.open('https://www.paypal.com/donate/?hosted_button_id=3CBG2H6Y3ZADN', '_blank', 'noopener,noreferrer');
                        toast.success("Redirecting to PayPal...");
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Donate with PayPal</span>
                      </div>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className={`py-3 px-5 text-sm border-2 transition-all duration-300 rounded-none shadow-lg hover:shadow-xl hover:-translate-y-1 group ${
                        showCreditCardForm 
                          ? "bg-gradient-to-r from-purple-700 to-purple-800 border-purple-500 text-white"
                          : "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 border-purple-400 text-white"
                      }`}
                      onClick={() => setShowCreditCardForm(!showCreditCardForm)}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Credit/Debit Card</span>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Credit Card Form */}
                {showCreditCardForm && (
                  <div className="space-y-8 bg-gradient-to-br from-purple-50/30 to-yellow-50/30 rounded-2xl p-6 md:p-8 border-2 border-purple-200/60">
                    {/* Donor Information */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center">
                          <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-lg text-gray-800" style={{ fontWeight: '600' }}>
                          Donor Information
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm text-gray-700 mb-2 block">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className={`py-3 border-2 rounded-xl ${errors.firstName ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                          />
                          {errors.firstName && <p className="text-red-500 text-xs mt-2">{errors.firstName}</p>}
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm text-gray-700 mb-2 block">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            className={`py-3 border-2 rounded-xl ${errors.lastName ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                          />
                          {errors.lastName && <p className="text-red-500 text-xs mt-2">{errors.lastName}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="email" className="text-sm text-gray-700 mb-2 block">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-4 h-4 w-4 text-purple-400" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className={`pl-11 py-3 border-2 rounded-xl ${errors.email ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                          </div>
                          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sm text-gray-700 mb-2 block">Phone Number *</Label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-4 h-4 w-4 text-purple-400" />
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className={`pl-11 py-3 border-2 rounded-xl ${errors.phone ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                          </div>
                          {errors.phone && <p className="text-red-500 text-xs mt-2">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor="message" className="text-sm text-gray-700 mb-2 block">Message (Optional)</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Share why you're supporting our mission..."
                          rows={3}
                          className="border-2 border-purple-200/60 focus:border-purple-400 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Billing Address */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-lg text-gray-800" style={{ fontWeight: '600' }}>
                          Billing Address
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="address" className="text-sm text-gray-700 mb-2 block">Street Address *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            className={`py-3 border-2 rounded-xl ${errors.address ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                          />
                          {errors.address && <p className="text-red-500 text-xs mt-2">{errors.address}</p>}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city" className="text-sm text-gray-700 mb-2 block">City *</Label>
                            <Input
                              id="city"
                              value={formData.city}
                              onChange={(e) => handleInputChange("city", e.target.value)}
                              className={`py-3 border-2 rounded-xl ${errors.city ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                            {errors.city && <p className="text-red-500 text-xs mt-2">{errors.city}</p>}
                          </div>
                          <div>
                            <Label htmlFor="state" className="text-sm text-gray-700 mb-2 block">State *</Label>
                            <Input
                              id="state"
                              value={formData.state}
                              onChange={(e) => handleInputChange("state", e.target.value)}
                              className={`py-3 border-2 rounded-xl ${errors.state ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                            {errors.state && <p className="text-red-500 text-xs mt-2">{errors.state}</p>}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="zipCode" className="text-sm text-gray-700 mb-2 block">ZIP Code *</Label>
                            <Input
                              id="zipCode"
                              value={formData.zipCode}
                              onChange={(e) => handleInputChange("zipCode", e.target.value)}
                              className={`py-3 border-2 rounded-xl ${errors.zipCode ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                            {errors.zipCode && <p className="text-red-500 text-xs mt-2">{errors.zipCode}</p>}
                          </div>
                          <div>
                            <Label htmlFor="country" className="text-sm text-gray-700 mb-2 block">Country</Label>
                            <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                              <SelectTrigger className="py-3 border-2 border-purple-200/60 rounded-xl">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="United States">United States</SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                <SelectItem value="Australia">Australia</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center">
                          <Lock className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg text-gray-800" style={{ fontWeight: '600' }}>
                            Payment Information
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">Your payment is secured with SSL encryption</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardholderName" className="text-sm text-gray-700 mb-2 block">Cardholder Name *</Label>
                          <Input
                            id="cardholderName"
                            value={formData.cardholderName}
                            onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                            className={`py-3 border-2 rounded-xl ${errors.cardholderName ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                          />
                          {errors.cardholderName && <p className="text-red-500 text-xs mt-2">{errors.cardholderName}</p>}
                        </div>
                        
                        <div>
                          <Label htmlFor="cardNumber" className="text-sm text-gray-700 mb-2 block">Card Number *</Label>
                          <div className="relative">
                            <CreditCard className="absolute left-4 top-4 h-4 w-4 text-purple-400" />
                            <Input
                              id="cardNumber"
                              value={formData.cardNumber}
                              onChange={(e) => handleInputChange("cardNumber", formatCardNumber(e.target.value))}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              className={`pl-11 py-3 border-2 rounded-xl ${errors.cardNumber ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                          </div>
                          {errors.cardNumber && <p className="text-red-500 text-xs mt-2">{errors.cardNumber}</p>}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="expiryMonth" className="text-sm text-gray-700 mb-2 block">Month *</Label>
                            <Select value={formData.expiryMonth} onValueChange={(value) => handleInputChange("expiryMonth", value)}>
                              <SelectTrigger className={`py-3 border-2 rounded-xl ${errors.expiryMonth ? "border-red-500" : "border-purple-200/60"}`}>
                                <SelectValue placeholder="MM" />
                              </SelectTrigger>
                              <SelectContent>
                                {months.map((month) => (
                                  <SelectItem key={month.value} value={month.value}>
                                    {month.value}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.expiryMonth && <p className="text-red-500 text-xs mt-2">{errors.expiryMonth}</p>}
                          </div>
                          <div>
                            <Label htmlFor="expiryYear" className="text-sm text-gray-700 mb-2 block">Year *</Label>
                            <Select value={formData.expiryYear} onValueChange={(value) => handleInputChange("expiryYear", value)}>
                              <SelectTrigger className={`py-3 border-2 rounded-xl ${errors.expiryYear ? "border-red-500" : "border-purple-200/60"}`}>
                                <SelectValue placeholder="YYYY" />
                              </SelectTrigger>
                              <SelectContent>
                                {years.map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {errors.expiryYear && <p className="text-red-500 text-xs mt-2">{errors.expiryYear}</p>}
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-sm text-gray-700 mb-2 block">CVV *</Label>
                            <Input
                              id="cvv"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, ''))}
                              placeholder="123"
                              maxLength={4}
                              className={`py-3 border-2 rounded-xl ${errors.cvv ? "border-red-500" : "border-purple-200/60 focus:border-purple-400"}`}
                            />
                            {errors.cvv && <p className="text-red-500 text-xs mt-2">{errors.cvv}</p>}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full text-white py-6 text-base transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-xl shadow-purple-300/50 hover:shadow-2xl hover:shadow-purple-400/60 hover:-translate-y-1 rounded-xl border-2 border-purple-400"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>Complete Secure Donation - ${totalAmount.toFixed(2)}</span>
                      </div>
                    </Button>
                    
                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mt-4">
                      <Lock className="w-3 h-3" />
                      <span>256-bit SSL Encrypted & PCI Compliant</span>
                    </div>
                  </div>
                )}
              </form>
            </Card>
        </div>
      </div>
    </div>
  );
}