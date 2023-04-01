import React from "react";
import Line from "../../../snipets/lineHeader";
import { actionCreateMinus, actionCreatePlus, actionCreateRemove, actionCreateTotal } from "../../../store/store";
import style from "./cart.module.css"
import { NavLink } from "react-router-dom";

const Cart = ({ state, dispatch }) => {
    const array = state;
    const uniqueObjects = array.filter((obj, index, arr) => {
        return index === arr.findIndex((t) => (
            t.id === obj.id
        ));
    });

    let totalPrice = React.createRef()

    const changeHandle = () => {
    }
    const plus = (id) => {
        dispatch(actionCreatePlus(id, uniqueObjects));
        changeFinalPrice(totalPrice)

    }
    const minus = (id) => {
        dispatch(actionCreateMinus(id, uniqueObjects));
        changeFinalPrice(totalPrice)

    }

    const changeFinalPrice = (selector) => {
        dispatch(actionCreateTotal(selector))
    }

    const remove = (id) => {
        dispatch(actionCreateRemove(id,array))
    }


    let items;
    let finnaly;

    if (array.length === 0) {
        items = <div>
            <h1 className={style.cartIsEmpty}>Cart is empty</h1>
            <NavLink className={style.cartLink} to="/">Back Home </NavLink>
        </div>
    } else {
        items = uniqueObjects.map((el, index) => {
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
                        <div onClick={() => { remove(el.id) }} className={style.removeBtn}>
                            Remove product
                        </div>
                    </div>
                </div>
            )
        })
        let price = 0;
        for (let e of uniqueObjects) {
            console.log(e.price);
            if (e.price) {
                price += +e.price
            }
        }
        finnaly = <div ref={totalPrice} className={style.total}> Total cart {price}.00 $ </div>
    }

    return (
        <>
            <Line />
            <div className={`${style.cartWrap} ${style.container}`}>
                {items}
                {finnaly}
            </div>
        </>
    )
}

export default Cart