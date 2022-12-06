import { useContext, useEffect, useState } from "react";
import ColourContext from "../context/ColourContext";

const Pixel = () => {

    const { colourCode, isReset } = useContext(ColourContext); //it comes from colorPicked state

    const [ colourSelected, setColourSelected ] = useState('');

    const colourPaintHandler = (paintColour) => {
        setColourSelected(paintColour);
    };

    useEffect(() => {
        setColourSelected('');
    }, [isReset]);

    return (
        <div className="pixel" style={{"backgroundColor": colourSelected ? colourSelected : "lightgray"}} onClick={() => colourPaintHandler(colourCode)}></div>
    );
};

export default Pixel;