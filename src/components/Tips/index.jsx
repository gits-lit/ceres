import React from 'react';
import { connect } from 'react-redux';

import './style.less';

const Tips = props => {
  return (
    <div className="tips">
      <div className="tips_wrapper">
        <h1>{props.tip}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tip: state.score.tip
})

export default connect(
  mapStateToProps,
  { }
)(Tips);
