import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Slider } from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

import { changeWeek } from '../../actions/cropActions';

import './style.less';

const SliderCard = props => {
  const [sval, setVal] = useState(0);

  const marks = {
    0: '0W',
    10: '10W',
    20: '20W',
  };

  const mid = 10;
  const preColorCls = sval >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = sval >= mid ? 'icon-wrapper-active' : '';

  const handleChange = e => {
    setVal(e);
  };

  function onAfterChange(value) {
    props.changeWeek(value);
  }

  return (
    <div className="slidercard">
      <div className="slider_wrapper">
        <h1>Call Janus to change time! Plant crops at different time periods.</h1>
        <div className="icon-wrapper">
          <FrownOutlined className={preColorCls} />
          <Slider
            marks={marks}
            max={20}
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

export default connect(
  null,
  { changeWeek }
)(SliderCard);
