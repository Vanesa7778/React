import React,{useState} from "react";
import "../mensaje.css"

const Counter=()=>{
    const [count,setCount] = useState(0);


    const handleIncrement = () =>{
        setCount(count + 1);
    };

    const handleDecrement = ()=>{
        setCount(count - 1);
    };

    return(
        <div>
            <h1 className="title">CONTADOR</h1>
            <p className="">El valor actual es: {count}</p>
            <button  onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
        </div>
    );

};

export default Counter;