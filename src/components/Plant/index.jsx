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
      scale={[.01, .01, .01]}>
      <boxBufferGeometry attach="geometry" args={[200, 200, 200]} />
      <meshStandardMaterial attach="material" color={"#32CD32"} />
    </mesh>
  )
}

export default Plant;
