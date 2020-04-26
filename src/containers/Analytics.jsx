import React from 'react';
import { connect } from 'react-redux';

import Analytics from '../components/Analytics';

const AnalyticsContainer = props => {
  return (
    <Analytics
      water={props.water}
      carbon={props.carbon}
      pounds={props.pounds}
      score={props.score}
    />
  );
}

const mapStateToProps = state => ({
  water: state.score.water,
  carbon: state.score.carbon,
  pounds: state.score.pounds,
  score: state.score.score
})

export default connect(
  mapStateToProps,
  { }
)(AnalyticsContainer);
