// mesh의 회전값을 매 프레임마다 변경 시키기
// 매 프레임마다 변경 시키면 회전 애니메이션과 동일하다.
// 그러기 위해서는 mesh에 접근할 수 있어야 하므로 useRef를 사용한다.
// 매 프레임마다 mesh의 rotation을 변경 시켜야 한다.
// 매 프레임이 렌더링되기 이전에 호출되는 콜백함수를 정의하기 위해서 useFrame을 사용한다.
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function MyElement3D() {
  const refMesh = useRef<Mesh>(null!);
  {
    /* useFrame은 콜백함수 하나를 인자로 받는다.
     * 이 콜백함수는 매 프레임이 렌더되기 직전에 호출된다.
     * delta 인자는 프레임 사이의 시간 간격을 나타낸다. 단위는 ms이다.
     */
  }
  useFrame((state, delta) => {
    refMesh.current.rotation.y += delta;
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <mesh ref={refMesh} rotation-y={(45 * Math.PI) / 180}>
        <boxGeometry />
        <meshStandardMaterial color="#e67e22" />
      </mesh>
    </>
  );
}
