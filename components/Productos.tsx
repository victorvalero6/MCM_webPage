'use client';

import { ArrowRight, Truck } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import RockModel from './RockModel';
import { useLanguage } from '@/components/LanguageContext';
import { FadeInSection } from '@/hooks/useFadeIn';

const Productos = () => {
    const { t } = useLanguage();
    const products = t.products.items;
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    return (
        <section id="productos" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <Image
                        src="/images/rocas.webp"
                        alt={t.products.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                    <FadeInSection>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider uppercase text-balance">
                            {t.products.bannerTitle}
                        </h1>
                    </FadeInSection>
                </div>
                <div className="absolute bottom-8 left-6 md:left-16 lg:left-24">
                    <FadeInSection delay={200} direction="left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-light border-l-4 border-orange-500 pl-4">
                            {t.products.bannerSubtitle}
                        </h2>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Title & Intro */}
                    <div className="flex flex-col h-full">
                        <div className="space-y-6">
                            <FadeInSection>
                                <h2 className="text-3xl md:text-4xl font-light text-slate-900 border-l-4 border-blue-900 pl-5 uppercase tracking-wider">
                                    {t.products.sectionTitle}
                                </h2>
                            </FadeInSection>
                            
                            <FadeInSection delay={100}>
                                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                    {t.products.introText}
                                </p>
                            </FadeInSection>

                            <FadeInSection delay={200}>
                                <div className="mt-8 rounded-xl shadow-sm overflow-hidden border border-slate-200">
                                    <div className="bg-blue-900 text-white p-6 md:p-8">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <Truck className="w-8 h-8 text-orange-400" />
                                            <h3 className="text-xl font-bold uppercase tracking-wide">{t.products.logisticsTitle}</h3>
                                        </div>
                                        <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                                            {t.products.logisticsText}
                                        </p>
                                    </div>

                                    <div className="bg-white p-6 md:p-8 border-t-4 border-blue-900">
                                        <div className="flex items-center mb-4">
                                            <Truck className="w-6 h-6 text-blue-900 mr-3" />
                                            <h3 className="text-xl font-bold text-slate-900">{t.products.serviceTitle}</h3>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                            {t.products.serviceText}
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Logo that appears when a product is selected */}
                        <div
                            className={`flex-1 flex flex-col justify-center items-center transition-all duration-500 ease-out ${selectedProduct !== null ? 'opacity-100 py-10' : 'opacity-0 overflow-hidden h-0 py-0'
                                }`}
                        >
                            <div className="flex justify-center items-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                                <div className="relative w-64 h-40 md:w-72 md:h-44 transform transition-transform duration-500 hover:scale-105">
                                    <Image
                                        src="/images/logoFInal.png"
                                        alt="MCM Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product List */}
                    <div className="space-y-4">
                        {products.map((product, index) => {
                            const isInteractive = index < 3;

                            return (
                                <FadeInSection key={index} delay={index * 80}>
                                    <div
                                        onClick={() => isInteractive && setSelectedProduct(selectedProduct === index ? null : index)}
                                        className={`group transition-all duration-300 ease-out border rounded-xl overflow-hidden 
                                            ${isInteractive ? 'cursor-pointer hover:border-slate-300' : 'cursor-default opacity-60 bg-slate-50'}
                                            ${selectedProduct === index
                                                ? 'border-blue-900 shadow-md bg-slate-50'
                                                : 'border-slate-200 bg-white'}
                                            ${isInteractive && selectedProduct !== index ? 'hover:bg-slate-50' : ''}
                                        `}
                                    >
                                        <div className="p-5 md:p-6">
                                            <div className="flex items-start space-x-3">
                                                <div className="mt-1">
                                                    <ArrowRight
                                                        className={`transition-transform duration-300 
                                                            ${selectedProduct === index ? 'rotate-90 text-blue-900' : 'text-slate-400'}
                                                            ${isInteractive && selectedProduct !== index ? 'group-hover:translate-x-1 group-hover:text-blue-900' : ''}
                                                        `}
                                                        size={20}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className={`text-lg font-bold mb-2 uppercase tracking-wide transition-colors duration-300 ${selectedProduct === index ? 'text-blue-900' : 'text-slate-900'
                                                        }`}>
                                                        {product.title}
                                                    </h3>
                                                    <p className={`text-slate-600 leading-relaxed text-sm transition-all duration-300 ${selectedProduct === index ? 'opacity-100' : 'line-clamp-2'
                                                        }`}>
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Expandable 3D Model */}
                                            <div
                                                className={`overflow-hidden transition-all duration-500 ease-out ${selectedProduct === index ? 'max-h-[350px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="relative w-full h-[320px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex flex-col items-center justify-center">
                                                    {index < 3 ? (
                                                        <RockModel />
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeInSection>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Productos;
