import React from 'react';
import './App.css';
import Article from "./components/Article";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";

function App() {
    return (
        <div className={"main"}>
            <Article titleValue={"Top programming languages 2021"} collapsed={true}/>
            <Article titleValue={"Top programming languages 2022"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff/>
        </div>
    );
}

export default App;