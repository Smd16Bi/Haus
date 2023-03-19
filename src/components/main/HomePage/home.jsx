import React from "react";
import Benefit from "../../section/Benefit/benefit";
import HeroBanner from "../../section/heroBanner/heroBanner";



const Home = ({state}) => {
    return (
        <>
        <HeroBanner state={state.heroBanner}/>
        <Benefit state={state.benefit}/>
        </>
    )
}

export default Home