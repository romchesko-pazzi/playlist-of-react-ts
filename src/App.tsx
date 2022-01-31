import React from 'react';
import './App.css';
import {Article} from "./components/Article";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";

function App() {
    return (
        <div className={"main"}>
            <Article titleValue={"Top programming languages 2021"}/>
            <Article titleValue={"Top programming languages 2022"}/>
            <Rating/>
            <OnOff/>
        </div>
    );
}

export default App;