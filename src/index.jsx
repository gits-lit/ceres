import React from "react";
import ReactDOM from "react-dom";

import GardenPage from './containers/GardenPage';

const App = () => {
  return (
    <div>
      <GardenPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
