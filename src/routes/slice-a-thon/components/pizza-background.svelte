<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	let canvas = $state<HTMLCanvasElement>();
	let renderer: THREE.WebGLRenderer | null = null;
	let animationId: number;
	let failed = $state(false);

	onMount(() => {
		if (!canvas) return;

		try {
			renderer = new THREE.WebGLRenderer({
				canvas,
				alpha: true,
				antialias: false,
				powerPreference: 'low-power'
			});
		} catch {
			failed = true;
			return;
		}

		if (!renderer.getContext()) {
			failed = true;
			return;
		}

		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.8;

		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			100
		);
		camera.position.z = 20;

		// Generate a warm environment map so PBR materials render bright
		const pmrem = new THREE.PMREMGenerator(renderer);
		pmrem.compileCubemapShader();
		const envScene = new THREE.Scene();
		envScene.background = new THREE.Color(0xfff0d6);
		const envLight = new THREE.HemisphereLight(0xfff8ee, 0xf5e6c8, 3.0);
		envScene.add(envLight);
		const envTexture = pmrem.fromScene(envScene, 0.04).texture;
		scene.environment = envTexture;
		pmrem.dispose();

		// Supplemental direct lighting for highlights
		const directional = new THREE.DirectionalLight(0xffffff, 1.0);
		directional.position.set(5, 10, 7);
		scene.add(directional);

		const PIZZA_COUNT = 40;

		// Per-instance animation data
		const pizzaData: {
			x: number;
			y: number;
			z: number;
			rotX: number;
			rotY: number;
			rotZ: number;
			spinSpeedX: number;
			spinSpeedY: number;
			bobSpeed: number;
			bobAmplitude: number;
			bobOffset: number;
			scale: number;
		}[] = [];

		for (let i = 0; i < PIZZA_COUNT; i++) {
			pizzaData.push({
				x: (Math.random() - 0.5) * 50,
				y: (Math.random() - 0.5) * 30,
				z: (Math.random() - 0.5) * 10 - 5,
				rotX: Math.random() * Math.PI * 2,
				rotY: Math.random() * Math.PI * 2,
				rotZ: Math.random() * Math.PI * 2,
				spinSpeedX: (Math.random() - 0.5) * 0.3,
				spinSpeedY: (Math.random() - 0.5) * 0.3,
				bobSpeed: 0.3 + Math.random() * 0.4,
				bobAmplitude: 0.3 + Math.random() * 0.5,
				bobOffset: Math.random() * Math.PI * 2,
				scale: 0.3 + Math.random() * 1.8
			});
		}

		let instancedMesh: THREE.InstancedMesh | null = null;
		const dummy = new THREE.Object3D();

		const loader = new GLTFLoader();
		loader.load('/pizza.glb', (gltf) => {
			// Find the first mesh in the loaded model
			let foundMesh: THREE.Mesh | null = null;
			gltf.scene.traverse((child) => {
				if (child instanceof THREE.Mesh && !foundMesh) {
					foundMesh = child;
				}
			});

			if (!foundMesh) return;
			const sourceMesh: THREE.Mesh = foundMesh;

			instancedMesh = new THREE.InstancedMesh(
				sourceMesh.geometry,
				sourceMesh.material,
				PIZZA_COUNT
			);

			// Set initial transforms
			for (let i = 0; i < PIZZA_COUNT; i++) {
				const d = pizzaData[i];
				dummy.position.set(d.x, d.y, d.z);
				dummy.rotation.set(d.rotX, d.rotY, d.rotZ);
				dummy.scale.setScalar(d.scale);
				dummy.updateMatrix();
				instancedMesh.setMatrixAt(i, dummy.matrix);
			}

			instancedMesh.instanceMatrix.needsUpdate = true;
			scene.add(instancedMesh);
		});

		// Animation loop
		const clock = new THREE.Clock();

		function animate() {
			animationId = requestAnimationFrame(animate);
			const elapsed = clock.getElapsedTime();

			if (instancedMesh) {
				for (let i = 0; i < PIZZA_COUNT; i++) {
					const d = pizzaData[i];
					dummy.position.set(
						d.x,
						d.y + Math.sin(elapsed * d.bobSpeed + d.bobOffset) * d.bobAmplitude,
						d.z
					);
					dummy.rotation.set(
						d.rotX + elapsed * d.spinSpeedX,
						d.rotY + elapsed * d.spinSpeedY,
						d.rotZ
					);
					dummy.scale.setScalar(d.scale);
					dummy.updateMatrix();
					instancedMesh.setMatrixAt(i, dummy.matrix);
				}
				instancedMesh.instanceMatrix.needsUpdate = true;
			}

			renderer!.render(scene, camera);
		}

		animate();

		// Handle resize
		function onResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer!.setSize(window.innerWidth, window.innerHeight);
		}

		window.addEventListener('resize', onResize);

		// Store cleanup ref
		cleanupFn = () => {
			window.removeEventListener('resize', onResize);
			cancelAnimationFrame(animationId);

			if (instancedMesh) {
				instancedMesh.geometry.dispose();
				if (Array.isArray(instancedMesh.material)) {
					instancedMesh.material.forEach((m) => m.dispose());
				} else {
					instancedMesh.material.dispose();
				}
				scene.remove(instancedMesh);
			}

			envTexture.dispose();
			renderer?.dispose();
		};
	});

	let cleanupFn: (() => void) | null = null;

	onDestroy(() => {
		cleanupFn?.();
	});
</script>

{#if !failed}
	<canvas bind:this={canvas} class="bg-crust pointer-events-none fixed inset-0 -z-10 h-full w-full"
	></canvas>
{/if}
