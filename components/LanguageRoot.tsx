'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Values from '@/components/Values';
import QuienesSomos from '@/components/QuienesSomos';
import Productos from '@/components/Productos';
import Plantas from '@/components/Plantas';
import Ventajas from '@/components/Ventajas';
import Contacto from '@/components/Contacto';
import ScrollNav from '@/components/ScrollNav';
import { LanguageProvider } from '@/components/LanguageContext';

const LanguageRoot = () => {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-white">
                <Navbar />
                <ScrollNav />
                <Hero />
                <Values />
                <QuienesSomos />
                <Productos />
                <Plantas />
                <Ventajas />
                <Contacto />
            </div>
        </LanguageProvider>
    );
};

export default LanguageRoot;
