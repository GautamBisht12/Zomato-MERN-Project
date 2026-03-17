import React from 'react';
import { Search, MapPin } from 'lucide-react';
import Navbar from '../components/common/Navbar';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative h-[65vh] min-h-[500px] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                        alt="Delicious food" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center mt-12">
                    <h1 className="text-6xl md:text-8xl font-extrabold italic text-white mb-8 tracking-tighter text-center drop-shadow-lg">
                        Zomato
                    </h1>
                    <p className="text-2xl md:text-4xl text-white mb-10 text-center font-medium drop-shadow-md">
                        Discover the best food & drinks in Bengaluru
                    </p>

                    {/* Search Bar */}
                    <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-2xl md:rounded-full overflow-hidden shadow-2xl p-2 gap-2">
                        {/* Location Select */}
                        <div className="flex items-center px-4 py-3 md:py-2 md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800">
                            <MapPin className="text-red-400 mr-3 flex-shrink-0" size={24} />
                            <select className="w-full bg-transparent text-gray-700 dark:text-gray-200 outline-none cursor-pointer appearance-none font-medium text-lg">
                                <option>Bengaluru</option>
                                <option>Mumbai</option>
                                <option>Delhi NCR</option>
                                <option>Hyderabad</option>
                                <option>Pune</option>
                            </select>
                        </div>
                        
                        {/* Search Input */}
                        <div className="flex items-center px-4 py-3 md:py-2 flex-grow">
                            <Search className="text-gray-400 mr-3 flex-shrink-0" size={24} />
                            <input 
                                type="text" 
                                placeholder="Search for restaurant, cuisine or a dish" 
                                className="w-full bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 font-medium text-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Category Cards */}
                    {[
                        { title: "Order Online", desc: "Stay home and order to your door", img: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=800&auto=format&fit=crop" },
                        { title: "Dining", desc: "View the city's favourite dining venues", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" },
                        { title: "Nightlife and Clubs", desc: "Explore the city's top nightlife outlets", img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop" }
                    ].map((item, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                            <div className="h-48 overflow-hidden">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Collections Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Collections</h2>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 shadow-sm pb-1">
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium max-w-2xl">
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends.
                    </p>
                    <a href="#" className="text-red-500 hover:text-red-400 font-medium flex items-center gap-1 group">
                        All collections in Bengaluru 
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Top Trending Spots", places: "29 Places", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" },
                        { title: "Best Rooftop Places", places: "32 Places", img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop" },
                        { title: "Newly Opened", places: "14 Places", img: "https://images.unsplash.com/photo-1466978913421-bac2e5e75e4e?q=80&w=800&auto=format&fit=crop" },
                        { title: "Great Cafes", places: "28 Places", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" }
                    ].map((collection, idx) => (
                        <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md">
                            <img src={collection.img} alt={collection.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                            <div className="absolute text-left bottom-0 left-0 p-6 w-full">
                                <h3 className="text-white font-bold text-lg mb-1">{collection.title}</h3>
                                <div className="flex items-center text-white/80 text-sm font-medium">
                                    <span>{collection.places}</span>
                                    <span className="ml-2 shadow-sm">&#9656;</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Popular Localities */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">Popular localities in and around <span className="font-semibold">Bengaluru</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        { name: "Indiranagar", places: "624" },
                        { name: "Koramangala", places: "891" },
                        { name: "Whitefield", places: "1093" },
                        { name: "HSR Layout", places: "928" },
                        { name: "Jayanagar", places: "612" },
                        { name: "JP Nagar", places: "740" },
                        { name: "Marathahalli", places: "1025" },
                        { name: "Malleshwaram", places: "437" },
                        { name: "See more", places: "", isLink: true }
                    ].map((loc, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow group">
                            {loc.isLink ? (
                                <div className="flex items-center justify-center w-full font-medium text-gray-700 dark:text-gray-200">
                                    {loc.name}
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">{loc.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{loc.places} places</p>
                                    </div>
                                    <span className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">&rarr;</span>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <h2 className="text-4xl font-extrabold italic text-gray-900 dark:text-white tracking-tighter">Zomato</h2>
                        <div className="flex gap-4 mt-6 md:mt-0">
                            {/* Dummy selects for demonstration */}
                            <div className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 flex items-center cursor-pointer">
                                <span className="font-bold mr-2">🇮🇳</span> India <span className="ml-2 text-xs">▼</span>
                            </div>
                            <div className="border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 flex items-center cursor-pointer">
                                🌐 English <span className="ml-2 text-xs">▼</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-widest text-sm uppercase">About Zomato</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Who We Are</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work With Us</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Investor Relations</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Report Fraud</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-widest text-sm uppercase">Zomaverse</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Zomato</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blinkit</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Feeding India</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Hyperpure</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Zomaland</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-widest text-sm uppercase">For Restaurants</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Partner With Us</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Apps For You</a></li>
                            </ul>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4 mt-6 tracking-widest text-sm uppercase">For Enterprises</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Zomato For Enterprise</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-widest text-sm uppercase">Learn More</h4>
                            <ul className="space-y-2 text-gray-500 dark:text-gray-400 font-medium text-sm">
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Security</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2018-2024 © Zomato™ Ltd. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;