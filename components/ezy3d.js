import React, { useRef, useState, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ initialScale }) => {
  const gltf = useLoader(GLTFLoader, '/EZ3D/Moon_1_3474.glb'); 
  const mesh = useRef();
  const [rotationSpeed, setRotationSpeed] = useState(0.6);
  const [scale, setScale] = useState(initialScale);

  const deceleration = 0.005;
  const normalSpeed = 0.002;

  useEffect(() => {
    setScale(initialScale * 0.5); 
  }, [initialScale]);

  useFrame(() => {
    if (mesh.current) {
      if (rotationSpeed > normalSpeed) {
        setRotationSpeed(prevSpeed => prevSpeed - deceleration);
      } else if (rotationSpeed < normalSpeed) {
        setRotationSpeed(normalSpeed);
      }
      mesh.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group position={[0, 0.1, 0]}>
      <primitive ref={mesh} object={gltf.scene} scale={[scale, scale, scale]} dispose={null} />
    </group>
  );
};

export default Model;
