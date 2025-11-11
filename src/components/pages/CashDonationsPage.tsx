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
import { toast } from "sonner";

import wamLogo from "../assets/logo/3dedd5dd8d7d270478c178c7d281ad8f8472cbc4.png";
import venmoIcon from "../../assets/icons/venmoicon.png";
import paypalIcon from "../../assets/icons/paypalicon.png"


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
<div className="max-w-3xl mx-auto"> {/* increased from 2xl → 3xl */}
  <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-2xl shadow-purple-200/60 overflow-hidden relative transition-all duration-500 p-8 md:p-10">
    
    {/* Top gradient accent */}
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-500"></div>
    
    {/* Decorative corner elements */}
    <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
    
    {/* Header with Logo */}
    <div className="text-center mb-6 relative z-10"> {/* reduced mb from 10 → 6 */}
      <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center shadow-lg shadow-purple-200/50 border-2 border-purple-200/60">
        <DollarSign className="w-10 h-10 text-purple-600" />
      </div>

      <h1
        className="text-3xl md:text-4xl mb-2"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a78bfa 25%, #FFD700 50%, #8b5cf6 75%, #7c3aed 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: "700",
          letterSpacing: "-0.02em",
        }}
      >
        Make a Donation
      </h1>

      {/* Decorative separator */}
      <div className="flex justify-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-300"></div>
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg shadow-yellow-300"></div>
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg shadow-purple-300"></div>
      </div>

      <p className="text-gray-600 text-sm mb-2">
        Support WAM Alliance — Together We Are The Change
      </p>
    </div>

    {/* Payment Method Selection */}
    <div className="text-center mt-2"> {/* added small top margin */}
      <Label className="text-base text-gray-800 mb-3 block font-medium tracking-wide">
        Choose Your Preferred Payment Method
      </Label>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {/* PayPal */}
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
            <img
              src={paypalIcon}
              alt="PayPal"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <Button
            type="button"
            onClick={() => {
              window.open(
                "https://www.paypal.com/donate/?hosted_button_id=3CBG2H6Y3ZADN",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <div className="flex items-center gap-2 justify-center">
              <span>Donate with PayPal</span>
            </div>
          </Button>
        </div>

        {/* Venmo */}
        <div className="flex flex-col items-center gap-4 group">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
            <img
              src={venmoIcon}
              alt="Venmo"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <Button
            type="button"
            onClick={() => {
              window.open(
                "https://venmo.com/u/Tonya-Jones-Smith",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <span className="text-white">Pay with Venmo</span>
          </Button>
        </div>
      </div>
    </div>
  </Card>
</div>

      </div>
    </div>
  );
}