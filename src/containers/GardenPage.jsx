import React, { useState } from 'react';
//import { connect } from 'react-redux';
import * as THREE from 'three';

import Garden from '../components/Garden';

const GardenPage = props => {
  return (
    <Garden />
  );
}

export default GardenPage;

/*export default connect(
  null,
  { }
)(GardenPage);
*/
