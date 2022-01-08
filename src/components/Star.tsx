import React from "react";

type StarPropsType = {
    bolded:boolean;
}


const Star = (props: StarPropsType) => {
    if (props.bolded) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}

export default Star;