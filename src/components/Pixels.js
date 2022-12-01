import Pixel from "./Pixel";

const Pixels = () => {

    const pixels = [];

    for (let i = 0; i < 100; i++ ) pixels.push(<Pixel />)

    return (
        <div className="pixelsContainer">
            {
                pixels.map((pixel, index) => {
                    return <div onClick={() => console.log(index)}>{<Pixel pixel={pixel} index={index}  />}</div>
                })
            }
        </div>
        


    );
};

export default Pixels;