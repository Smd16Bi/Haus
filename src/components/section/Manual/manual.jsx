import React from "react";
import style from "./manual.module.css";

const Manual = ({state}) => {
    let steps = state.step.map(el => {
        return (
            <div className={style.stepWrap} key={el.id}>
                <h3 className={style.stepTitle}>{el.title}</h3>
                <p className={style.stepSub}>{el.info}</p>
            </div>
        )
    })
    return (
        <div className={style.manual}>
            <div className={style.container}>
                <div className={style.item_text}>
                    {steps}
                </div>
                <div className={style.item_img}>
                    <img src={state.img} alt={state.alt} />
                </div>
            </div>
        </div>
    )
}

export default Manual