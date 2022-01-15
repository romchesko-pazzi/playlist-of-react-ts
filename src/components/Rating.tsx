import React, {useState} from "react";
import {Star} from "./Star";


export const Rating = () => {

    let [show, setShow] = useState(0)

    let array = [
        {star: 0, value: 1},
        {star: 1, value: 2},
        {star: 2, value: 3},
        {star: 3, value: 4},
        {star: 4, value: 5},
    ]
    return (
        <div>
            {array.map(m => {
                return (<>
                        <Star bolded={show > m.star}/>
                        <button onClick={() => setShow(m.value)}>Rate</button>
                    </>
                )
            })}
        </div>
    )
}