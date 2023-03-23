import React from "react";
import style from "./banner.module.css"

const Banner = ({state}) => {
    return (
        <div className={style.banner}>
            <hr />
            <div className={style.container}>
                <div className={style.image}>
                    <img src={state.img} alt={state.alt} />
                </div>
                <div className={style.text}>
                    <h2 className={style.text_title}>{state.title}</h2>
                    <p className={style.text_subtitle} >{state.subTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner