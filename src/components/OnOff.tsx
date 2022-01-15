import {useState} from "react";

export const OnOff = () => {

let [on, setOn] = useState(false)

    const onStyle = {
        border: "black 2px solid",
        width: "50px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        border: "black 2px solid",
        width: "50px",
        height: "25px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        alignSelf: "center",
        marginLeft: "5px",
        width: "15px",
        height: "15px",
        border: "1px black solid",
        borderRadius: "50%",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div className={"OnOff"}>
            <div style={onStyle} onClick={() => setOn(true)}>
                On
            </div>
            <div style={offStyle} onClick={() => setOn(false)}>
                Off
            </div>
            <div style={indicatorStyle}>
            </div>
        </div>
    )
}
