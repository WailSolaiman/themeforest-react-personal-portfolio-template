import React from 'react'
import Slider from 'react-slick'
import './swiper-elm.scss'

const Gallery = ({ items = [] }) => {
    return (
        <Slider
            className="swiper-elm"
            dots
            infinite
            centerMode
            variableWidth
            speed={300}
            slidesToShow={1}
            arrows={false}>
            {items &&
                items.map(item => {
                    return (
                        <div key={item.id}>
                            <img
                                className="swiper-elm__img"
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
