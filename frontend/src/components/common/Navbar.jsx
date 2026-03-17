import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Spacer for centering in mobile, or logo */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-md ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    <Link to="/" className={`text-4xl font-extrabold tracking-tighter italic ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                        Zomato
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/auth/partner" className={`font-medium transition-colors text-lg ${isScrolled ? 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white/90 hover:text-white'}`}>
                            Add restaurant
                        </Link>
                        <Link to="/auth/user" className={`font-medium transition-colors text-lg ${isScrolled ? 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white/90 hover:text-white'}`}>
                            Log in
                        </Link>
                        <Link to="/auth/user" className={`font-medium transition-colors text-lg ${isScrolled ? 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white' : 'text-white/90 hover:text-white'}`}>
                            Sign up
                        </Link>
                        
                        <button onClick={toggleTheme} className={`p-2.5 rounded-full transition-colors cursor-pointer ${isScrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}>
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile right icons */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors cursor-pointer ${isScrolled ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 flex flex-col p-4 space-y-4">
                    <Link to="/auth/partner" className="text-gray-900 dark:text-white font-medium text-lg px-2 py-1">Add restaurant</Link>
                    <Link to="/auth/user" className="text-gray-900 dark:text-white font-medium text-lg px-2 py-1">Log in</Link>
                    <Link to="/auth/user" className="text-gray-900 dark:text-white font-medium text-lg px-2 py-1">Sign up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
