import React from "react";

type propsForTitle = {
    title:string
}

export const ArticleTitle = (props:propsForTitle) =>{
return(
    <div className={"titleOfLang"}>
        <p>{props.title}</p>
    </div>
)
}