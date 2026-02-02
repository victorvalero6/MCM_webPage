'use client';

import { ArrowRight, Truck } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import RockModel from './RockModel';
import { useLanguage } from '@/components/LanguageContext';

const Productos = () => {
    const { t } = useLanguage();
    const products = t.products.items;
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    return (
        <section id="productos" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <Image
                        src="/images/rocas.webp"
                        alt={t.products.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase">
                        {t.products.bannerTitle}
                    </h1>
                </div>
                <div className="absolute bottom-10 left-10 md:left-32">
                    <h2 className="text-3xl md:text-4xl text-white font-light border-l-4 border-orange-500 pl-4">
                        {t.products.bannerSubtitle}
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Title & Intro */}
                    <div className="flex flex-col h-full">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-light text-gray-900 border-l-4 border-blue-900 pl-6 uppercase tracking-widest">
                                {t.products.sectionTitle}
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t.products.introText}
                            </p>

                            <div className="mt-12 rounded-xl shadow-xl overflow-hidden border border-gray-200">
                                <div className="bg-blue-900 text-white p-8">
                                    <div className="flex items-center space-x-4 mb-6">
                                        <Truck className="w-10 h-10 text-orange-400" />
                                        <h3 className="text-2xl font-bold uppercase tracking-wide">{t.products.logisticsTitle}</h3>
                                    </div>
                                    <p className="text-blue-100 leading-relaxed">
                                        {t.products.logisticsText}
                                    </p>
                                </div>

                                <div className="bg-white p-8 border-t-4 border-blue-900">
                                    <div className="flex items-center mb-6">
                                        <Truck className="w-8 h-8 text-blue-900 mr-3" />
                                        <h3 className="text-2xl font-bold text-gray-900">{t.products.serviceTitle}</h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed">
                                        {t.products.serviceText}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Logo that appears when a product is selected - Centered in remaining space */}
                        <div
                            className={`flex-1 flex flex-col justify-center items-center transition-all duration-700 ease-in-out ${selectedProduct !== null ? 'opacity-100 py-12' : 'opacity-0 overflow-hidden h-0 py-0'
                                }`}
                        >
                            <div className="flex justify-center items-center p-10 bg-white rounded-3xl shadow-lg border border-gray-200">
                                <div className="relative w-80 h-48 transform transition-transform duration-700 hover:scale-105">
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
                    <div className="space-y-6">
                        {products.map((product, index) => {
                            const isInteractive = index < 3; // First 3 products are interactive

                            return (
                                <div
                                    key={index}
                                    onClick={() => isInteractive && setSelectedProduct(selectedProduct === index ? null : index)}
                                    className={`group transition-all duration-500 ease-in-out border rounded-2xl overflow-hidden 
                                        ${isInteractive ? 'cursor-pointer hover:border-gray-300' : 'cursor-default opacity-60 bg-gray-100'}
                                        ${selectedProduct === index
                                            ? 'border-blue-900 shadow-lg bg-gray-50 scale-[1.02]'
                                            : 'border-gray-200 bg-white'}
                                        ${isInteractive && selectedProduct !== index ? 'hover:bg-gray-50' : ''}
                                    `}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="mt-1">
                                                <ArrowRight
                                                    className={`transition-transform duration-300 
                                                        ${selectedProduct === index ? 'rotate-90 text-blue-900' : 'text-gray-400'}
                                                        ${isInteractive && selectedProduct !== index ? 'group-hover:translate-x-2 group-hover:text-blue-900' : ''}
                                                    `}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-xl font-bold mb-2 uppercase tracking-wide transition-colors duration-300 ${selectedProduct === index ? 'text-blue-900' : 'text-gray-900'
                                                    }`}>
                                                    {product.title}
                                                </h3>
                                                <p className={`text-gray-600 leading-relaxed transition-all duration-500 ${selectedProduct === index ? 'opacity-100 max-h-40' : 'line-clamp-2'
                                                    }`}>
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Expandable 3D Model Placeholder */}
                                        <div
                                            className={`overflow-hidden transition-all duration-700 ease-in-out ${selectedProduct === index ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="relative w-full h-[400px] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 shadow-inner flex flex-col items-center justify-center transition-colors">
                                                {index < 3 ? (
                                                    <RockModel />
                                                ) : (
                                                    null
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Productos;
