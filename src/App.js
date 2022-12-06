// import './App.css';
import Header from './components/Header';
import Pixels from './components/Pixels';
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { useContext, useState } from 'react';
import Footer from './components/Footer';
import ColourContext from './context/ColourContext';

function App() {

  const { resetHandler } = useContext(ColourContext);

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
          <button style={{"backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode, "color": bkgColour === darkColourCode ? darkColourCode  : lightColourCode }} className='resetBtn' onClick={resetHandler}>Reset</button>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
