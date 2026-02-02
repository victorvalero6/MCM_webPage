'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Stage, Float } from '@react-three/drei';
import * as THREE from 'three';

interface Mineral3DProps {
    color?: string;
    roughness?: number;
    scale?: number;
    type?: 'rock' | 'shard' | 'cluster';
}

const CoalMesh = ({ color = '#1a1a1a', roughness = 0.8, type = 'rock' }: Mineral3DProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            // Gentle auto-rotation
            meshRef.current.rotation.y += 0.005;
        }
    });

    // Different geometries for different "types" of coal
    let geometry;
    if (type === 'shard') {
        geometry = <dodecahedronGeometry args={[1, 0]} />; // Sharper
    } else if (type === 'cluster') {
        geometry = <icosahedronGeometry args={[1, 1]} />; // More faceted
    } else {
        geometry = <dodecahedronGeometry args={[1, 1]} />; // Standard rock look
    }

    return (
        <mesh ref={meshRef} castShadow receiveShadow>
            {geometry}
            {/* 
        Displacement map or noise would be better for realism, 
        but for a no-asset solution, we use high roughness + metalness 
      */}
            <meshStandardMaterial
                color={color}
                roughness={roughness}
                metalness={0.2}
                flatShading={true} // Gives the "low poly" rock look which is nice and modern
            />
        </mesh>
    );
};

export const Mineral3D = (props: Mineral3DProps) => {
    return (
        <div className="w-full h-full">
            <div className="absolute inset-0 z-0">
                {/* Adds a subtle gradient behind the 3D model */}
                {/* <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-200 opacity-50 rounded-lg" /> */}
            </div>
            <div className="relative z-10 w-full h-full cursor-grab active:cursor-grabbing">
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
                    <PresentationControls
                        speed={1.5}
                        global
                        zoom={0.7}
                        polar={[-0.1, Math.PI / 4]}
                    >
                        <Stage environment="city" intensity={0.5} shadows={{ type: 'contact', opacity: 0.7, blur: 2 }}>
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                                <CoalMesh {...props} />
                            </Float>
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
};

export default Mineral3D;
