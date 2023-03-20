import React from "react";
import style from "./featured.module.css"

const Featured = ({state,products}) => {
    let cart = [];
    const addCart = (id) => {
        let selectProduct;
        products.filter (el => {
            if (el.id === id) {
                selectProduct = el    
            }
            return el
        })
        cart.push(selectProduct);
        console.log(cart);
    }
    let cardProduct = products.map( (el) => {
        let bestseler = el.isBestSeller
        return (
            <div className={style.products_wrap} key={el.id}>
                <div className={style.productImage}>
                    <img src={el.img} alt={el.alt} />
                    {bestseler && 
                    <span className={style.productBadge}>
                        Best seller
                    </span>}
                </div>
                <div className={style.productText}>
                    <h3 className={style.productName}>{el.name}</h3>
                    <p className={style.productDescription}>{el.description}</p>
                    <button onClick={()=> {addCart(el.id)}}  className={style.productAdd}>Shop now</button>
                </div>
            </div>
        )
    })
    return (
        <div className={style.featured}>
            <div className={style.container}>
                <h2 className={style.featured_title}>{state.title}</h2>
                <a className={style.featured_link} href={state.urlBtn}>{state.urlTitle}</a>
                <div className={style.wrapper}>
                    {cardProduct}
                </div>
            </div>
        </div>
    )
}

export default Featured