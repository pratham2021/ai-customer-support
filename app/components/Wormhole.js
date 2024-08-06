'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import spline from './travel_route.js';

const Wormhole = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const container = mountRef.current;
        const w = container.clientWidth;
        const h = container.clientHeight;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.2);

        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.03;

        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100);
        bloomPass.threshold = 0.002;
        bloomPass.strength = 3.5;
        bloomPass.radius = 0;
        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true);
        const tubeMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            wireframe: true,
        });
        const tube = new THREE.Mesh(tubeGeo, tubeMat);
        scene.add(tube);

        const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
        scene.add(hemiLight);

        const edges = new THREE.EdgesGeometry(tubeGeo, 0.2);
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
        const tubeLines = new THREE.LineSegments(edges, lineMat);
        scene.add(tubeLines);

        function updateCamera(t) {
            const time = t * 0.1;
            const looptime = 8 * 1000;
            const p = (time % looptime) / looptime;
            const pos = tubeGeo.parameters.path.getPointAt(p);
            const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1);
            camera.position.copy(pos);
            camera.lookAt(lookAt);
        }

        function animate(t = 0) {
            requestAnimationFrame(animate);
            updateCamera(t);
            composer.render(scene, camera);
            controls.update();
        }

        animate();

        function handleWindowResize() {
            const newWidth = container.clientWidth;
            const newHeight = container.clientHeight;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
            composer.setSize(newWidth, newHeight);
        }

        window.addEventListener('resize', handleWindowResize, false);

        return () => {
            container.removeChild(renderer.domElement);
            renderer.dispose();
            controls.dispose();
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                width: '100%',
                height: 'calc(100vh - 300px)', 
                position: 'absolute',
                top: '300px',
                left: 0,
                background: '#000'
            }}
        />
    );
};

export default Wormhole;
