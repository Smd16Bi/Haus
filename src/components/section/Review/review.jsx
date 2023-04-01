import React from "react";
import style from "./review.module.css";
import { Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Next from "../../../assets/next";
import Prev from "../../../assets/prev";


const Review = ({ state }) => {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    let review = state.map(el => {
        return <SwiperSlide key={el.id} className={style.reviewSlide}>
            <div className={style.body}>
                <h3 className={style.title}>{el.body}</h3>
                <p className={style.name}>{el.name}</p>
            </div>
        </SwiperSlide>
    });
    return (
        <div className={style.review}>
            <div className={style.container}>
                <div className={style['swiper-wrap']}>
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        loop={true}
                        className={style.reviewSwiper}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        spaceBetween={0}
                        slidesPerView="auto"
                        breakpoints={{
                            568: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            998: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            1140: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            }
                        }}
                    >
                        {review}
                    </Swiper>
                </div>

                <div className={style.prev} ref={navigationPrevRef}><Next /> </div>
                <div className={style.next} ref={navigationNextRef}> <Prev /> </div>
            </div>
        </div>
    )

}

export default Review