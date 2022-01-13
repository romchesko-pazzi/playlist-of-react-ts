import React from "react";
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
            {props.collapsed && <ArticleBody/>}
        </div>
    )
}

export default Article;