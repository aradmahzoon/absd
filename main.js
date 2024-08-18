// Basic Three.js setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Renderer configuration
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Green plain geometry
const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const plain = new THREE.Mesh(geometry, material);

// Rotate the plain to be horizontal
plain.rotation.x = - Math.PI / 2;

// Add the plain to the scene
scene.add(plain);

// Set camera position
camera.position.y = 50;
camera.position.z = 100;
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
