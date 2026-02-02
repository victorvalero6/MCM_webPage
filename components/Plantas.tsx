'use client';

import { Factory, Truck, Warehouse } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import { FadeInSection } from '@/hooks/useFadeIn';

const MapController = dynamic(
    () => import('./MapController'),
    { ssr: false }
);

const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
);
const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
);


const Plantas = () => {
    const [isClient, setIsClient] = useState(false);
    const [L, setL] = useState<typeof import('leaflet') | null>(null);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        setIsClient(true);
        import('leaflet').then((leaflet) => {
            delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
            leaflet.Icon.Default.mergeOptions({
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            });
            setL(leaflet);
        });
    }, []);

    const handleGetUserLocation = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Could not get your location.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const locations = [
        { name: "Hermosillo, Sonora", coords: [29.072967, -110.955919], type: "factory", color: "green" },
        { name: "Lazaro Cardenas, Michoacan", coords: [17.9595, -102.1986], type: "factory", color: "green" },
        { name: "Monclova, Coahuila", coords: [26.9083, -101.4231], type: "factory", color: "green" },
        { name: "Saltillo, Coahuila", coords: [25.4383, -100.9737], type: "factory", color: "green" },
        { name: "Apodaca, Nuevo Leon", coords: [25.7833, -100.1833], type: "center", color: "orange" },
        { name: "Puebla, Puebla", coords: [19.0414, -98.2063], type: "center", color: "orange" },
        { name: "Brownsville, Texas", coords: [25.9018, -97.4975], type: "warehouse", color: "blue" },
    ];

    const getIcon = (type: string, color: string) => {
        if (!L) return undefined;

        if (color === 'red') {
            return L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #ef4444; width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            });
        }

        let iconSvg = '';
        let bgColor = '';

        switch (type) {
            case 'factory':
                bgColor = '#22c55e';
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>`;
                break;
            case 'center':
                bgColor = '#f97316';
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`;
                break;
            case 'warehouse':
                bgColor = '#3b82f6';
                iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/></svg>`;
                break;
            default:
                bgColor = '#9ca3af';
        }

        return L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: ${bgColor}; width: 1.5rem; height: 1.5rem; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;">
                    ${iconSvg}
                   </div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });
    };

    return (
        <section id="plantas" className="bg-white">
            {/* Banner Section */}
            <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900">
                    <Image
                        src="/images/plantas.webp"
                        alt={t.plants.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
                    <FadeInSection>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wider uppercase text-balance">
                            {t.plants.bannerTitle}
                        </h1>
                    </FadeInSection>
                </div>
                <div className="absolute bottom-8 left-6 md:left-16 lg:left-24">
                    <FadeInSection delay={200} direction="left">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-light border-l-4 border-emerald-500 pl-4">
                            {t.plants.bannerSubtitle}
                        </h2>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <FadeInSection>
                    <div className="text-center mb-12 md:mb-16">
                        <h3 className="text-xl md:text-2xl lg:text-3xl text-slate-700 font-light leading-relaxed max-w-4xl mx-auto">
                            {t.plants.introText}
                        </h3>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Map Column */}
                    <div className="lg:order-2 space-y-4">
                        <FadeInSection delay={100} direction="left">
                            <div className="h-[400px] md:h-[480px] rounded-xl overflow-hidden shadow-sm border border-slate-200 z-0 relative bg-white">
                                {isClient && L && (
                                    <MapContainer
                                        center={userLocation || [23.6345, -102.5528]}
                                        zoom={5}
                                        scrollWheelZoom={false}
                                        className="h-full w-full"
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        {userLocation && (
                                            <>
                                                <Marker position={userLocation} icon={getIcon('user', 'red')}>
                                                    <Popup>{t.plants.locationTypes.myLocation}</Popup>
                                                </Marker>
                                                <MapController center={userLocation} />
                                            </>
                                        )}

                                        {locations.map((loc, idx) => (
                                            <Marker
                                                key={idx}
                                                position={[loc.coords[0], loc.coords[1]] as [number, number]}
                                                icon={getIcon(loc.type, loc.color)}
                                            >
                                                <Popup>
                                                    <strong>{loc.name}</strong><br />
                                                    {loc.type === 'factory'
                                                        ? t.plants.locationTypes.factory
                                                        : loc.type === 'center'
                                                            ? t.plants.locationTypes.center
                                                            : t.plants.locationTypes.warehouse}
                                                </Popup>
                                            </Marker>
                                        ))}
                                    </MapContainer>
                                )}
                                {!isClient && (
                                    <div className="h-full w-full bg-slate-100 flex items-center justify-center">
                                        <span className="text-slate-500">{t.plants.mapLoading}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleGetUserLocation}
                                    className="flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2.5 rounded-lg shadow-sm transition-colors text-sm font-medium"
                                >
                                    <span>{t.plants.locationTypes.activateLocation}</span>
                                </button>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Lists Column */}
                    <div className="space-y-10 lg:order-1">
                        {/* Productivas */}
                        <FadeInSection>
                            <div className="relative pl-7 border-l-2 border-emerald-500">
                                <div className="absolute -left-3 top-0 bg-white p-1">
                                    <Factory className="text-emerald-600" size={22} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">{t.plants.productionTitle}</h4>
                                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                                    <li className="hover:text-emerald-600 transition-colors cursor-pointer">HERMOSILLO, SONORA</li>
                                    <li className="hover:text-emerald-600 transition-colors cursor-pointer">LAZARO CARDENAS, MICHOACAN</li>
                                    <li className="hover:text-emerald-600 transition-colors cursor-pointer">MONCLOVA, COAHUILA</li>
                                    <li className="hover:text-emerald-600 transition-colors cursor-pointer">SALTILLO, COAHUILA</li>
                                </ul>
                            </div>
                        </FadeInSection>

                        {/* Distribucion */}
                        <FadeInSection delay={100}>
                            <div className="relative pl-7 border-l-2 border-orange-500">
                                <div className="absolute -left-3 top-0 bg-white p-1">
                                    <Truck className="text-orange-500" size={22} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">{t.plants.distributionTitle}</h4>
                                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                                    <li className="hover:text-orange-500 transition-colors cursor-pointer">APODACA, NUEVO LEON</li>
                                    <li className="hover:text-orange-500 transition-colors cursor-pointer">PUEBLA, PUEBLA</li>
                                </ul>
                            </div>
                        </FadeInSection>

                        {/* Almacenamiento */}
                        <FadeInSection delay={200}>
                            <div className="relative pl-7 border-l-2 border-blue-500">
                                <div className="absolute -left-3 top-0 bg-white p-1">
                                    <Warehouse className="text-blue-500" size={22} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">{t.plants.storageTitle}</h4>
                                <ul className="space-y-2 text-slate-600 text-sm md:text-base">
                                    <li className="hover:text-blue-500 transition-colors cursor-pointer">BROWNSVILLE, TEXAS</li>
                                </ul>
                                <p className="mt-4 text-xs md:text-sm text-slate-500 italic">
                                    {t.plants.storageNote}
                                </p>
                            </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plantas;
