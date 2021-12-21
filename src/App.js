import React, { useState } from 'react';
import Home from './Home';
import Watched from './Watched';
import Picker from './Picker';
import './App.css';

function App(props) {

  const [screen, setScreen] = useState(0);
  const [dark, setDark] = useState(false);

  const handleWatched = () => {
    setScreen(1);
  }

  const handlePicker = () => {
    setScreen(2);
  }

  const goBack = () => {
    console.log("HELLO")
    setScreen(0);
  }

  const handleDark = () => {
    setDark(true);
  }

  const handleLight = () => {
    setDark(false);
  }

  return (
    <div className="App" style={{backgroundImage: `${dark ? `url("https://weberr-screenshots.s3.ap-south-1.amazonaws.com/jadark.png")` : `url("https://weberr-screenshots.s3.ap-south-1.amazonaws.com/jasa.jpeg")`}`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative'}}>
      {screen === 0 && <Home handleWatched={handleWatched} handlePicker={handlePicker} goDark={handleDark} goLight={handleLight} />}
      {screen === 1 && <Watched goBack={goBack} />}
      {screen === 2 && <Picker goBack={goBack} />}
    </div>
  );
}

export default App;
