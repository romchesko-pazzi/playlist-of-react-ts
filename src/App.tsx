import React, {useState} from 'react';
import './App.css';
import {Article} from "./components/Article";
import {Rating} from "./components/Rating";
// import {OnOff} from "./components/OnOff";
import {OnOffUncontrolled} from "./components/OnOffUncontrolled";

function App() {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [on, setOn] = useState<boolean>(true);
    console.log(isExpanded);
    return (
        <div className={"main"}>
            <Article titleValue={"Top programming languages 2021"}
                     callBack={() => setIsExpanded(!isExpanded)}
                     value={isExpanded}/>
            <Rating/>
            <OnOffUncontrolled callback={setOn}/>{on.toString()}
            {/*<OnOff value={on} callBack={setOn}/>*/}
        </div>
    );
}

export default App;