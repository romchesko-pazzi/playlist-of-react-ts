import React from "react";

const Star = (props: any) => {
    if (props.bolded === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}

export default Star;