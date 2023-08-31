import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import * as Three from "three";

export default function MyElement3D() {
  const refMesh = useRef<Mesh>(null!);

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <axesHelper scale={10} />
      <OrbitControls />
      <mesh ref={refMesh} position-y={2} rotation-x={(45 * Math.PI) / 180}>
        <boxGeometry />
        <meshStandardMaterial color="#e67e22" />
      </mesh>
    </>
  );
}
