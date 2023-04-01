import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import style from "./announcer-bar.module.css";
import 'swiper/css';


const Announcer = ({ text }) => {
    let slides = text.map((el, index) => {

        return <SwiperSlide key={index}>
            <p className={style['announcer-bar__info']}>{el.slide}</p>
        </SwiperSlide>
    })
    return (
        <div className={style["announcer-bar"]}>
            <div className={style["announcer-bar"] + " page_container"}>
                <Swiper
                    loop={true}
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView="1"
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {slides}
                </Swiper>
            </div>
        </div>
    )
}

export default Announcer