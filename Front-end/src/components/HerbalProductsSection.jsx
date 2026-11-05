
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import HerbalProducts from "../assets/HerbalProducts.png";
import herbalimage from '../assets/herbalimage.png'

const HerbalProductsSection = () => {
    const features = [
        "100% Natural & Safe",
        "Based on Traditional Knowledge",
        "Trusted by Thousands",
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#00351f] px-4 py-12 font-sans sm:px-8 lg:px-12 lg:py-16">

            {/* Islamic Background Pattern */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.13]"
                style={{
                    backgroundImage: `url(${herbalimage})`,
                }}
            />

            {/* Green Background Glow */}
            {/* <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,#075332_0%,#00351f_65%,#002719_100%)] opacity-90" /> */}

            {/* Golden Top Border */}
            {/* <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8c6727] via-[#f4d58b] to-[#8c6727]" /> */}

            {/* Golden Bottom Border */}
            {/* <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8c6727] via-[#f4d58b] to-[#8c6727]" /> */}

            {/* Decorative Corners */}
            {/* <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-t-2 border-l-2 border-[#d4af37]/70 rounded-tl-3xl pointer-events-none" /> */}

            {/* <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-t-2 border-r-2 border-[#d4af37]/70 rounded-tr-3xl pointer-events-none" /> */}

            {/* <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-b-2 border-l-2 border-[#d4af37]/70 rounded-bl-3xl pointer-events-none" /> */}

            {/* <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-b-2 border-r-2 border-[#d4af37]/70 rounded-br-3xl pointer-events-none" /> */}

            {/* Main Container */}
            <div className="relative z-10 mx-auto grid max-w-[1450px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

                {/* LEFT SIDE - Herbal Products */}
                <div className="relative flex items-center justify-center lg:col-span-6">

                    <div className="relative w-full max-w-[650px]">

                        {/* Product Image */}
                        <img
                            src={HerbalProducts}
                            alt="Natural Herbal Products"
                            className="
                relative z-10
                w-full
                h-[260px]
                sm:h-[340px]
                lg:h-[380px]
                object-contain
                object-center
                drop-shadow-[0_20px_25px_rgba(0,0,0,0.35)]
                transition-transform
                duration-500
                hover:scale-[1.03]
              "
                        />

                    </div>

                </div>

                {/* RIGHT SIDE - Content */}
                <div className="flex flex-col justify-center text-left text-white lg:col-span-6">

                    {/* Heading */}
                    <div className="mb-3 flex flex-wrap items-center gap-4">

                        <h2 className="font-serif text-3xl font-bold tracking-wide text-[#fff3d5] sm:text-4xl lg:text-5xl">

                            Herbal Products

                        </h2>

                        <span className="h-[3px] w-12 bg-gradient-to-r from-[#d4af37] to-[#f5d78c]" />

                    </div>

                    {/* Subtitle */}
                    <p className="mb-7 text-sm font-light leading-relaxed text-emerald-100/90 sm:text-base lg:text-lg">

                        Natural remedies for a healthy and balanced life

                    </p>

                    {/* Features */}
                    <div className="mb-8 space-y-4">

                        {features.map((item, index) => (

                            <div
                                key={index}
                                className="flex items-center gap-3 text-sm font-medium text-[#f7e8bd] sm:text-base lg:text-lg"
                            >

                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f5d78c] to-[#d4a83f] text-[#06452c] shadow-md">

                                    <FaCheckCircle className="text-sm" />

                                </div>

                                <span>{item}</span>

                            </div>

                        ))}

                    </div>

                    {/* Explore Products Button */}
                    <div>

                        <a
                            href="#products"
                            className="
                inline-flex items-center justify-center gap-4
                rounded-xl
                bg-gradient-to-r from-[#e9bd60] via-[#f6d88f] to-[#d9a941]
                px-7 py-3.5
                text-sm font-bold text-[#123b25]
                shadow-[0_8px_25px_rgba(0,0,0,0.25)]
                transition-all duration-300
                hover:-translate-y-1
                hover:brightness-110
                hover:shadow-xl
                sm:px-9 sm:py-4 sm:text-base
              "
                        >

                            <span>Explore Products</span>

                            <FaArrowRight className="text-sm" />

                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HerbalProductsSection;
