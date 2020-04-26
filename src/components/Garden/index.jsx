import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';

import './style.less';
import Field from '../Field';

const Garden = props => {
  return (
    <div className="garden">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Field />
      </Canvas>
    </div>
  );

}

export default Garden;
