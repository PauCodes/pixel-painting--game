// import './App.css';
import Header from './components/Header';
import Pixels from './components/Pixels';
import { BsEmojiSunglasses } from "react-icons/bs";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { useContext, useState } from 'react';
import Footer from './components/Footer';
import ColourContext from './context/ColourContext';
import Button from './components/Button';

function App() {

  const { resetHandler } = useContext(ColourContext);

  const darkColour = <BsEmojiSunglassesFill/>
  const lightColourCode = "#FAF7F0";
  const darkColourCode = "#06283D";

  const [ clicked, setClicked ] = useState(darkColour);
  const [ bkgColour, setColour ] = useState(darkColourCode);
  
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
              clicked ? <button className="toggleBtn" onClick={() => toggleHandler(lightColourCode)}>{<BsEmojiSunglassesFill className="icon"/>}</button> :
              <Button className="toggleBtn" onClick={() => toggleHandler(darkColourCode)} >{<BsEmojiSunglasses className="icon"/>}</Button>
            }       
          </div>
          <Header bkgColour={bkgColour} lightColourCode={lightColourCode} darkColourCode={darkColourCode}/>
          <Pixels bkgColour={bkgColour} lightColourCode={lightColourCode} darkColourCode={darkColourCode}/>
          {/* <Button style={{"backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode, "color": bkgColour === darkColourCode ? darkColourCode  : lightColourCode }} className='resetBtn' onClick={resetHandler}>Reset</Button> */}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
