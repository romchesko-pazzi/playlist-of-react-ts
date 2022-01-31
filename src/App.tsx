import React, {useState} from 'react';
import './App.css';
import {Article} from "./components/Article";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";

function App() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [on, setOn] = useState<boolean>(true);
    console.log(isExpanded);
    return (
        <div className={"main"}>
            <Article titleValue={"Top programming languages 2021"}
                     callBack={() => setIsExpanded(!isExpanded)}
                     value={isExpanded}/>
            <Rating/>
            <OnOff value={on} callBack={()=>setOn(!on)}/>
        </div>
    );
}

export default App;