import React from "react";
import Router from "./Routes";
import Navigator from "./Components/Navigator/Navigator";
import Fonts from "./Fonts";
function App() {
  return (
    <Navigator>
      <Fonts />
      <Router />
    </Navigator>
  );
}

export default App;
