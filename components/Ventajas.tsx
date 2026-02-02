'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import { FadeInSection } from '@/hooks/useFadeIn';

const Ventajas = () => {
    const { t } = useLanguage();
    const ventajas = t.advantages.items;

    return (
        <section id="ventajas" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <Image
                        src="/images/ventaja.webp"
                        alt={t.advantages.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                    <FadeInSection>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider uppercase text-balance">
                            {t.advantages.title}
                        </h1>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <FadeInSection>
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            {t.advantages.subtitle}
                        </p>
                        <div className="w-20 h-1 bg-blue-900 mx-auto mt-6"></div>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ventajas.map((ventaja, index) => (
                        <FadeInSection key={index} delay={index * 80}>
                            <div className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 border-t-4 border-t-blue-900 group h-full">
                                <div className="bg-blue-50 p-3.5 rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <CheckCircle className="text-blue-900 w-7 h-7" />
                                </div>
                                <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">{ventaja}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ventajas;
