import React, { useState } from 'react';
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

import './style.less';

const SliderCard = props => {
  const [sval, setVal] = useState(0);

  const marks = {
    0: '0M',
    6: '6M',
    12: '12M',
  };

  const mid = 6;
  const preColorCls = sval >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = sval >= mid ? 'icon-wrapper-active' : '';

  const handleChange = e => {
    setVal(e);
  };

  function onAfterChange(value) {
    console.log('onAfterChange: ', value);
  }

  return (
    <div className="slidercard">
      <div className="slider_wrapper">
        <h1>Slide across different time</h1>
        <div className="icon-wrapper">
          <FrownOutlined className={preColorCls} />
          <Slider
            marks={marks}
            max={12}
            min={0}
            size="large"
            onChange={handleChange}
            value={sval}
            onAfterChange={onAfterChange}
          />
          <SmileOutlined className={nextColorCls} />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
