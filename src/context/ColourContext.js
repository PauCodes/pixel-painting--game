import { createContext, useState } from "react";

const ColourContext = createContext();

export const ColourProvider = ({children}) => {

    const coloursArray = [ {name: "green", code:"#A0E4CB" }, {name: "pink", code: "#F473B9" }, {name: "blue", code: "#0096FF" }, {name: "yellow", code: "#FFEA11" }, {name: "purple", code: "#B1AFFF" }, {name: "coral", code: "#FA8072" }];

    const [ colourCode, setColourCode ] = useState('');

        const getColourCode = (value) => {
            console.log('from context ', value);
            setColourCode(value);
        };
                
        
    return (
        <ColourContext.Provider value={{
            coloursArray,
            getColourCode,
            colourCode,
            setColourCode
        }}
        >
            {children}
        </ColourContext.Provider>
    );
};

export default ColourContext;