import React from "react";

const Accord = () => {
    console.log("Accord is rendering");
    return (
        <div>
            <AccordTitle/>
            <AccordBody/>
        </div>
    )
}

const AccordTitle = () => {
    console.log("AccordTitle is rendering");
    return (
        <div className={"titleOfLang"}>
            <h3>Top programming languages 2021</h3>
        </div>
    )
}

const AccordBody = () => {
    console.log("AccordBody is rendering");
    return (
        <div className={"accordBody"}>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
            </ul>
        </div>
    )
}

export default Accord;