import type { Metadata } from 'next';
import './globals.css';
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
    title: 'MCM - Minerales y Carbones de México',
    description: 'Empresa 100% Mexicana dedicada a la exploración, explotación, procesamiento y comercialización de productos minerales industriales, carbones y coques.',
    openGraph: {
        title: 'MCM - Minerales y Carbones de México',
        description: 'Empresa 100% Mexicana dedicada a la exploración, explotación, procesamiento y comercialización de productos minerales industriales, carbones y coques.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
