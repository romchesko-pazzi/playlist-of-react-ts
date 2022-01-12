import React from "react";
import {ArticleTitle} from "./ArticleTitle";
import {ArticleBody} from "./ArticleBody";

type ArticlePropsType = {
    titleValue: string;
    collapsed: boolean;
}

const Article = (props: ArticlePropsType) => {
    if (props.collapsed) {
        return (
            <div>
                <ArticleTitle title={props.titleValue}/>
                <ArticleBody title={props.titleValue}/>
            </div>
        )
    }
    return (
        <div>
            <ArticleTitle title={props.titleValue}/>
        </div>
    )
}

export default Article;