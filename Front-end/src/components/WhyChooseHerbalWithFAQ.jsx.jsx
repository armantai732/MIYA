import React, { useState } from 'react';
import { FaCheckCircle, FaArrowRight, FaPlus, FaMinus, FaLeaf } from 'react-icons/fa';
import herbalproduct1 from '../assets/HerbalProducts1.png'

const faqList = [
    {
        id: 1,
        question: 'Are your products 100% natural?',
        answer: 'Yes, all our herbal products and oil preparations are crafted using 100% natural herbs, traditional Hikmat formulations, and zero artificial preservatives.',
    },
    {
        id: 2,
        question: 'How can I place an order?',
        answer: 'Simply select your desired products, add them to your cart, and proceed to checkout using our secure payment gateway or cash on delivery options.',
    },
    {
        id: 3,
        question: 'What is the delivery time?',
        answer: 'Standard shipping takes 3 to 5 business days across most regions. Express shipping options are also available at checkout.',
    },
    {
        id: 4,
        question: 'Can I return the product?',
        answer: 'We offer a hassle-free 7-day return policy for unopened and unused products in their original packaging.',
    },
];

const WhyChooseHerbalWithFAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="relative w-full bg-[#fcf8ed] py-14 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">

            {/* Background Subtle Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
                style={{
                    backgroundImage: `url('')`
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* ================= LEFT COLUMN: ARCH IMAGE FRAME ================= */}
                    {/* LEFT: IMAGE */}
                    <div className="flex justify-center lg:col-span-4">
                        <div className="group relative w-full max-w-[350px]">

                            {/* Gold Outer Frame */}
                            <div className="absolute -inset-2 rounded-[190px_190px_28px_28px] border border-[#d4af37]/70" />

                            <div className="relative overflow-hidden rounded-[180px_180px_24px_24px] border-[5px] border-[#d4af37] bg-[#031e13] shadow-[0_20px_50px_rgba(3,30,19,0.20)]">

                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={herbalproduct1}
                                        alt="Natural herbal products"
                                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Image Overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#031e13]/90 via-[#031e13]/30 to-transparent px-6 pb-8 pt-20">
                                    <p className="font-serif text-xl font-bold text-[#fff8e7]">
                                        Inspired by Nature
                                    </p>
                                    <p className="mt-1 text-xs tracking-wider text-[#ebd082]">
                                        ROOTED IN TRADITION
                                    </p>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -right-3 top-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-[#fcf8ed] bg-[#d4af37] text-center shadow-lg sm:-right-5">
                                <FaLeaf className="mb-1 text-lg text-[#031e13]" />
                                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#031e13]">
                                    Herbal
                                </span>
                                <span className="text-[9px] font-extrabold uppercase text-[#031e13]">
                                    Care
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ================= CENTER COLUMN: WHY CHOOSE TEXT ================= */}
                    <div className="lg:col-span-4 flex flex-col items-start text-left">

                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d3b28] mb-2 leading-tight">
                            Why Choose Our Herbal Products?
                        </h2>

                        {/* Golden Accent Divider Line */}
                        <div className="flex items-center space-x-2 my-3 w-full max-w-xs">
                            <span className="flex-grow h-[1.5px] bg-[#d4af37]/70"></span>
                            <span className="text-[#d4af37] text-xs">◆</span>
                            <span className="flex-grow h-[1.5px] bg-[#d4af37]/70"></span>
                        </div>

                        <p className="text-amber-950/80 text-xs sm:text-sm font-light leading-relaxed mb-6">
                            Our herbal products are made with traditional wisdom and natural ingredients. We believe in the power of nature for a healthier and balanced life.
                        </p>

                        {/* Feature Checklist */}
                        <div className="flex flex-col space-y-2.5 text-xs sm:text-sm font-semibold text-[#0d3b28] mb-7">
                            <div className="flex items-center space-x-2.5">
                                <FaCheckCircle className="text-emerald-700 text-base" />
                                <span>100% Natural Ingredients</span>
                            </div>
                            <div className="flex items-center space-x-2.5">
                                <FaCheckCircle className="text-emerald-700 text-base" />
                                <span>No Harmful Chemicals</span>
                            </div>
                            <div className="flex items-center space-x-2.5">
                                <FaCheckCircle className="text-emerald-700 text-base" />
                                <span>Trusted by Thousands</span>
                            </div>
                        </div>

                        {/* Learn More Button */}
                        <a
                            href="#learn-more"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-amber-950 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all duration-300"
                        >
                            <span>Learn More</span>
                            <FaArrowRight className="text-xs" />
                        </a>

                    </div>

                    {/* ================= RIGHT COLUMN: DARK GREEN FAQ CARD ================= */}
                    <div className="lg:col-span-4 flex justify-center lg:justify-end">
                        <div className="w-full max-w-md bg-[#031e13] rounded-3xl p-6 sm:p-7 border-2 border-[#d4af37]/60 shadow-2xl text-white relative overflow-hidden">

                            {/* Background Subtle Glow Overlay */}
                            <div
                                className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop')`
                                }}
                            ></div>

                            <h3 className="relative z-10 font-serif font-bold text-xl text-amber-50 mb-6">
                                Frequently Asked Questions
                            </h3>

                            {/* Accordion List */}
                            <div className="relative z-10 flex flex-col divide-y divide-[#d4af37]/25">
                                {faqList.map((item) => {
                                    const isOpen = openId === item.id;
                                    return (
                                        <div key={item.id} className="py-3.5 first:pt-0 last:pb-0">
                                            <button
                                                onClick={() => toggleFAQ(item.id)}
                                                className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-medium text-amber-100 hover:text-[#ebd082] transition-colors focus:outline-none"
                                            >
                                                <span className="pr-3 leading-snug">{item.question}</span>
                                                <div className="w-5 h-5 rounded-full border border-[#d4af37]/50 flex items-center justify-center shrink-0 text-[10px] text-[#ebd082]">
                                                    {isOpen ? <FaMinus /> : <FaPlus />}
                                                </div>
                                            </button>

                                            {isOpen && (
                                                <p className="mt-2 text-xs text-emerald-100/80 font-light leading-relaxed pr-2">
                                                    {item.answer}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseHerbalWithFAQ;