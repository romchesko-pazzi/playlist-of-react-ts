import React, {useState} from "react";
import {ArticleTitle} from "./ArticleTitle";
import {ArticleBody} from "./ArticleBody";

type ArticlePropsType = {
    titleValue: string;
}

export const Article = (props: ArticlePropsType) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onClickHandler = () => {
        return setIsExpanded(!isExpanded);
    }
    return (
        <div>
            <ArticleTitle title={props.titleValue}/>
            <button onClick={onClickHandler}>expand</button>
            {isExpanded && <ArticleBody/>}
        </div>
    )
}