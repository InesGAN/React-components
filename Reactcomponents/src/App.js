import React from 'react';
import './App.css';
import Address from "./component/profile/Address";
import FullName from "./component/profile/FullName";
import ProfilPhoto from "./component/profile/ProfilPhoto";
function App() {
  return (
    <div className="App">
      <header className="App-header">
   <ProfilPhoto/>
   <FullName/>
   <Address/>
   
      </header>
    </div>
  );
}

export default App;
