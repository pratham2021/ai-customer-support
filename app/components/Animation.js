'use client'
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Animation = ({ width = 300, height = 300 }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        mountRef.current.appendChild(renderer.domElement);

        const fov = 70;
        const aspect = width / height;
        const near = 0.1;
        const far = 10;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        const scene = new THREE.Scene();

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;

        const geo = new THREE.IcosahedronGeometry(1.0, 3);
        const mat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            flatShading: true
        });

        const mesh = new THREE.Mesh(geo, mat);
        scene.add(mesh);

        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true
        });

        const wireMesh = new THREE.Mesh(geo, wireMat);
        wireMesh.scale.setScalar(1.001);
        mesh.add(wireMesh);

        const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
        scene.add(hemiLight);

        const animate = (t) => {
            requestAnimationFrame(animate);
            mesh.rotation.y = t * 0.0001;
            renderer.render(scene, camera);
            controls.update();
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            controls.dispose();
        };
    }, [width, height]);

    return (
        <div
            ref={mountRef}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                position: 'absolute',
                top: 0,
                right: 0,
                zIndex: 1,
                backgroundColor: '#000'
            }}
        />
    );
};

export default Animation;
