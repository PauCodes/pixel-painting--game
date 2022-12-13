import { useState, useContext } from "react";
import ColourContext from "../context/ColourContext";
import Button from "./Button";

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
        <Button className={`${colour.name} colourBtn` } style={{'backgroundColor': colour.code}} onClick={() => colourPickerHandler(colourPicked)}/>
    );
};

export default ColourPickerEl