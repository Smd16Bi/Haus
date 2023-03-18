import React from "react";
import style from "./announcer-bar.module.css";


const Announcer = ({text}) => {
    return (
        <div className={style["announcer-bar"]}>
            <div className={ style["announcer-bar"] + " page_container"}>
                <p className={style['announcer-bar__info']}>{text.text}</p>
            </div>
        </div>
    )
}

export default Announcer