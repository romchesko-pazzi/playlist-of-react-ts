import React from 'react';
import './App.css';
import Article2 from "./components/Article2";
import {Rating} from "./components/Rating";

function App() {
    return (
        <div className={"main"}>
            <Article1 title={"Profile"}/>
            <Article1 title={"Settings"}/>
            <Rating value={0}/>
            <Article2 title={"Top programming languages 2021"}/>
            <Rating value={1}/>
        </div>
    );
}

const Article1 = (props:any) => {
    return (<div className={"Article1"}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default App;