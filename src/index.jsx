import React from "react";
import ReactDOM from "react-dom";

import './styles/style.less'
import GardenPage from './containers/GardenPage';

const App = () => {
  return (
    <div className="App">
      <GardenPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
