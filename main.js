// Basic Three.js setup
const scene = new THREE.Scene();

// Create a sky-like background
const skyColor = 0x87CEEB; // Light blue color for the sky
scene.background = new THREE.Color(skyColor);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Renderer configuration
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Green plain geometry (made wider)
const geometry = new THREE.PlaneGeometry(500, 500);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const plain = new THREE.Mesh(geometry, material);

// Rotate the plain to be horizontal
plain.rotation.x = - Math.PI / 2;

// Add the plain to the scene
scene.add(plain);

// Add a sun (a simple yellow sphere)
const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);

// Position the sun in the sky
sun.position.set(100, 150, -100);
scene.add(sun);

// Set camera position and angle
camera.position.set(150, 100, 150);  // Move the camera further back to get a wider view
camera.lookAt(plain.position);

// Basic ambient light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

