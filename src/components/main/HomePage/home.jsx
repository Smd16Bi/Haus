import React from "react";
import HeroBanner from "../../section/heroBanner/heroBanner";


const Home = ({state}) => {
    return (
        <HeroBanner state={state.heroBanner}/>
    )
}

export default Home