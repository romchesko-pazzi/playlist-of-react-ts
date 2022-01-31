type onProps = {
    value: boolean;
    callBack: () => void;
}

export const OnOff = (props: onProps) => {
    console.log("OnOff rendering")

    const styleOn = {
        width: "40px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: props.value ? "green" : "white",
    }
    const styleOff = {
        width: "40px",
        height: "25px",
        marginRight: "5px",
        backgroundColor: props.value ? "white" : "red",
    }
    const indicator = {
        width: "25px",
        height: "25px",
        border: "1px solid black",
        borderRadius: "50%",
        backgroundColor: props.value ? "green" : "red",
    }

    return (
        <div className={"OnOff"}>
            <button style={styleOn} onClick={props.callBack}>ON</button>
            <button style={styleOff} onClick={props.callBack}>OFF</button>
            <div style={indicator}>o</div>
        </div>
    )
}