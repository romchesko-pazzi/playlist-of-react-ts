import React from "react";

type propsForBody = {
    title: string
}

export const ArticleBody = (props: propsForBody) => {
    return (
        <div className={"ArticleBody"}>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </div>
    )
}