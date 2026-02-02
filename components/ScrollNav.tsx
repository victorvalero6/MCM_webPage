'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/components/LanguageContext';

const ScrollNav = () => {
    const [activeSection, setActiveSection] = useState('home');
    const { t } = useLanguage();
    const sections = t.navLinks;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-6">
            {sections.map((section, index) => (
                <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="group flex items-center gap-4 focus:outline-none"
                >
                    <span
                        className={`text-xs uppercase tracking-widest font-medium transition-all duration-300
                            ${activeSection === section.id
                                ? 'text-blue-900 opacity-100 translate-x-0'
                                : 'text-gray-500 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
                            }`}
                    >
                        {section.label}
                    </span>

                    <div className="relative flex flex-col items-center">
                        {/* Line connector (upper) */}
                        {index > 0 && (
                            <div className="absolute -top-6 w-[1px] h-6 bg-gray-300"></div>
                        )}

                        {/* Dot */}
                        <div
                            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 
                                ${activeSection === section.id
                                    ? 'bg-blue-900 border-blue-900 scale-125'
                                    : 'bg-transparent border-gray-400 group-hover:border-blue-900'
                                }`}
                        />
                    </div>
                </button>
            ))}
        </div>
    );
};

export default ScrollNav;
