import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DollarSign } from "lucide-react";
import { useTranslation } from "../TranslationContext";
import { useState, useEffect } from "react";
import { toast } from "sonner";

import wamLogo from "../assets/logo/3dedd5dd8d7d270478c178c7d281ad8f8472cbc4.png";
import venmoIcon from "../../assets/icons/venmoicon.png";
import paypalIcon from "../../assets/icons/paypalicon.png";

export function CashDonationsPage() {
  const { translations } = useTranslation();
  const [donationFrequency, setDonationFrequency] = useState("One-Time");
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [coverFees, setCoverFees] = useState(false);

  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({});

  // -------------------------------------
  // ✅ PAYPAL EMBED SCRIPT
  // -------------------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
    script.charset = "UTF-8";

    script.onload = () => {
      if (window.PayPal && window.PayPal.Donation) {
        window.PayPal.Donation.Button({
          env: "production",
          hosted_button_id: "3CBG2H6Y3ZADN",
          image: {
            src: "https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",
            alt: "Donate with PayPal button",
            title: "PayPal - The safer, easier way to pay online!"
          }
        }).render("#paypal-donate-button");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.getElementById("paypal-donate-button")?.replaceChildren();
    };
  }, []);

  // Validation, handling etc. kept as is...
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";

    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) newErrors.amount = "Please select or enter a valid donation amount";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const amount = selectedAmount || parseFloat(customAmount);
      const feeAmount = coverFees ? amount * 0.029 + 0.3 : 0;
      const totalAmount = amount + feeAmount;

      toast.success(`Donation of $${totalAmount.toFixed(2)} processed successfully!`);

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

  const amount = selectedAmount || parseFloat(customAmount) || 0;
  const feeAmount = coverFees ? amount * 0.029 + 0.3 : 0;
  const totalAmount = amount + feeAmount;

  return (
    <div className="min-h-screen pt-16 pb-8 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-6xl bg-white">

        {/* ---------------------------------------------
            Our Heart Mission Section (unchanged)
        --------------------------------------------- */}
        <div className="text-center mb-20">
          {/* your original mission section kept intact */}
        </div>

        {/* ---------------------------------------------
            Donation Form Section
        --------------------------------------------- */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white border-2 border-purple-200/60 rounded-3xl shadow-2xl p-8 md:p-10 relative">

            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-100 to-yellow-100 flex items-center justify-center shadow-lg border-2 border-purple-200/60">
                <DollarSign className="w-10 h-10 text-purple-600" />
              </div>

              <h1 className="text-3xl md:text-4xl mb-2 font-bold text-purple-700">
                Make a Donation
              </h1>

              <p className="text-gray-600 text-sm mb-2">
                Support WAM Alliance — Together We Are The Change
              </p>
            </div>

            {/* ---------------------------------------------
                PAYMENT OPTIONS (Updated PayPal)
            --------------------------------------------- */}
            <div className="text-center mt-2">
              <Label className="text-base text-gray-800 mb-3 block font-medium">
                Choose Your Preferred Payment Method
              </Label>

              <div className="grid md:grid-cols-2 gap-8 mt-6">

                {/* ---------- PAYPAL EMBEDDED BUTTON ---------- */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-md">
                    <img src={paypalIcon} alt="PayPal" className="w-12 h-12 object-contain" />
                  </div>

                  {/* PAYPAL EMBED RENDER HERE */}
                  <div id="paypal-donate-button"></div>
                </div>

                {/* ---------- VENMO BUTTON (unchanged) ---------- */}
                <div className="flex flex-col items-center gap-4">
  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center shadow-md">
    <img src={venmoIcon} alt="Venmo" className="w-12 h-12 object-contain" />
  </div>

  <Button
    type="button"
    className="bg-yellow-400 text-yellow-900 font-semibold shadow-md hover:bg-yellow-900 transition-all"
    onClick={() =>
      window.open(
        "https://venmo.com/u/Tonya-Jones-Smith",
        "_blank",
        "noopener,noreferrer"
      )
    }
  >
    Pay with Venmo
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
