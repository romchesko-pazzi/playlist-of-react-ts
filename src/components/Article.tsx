import React, {useState} from "react";
import {ArticleTitle} from "./ArticleTitle";
import {ArticleBody} from "./ArticleBody";

type ArticlePropsType = {
    titleValue: string;
}

const Article = (props: ArticlePropsType) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const onClickHandler = (par: boolean) => {
        if (!par) {
            setIsExpanded(true)
        } else {
            setIsExpanded(false)
        }
    }

    return (
        <div>
            <ArticleTitle title={props.titleValue}/>
            <button onClick={() => onClickHandler(isExpanded)}>expand</button>
            {isExpanded && <ArticleBody/>}
        </div>
    )
}

export default Article;