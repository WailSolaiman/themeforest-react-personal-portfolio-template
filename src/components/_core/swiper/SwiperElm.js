import React from 'react'
import Slider from 'react-slick'
import './swiper-elm.scss'

const Gallery = ({ items = [] }) => {
    return (
        <Slider
            className="swiper-elm"
            dots
            fade
            infinite
            autoplay
            autoplaySpeed={2000}
            adaptiveHeight={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}>
            {items &&
                items.map(item => {
                    return (
                        <div
                            className="swiper-elm__image-container"
                            key={item.id}>
                            <img
                                className="swiper-elm__image"
                                src={item.src}
                                alt={item.client}
                            />
                        </div>
                    )
                })}
        </Slider>
    )
}

export default Gallery
