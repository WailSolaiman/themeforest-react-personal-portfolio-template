import React from 'react'
import Swiper from 'react-id-swiper'
import './swiper-elm.scss'

const SwiperElm = ({ items = [] }) => {
    return (
        <Swiper 
            navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
            pagination={{el: '.swiper-pagination', clickable: true, type: 'progressbar',}}
            >
            {items &&
                items.map(item => {
                    return (
                        <div className="swiper-elm" key={item.id}>
                            <div
                                className="swiper-elm__backgroundImage"
                                style={{ backgroundImage: `url(${item.src})` }}
                            />
                        </div>
                    )
                })}
        </Swiper>
    )
}

export default SwiperElm
