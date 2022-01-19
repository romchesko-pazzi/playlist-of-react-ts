import React, {useState} from "react";
import {Star} from "./Star";

type RatingProps = {}

export const Rating = (props: RatingProps) => {
    console.log("Rating rendering");

    const [value, setValue] = useState(0)


    return (
        <div>
            <Star bolded={value > 0}/><button onClick={()=>setValue(1)}>1</button>
            <Star bolded={value > 1}/><button onClick={()=>setValue(2)}>2</button>
            <Star bolded={value > 2}/><button onClick={()=>setValue(3)}>3</button>
            <Star bolded={value > 3}/><button onClick={()=>setValue(4)}>4</button>
            <Star bolded={value > 4}/><button onClick={()=>setValue(5)}>5</button>
        </div>
    )


}