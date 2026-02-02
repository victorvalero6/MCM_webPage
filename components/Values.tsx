'use client';

import { Clock, Zap, Layers } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { FadeInSection } from '@/hooks/useFadeIn';

const Values = () => {
    const { t } = useLanguage();
    const values = t.values.items;
    const icons = [Clock, Zap, Layers];

    return (
        <section className="py-20 md:py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {values.map((value, index) => {
                        const Icon = icons[index];
                        return (
                            <FadeInSection key={index} delay={index * 100}>
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 h-full">
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="flex items-center justify-center w-14 h-14 bg-blue-900 rounded-xl shrink-0">
                                            <Icon className="text-white" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm text-slate-500">
                                                {value.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </FadeInSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;
