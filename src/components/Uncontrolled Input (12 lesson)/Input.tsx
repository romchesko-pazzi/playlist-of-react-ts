import {useRef, useState} from "react";

export const Input = () => {

    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }

    return (
        <div>
            {/*var1*/}
            {/*<input onChange={(e) => setValue(e.currentTarget.value)} value={value}/>{value}*/}

            {/*var2*/}
            {/*<input ref={inputRef}/>*/}
            {/*<button onClick={save}>SAVE</button>*/}
            {/*{value}*/}
        </div>
    )
}