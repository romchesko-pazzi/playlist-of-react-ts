import React from "react";
import {Star} from "./Star";

type RatingProps = {
    value: 1 | 2 | 3 | 4 | 5 | 0
}

export const Rating = (props: RatingProps) => {
    console.log("Rating rendering");
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