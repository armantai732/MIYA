import React, { useState } from 'react';
import {
  FaMosque,
  FaHandHoldingHeart,
  FaCreditCard,
  FaUniversity,
  FaWallet,
  FaEllipsisH,
  FaShieldAlt,
} from 'react-icons/fa';

const presetAmounts = [
  {
    id: 1,
    amount: 501,
    display: '₹ 501',
    subtitle: 'Support Our Mission',
    popular: false,
  },
  {
    id: 2,
    amount: 1001,
    display: '₹ 1,001',
    subtitle: 'Greater Impact',
    popular: true,
  },
  {
    id: 3,
    amount: 5001,
    display: '₹ 5,001',
    subtitle: 'For a Better Tomorrow',
    popular: false,
  },
];

const paymentMethods = [
  { id: 'upi', label: 'UPI / Cards', icon: <FaCreditCard /> },
  { id: 'netbanking', label: 'Net Banking', icon: <FaUniversity /> },
  { id: 'wallets', label: 'Wallets', icon: <FaWallet /> },
  { id: 'other', label: 'Other', icon: <FaEllipsisH /> },
];

const DonationFormSection = () => {
  const [selectedPreset, setSelectedPreset] = useState(1001);
  const [frequency, setFrequency] = useState('One Time');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '1001',
  });

  const handlePresetSelect = (amt) => {
    setSelectedPreset(amt);
    setFormData((prev) => ({ ...prev, amount: amt.toString() }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'amount') {
      setSelectedPreset(Number(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.fullName || 'Donor'}! Proceeding with ₹${formData.amount} (${frequency}) via ${paymentMethod.toUpperCase()}.`
    );
  };

  return (
    <section
      id="donate-now"
      className="relative w-full bg-[#fcf8ed] py-14 sm:py-16 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden"
    >
      {/* Background Subtle Islamic Geometric Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('')`,
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 max-w-2xl mx-auto mb-2">
            {/* Double Golden Line Left */}
            <div className="flex-grow flex flex-col space-y-1">
              <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
              <span className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#09261b] tracking-wide px-2 whitespace-nowrap">
              Choose Your Donation Amount
            </h2>

            {/* Double Golden Line Right */}
            <div className="flex-grow flex flex-col space-y-1">
              <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/60 to-[#c99b32]"></span>
              <span className="h-[1px] bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#c99b32]"></span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-amber-950/75 font-medium">
            Select an amount or enter your own contribution
          </p>
        </div>

        {/* ================= 3 DONATION AMOUNT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {presetAmounts.map((item) => {
            const isSelected = selectedPreset === item.amount;
            return (
              <div
                key={item.id}
                onClick={() => handlePresetSelect(item.amount)}
                className={`relative cursor-pointer rounded-2xl p-6 sm:p-7 text-center transition-all duration-300 border-2 overflow-hidden flex flex-col items-center justify-center shadow-sm hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#042417] via-[#073321] to-[#031e13] border-[#d4af37] text-white shadow-xl'
                    : 'bg-[#f7f2e1]/90 border-[#d4af37]/40 text-[#09261b] hover:border-[#d4af37]'
                }`}
              >
                {/* Most Popular Diagonal Corner Ribbon */}
                {item.popular && (
                  <div className="absolute top-3 -right-9 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#c99b32] text-[#031e13] text-[10px] sm:text-xs font-bold px-10 py-1 rotate-[25deg] shadow-md tracking-wide">
                    Most Popular
                  </div>
                )}

                {/* Mosque + Hand Emblem */}
                <div
                  className={`relative flex flex-col items-center justify-center mb-3 ${
                    isSelected ? 'text-[#ebd082]' : 'text-[#09261b]'
                  }`}
                >
                  <FaMosque className="text-2xl sm:text-3xl mb-0.5" />
                  <FaHandHoldingHeart className="text-lg sm:text-xl -mt-1 opacity-90" />
                </div>

                {/* Price Text */}
                <div
                  className={`text-2xl sm:text-3xl font-serif font-bold mb-1.5 ${
                    isSelected ? 'text-[#ebd082]' : 'text-[#09261b]'
                  }`}
                >
                  {item.display}
                </div>

                {/* Subtitle */}
                <p
                  className={`text-xs sm:text-sm font-medium ${
                    isSelected ? 'text-amber-50/90' : 'text-amber-950/80'
                  }`}
                >
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* ================= ONE TIME / MONTHLY PILL TOGGLE ================= */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center bg-[#f4eedc] border border-[#d4af37]/50 rounded-full p-1 shadow-xs">
            {['One Time', 'Monthly'].map((type) => {
              const active = frequency === type;
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFrequency(type)}
                  className={`px-7 sm:px-9 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    active
                      ? 'bg-[#09261b] text-amber-50 shadow-sm'
                      : 'text-[#09261b]/80 hover:text-[#09261b]'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= DARK GREEN DONATION FORM CONTAINER ================= */}
        <div
          className="relative rounded-3xl border-2 border-[#d4af37]/75 shadow-2xl overflow-hidden text-white"
          style={{
            background: 'linear-gradient(135deg, #02180f 0%, #05291a 55%, #031e13 100%)',
          }}
        >
          {/* Subtle Islamic Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
            style={{
              backgroundImage: `url('')`,
            }}
          ></div>

          {/* Decorative Bottom Corner Arabesque Borders */}
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#d4af37]/50 rounded-bl-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#d4af37]/50 rounded-br-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Side: Mosque Arch Emblem & "Donate Now" */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b lg:border-b-0 lg:border-r border-[#d4af37]/25">
              
              {/* Golden Arch Framed Mosque Illustration */}
              <div
                className="w-36 h-40 sm:w-40 sm:h-44 border-2 border-[#d4af37]/70 bg-gradient-to-b from-[#d4af37]/20 via-[#073321]/60 to-[#02180f] flex flex-col items-center justify-end p-4 mb-5 shadow-inner relative"
                style={{
                  clipPath:
                    'polygon(0% 100%, 0% 42%, 12% 28%, 30% 12%, 50% 0%, 70% 12%, 88% 28%, 100% 42%, 100% 100%)',
                }}
              >
                <span className="text-[#ebd082] text-xs mb-1">☪</span>
                <FaMosque className="text-6xl sm:text-7xl text-[#d4af37]/85 drop-shadow" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-50 mb-3">
                Donate Now
              </h3>

              <p className="text-emerald-100/80 font-serif italic text-xs sm:text-sm leading-relaxed max-w-xs">
                Be a part of our journey to spread peace, knowledge and kindness.
              </p>
            </div>

            {/* Right Side: Donation Form Fields */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5"
            >
              {/* Inputs Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-amber-100 mb-1.5">
                    Full Name <span className="text-[#ebd082]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/45 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-amber-100 mb-1.5">
                    Email Address <span className="text-[#ebd082]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/45 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-amber-100 mb-1.5">
                    Phone Number <span className="text-[#ebd082]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/45 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>

                {/* Amount (INR) */}
                <div>
                  <label className="block text-xs font-bold text-amber-100 mb-1.5">
                    Amount (INR) <span className="text-[#ebd082]">*</span>
                  </label>
                  <input
                    type="number"
                    name="amount"
                    min="1"
                    required
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter amount"
                    className="w-full bg-[#fcf8ed] text-amber-950 placeholder-amber-950/45 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>

              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-amber-100 mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {paymentMethods.map((method) => {
                    const isSelected = paymentMethod === method.id;
                    return (
                      <button
                        type="button"
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                          isSelected
                            ? 'bg-[#073321] text-[#ebd082] border-[#d4af37] shadow-sm'
                            : 'bg-[#fcf8ed] text-[#09261b] border-transparent hover:border-[#d4af37]/60'
                        }`}
                      >
                        <span className="text-sm">{method.icon}</span>
                        <span>{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Golden Full Width "Donate Securely" Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#c99b32] hover:brightness-105 text-[#031e13] font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg border border-amber-200/80 flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <FaShieldAlt className="text-sm" />
                <span>Donate Securely</span>
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DonationFormSection;