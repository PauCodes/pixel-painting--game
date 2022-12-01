import { useContext, useState } from "react";
import ColourContext from "../context/ColourContext";

const Pixel = ({pixel, index}) => {

    const { colourCode } = useContext(ColourContext);//come from colorPicked state

    const [ colourSelected, setColourSelected ] = useState(colourCode);

    const colourSetted = colourSelected;

    const colourPaintHandler = (paintColour) => {
        setColourSelected(paintColour)
    };

    return (
        <div className="pixel" style={{"backgroundColor": colourSelected ? colourSetted : "lightgray"}} onClick={() => colourPaintHandler(colourCode)}></div>
    );
};

export default Pixel;