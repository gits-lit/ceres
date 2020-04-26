import React, { useState, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber';

import './style.less';
import { OBJLoader2 } from "three/examples/jsm/loaders/OBJLoader2";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


function Plant(props) {
  /*const mtl = 'cabbage.mtl';
  const obj = 'cabbage.obj';
  const materialLoaded = useLoader(MTLLoader, mtl);
  const objLoaded = useLoader(OBJLoader2, obj);*/
  const gltf = useLoader(GLTFLoader, '/bell-pepper.gltf')

  return (
    <primitive object={gltf.scene}/>
  )
}

export default Plant;

//map={texture} />
