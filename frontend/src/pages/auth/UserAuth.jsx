import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

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

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'} p-4 sm:p-6 overflow-hidden`}>

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm border border-gray-200/50 dark:border-gray-700/50 z-50 flex items-center justify-center cursor-pointer"
                aria-label="Toggle Theme"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Form Panel */}
            <div className="w-full max-w-md relative z-10 bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-800 p-8">
                <div className="mb-8 text-center mt-2">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                        Zomato
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                        {isLogin ? 'Sign in to your account.' : 'Join the community.'}
                    </p>
                </div>

                {/* Segmented Control */}
                <div className="flex p-1 bg-gray-100 dark:bg-gray-800/50 rounded-xl mb-8 border border-gray-200 dark:border-gray-700/50">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${isLogin
                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer'
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 ${!isLogin
                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm ring-1 ring-gray-900/5 dark:ring-white/10'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all outline-none shadow-sm placeholder-gray-400 dark:placeholder-gray-500"
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
                        className="w-full py-3.5 px-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-xl font-bold transition-all mt-6 shadow-lg shadow-gray-900/20 dark:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                    >
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 text-center flex items-center justify-center">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Are you a restaurant owner?{' '}
                        <Link to="/auth/partner" className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white font-bold transition-colors group ml-1">
                            Partner with us
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserAuth;
