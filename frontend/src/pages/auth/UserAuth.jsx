import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserAuth = () => {
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
        <div className={`min-h-screen flex transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>

            {/* Left Image Panel - Hidden on small screens */}
            <div className="hidden lg:flex lg:w-1/2 relative">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                    alt="Delicious food spread"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 flex flex-col justify-end p-12 text-white h-full">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-500/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 leading-tight tracking-tight">
                        Discover the best food <br />& drinks in your city.
                    </h1>
                    <p className="text-lg text-gray-200 max-w-md font-medium">
                        Join millions of food lovers and enjoy the fastest delivery service.
                    </p>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
                {/* Theme Toggle */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="absolute top-6 right-6 p-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm border border-gray-200/50 dark:border-gray-700/50 z-50 flex items-center justify-center"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                <div className="w-full max-w-md relative z-10">
                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                            {isLogin ? 'Welcome back' : 'Create an account'}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                            {isLogin ? 'Please enter your details to sign in.' : 'Start your culinary journey with us today.'}
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
                            Log In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${!isLogin
                                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                                />
                            </div>
                        )}
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-600"
                            />
                        </div>

                        {isLogin && (
                            <div className="flex items-center justify-between pt-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-5 h-5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 peer-checked:bg-red-500 peer-checked:border-red-500 transition-colors flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">Remember for 30 days</span>
                                </label>
                                <a href="#" className="text-sm font-semibold text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 transition-colors">Forgot password?</a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3.5 px-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold transition-all mt-8 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 text-center lg:text-left">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Are you a restaurant owner?
                            <Link to="/auth/partner" className="inline-flex items-center gap-1 text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 font-bold ml-2 transition-colors group">
                                Partner with us
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

export default UserAuth;
