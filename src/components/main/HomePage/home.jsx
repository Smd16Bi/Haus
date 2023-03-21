import React from "react";
import Benefit from "../../section/Benefit/benefit";
import Featured from "../../section/FeaturedProduct/featured";
import HeroBanner from "../../section/heroBanner/heroBanner";


const Home = ({state,products,dispatch}) => {
    return (
        <>
        <HeroBanner state={state.heroBanner}/>
        <Benefit state={state.benefit}/>
        <Featured  state={state.featured} products={products} dispatch={dispatch}/>
        </>
    )
}

export default Home