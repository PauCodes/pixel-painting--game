import ColourContext from '../context/ColourContext';
import { useContext } from 'react';

const SizeSelector = ({ bkgColour, lightColourCode, darkColourCode}) => {

    const { setIsClicked, setPixelArray } = useContext(ColourContext);

    const pixels = Array(100).fill();//to create an array   
    const pixels200 = Array(200).fill();
    const pixels300 = Array(300).fill();
    const pixels400 = Array(400).fill();
    
    const array100 = () => {
        setIsClicked(true);
        setPixelArray(pixels);
    };

    const array200 = () => {
       setIsClicked(true);
       setPixelArray(pixels200);
   };

   const array300 = () => {
       setIsClicked(true);
       setPixelArray(pixels300);
   };

   const array400 = () => {
       setIsClicked(true);
       setPixelArray(pixels400);
   };
    return (
            <div className='sizeSelectorContainer'>
                <h2 style={{"color": bkgColour === lightColourCode ? darkColourCode : lightColourCode}}>Choose your canvas</h2>
                <div className="pixelBtnContainer">
                    <button style={{"color": bkgColour === darkColourCode  ? darkColourCode  : lightColourCode, "backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode}} className="pixelBtn" onClick={array100}>100px</button>
                    <button style={{"color": bkgColour === darkColourCode  ? darkColourCode  : lightColourCode, "backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode}} className="pixelBtn" onClick={array200}>200px</button>
                    <button style={{"color": bkgColour === darkColourCode  ? darkColourCode  : lightColourCode, "backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode}} className="pixelBtn" onClick={array300}>300px</button>
                    <button style={{"color": bkgColour === darkColourCode  ? darkColourCode  : lightColourCode, "backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode}} className="pixelBtn" onClick={array400}>400px</button>
                </div>
            </div>
    );
};

export default SizeSelector;