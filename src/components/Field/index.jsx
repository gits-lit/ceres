import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';

import './style.less';
import Plant from '../Plant';

function Dirt(props) {
  // This reference will give us direct access to the mesh

  return (
    <mesh
      {...props}
      scale={[.01, .01, .01]}>
      <boxBufferGeometry attach="geometry" args={[150, 150, 150]} />
      <meshStandardMaterial attach="material" color={"#000000"} />
    </mesh>
  )
}

const Field = props => {

  const field = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {field.current.rotation.y += 0.01});

  return (
    <group ref={field}>
      <Dirt position={[-10, -10, -10]}/>
      <Plant />
    </group>
  );
}

export default Field;
