import React from 'react';
import './App.css';
import Article from "./components/Article";
import {Rating} from "./components/Rating";


function App() {
    return (
        <div className={"main"}>
            <Article titleValue={"Top programming languages 2021"} collapsed={true}/>
            <Article titleValue={"Top programming languages 2022"} collapsed={false}/>
        </div>
    );
}

export default App;