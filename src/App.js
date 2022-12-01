import './App.css';
import Header from './components/Header';
import Pixels from './components/Pixels';
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { useState } from 'react';
import { ColourProvider } from './context/ColourContext';
import Footer from './components/Footer';

function App() {

  const lightColour = <BsEmojiSunglasses/>
  const lightColourCode = "#FAF7F0";
  const darkColourCode = "#06283D";

  const [ clicked, setClicked ] = useState(lightColour);
  const [ bkgColour, setColour ] = useState(lightColourCode);
  

  const toggleHandler = (themeColour) => {
    setColour(themeColour);
    setClicked(!clicked);
  };

  return (
    <ColourProvider>
    <div className="App">
      <main style={{"backgroundColor": bkgColour}}>
        <div className='wrapper'>
          <div className="toggleBtnContainer">
            {
              clicked ? <button className="toggleBtn" onClick={() => toggleHandler(darkColourCode)}>{<BsEmojiSunglassesFill className="icon"/>}</button> :
              <button className="toggleBtn" onClick={() => toggleHandler(lightColourCode)} >{<BsEmojiSunglasses className="icon"/>}</button>
            }       
          </div>
          <Header bkgColour={bkgColour} lightColourCode={lightColourCode} darkColourCode={darkColourCode}/>
          <Pixels />
        </div>
        <Footer/>
      </main>
    </div>
    </ColourProvider>
  );
}

export default App;
