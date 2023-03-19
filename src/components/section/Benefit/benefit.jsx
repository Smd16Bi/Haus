import React from "react";
import style from "./benefit.module.css"

const Benefit = ({ state }) => {
    let benefits = state.map(el => {
        return (
            <div className={style.item} key={el.id}>
                <div className={style.text}>
                    <h2 className={style.text_title}>{el.text}</h2>
                </div>
                <div className={style.image} >
                    <img src={el.img} alt={el.alt} />
                </div>
            </div>
        )
    })
    return (
        <div className={style.benefit}>
            <div className={style.container} >
                {benefits}
            </div>
            <div className={style.hr}></div>
        </div>
    )
}

export default Benefit