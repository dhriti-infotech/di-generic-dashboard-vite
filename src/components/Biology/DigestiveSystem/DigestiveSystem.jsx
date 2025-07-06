import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import "./DigestiveSystem.css";

// Loads the GLTF 3D model
function DigestiveModel() {
  const { scene } = useGLTF("/models/DigestiveSystem.glb"); // Place your model in /public/models
  return <primitive object={scene} scale={1.5} />;
}

function DigestiveSystem() {
  return (
    <div className="digestive-system-container">
      <h1 className="title">🧬 3D Digestive System</h1>

      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Html center><span>Loading 3D Model...</span></Html>}>
          <DigestiveModel />
        </Suspense>
        <OrbitControls enableZoom enablePan enableRotate />
      </Canvas>

      <div className="info-panel">
        <h2>🩺 How the Digestive System Works</h2>
        <ul>
          <li><strong>Mouth:</strong> Food intake and initial digestion with saliva.</li>
          <li><strong>Esophagus:</strong> Transports food to stomach via peristalsis.</li>
          <li><strong>Stomach:</strong> Uses acid and enzymes to break food down.</li>
          <li><strong>Small Intestine:</strong> Absorbs nutrients into bloodstream.</li>
          <li><strong>Large Intestine:</strong> Absorbs water and forms waste (feces).</li>
        </ul>
      </div>
    </div>
  );
}

export default DigestiveSystem;
