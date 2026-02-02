'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useTexture, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

const RockMesh = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    // Load textures
    const props = useTexture({
        map: '/images/rock/textures/stone_with_quartz_bcolor.png',
        normalMap: '/images/rock/textures/stone_with_quartz_norm.png',
        roughnessMap: '/images/rock/textures/stone_with_quartz_rough.png',
        aoMap: '/images/rock/textures/stone_with_quartz_ao.png',
    });

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <Dodecahedron ref={meshRef} args={[1, 2]} scale={1.8}>
            <meshStandardMaterial
                {...props}
                normalScale={new THREE.Vector2(1, 1)}
                roughness={0.8}
            />
        </Dodecahedron>
    );
};

const RockModel = () => {
    return (
        <div className="w-full h-full">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [0, 0, 8] }}>
                <Stage environment="city" intensity={0.6}>
                    <RockMesh />
                </Stage>
                <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default RockModel;
