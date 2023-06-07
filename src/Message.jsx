import React, {useState} from "react";
import "../mensaje.css"
const Message = ({text})=>{
    const [showMesagge, setShowMessage]=useState(false);

    const handleClick = () =>{
        setShowMessage(!showMesagge);
    };

    return(
        <div>
            <button className="button" onClick={handleClick}>Mostrar/Ocultar</button>
            {showMesagge && <p className="mensaje">{text}</p>}
        </div>
    );
}

export default Message;
