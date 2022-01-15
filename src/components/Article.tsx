import React, {useState} from "react";
import {ArticleTitle} from "./ArticleTitle";
import {ArticleBody} from "./ArticleBody";

type ArticlePropsType = {
    titleValue: string;
    // collapsed: boolean;
}

const Article = (props: ArticlePropsType) => {

    let [collapsed,setTog] = useState(false)

    return (
        <div>
            <ArticleTitle title={props.titleValue}/>
            <button onClick={()=> setTog(true)}>expand</button>
            <button onClick={()=> setTog(false)}>fold</button>
            {collapsed && <ArticleBody/>}
        </div>
    )
}

export default Article;