import React, {ChangeEvent, useState} from 'react';

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        // setParentValue(e.currentTarget.checked);
    }

    return (
        <div>
            <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
        </div>
    );
};
