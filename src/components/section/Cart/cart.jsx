import React, { useState } from "react";
import style from "./cart.module.css"

const Cart = ({ state }) => {
    const array = state;
    const uniqueObjects = array.filter((obj, index, arr) => {
        return index === arr.findIndex((t) => (
            t.id === obj.id
        ));
    });

    let items = uniqueObjects.map(el => {
        return (
            <div className={style.cart_item} key={el.id}>
                <div className={style.cart_img}>
                    <img src={el.img} alt={el.alt} />
                </div>
                <div className={style.cart_info}>
                    <h2 className={style.name}> {el.name}</h2>
                    <p className={style.price}> {el.price + ".00"}</p>
                </div>
                <div  className={style.cart_quntity}>
                    <button className={style.btn_minus}>-</button>
                    <input className={style.cartHow} type="number" name="" id="" />
                    <button className={style.btn_plus}>+</button>
                </div>
            </div>
        )
    })
    return (
        <div className={style.cartWrap}>{items}</div>
    )
}

export default Cart