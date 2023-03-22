import React from "react";
import Line from "../../../snipets/lineHeader";
import { actionCreateMinus, actionCreatePlus } from "../../../store/store";
import style from "./cart.module.css"

const Cart = ({ state, dispatch }) => {
    const array = state;
    const uniqueObjects = array.filter((obj, index, arr) => {
        return index === arr.findIndex((t) => (
            t.id === obj.id
        ));
    });

    const changeHandle = () => {

    }
    const plus = (id) => {
        dispatch(actionCreatePlus(id, uniqueObjects));
    }
    const minus = (id) => {
        dispatch(actionCreateMinus(id, uniqueObjects));
    }

    let items = uniqueObjects.map((el, index) => {
        return (
            <div className={style.cart_item} key={index} id={el.id}>
                <div className={style.cart_img}>
                    <img src={el.img} alt={el.alt} />
                </div>
                <div className={style.cart_info}>
                    <h2 className={style.name}> {el.name}</h2>
                    <p className={style.price}> 1 * {el.price + ".00 $"}</p>
                    <div className={style.cart_quntity}>
                        <button onClick={() => { minus(el.id) }} className={style.btn_minus}>-</button>
                        <input className={style.cartHow} onChange={changeHandle} value={el.quantity} type="number" defaultValue={el.quantity} />
                        <button onClick={() => { plus(el.id) }} className={style.btn_plus}>+</button>
                    </div>
                    <div className={style.totalPrice}>
                        Final price: {el.total ? el.total : el.price} .00 $
                    </div>
                </div>

            </div>
        )
    })
 
    return (
        <>
            <Line />
            <div className={`${style.cartWrap} ${style.container}`}>
                {items}
                <div className={style.total}>
                   Total cart .00 $
                </div>
            </div>
        </>
    )
}

export default Cart