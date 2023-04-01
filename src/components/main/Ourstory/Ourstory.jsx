import React from "react";
import Banner from "../../section/Banner/banner";
import HeroBanner from "../../section/heroBanner/heroBanner";
import Review from "../../section/Review/review";
import SetMood from "../../section/setMood/setMood";



const Ourstory = ({state}) => {
    return (
        <>
        <HeroBanner state={state.heroBanner}/>
        <Banner state={state.banner}/>
        <Review state={state.review} />
        <SetMood state={state.setMood}/>
        </>
    )
}

export default Ourstory