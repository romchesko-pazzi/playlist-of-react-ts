import React, {useState} from "react";
import {ArticleTitle} from "./ArticleTitle";
import {ArticleBody} from "./ArticleBody";

type ArticlePropsType = {
    titleValue: string;
    collapsed: boolean;
}

const Article = (props: ArticlePropsType) => {

    return (
        <div>
            <ArticleTitle title={props.titleValue}/>
            {/*<button onClick={}>expand</button>*/}
            {/*<button onClick={}>fold</button>*/}
            {!props.collapsed && <ArticleBody/>}
        </div>
    )
}

export default Article;