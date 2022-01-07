import React from 'react';
import './App.css';

// import retryTimes = jest.retryTimes;

function App() {
    return (
        <div>
            <Rating/>
            <AppTitle/>
            <Rating/>
        </div>
    );
}

const Star = () => {
    return (
        <div>
            Star
        </div>
    )
}

const Rating = () => {
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

const AppTitle = () => {
    return (<div className={"h1"}>
            <h1>Happy hacking!</h1>
        </div>
    )
}

export default App;
