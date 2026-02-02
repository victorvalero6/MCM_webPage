'use client';

import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

const MapController = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
};

export default MapController;
