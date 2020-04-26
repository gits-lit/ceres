import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';

import './style.less';
import Plant from '../Plant';

function Dirt(props) {
  // This reference will give us direct access to the mesh

  return (
    <mesh
      {...props}
      >
      <boxBufferGeometry attach="geometry" args={[500, 10, 500]} />
      <meshStandardMaterial attach="material" color={"#9B7653"} />
    </mesh>
  )
}

const Field = props => {

  const field = useRef();

  useEffect(() => {
    field.current.rotation.x = .15;
  });

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    field.current.rotation.y += 0.005;
  });

  return (
    <group ref={field}
      scale={[.01, .01, .01]}
      >
      <Dirt position={[-10, -10, -10]}/>
      <Plant position={[-200, 0, -200]}/>
    </group>
  );
}

export default Field;
