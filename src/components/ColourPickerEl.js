import { useState, useContext } from "react";
import ColourContext from "../context/ColourContext";

const ColourPickerEl = ({colour}) => {

    const [ colourPicked, setColourPicked ] = useState(colour.code);

//Function from context
    // Take colourPicked as argument and pass it to context
    const { getColourCode } = useContext(ColourContext);

    const colourPickerHandler = (colour) => {
        setColourPicked(colour);

        //Call Function from Context
        //Pass state value
        getColourCode(colourPicked);
    };

    return (
        <button className={colour.name} style={{'backgroundColor': colour.code}} onClick={() => colourPickerHandler(colourPicked)}></button>
    );
};

export default ColourPickerEl