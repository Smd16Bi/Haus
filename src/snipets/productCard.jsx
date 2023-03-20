import React from "react";
import style from "./productCard.module.css"

const ProductCard = ({ products }) => {
    products.map((el) => {
        let bestseler = el.isBestSeller
        return (
            <div className={style.products_wrap} key={el.id}>
                <div className={style.productImage}>
                    <img src={el.img} alt={el.alt} />
                    {bestseler &&
                        <div className={style.productBadge}>
                            best seller
                        </div>}
                </div>
                <div className={style.productText}>
                    <h3 className={style.productName}>{el.name}</h3>
                    <p className={style.productDescription}>{el.description}</p>
                    <button className={style.productAdd}>Shop now</button>
                </div>
            </div>
        )
    })
}

export default ProductCard