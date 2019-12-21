import React from 'react'
import Flickity from 'react-flickity-component'
import './swiper-elm.scss'

const Gallery = ({ items = [] }) => {
    const flickityOptions = {
        freeScroll: true,
        contain: true,
        dragThreshold: 10,
        fullscreen: true,
        lazyLoad: 1,
    }

    return (
        <Flickity
            className="swiper-elm"
            elementType="div"
            options={flickityOptions}
            disableImagesLoaded={false}
            reloadOnUpdate
            static>
            {items &&
                items.map(item => {
                    return (
                        <div key={item.id}>
                            <img
                                className="swiper-elm__img"
                                src={item.src}
                                alt=""
                            />
                        </div>
                    )
                })}
        </Flickity>
    )
}

export default Gallery
