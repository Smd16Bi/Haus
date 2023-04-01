import React from "react";

const Link = ({name,link}) => {
    return (
        <a className="main-link" href={link}>{name}</a>
    )
}

export default Link