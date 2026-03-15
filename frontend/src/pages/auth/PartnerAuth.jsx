import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PartnerAuth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <div className={`min-h-screen flex flex-row-reverse transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>

            {/* Right Image Panel - Hidden on small screens */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gray-900/60 z-10 mix-blend-multiply transition-opacity"></div>
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-900/40 to-transparent z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=2070&auto=format&fit=crop"
                    alt="Professional chef in a bustling kitchen"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col justify-end p-12 text-white h-full w-full">
                    <div className="flex justify-end w-full mb-8">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-right">
                        <h1 className="text-5xl font-bold mb-4 leading-tight tracking-tight">
                            Transform your restaurant business.
                        </h1>
                        <p className="text-lg text-gray-300 font-medium ml-auto max-w-md">
                            Join thousands of successful partners and exponentially grow your revenue with Zomato.
                        </p>
                    </div>
                </div>
            </div>

            {/* Left Form Panel */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
                {/* Theme Toggle */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="absolute top-6 left-6 p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm border border-gray-200/50 dark:border-gray-700/50 z-50 flex items-center justify-center"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                <div className="w-full max-w-md relative z-10">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                            Zomato <span className="text-gray-500 dark:text-gray-400">for Partners</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                            {isLogin ? 'Sign in to access your business dashboard.' : 'Apply to become a verified restaurant partner.'}
                        </p>
                    </div>

                    {/* Segmented Control */}
                    <div className="flex p-1 bg-gray-100 dark:bg-gray-800/50 rounded-xl mb-8 border border-gray-200 dark:border-gray-700/50">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${isLogin
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                }`}
                        >
                            Dashboard Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${!isLogin
                                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                }`}
                        >
                            Register Restaurant
                        </button>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Restaurant Name</label>
                                <input
                                    type="text"
                                    placeholder="The Grand Kitchen"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                                />
                            </div>
                        )}
                        {!isLogin && (
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Owner / Manager Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Smith"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                                />
                            </div>
                        )}
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Business Email Address</label>
                            <input
                                type="email"
                                placeholder="contact@restaurant.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                            />
                        </div>

                        {isLogin && (
                            <div className="flex items-center justify-between pt-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-5 h-5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 peer-checked:bg-gray-900 dark:peer-checked:bg-gray-100 peer-checked:border-gray-900 dark:peer-checked:border-gray-100 transition-colors flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white dark:text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">Forgot password?</a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3.5 px-4 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-bold transition-all mt-8 shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                        >
                            {isLogin ? 'Sign In to Dashboard' : 'Submit Application'}
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 text-center lg:text-left">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Looking to order food instead?
                            <Link to="/auth/user" className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-bold ml-2 transition-colors group">
                                Go to User App
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerAuth;
