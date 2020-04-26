import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';

import './style.less';

function Plant(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead

  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <boxBufferGeometry attach="geometry" args={[100, 100, 100]} />
      <meshStandardMaterial attach="material" color={"#32CD32"} />
    </mesh>
  )
}

export default Plant;
