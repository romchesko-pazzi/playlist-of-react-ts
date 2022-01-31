import React from "react";

type propsForTitle = {
    title: string
    callBack: () => void;
}

export const ArticleTitle = (props: propsForTitle) => {

    const onClickHandler = () => {
        props.callBack();
    }

    return (
        <div className={"titleOfLang"}>
            <h3 onClick={onClickHandler}>{props.title}</h3>
        </div>
    )
}