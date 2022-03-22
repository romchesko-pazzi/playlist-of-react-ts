import React, {useState} from "react";
import {Star} from "../Star/Star";

type RatingProps = {}

export const Rating = (props: RatingProps) => {
    console.log("Rating rendering");

    const [value, setValue] = useState(0)
    return (
        <div>
            <Star callBack={() => setValue(1)} bolded={value > 0}/>
            <Star callBack={() => setValue(2)} bolded={value > 1}/>
            <Star callBack={() => setValue(3)} bolded={value > 2}/>
            <Star callBack={() => setValue(4)} bolded={value > 3}/>
            <Star callBack={() => setValue(5)} bolded={value > 4}/>
        </div>
    )
}