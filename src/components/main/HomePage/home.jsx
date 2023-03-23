import React from "react";
import Banner from "../../section/Banner/banner";
import Benefit from "../../section/Benefit/benefit";
import Featured from "../../section/FeaturedProduct/featured";
import HeroBanner from "../../section/heroBanner/heroBanner";
import Manual from "../../section/Manual/manual";

const Home = ({state,products,dispatch}) => {
    return (
        <>
        <HeroBanner state={state.heroBanner}/>
        <Benefit state={state.benefit}/>
        <Featured  state={state.featured} products={products} dispatch={dispatch}/>
        <Banner state={state.banner}/>
        <Manual state={state.manual}/>
        </>
    )
}

export default Home