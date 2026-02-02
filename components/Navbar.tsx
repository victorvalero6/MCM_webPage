'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = t.navLinks;

    return (
        <nav
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent text-white`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center space-x-4">
                        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden">
                            <Image
                                src="/images/logoFInal.png"
                                alt="MCM Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className={`text-base font-bold tracking-wide ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                                {t.nav.brandLine1}
                            </h1>
                            <p className={`text-xs tracking-wider ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>{t.nav.brandLine2}</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`font-medium text-sm tracking-wider uppercase transition-colors duration-200 relative group py-2 ${isScrolled ? 'text-gray-600 hover:text-blue-900' : 'text-white/80 hover:text-white'
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 bg-blue-600 group-hover:w-full`}></span>
                            </button>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border-2 ${isScrolled
                                ? 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
                                : 'border-white text-white hover:bg-white hover:text-blue-900'
                                }`}
                        >
                            {t.nav.languageToggle}
                        </button>
                    </div>

                    <button
                        className={`lg:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: '0' }}
            >
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500">
                        <X size={32} />
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center space-y-8 h-full pb-24">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-2xl font-light text-gray-900 hover:text-blue-900 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="mt-8 px-8 py-3 rounded-full border-2 border-blue-900 text-blue-900 font-bold uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all"
                    >
                        {t.nav.languageToggle}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
