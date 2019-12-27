import React from 'react'
import Slider from 'react-slick'
import './gallery.scss'

const Gallery = ({ items = [] }) => {
    return (
        <Slider
            className="gallery"
            dots
            fade
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}>
            {items &&
                items.map(item => {
                    return (
                        <img
                            className="gallery__img"
                            key={item.id}
                            src={item.photo}
                            alt={item.client}
                        />
                    )
                })}
        </Slider>
    )
}

export default Gallery
