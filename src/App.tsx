import React from 'react';
import './App.css';
import Accord from "./components/Accord";
import Rating from "./components/Rating";

function App() {
    return (
        <div className={"main"}>
            <AppTitle/>
            <Rating/>
            <Accord/>
            <Rating/>
        </div>
    );
}

const AppTitle = () => {
    console.log("AppTitle is rendering")
    return (<div className={"h1"}>
            <h1>Happy hacking!</h1>
        </div>
    )
}


export default App;