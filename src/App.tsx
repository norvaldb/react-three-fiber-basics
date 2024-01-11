import "./App.css";
import { Canvas, Color, useFrame, Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
} from "three";

type CubeProps = {
  position?: Vector3;
  color?: Color;
  size?: number;
};

const Cube: React.FC<CubeProps> = ({ position, color, size }) => {
  const ref =
    useRef<
      Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    >(null);

  useFrame((_state, _delta) => {
    // rotate the cube
    ref.current!.rotation.x += _delta;
    ref.current!.rotation.y += _delta;
    console.log(_delta);
    console.log(_state);
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.5} />

      {/*<group position={[0, -1, 0]}>*/}
      {/*  <Cube position={[1, -1, 0]} size={1} color={"hotpink"} />*/}
      {/*  <Cube position={[-1, -1, 0]} size={1} color={"blue"} />*/}
      {/*  <Cube position={[1, 2, 0]} size={1} color={"yellow"} />*/}
      {/*  <Cube position={[-1, 2, 0]} size={1} color={"green"} />*/}
      {/*</group>*/}

      <Cube position={[0, 0, 0]} size={1} color={"hotpink"} />
    </Canvas>
  );
};

export default App;
