import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import './style.less';
import tri from '../../assets/tri.svg';
import numbers from '../../assets/numbers.svg';
import potato from '../../assets/potato.png';
import { updateProfile } from '../../actions/profileActions';

const SecondPage = props => {

  const [gardenName, setGarden] = useState('');
  const [locationName, setLocation] = useState('');
  const [sqFt, setFt] = useState('');

  const submit = (e) => {
    e.preventDefault();
    props.updateProfile(gardenName, locationName, sqFt)
  }

  const handleGarden = (event) => {
    setGarden(event.target.value);
  }

  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const handleFootage = (event) => {
    setFt(event.target.value);
  }

  return (
    <div className="second-page">
      <div className="flex_wrapper">
        <div className="left">
          <form className="signup-card" onSubmit={submit}>
            <h1>Sign Up</h1>
            <div className="fields" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false">
              <h2>Garden Name</h2>
              <input type="text" className="input" autoFocus onChange={handleGarden}/>
              <h2>Where do you live?</h2>
              <input type="text" className="input" autoFocus onChange={handleLocation}/>
              <h2>
                How much space do you have? <span style={{ fontSize: '1rem' }}>(sqft)</span>
              </h2>
              <input type="number" className="input" autoFocus onChange={handleFootage}/>
              <button type="submit" className="button" value="Submit">
                <h2>begin</h2>
              </button>
            </div>
          </form>
        </div>
        <div className="right">
          <img className="tri" src={tri} alt={'triangle'} />
          <img className="numbers" src={numbers} alt="num" />
          <img className="potato" src={potato} alt="potato" />
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { updateProfile }
)(SecondPage);
