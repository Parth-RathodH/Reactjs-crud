import React from "react";
import {Routes,Route} from "react-router-dom";
import From from "./componets/Form";
function App() {
  return (
    <div className="App">
     <Routes>
          <Route path="/" element={< From/>} />
      </Routes>
     
      
    </div>
  );
}

export default App;
