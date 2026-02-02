'use client';

import { Send } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

const Contacto = () => {
    const { t } = useLanguage();
    return (
        <section id="contacto" className="bg-gray-50 relative overflow-hidden">

            {/* Banner Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <div className="w-full h-full bg-blue-950 flex items-center justify-center">
                        {/* Placeholder or Map Background */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Monterrey_Mexico_Map.png/2048px-Monterrey_Mexico_Map.png')] bg-cover bg-center"></div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-widest uppercase">
                        {t.contact.bannerTitle}
                    </h1>
                </div>
                <div className="absolute bottom-10 left-10 md:left-32">
                    <h2 className="text-3xl md:text-4xl text-white font-light border-l-4 border-yellow-500 pl-4">
                        {t.contact.bannerSubtitle}
                    </h2>
                </div>
            </div>

            <div className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Column - Text */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                                    {t.contact.headingPrefix} <span className="text-blue-900">{t.contact.headingHighlight}</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                {t.contact.introText}
                            </p>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative">
                            <form className="space-y-6">
                                {/* Nombre */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">{t.contact.form.fullNameLabel}</label>
                                    <input
                                        type="text"
                                        placeholder={t.contact.form.fullNamePlaceholder}
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 outline-none transition-all duration-300"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Correo */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">{t.contact.form.emailLabel}</label>
                                        <input
                                            type="email"
                                            placeholder={t.contact.form.emailPlaceholder}
                                            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 outline-none transition-all duration-300"
                                        />
                                    </div>

                                    {/* Telefono */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700 ml-1">{t.contact.form.phoneLabel}</label>
                                        <input
                                            type="tel"
                                            placeholder={t.contact.form.phonePlaceholder}
                                            className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 outline-none transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Asunto */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">{t.contact.form.messageLabel}</label>
                                    <textarea
                                        rows={4}
                                        placeholder={t.contact.form.messagePlaceholder}
                                        className="w-full bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl px-5 py-4 text-gray-800 placeholder-gray-400 outline-none transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-900/20"
                                >
                                    <Send size={20} />
                                    <span>{t.contact.form.submit}</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Completo */}
            <footer className="bg-gray-900 text-white border-t border-gray-800 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center">
                        {/* Col 1: MCM */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-blue-600 inline-block pb-2">
                                {t.footer.companyTitle}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs mx-auto">
                                {t.footer.companyDescription}
                            </p>
                        </div>

                        {/* Col 2: Mapa */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-orange-500 inline-block pb-2">
                                {t.footer.navTitle}
                            </h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                {t.footer.navLinks.map((link) => (
                                    <li key={link.id}>
                                        <a href={`#${link.id}`} className="hover:text-white transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Contacto Info */}
                        <div className="flex flex-col items-center">
                            <h4 className="text-lg font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-yellow-500 inline-block pb-2">
                                {t.footer.contactTitle}
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-400 flex flex-col items-center">
                                <li className="flex flex-col items-center space-y-2">
                                    <span>
                                        Av. Industrial No. 123<br />
                                        Parque Industrial, CP 66000<br />
                                        Monterrey, N.L. México
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>+52 (81) 8123 4567</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-white">contacto@mcm.com.mx</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex justify-center bg-gray-900">
                        <p className="text-xs text-center text-gray-500">
                            {t.footer.copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Contacto;
