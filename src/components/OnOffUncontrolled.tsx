import {useState} from "react";

type onOffUncontrolledType = {
    callback: (val: boolean) => void;
}

export const OnOffUncontrolled = (props: onOffUncontrolledType) => {
    const [on, setOn] = useState<boolean>(true);
    console.log("OnOff rendering")

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

    const onClicked = () => {
        setOn(true);
        props.callback(on)
    }
    const offClicked = () => {
        setOn(false);
        props.callback(on)
    }


    return (
        <div className={"OnOff"}>
            <button style={styleOn} onClick={onClicked}>ON</button>
            <button style={styleOff} onClick={offClicked}>OFF</button>
            <div style={indicator}>o</div>
        </div>
    )
}