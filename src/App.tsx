import React from 'react';
import './App.css';
import Article2 from "./components/Article2";
import {Rating} from "./components/Rating";

type Article1PropsType = {
    title: string;
}

function App() {
    return (
        <div className={"main"}>
            <Article1 title={"Profile"}/>
            <Article1 title={"Settings"}/>
            <Rating value={0}/>
            <Article2 titleValue={"Top programming languages 2021"} collapsed={true}/>
            <Article2 titleValue={"Top programming languages 2022"} collapsed={false}/>
            <Rating value={1}/>
        </div>
    );
}

const Article1 = (props: Article1PropsType) => {
    return (<div className={"Article1"}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default App;