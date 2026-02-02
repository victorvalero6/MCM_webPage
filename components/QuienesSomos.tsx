'use client';

import { Target, Lightbulb, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';

const QuienesSomos = () => {
    const { t } = useLanguage();
    return (
        <section id="quienes-somos" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <Image
                        src="/images/nosotros.webp"
                        alt={t.about.bannerImageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase">
                        {t.about.bannerTitle}
                    </h1>
                </div>
                <div className="absolute bottom-10 left-10 md:left-32">
                    <h2 className="text-3xl md:text-4xl text-white font-light border-l-4 border-blue-500 pl-4">
                        {t.about.bannerSubtitle}
                    </h2>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column - Badge & Image */}
                    <div className="lg:col-span-4 space-y-12">
                        {/* Badge #1 */}
                        <div className="bg-blue-600 text-white p-8 md:p-12 text-center shadow-xl relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                            <div className="relative z-10">
                                <h3 className="text-6xl font-black mb-2">{t.about.badge.line1}</h3>
                                <p className="text-2xl font-light mb-2">{t.about.badge.line2}</p>
                                <div className="w-16 h-1 bg-white mx-auto my-4"></div>
                                <p className="text-lg leading-tight font-medium">
                                    {t.about.badge.line3}
                                </p>
                            </div>
                        </div>

                        {/* Imagen Mina */}
                        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/images/mina.webp"
                                alt={t.about.mineImageAlt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Objectives */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-gray-900 flex items-center">
                                {t.about.objectivesTitle}
                            </h3>
                            <ul className="space-y-4">
                                {t.about.objectives.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-3 text-blue-600 mt-1">►</span>
                                        <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Values Banner */}
                        <div className="bg-gray-50 p-8 border-l-4 border-blue-900 rounded-r-lg">
                            <h4 className="text-2xl font-serif italic text-gray-800 mb-2">
                                {t.about.valuesQuote}
                            </h4>
                            <p className="text-gray-500 font-medium">{t.about.valuesCaption}</p>
                        </div>

                        {/* Vision & Mission Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 shrink-0">
                                        <Lightbulb size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
                                        {t.about.visionTitle}
                                    </h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {t.about.visionText}
                                </p>
                            </div>

                            <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 shrink-0">
                                        <Target size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 uppercase tracking-wider">
                                        {t.about.missionTitle}
                                    </h4>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-justify">
                                    {t.about.missionText}
                                </p>
                                <p className="mt-4 text-gray-600 leading-relaxed text-justify border-t pt-4 border-gray-100">
                                    {t.about.missionText2}
                                </p>
                            </div>
                        </div>

                        {/* Logros */}
                        <div className="space-y-6 pt-8 border-t border-gray-200">
                            <div className="flex items-center space-x-3 mb-6">
                                <Award className="text-yellow-500" size={32} />
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {t.about.achievementsTitle}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {t.about.achievements.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mr-3 mt-1 min-w-[20px] text-green-600">
                                            <TrendingUp size={20} />
                                        </div>
                                        <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;
