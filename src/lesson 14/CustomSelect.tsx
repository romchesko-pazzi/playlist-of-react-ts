import React, {useState} from 'react';
import s from "./CustomSelect.module.css";

export type CustomSelectPropsType = {
    title: string
    value: Array<UsersType>,
    callBack: (value: string) => void,
}

export type UsersType = {
    name: string,
    id: number,
}

export const CustomSelect: React.FC<CustomSelectPropsType> = (props) => {

    const [active, setActive] = useState(false);

    const {title, value, callBack} = props;

    const onClickHandler = (name: string) => {
        callBack(name);
        setActive(false);
    }

    return (
        <div>
            <div className={s.title}>
                {title}
                <div onClick={() => setActive(!active)}
                     className={!active ? s.triangleDown : s.triangleUp}>

                </div>
            </div>
            <div className={active ? s.wrapperForOptions : ""}>
                {value.map(m => active &&
                    <div className={s.option} onClick={() => onClickHandler(m.name)} key={m.id}>{m.name}</div>)}
            </div>
        </div>
    );
};