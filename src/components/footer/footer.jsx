import React from "react";
import Logo from "../../assets/logo";
import "./footer.css"
import { NavLink } from "react-router-dom";



const Footer = ({ state }) => {
    let links = state.link.map(el => {
        return <li key={el.id} className="footer_item">
            <NavLink className={({ isActive }) => (isActive ? "footer_link active" : "footer_link")} to={el.path}>{el.link}</NavLink>
        </li>
    })
    let social = state.solial.map(el => {
        return <li key={el.id} className="footer_item">
            <a className="footer_link" href={el.path}>{el.link}</a>
        </li>
    })
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer_logo">
                    <Logo />
                </div>
                <ul className="footer_list footer_list_link">
                    <span className="footer_list_heading">Explore</span>
                    {links}
                </ul>
                <ul className="footer_list footer_list_solial">
                    <span className="footer_list_heading">Follow</span>
                    {social}
                </ul>
            </div>
        </footer>
    )
}

export default Footer