import React from "react";

type StarPropsType = {
    bolded: boolean;
    callBack: () => void;
}

export const Star = (props: StarPropsType) => {
    console.log("Star is rendered")
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <div>
            <span onClick={onClickHandler}>{props.bolded ? <b>STAR</b> : "STAR"}</span>
        </div>
    )

}