'use client';

import { Target, Lightbulb, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';
import { FadeInSection } from '@/hooks/useFadeIn';

const QuienesSomos = () => {
    const { t } = useLanguage();
    return (
        <section id="quienes-somos" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <Image
                        src="/images/nosotros.webp"
                        alt={t.about.bannerImageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                    <FadeInSection>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider uppercase text-balance">
                            {t.about.bannerTitle}
                        </h1>
                    </FadeInSection>
                </div>
                <div className="absolute bottom-8 left-6 md:left-16 lg:left-24">
                    <FadeInSection delay={200} direction="left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-light border-l-4 border-blue-500 pl-4">
                            {t.about.bannerSubtitle}
                        </h2>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column - Badge & Image */}
                    <div className="lg:col-span-4 space-y-10">
                        {/* Badge #1 */}
                        <FadeInSection>
                            <div className="bg-blue-900 text-white p-8 md:p-10 text-center shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                                <div className="relative z-10">
                                    <h3 className="text-5xl md:text-6xl font-black mb-2">{t.about.badge.line1}</h3>
                                    <p className="text-xl md:text-2xl font-light mb-2">{t.about.badge.line2}</p>
                                    <div className="w-12 h-0.5 bg-white/50 mx-auto my-4"></div>
                                    <p className="text-base md:text-lg leading-tight font-medium text-blue-100">
                                        {t.about.badge.line3}
                                    </p>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Imagen Mina */}
                        <FadeInSection delay={150}>
                            <div className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/mina.webp"
                                    alt={t.about.mineImageAlt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Objectives */}
                        <FadeInSection>
                            <div className="space-y-5">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                                    {t.about.objectivesTitle}
                                </h3>
                                <ul className="space-y-3">
                                    {t.about.objectives.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3 text-blue-600 mt-1 text-sm">&#9654;</span>
                                            <span className="text-base md:text-lg text-slate-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeInSection>

                        {/* Values Banner */}
                        <FadeInSection delay={100}>
                            <div className="bg-slate-50 p-6 md:p-8 border-l-4 border-blue-900 rounded-r-xl">
                                <h4 className="text-xl md:text-2xl font-serif italic text-slate-800 mb-2">
                                    {t.about.valuesQuote}
                                </h4>
                                <p className="text-slate-500 font-medium text-sm">{t.about.valuesCaption}</p>
                            </div>
                        </FadeInSection>

                        {/* Vision & Mission Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <FadeInSection delay={150}>
                                <div className="bg-white p-6 shadow-sm rounded-xl border border-slate-100 hover:shadow-md transition-shadow h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 shrink-0">
                                            <Lightbulb size={20} />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                                            {t.about.visionTitle}
                                        </h4>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {t.about.visionText}
                                    </p>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={200}>
                                <div className="bg-white p-6 shadow-sm rounded-xl border border-slate-100 hover:shadow-md transition-shadow h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-900 shrink-0">
                                            <Target size={20} />
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
                                            {t.about.missionTitle}
                                        </h4>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {t.about.missionText}
                                    </p>
                                    <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base border-t pt-4 border-slate-100">
                                        {t.about.missionText2}
                                    </p>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Logros */}
                        <FadeInSection delay={250}>
                            <div className="space-y-5 pt-6 border-t border-slate-200">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Award className="text-amber-500" size={28} />
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                                        {t.about.achievementsTitle}
                                    </h3>
                                </div>
                                <ul className="space-y-3">
                                    {t.about.achievements.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="mr-3 mt-1 min-w-[18px] text-emerald-600">
                                                <TrendingUp size={18} />
                                            </div>
                                            <span className="text-base md:text-lg text-slate-600 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeInSection>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;
