const Button = (props) => {
    return (
        <button type={props.type} style={props.style} onClick={props.onClick} className={`${props.className}`}>{props.children}</button>
    );
};

export default Button;