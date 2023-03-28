import React, { useState } from "react";
import Logo from "../../assets/logo";
import Announcer from "./announcerBar/announcer-bar";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import { useEffect } from "react";

const Header = ({ state, counter }) => {
    const [open, setOpen] = useState(false)

    const [scrollDirection, setScrollDirection] = useState("");
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let pointDeleteAll = 100;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "hideHeader" : "showHeader";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
            if (pointDeleteAll > scrollY) {
                setScrollDirection("");
            }
        };
        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
    }, [scrollDirection]);
    let clasess = `header ${scrollDirection}`




    const openMenu = (event) => {
        let html = event.target.closest("html");
        html.classList.toggle("overflow_hidden")
        setOpen(!open)

    }
    const leftMenu = state.navLeft.map(el => {
        return (
            <li className={style["header_item"]} key={el.id}>
                <NavLink className={({ isActive }) => (isActive ? style["header_link"] + " " + style["active"] : style["header_link"])} to={el.path}>{el.link}</NavLink>
            </li>
        )
    })
    let items;
    const rightMenu = state.navRight.map(el => {
        if (el.isCount === true && counter.length > 0) {
            items = <span className={style.count} >{counter.length}</span>
        }
        return (
            <li className={style["header_item"]} key={el.id}>
                {el.isCount && items}
                <NavLink className={({ isActive }) => (isActive ? style["header_link"] + " " + style["active"] : style["header_link"])} to={el.path}>{el.link}</NavLink>
            </li>
        )
    })
    return (
        <header className={clasess}>
            <Announcer text={state.announcer} />
            <div className={style["header-wrap"] + " page_container header_wrap"}>
                <div className={`${style["header-wrap-item"]} ${style["header-wrap-item-list"]}`}>
                    <ul className={style["header_list"]}>
                        {leftMenu}
                    </ul>
                </div>
                <div className={`${style["header-wrap-item"]} ${style["header-wrap-item-logo"]}`}>
                    <NavLink to="/">
                        <Logo />
                    </NavLink>
                </div>
                <div className={`${style["header-wrap-item"]} ${style["header-wrap-item-list"]} ${style["header-wrap-item-list-right"]}`}>
                    <ul className={style["header_list"]}>
                        {rightMenu}
                    </ul>
                </div>
                <div onClick={openMenu}
                    className={open ? `${style.burger} ${style.active}` : `${style.burger}`}
                >
                    <span className={style.line_1}></span>
                    <span className={style.line_2}></span>
                    <span className={style.line_3}></span>
                </div>

                <div className={open ? `${style.mobileMenu} ${style.active}` : style.mobileMenu}>
                    <ul className={style.mobileMenu_list}>
                        {leftMenu}
                        {rightMenu}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header