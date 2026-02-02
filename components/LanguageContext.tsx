'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type Language } from '@/lib/translations';

type LanguageContextValue = {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');

    const value = useMemo(() => {
        const toggleLanguage = () => {
            setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
        };

        return {
            language,
            setLanguage,
            toggleLanguage,
            t: translations[language],
        };
    }, [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
