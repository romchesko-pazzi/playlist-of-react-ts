import React, {useState} from 'react';
import './App.css';
import {CustomSelect} from "./lesson 14/CustomSelect";


function App() {

    const users = [
        {name: "user1", id: 1},
        {name: "user2", id: 2},
        {name: "user3", id: 3},
        {name: "user4", id: 4},
    ];

    const [title, setTitle] = useState("Users");


    const setUsersHandler = (value: string) => {
        setTitle(value);
    }

    return (
        <div className={"main"}>
            <CustomSelect value={users} title={title} callBack={setUsersHandler}/>
        </div>
    );
}

export default App;