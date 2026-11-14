import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaCreditCard,
  FaUniversity,
  FaShieldAlt,
  FaLock,
  FaCheckCircle,
  FaArrowRight,
  FaInfoCircle,
} from 'react-icons/fa';

const AppointmentPaymentPage = ({ bookingData, onBack, onSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState('upi');

  const handlePayNow = () => {
    alert('Payment Successful! Your appointment has been confirmed.');
    if (onSuccess) onSuccess();
  };

  return (
    <section className="relative w-full min-h-screen bg-[#031e13] font-sans py-12 px-4 sm:px-6 lg:px-12 overflow-hidden">
      
      {/* Background Decorative Islamic Patterns */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop')`,
        }}
      ></div>

      {/* Top Banner Header with Arch */}
      <div className="relative max-w-5xl mx-auto text-center mb-10 pt-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ebd082] text-[#031e13] mb-3 shadow-lg border-2 border-amber-200">
          <FaCalendarAlt className="text-xl" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#f6e29c] via-[#ebd082] to-[#c99b32] tracking-wide mb-1">
          Appointment Payment
        </h1>
        <p className="text-emerald-100/80 text-xs sm:text-sm font-light">
          Complete your payment to confirm your appointment
        </p>

        {/* Ornate Divider */}
        <div className="flex items-center justify-center space-x-3 mt-4 max-w-xs mx-auto">
          <span className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]"></span>
          <span className="text-[#ebd082] text-xs">◆ ❖ ◆</span>
          <span className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]"></span>
        </div>
      </div>

      {/* Main Container Card */}
      <div className="relative max-w-5xl mx-auto bg-[#fcf8ed] border-2 border-[#d4af37]/75 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-gray-900">
        
        {/* ================= 5-STEP PROGRESS BAR ================= */}
        <div className="flex items-center justify-between overflow-x-auto pb-6 mb-8 border-b border-[#d4af37]/30 gap-2 sm:gap-0">
          {[
            { step: 1, label: 'Select Service', done: true },
            { step: 2, label: 'Choose Date & Time', done: true },
            { step: 3, label: 'Your Details', done: true },
            { step: 4, label: 'Payment', active: true },
            { step: 5, label: 'Confirmation', done: false },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 shrink-0">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  item.done
                    ? 'bg-[#09261b] text-[#ebd082]'
                    : item.active
                    ? 'bg-[#c99b32] text-white ring-4 ring-[#ebd082]/40'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {item.done ? <FaCheckCircle className="text-sm" /> : item.step}
              </div>
              <span
                className={`text-xs font-semibold hidden sm:inline ${
                  item.active ? 'text-[#09261b]' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
              {idx < 4 && <div className="w-4 sm:w-8 h-[1px] bg-gray-300 mx-1 hidden md:block"></div>}
            </div>
          ))}
        </div>

        {/* Grid: Left Payment Methods + Right Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: CHOOSE PAYMENT METHOD ================= */}
          <div className="lg:col-span-7 bg-[#f7f2e1]/90 border border-[#d4af37]/40 rounded-2xl p-6 shadow-xs">
            <h3 className="font-serif font-bold text-[#09261b] text-lg mb-1">
              Choose Payment Method
            </h3>
            <p className="text-xs text-amber-950/70 mb-5">
              Select a secure and convenient payment option
            </p>

            <div className="space-y-3.5 mb-6">
              
              {/* UPI Option */}
              <div
                onClick={() => setSelectedMethod('upi')}
                className={`cursor-pointer rounded-xl border-2 p-4 transition-all flex items-center justify-between ${
                  selectedMethod === 'upi'
                    ? 'border-[#09261b] bg-white shadow-xs'
                    : 'border-[#d4af37]/40 bg-white/60 hover:bg-white'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-[#09261b] font-bold text-xs">
                    UPI
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-serif font-bold text-amber-950 text-sm">UPI (Recommended)</h4>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Fast
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-950/70">
                      Pay using Google Pay, PhonePe, Paytm, BHIM etc.
                    </p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'upi' ? 'border-[#09261b] bg-[#09261b]' : 'border-gray-400'
                  }`}
                >
                  {selectedMethod === 'upi' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </div>
              </div>

              {/* Credit / Debit Card Option */}
              <div
                onClick={() => setSelectedMethod('card')}
                className={`cursor-pointer rounded-xl border-2 p-4 transition-all flex items-center justify-between ${
                  selectedMethod === 'card'
                    ? 'border-[#09261b] bg-white shadow-xs'
                    : 'border-[#d4af37]/40 bg-white/60 hover:bg-white'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-[#09261b] text-base">
                    <FaCreditCard />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-amber-950 text-sm">Credit / Debit Card</h4>
                    <p className="text-[11px] text-amber-950/70">Visa, Mastercard, RuPay</p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'card' ? 'border-[#09261b] bg-[#09261b]' : 'border-gray-400'
                  }`}
                >
                  {selectedMethod === 'card' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </div>
              </div>

              {/* Net Banking Option */}
              <div
                onClick={() => setSelectedMethod('netbanking')}
                className={`cursor-pointer rounded-xl border-2 p-4 transition-all flex items-center justify-between ${
                  selectedMethod === 'netbanking'
                    ? 'border-[#09261b] bg-white shadow-xs'
                    : 'border-[#d4af37]/40 bg-white/60 hover:bg-white'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-[#09261b] text-base">
                    <FaUniversity />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-amber-950 text-sm">Net Banking</h4>
                    <p className="text-[11px] text-amber-950/70">Pay using your bank account</p>
                  </div>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedMethod === 'netbanking' ? 'border-[#09261b] bg-[#09261b]' : 'border-gray-400'
                  }`}
                >
                  {selectedMethod === 'netbanking' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                </div>
              </div>

            </div>

            {/* Pay ₹501 Now Button */}
            <button
              onClick={handlePayNow}
              className="w-full bg-gradient-to-r from-[#09261b] via-[#0b3323] to-[#041a11] hover:brightness-110 text-[#ebd082] font-bold text-base py-4 px-6 rounded-2xl shadow-lg border border-[#d4af37]/60 flex items-center justify-center space-x-3 transition-all duration-300 cursor-pointer"
            >
              <FaLock className="text-xs" />
              <span>Pay ₹501 Now</span>
              <FaArrowRight className="text-xs" />
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 pt-4 border-t border-amber-200 text-center text-[11px] text-amber-950/75">
              <div className="flex items-center justify-center space-x-1">
                <FaShieldAlt className="text-emerald-700 text-xs" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <span className="font-bold">UPI/Card</span>
                <span>Supported</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaCheckCircle className="text-emerald-700 text-xs" />
                <span>Instant Confirm</span>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaLock className="text-emerald-700 text-xs" />
                <span>Safe Checkout</span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: APPOINTMENT DETAILS & SUMMARY ================= */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Appointment Details Box */}
            <div className="bg-[#f7f2e1]/90 border border-[#d4af37]/40 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center space-x-2.5 mb-3.5 pb-2.5 border-b border-amber-200">
                <FaCalendarAlt className="text-[#09261b]" />
                <h4 className="font-serif font-bold text-[#09261b] text-base">Appointment Details</h4>
              </div>

              <div className="space-y-2.5 text-xs text-amber-950">
                <div className="flex justify-between">
                  <span className="text-amber-950/70 font-medium">Service</span>
                  <span className="font-bold text-right">Ruhani Mashwara (Spiritual Consultation)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-950/70 font-medium">Date</span>
                  <span className="font-bold">15 Nov 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-950/70 font-medium">Time</span>
                  <span className="font-bold">11:00 AM – 11:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-950/70 font-medium">Mode</span>
                  <span className="font-bold">Online (Google Meet)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-950/70 font-medium">Duration</span>
                  <span className="font-bold">30 Minutes</span>
                </div>
              </div>
            </div>

            {/* Payment Summary Box */}
            <div className="bg-[#f7f2e1]/90 border border-[#d4af37]/40 rounded-2xl p-5 shadow-xs">
              <div className="flex items-center space-x-2.5 mb-3.5 pb-2.5 border-b border-amber-200">
                <span className="text-[#09261b] font-bold">₹</span>
                <h4 className="font-serif font-bold text-[#09261b] text-base">Payment Summary</h4>
              </div>

              <div className="space-y-2.5 text-xs text-amber-950 mb-4">
                <div className="flex justify-between">
                  <span className="text-amber-950/70">Consultation Fee</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-950/70">Processing Fee</span>
                  <span className="font-semibold">₹1</span>
                </div>
              </div>

              <div className="bg-[#f4eab8] border border-[#d4af37] rounded-xl p-3 flex justify-between items-center font-serif font-bold text-[#09261b] text-sm">
                <span>Total Payable</span>
                <span className="text-base">₹501</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Security Note Banner */}
        <div className="mt-8 bg-[#e8f0e4] border border-[#8fb384]/70 rounded-2xl p-4 flex items-start space-x-3 text-xs text-[#09261b]">
          <FaInfoCircle className="text-base shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            After successful payment, your appointment will be confirmed and you will receive a confirmation message with the meeting details on your email / WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AppointmentPaymentPage;