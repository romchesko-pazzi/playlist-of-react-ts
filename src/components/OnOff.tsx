type onProps = {
    value: boolean;
    callBack: (v: boolean) => void;
}

export const OnOff = ({value, callBack}: onProps) => {
    console.log("OnOff rendering")

    const styleOn = {
        width: "40px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: value ? "green" : "white",
    }
    const styleOff = {
        width: "40px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: value ? "white" : "red",
    }
    const indicator = {
        width: "25px",
        height: "25px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: value ? "green" : "red",
    }

    return (
        <div className={"OnOff"}>
            <button style={styleOn} onClick={() => callBack(true)}>ON</button>
            <button style={styleOff} onClick={() => callBack(false)}>OFF</button>
            <div style={indicator}>o</div>
        </div>
    )
}