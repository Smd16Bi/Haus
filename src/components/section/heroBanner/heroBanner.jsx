import React from "react";
import Link from "../../../snipets/link";
import style from "./heroBanner.module.css"

const HeroBanner = ({state}) => {
    return (
        <div className="heroBanner">
            <div className={style.container}>
                <div className={`${style.image}`}>
                    <img src={state.img} alt="Hero banner" />
                </div>
                <div className={`${style.text}`}>
                    <h1 className={style.text_title}>{state.title}</h1>
                    <p className={style.text_subtitle}>{state.subTitle}</p>
                    <Link name={state.urlTitle} url={state.urlBtn}/>
                </div>
            </div>

        </div>
    )
}

export default HeroBanner