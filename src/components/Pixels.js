import Pixel from "./Pixel";

const Pixels = () => {

     const pixels = Array(100).fill();//to create an array     

    return (
        <div className="pixelsContainer">
            {
                pixels.map((pixel, index) => {
                    return <div>{<Pixel pixel={pixel} index={index} style={{'backgroundColor': 'black'}} />}</div>
                })
            }
        </div>
        


    );
};

export default Pixels;