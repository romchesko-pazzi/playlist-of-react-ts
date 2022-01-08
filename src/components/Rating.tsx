import React from "react";
import Star from "./Star";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}


export const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return (
            <div>
                <Star bolded={true}/>
                <Star bolded={false}/>
                <Star bolded={false}/>
                <Star bolded={false}/>
                <Star bolded={false}/>
            </div>
        )
    }
    if (props.value === 2) {
        return (
            <div>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={false}/>
                <Star bolded={false}/>
                <Star bolded={false}/>
            </div>
        )
    }
    if (props.value === 3) {
        return (
            <div>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={false}/>
                <Star bolded={false}/>
            </div>
        )
    }
    if (props.value === 4) {
        return (
            <div>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={false}/>
            </div>
        )
    }
    if (props.value === 5) {
        return (
            <div>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={true}/>
                <Star bolded={true}/>
            </div>
        )
    }
    return (
        <div>
            <Star bolded={false}/>
            <Star bolded={false}/>
            <Star bolded={false}/>
            <Star bolded={false}/>
            <Star bolded={false}/>
        </div>
    )
}