let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer({ antialias: true});

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    //const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin("");
    var mapTexture = loader.load("https://i1.sndcdn.com/artworks-GMhtUfxEyczZM8Gl-IhPL5Q-t500x500.jpg");
    const material = new THREE.MeshBasicMaterial({ map: mapTexture });
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 3;
}

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();