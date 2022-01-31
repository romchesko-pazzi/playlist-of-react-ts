import React, {useState} from "react";
import {ArticleTitle} from "./ArticleTitle";
import {ArticleBody} from "./ArticleBody";

type ArticlePropsType = {
    titleValue: string;
    callBack: () => void;
    value: boolean;
}

export const Article = (props: ArticlePropsType) => {

    return (
        <div>
            <ArticleTitle callBack={props.callBack} title={props.titleValue}/>
            {props.value && <ArticleBody/>}
        </div>
    )
}