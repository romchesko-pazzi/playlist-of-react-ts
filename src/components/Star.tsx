import React from "react";

type StarPropsType = {
    bolded: boolean;
}

export const Star = (props: StarPropsType) => {
    console.log("Star rendering");
    if (props.bolded) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}