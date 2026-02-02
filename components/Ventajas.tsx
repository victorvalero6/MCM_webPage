'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';

const Ventajas = () => {
    const { t } = useLanguage();
    const ventajas = t.advantages.items;

    return (
        <section id="ventajas" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <Image
                        src="/images/ventaja.webp"
                        alt={t.advantages.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase">
                        {t.advantages.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {t.advantages.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-blue-900 mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ventajas.map((ventaja, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-900 group"
                        >
                            <div className="bg-blue-50 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CheckCircle className="text-blue-900 w-8 h-8" />
                            </div>
                            <p className="text-lg text-gray-700 font-medium">{ventaja}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Ventajas;
