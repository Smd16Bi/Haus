import React from "react";
import { useState } from "react";
import style from "./textWithImage.module.css"

const TextWithImage = ({ state }) => {
    let partText = React.createRef();
    const [toggle, setToggle] = useState(false)
    const toggleMode = (event) => {
        event.preventDefault();
        let self = partText.current;
        if (toggle === false) {
            self.style.maxHeight =  self.scrollHeight + "px";
            event.target.textContent = "Read less"
            setToggle(!toggle)
        } else {
            self.style.maxHeight =  0 + "px";
            event.target.textContent = "Read More"
            setToggle(!toggle)
        }

    }
    return (
        <div className={style.twi}>
            <div className={style.twi_container}>
                <div className={style.item_img}>
                    <img src={state.img} alt={state.alt} />
                </div>
                <div className={style.item_text}>
                    <h2 className={style.text_title}>{state.title}</h2>
                    <div className={style.text_wrap}>
                        <p className={style.text_one}>{state.textPartOne}</p>
                        <p ref={partText} className={style.text_two}>{state.textPartTwo}</p>
                    </div>
                    <button onClick={toggleMode} className={style.text_btn}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default TextWithImage