import React from "react";

const Article2 = (props:any) => {
    return (
        <div>
            <Article2Title title={props.title}/>
            <Article2Body/>
        </div>
    )
}

const Article2Title = (props:any) => {
    return (
        <div className={"titleOfLang"}>
            <h3>{props.title}</h3>
        </div>
    )
}

const Article2Body = (props:any) => {
    return (
        <div className={"Article2Body"}>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </div>
    )
}

export default Article2;