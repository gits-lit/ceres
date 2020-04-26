import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

import './style.less';
import Plant from '../Plant';

function Dirt(props) {
  // This reference will give us direct access to the mesh

  return (
    <mesh
      {...props}
      >
      <boxBufferGeometry attach="geometry" args={[525, 10, 525]} />
      <meshStandardMaterial attach="material" color={"#493829"} />
    </mesh>
  )
}

const globalGeometry = new THREE.BoxBufferGeometry();
const globalMaterial = new THREE.MeshBasicMaterial();

const coords = [[0,0], [0, -150], [0,150], [150,0], [-150, 0], [-150, -150], [-150, 150], [150, 150], [150, -150]]

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
      {props.crops.map((crop, index) => {
        if(crop != null) {
          console.log('hi' + crop[0])
          const subcoords = coords[index];
          return (
            <Plant name={crop[0]} position={[subcoords[0], 0, subcoords[1]]} key={`plant-${index}`}/>
          );
        }
      })}
    </group>
  );
}

export default Field;
