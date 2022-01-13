import React from "react";
import Star from "./Star";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}


export const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star bolded={props.value > 0}/>
            <Star bolded={props.value > 1}/>
            <Star bolded={props.value > 2}/>
            <Star bolded={props.value > 3}/>
            <Star bolded={props.value > 4}/>
        </div>
    )
}