import {useState} from "react";

type onProps = {
    // on: boolean;
}

export const OnOff = (props: onProps) => {
    console.log("OnOff rendering")
    const [on,setOn] = useState(true);

    const styleOn = {
        width: "40px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: on ? "green" : "white",
    }
    const styleOff = {
        width: "40px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: on ? "white" : "red",
    }
    const indicator = {
        width: "25px",
        height: "25px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: on ? "green" : "red",
    }


    return (
        <div className={"OnOff"}>
            <button style={styleOn} onClick={() => setOn(true)}>ON</button>
            <button style={styleOff} onClick={() => setOn(false)}>OFF</button>
            <div style={indicator}></div>
        </div>
    )
}