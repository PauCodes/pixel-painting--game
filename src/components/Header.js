import { useContext } from "react";
import ColourPickerEl from "./ColourPickerEl";
import ColourContext from "../context/ColourContext";
import SizeSelector from "./SizeSelector";

const Header = ({ bkgColour, lightColourCode, darkColourCode}) => {

    const { coloursArray, isClicked } = useContext(ColourContext);
    
    return (
        <div className="header">
            {
                isClicked ?<h1 style={{"color": bkgColour === lightColourCode ? darkColourCode : lightColourCode}}>Pick a colour!</h1> :
                <h1 style={{"color": bkgColour === lightColourCode ? darkColourCode : lightColourCode}}><span className="word1">Pixel</span> <span className="word2">Painting</span> <span className="word3">Game</span></h1>
            }
            
            <div className="btnContainer">
            {
                isClicked ? coloursArray.map((colour) => {
                    return <ColourPickerEl  key={colour.code} colour={colour}/>
                })
                : <SizeSelector bkgColour={bkgColour} lightColourCode={lightColourCode} darkColourCode={darkColourCode}/>
            }
            </div>
        </div>
    );
};

export default Header;