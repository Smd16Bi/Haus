import React from "react";
import style from "./setMood.module.css"

const SetMood = ({state}) => {
    let links = state.solial.map(el => {
        return (
            <li key={el.id} className={style.social_item }>
                <a className={style.social_link } href={el.url}>{el.name}</a>
            </li>
        )
    })
    return (
        <div className={style.setMood}>
            <div className={style.setMood_container}>
                <div className={style.setMood_text}>
                    <h2 className={style.text_title}>{state.title}</h2>
                    <p className={style.text_subtitle}>{state.info}</p>
                    <a href="/" className={style.text_link}>{state.nameBtn}</a>
                </div>
                <div className={style.setMood_social}>
                    <h3 className={style.social_title}>{state.follow}</h3>
                    <ul className={style.social_list}>{links}</ul>
                </div>
            </div>
            <div className={style.setMood_bg}>
                <img src={state.img} alt={state.alt} />
            </div>
        </div>
    )
}

export default SetMood