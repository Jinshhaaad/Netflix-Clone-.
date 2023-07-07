import React from "react";
import Navbar from "./Components/Navbar";
import {actions,originals} from './urls'
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";



function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Banner/>
      <RowPost url={originals}title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
      
    </div>
  );
}

export default App;
