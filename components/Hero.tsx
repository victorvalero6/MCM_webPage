'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const { t } = useLanguage();

    const slides = [
        {
            image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920',
            title: (
                <>
                    {t.hero.slides[0].title.pre}<br />
                    <span className="text-6xl md:text-7xl lg:text-8xl">{t.hero.slides[0].title.highlight}</span>
                </>
            ),
            subtitle: t.hero.slides[0].subtitle,
        },
        {
            image: '/images/mina.webp',
            title: (
                <span className="text-6xl md:text-7xl lg:text-8xl uppercase tracking-wider">
                    {t.hero.slides[1].titleLines[0]}<br />
                    {t.hero.slides[1].titleLines[1]}<br />
                    {t.hero.slides[1].titleLines[2]}
                </span>
            ),
            subtitle: t.hero.slides[1].subtitle,
        },
        {
            image: '/images/nosotros.webp',
            title: (
                <>
                    <span className="text-3xl md:text-5xl block mb-2">{t.hero.slides[2].title.pre}</span>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-black">{t.hero.slides[2].title.highlight}</span>
                </>
            ),
            subtitle: t.hero.slides[2].subtitle,
        },
    ];

    // Add a clone of the first slide to the end
    const extendedSlides = [...slides, { ...slides[0], isClone: true }];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Handle seamless loop reset
    useEffect(() => {
        if (currentSlide === extendedSlides.length - 1) {
            // Wait for transition to finish (1000ms), then snap to 0
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentSlide(0);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [currentSlide, extendedSlides.length]);

    // Re-enable transition after snap
    useEffect(() => {
        if (!isTransitioning) {
            const timeout = setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Slides Container */}
            <div className="absolute inset-0 w-full h-full">
                {extendedSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full ease-in-out`}
                        style={{
                            transform: `translateX(${(index - currentSlide) * 100}%)`,
                            transitionDuration: isTransitioning ? '1000ms' : '0ms',
                        }}
                    >
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-black/40 z-10" />

                        {/* Image */}
                        <div className="relative w-full h-full">
                            {slide.image.startsWith('http') ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={slide.image}
                                    alt={t.hero.imageAlt}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={slide.image}
                                    alt={t.hero.imageAlt}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-start justify-center h-full">
                <div className="max-w-4xl transition-all duration-700 transform text-left">
                    <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-lg">
                        {extendedSlides[currentSlide].title}
                    </h1>
                    <p className="text-white text-xl md:text-2xl leading-relaxed max-w-2xl drop-shadow-md">
                        {extendedSlides[currentSlide].subtitle}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
