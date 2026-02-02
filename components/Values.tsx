'use client';

import { Clock, Zap, Layers } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

const Values = () => {
    const { t } = useLanguage();
    const values = t.values.items;
    const icons = [Clock, Zap, Layers];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {values.map((value, index) => {
                        const Icon = icons[index];
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-blue-900 rounded-full shrink-0">
                                        <Icon className="text-white" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm italic text-gray-600">
                                            {value.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-justify">
                                    {value.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Values;
