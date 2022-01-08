import React from "react";

type Article2PropsType = {
    titleValue: string;
    collapsed:boolean;
}

const Article2 = (props: Article2PropsType) => {
    if (props.collapsed){
    return (
        <div>
            <Article2Title title={props.titleValue}/>
            <Article2Body title={props.titleValue}/>
        </div>
    )
    }
    return (
        <div>
            <Article2Title title={props.titleValue}/>
        </div>
    )
}

type Article2TitlePropsType = {
    title:string
}

const Article2Title = (props: Article2TitlePropsType) => {
    return (
        <div className={"titleOfLang"}>
            <h3>{props.title}</h3>
        </div>
    )
}

const Article2Body = (props: any) => {
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