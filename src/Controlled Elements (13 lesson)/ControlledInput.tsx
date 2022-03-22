import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
        console.log(parentValue)
    }

    return (
        <div>
            <input value={parentValue} onChange={onChangeHandler}/>
            {parentValue}
        </div>
    );
};