import React from "react";
import Logo from "../../assets/logo";
import Announcer from "./announcerBar/announcer-bar";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";



const Header = ({ state }) => {
    const leftMenu = state.navLeft.map(el => {
        return (
            <li className={style["header_item"]} key={el.id}>
                <NavLink className={({ isActive }) => (isActive ? style["header_link"] + " " + style["active"] : style["header_link"])} to={el.path}>{el.link}</NavLink>
            </li>
        )
    })
    const rightMenu = state.navRight.map(el => {
        return (
            <li className={style["header_item"]} key={el.id}>
                <NavLink className={({ isActive }) => (isActive ? style["header_link"] + " " + style["active"] : style["header_link"])} to={el.path}>{el.link}</NavLink>
            </li>
        )
    })
    return (
        <header className='header'>
            <Announcer text={state.announcer} />
            <div className={style["header-wrap"] + " page_container"}>
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
                <div className={`${style["header-wrap-item"]} ${style["header-wrap-item-list"]}`}>
                <ul className={style["header_list"]}>
                        {rightMenu}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header