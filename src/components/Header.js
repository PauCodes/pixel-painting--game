import { useContext } from "react";
import ColourPickerEl from "./ColourPickerEl";
import ColourContext from "../context/ColourContext";

const Header = ({ bkgColour, lightColourCode, darkColourCode}) => {

    const { coloursArray } = useContext(ColourContext);


    return (
        <div className="header">
            <h1 style={{"color": bkgColour === lightColourCode ? darkColourCode : lightColourCode}}>Choose a colour</h1>
            <div className="btnContainer">
            {
                coloursArray.map((colour) => {
                    return <ColourPickerEl  key={colour.code} colour={colour}/>
                })
            }
            </div>
        </div>
    );
};

export default Header;