import React, { useState } from 'react';
import {
    FaLeaf,
    FaShoppingCart,
    FaArrowRight,
    FaChevronLeft,
    FaChevronRight,
    FaList,
    FaMosque
} from 'react-icons/fa';

// Sample categories data
const categories = [
    { name: 'Herbal Oils', count: '08' },
    { name: 'Natural Herbs', count: '08' },
    { name: 'Wellness Care', count: '06' },
    { name: 'Herbal Powders', count: '05' },
    { name: 'Honey & Natural', count: '04' },
    { name: 'Others', count: '03' },
];

// Sample products database
const allProducts = [
    {
        id: 1,
        title: 'Herbal Oil',
        description: 'Pure herbal oil for wellness',
        price: 499,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Natural Honey',
        description: '100% Pure & Natural',
        price: 399,
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Herbal Powder',
        description: 'Organic herbal powder',
        price: 299,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Natural Herbs',
        description: 'Premium quality herbs',
        price: 349,
        image: 'https://images.unsplash.com/photo-1546852199-2d028489af72?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Herbal Seeds',
        description: 'Natural & Healthy Seeds',
        price: 249,
        image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Herbal Mix',
        description: 'Powerful herbal mix',
        price: 399,
        image: 'https://images.unsplash.com/photo-1509358271058-acd05cc93898?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 7,
        title: 'Wellness Oil',
        description: 'For better health',
        price: 449,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 8,
        title: 'Herbal Saffron',
        description: 'Pure & Natural Saffron',
        price: 699,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop',
    },
    // Extra products for pagination test
    {
        id: 9,
        title: 'Black Seed Oil',
        description: 'Cold pressed immune booster',
        price: 599,
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=600&auto=format&fit=crop',
    },
    {
        id: 10,
        title: 'Organic Henna',
        description: 'Natural hair & body care',
        price: 199,
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop',
    },
];

const HerbalProductsListingPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('Herbal Oils');
    const [sortBy, setSortBy] = useState('Popularity');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    // Pagination Logic
    const totalPages = Math.ceil(allProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="relative w-full bg-[#fcf8ed] py-12 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">

            {/* Background Subtle Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none bg-repeat-x bg-bottom"
                style={{
                    backgroundImage: `url('')`
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Main Grid: Sidebar (3 cols) + Main Listing (9 cols) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* ================= LEFT SIDEBAR ================= */}
                    <div className="lg:col-span-3 flex flex-col space-y-6">

                        {/* Categories Card */}
                        <div className="bg-[#f7f2e1]/90 backdrop-blur-sm border border-[#d4af37]/40 rounded-2xl p-4 shadow-sm">

                            {/* Category Header Badge */}
                            <div className="bg-[#09261b] text-amber-100 font-serif font-bold text-base px-4 py-2.5 rounded-xl flex items-center space-x-2 mb-4 shadow-sm border border-[#d4af37]/30">
                                <FaList className="text-[#d4af37] text-sm" />
                                <span>Categories</span>
                            </div>

                            {/* Categories List */}
                            <div className="flex flex-col space-y-1">
                                {categories.map((cat, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${selectedCategory === cat.name
                                                ? 'bg-amber-100/80 text-[#09261b] font-semibold shadow-xs'
                                                : 'text-amber-950/80 hover:bg-amber-50/60'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <FaLeaf className={`text-xs ${selectedCategory === cat.name ? 'text-[#09261b]' : 'text-emerald-700'}`} />
                                            <span>{cat.name}</span>
                                        </div>
                                        <span className="bg-amber-200/50 text-amber-950 text-[11px] px-2 py-0.5 rounded-full font-bold">
                                            {cat.count}
                                        </span>
                                    </button>
                                ))}
                            </div>

                        </div>

                        {/* Left Bottom Arch Banner */}
                        <div
                            className="relative w-full aspect-[3/4] bg-[#031e13] rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-lg border border-[#d4af37]/40"
                            style={{
                                clipPath: 'polygon(0% 100%, 0% 12%, 15% 5%, 35% 1%, 50% 0%, 65% 1%, 85% 5%, 100% 12%, 100% 100%)',
                            }}
                        >
                            {/* Overlay Pattern */}
                            <div
                                className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1600&auto=format&fit=crop')`
                                }}
                            ></div>

                            <div className="relative z-10 text-center pt-8">
                                <div className="w-12 h-12 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center text-amber-300 mb-3 border border-amber-300/40">
                                    <FaLeaf className="text-xl" />
                                </div>
                                <h3 className="font-serif font-bold text-amber-50 text-xl leading-tight mb-1">
                                    Pure &amp; Natural
                                </h3>
                                <p className="font-serif text-amber-200/90 text-sm italic mb-2">
                                    Herbal Products
                                </p>
                                <p className="text-emerald-100/70 text-xs font-light">
                                    For a Healthier Life
                                </p>
                                {/* Banner Image & Button */}
                                <div className="relative mt-3 z-10 flex flex-col items-center">
                                    <a
                                        href="#shop-now"
                                        className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] text-amber-950 font-bold text-xs px-5 py-2 rounded-full shadow-md hover:brightness-110 transition-all mb-4"
                                    >
                                        <span>Shop Now</span>
                                        <FaArrowRight className="text-[10px]" />
                                    </a>

                                </div>
                            </div>


                        </div>

                    </div>

                    {/* ================= RIGHT PRODUCTS LISTING ================= */}
                    <div className="lg:col-span-9 flex flex-col">

                        {/* Top Bar: Title + Subtitle + Sort By Dropdown */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#d4af37]/30 gap-4">

                            {/* Section Header */}
                            <div className="flex flex-col">
                                <div className="flex items-center space-x-2">
                                    <FaMosque className="text-[#d4af37] text-sm" />
                                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d3b28]">
                                        Our Herbal Products
                                    </h2>
                                </div>
                                <p className="text-xs sm:text-sm text-amber-950/70 font-light mt-1">
                                    Discover our wide range of natural and traditional herbal products
                                </p>
                            </div>

                            {/* Sort By Filter */}
                            <div className="flex items-center space-x-2 shrink-0">
                                <span className="text-xs sm:text-sm text-amber-950 font-medium">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white/90 border border-[#d4af37]/50 rounded-xl text-xs sm:text-sm text-amber-950 font-medium px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                                >
                                    <option value="Popularity">Popularity</option>
                                    <option value="PriceLowHigh">Price: Low to High</option>
                                    <option value="PriceHighLow">Price: High to Low</option>
                                    <option value="Newest">Newest</option>
                                </select>
                            </div>

                        </div>

                        {/* Products 4-Column Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                            {currentProducts.map((prod) => (
                                <div
                                    key={prod.id}
                                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-[#d4af37]/30 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                                >
                                    {/* Thumbnail Image */}
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-amber-50">
                                        <img
                                            src={prod.image}
                                            alt={prod.title}
                                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col items-center flex-grow">
                                        <h4 className="font-serif font-bold text-amber-950 text-base mb-1">
                                            {prod.title}
                                        </h4>
                                        <p className="text-xs text-amber-950/70 font-light mb-2">
                                            {prod.description}
                                        </p>
                                        <div className="text-lg font-serif font-bold text-[#0d3b28] mb-3">
                                            ₹{prod.price}
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#ebd082] via-[#dfb85a] to-[#cba03a] hover:brightness-110 text-amber-950 font-semibold text-xs py-2 rounded-xl transition-all shadow-xs">
                                        <FaShoppingCart className="text-xs" />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* ================= PAGINATION COMPONENT ================= */}
                        <div className="flex items-center justify-center space-x-2 pt-4 border-t border-[#d4af37]/30">

                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`p-2.5 rounded-xl border border-[#d4af37]/40 transition-colors ${currentPage === 1
                                        ? 'opacity-40 cursor-not-allowed text-amber-950'
                                        : 'bg-white hover:bg-amber-100/50 text-[#09261b]'
                                    }`}
                            >
                                <FaChevronLeft className="text-xs" />
                            </button>

                            {/* Page Number Buttons */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => handlePageChange(pageNum)}
                                    className={`w-9 h-9 rounded-xl font-medium text-xs sm:text-sm transition-all border ${currentPage === pageNum
                                            ? 'bg-[#09261b] text-amber-200 border-[#09261b] font-bold shadow-sm'
                                            : 'bg-white/80 hover:bg-amber-100/60 text-amber-950 border-[#d4af37]/40'
                                        }`}
                                >
                                    {pageNum}
                                </button>
                            ))}

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`p-2.5 rounded-xl border border-[#d4af37]/40 transition-colors ${currentPage === totalPages
                                        ? 'opacity-40 cursor-not-allowed text-amber-950'
                                        : 'bg-white hover:bg-amber-100/50 text-[#09261b]'
                                    }`}
                            >
                                <FaChevronRight className="text-xs" />
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default HerbalProductsListingPage;