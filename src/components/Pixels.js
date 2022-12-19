import { useContext } from "react";
import Pixel from "./Pixel";
import ColourContext from '../context/ColourContext';
import Button from './Button';

const Pixels = ({ bkgColour, lightColourCode, darkColourCode}) => {

    const { resetHandler, isClicked, pixelArray } = useContext(ColourContext);


    //  const pixels = Array(100).fill();//to create an array   
    //  const pixels200 = Array(200).fill();
    //  const pixels300 = Array(300).fill();
    //  const pixels400 = Array(400).fill()    
    

    //  const [ pixelArray, setPixelArray ] = useState([]);
    //  const [ isClicked, setIsClicked ] = useState(false);

    //  const array100 = () => {
    //      setIsClicked(true);
    //      setPixelArray(pixels);
    //  };

    //  const array200 = () => {
    //     setIsClicked(true);
    //     setPixelArray(pixels200);
    // };

    // const array300 = () => {
    //     setIsClicked(true);
    //     setPixelArray(pixels300);
    // };

    // const array400 = () => {
    //     setIsClicked(true);
    //     setPixelArray(pixels400);
    // };

    return (
        <div className="boardContainer">          
            <div className="pixelsContainer">
                {
                    isClicked && pixelArray.map((pixel, index) => {
                            return <div>{<Pixel pixel={pixel} index={index} style={{'backgroundColor': 'black'}} />}</div>
                        })     
                }  
            </div>
                {
                    isClicked &&  <Button style={{"backgroundColor": bkgColour === lightColourCode ? darkColourCode : lightColourCode, "color": bkgColour === darkColourCode ? darkColourCode  : lightColourCode }} className='resetBtn' onClick={resetHandler}>Reset</Button>
                }
            {/* <div>
                <h2 style={{"color": bkgColour === lightColourCode ? darkColourCode : lightColourCode}}>Painting size</h2>
                <div className="pixelBtnContainer">
                    <button className="pixelBtn" onClick={array100}>100px</button>
                    <button className="pixelBtn" onClick={array200}>200px</button>
                    <button className="pixelBtn" onClick={array300}>300px</button>
                    <button className="pixelBtn" onClick={array400}>400px</button>
                </div>
            </div> */}
        </div>


    );
};

export default Pixels;