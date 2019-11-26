import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Button, Typography } from 'antd'
import useWindowWidth from '../utils/_coreUtils'
import './carouselElm.scss'

const CarouselElm = ({ items = [] }) => {
    const windowWidth = useWindowWidth()
    const { Title } = Typography
    return (
        <Carousel effect="fade" autoplay>
            {items &&
                items.map(item => {
                    const imageUrl =
                        windowWidth >= 576
                            ? item.desktopImage
                            : item.mobileImage
                    return (
                        <div
                            className="carousel-content"
                            key={`key-nr-${item.id}`}>
                            <div
                                className="carousel-content__backgroundImage"
                                style={{ backgroundImage: `url(${imageUrl})` }}
                            />
                            <div className="carousel-content-absolute">
                                <Title className="carousel-content-absolute__subheader">
                                    {item.subheader}
                                </Title>
                                <Title
                                    className="carousel-content-absolute__header"
                                    level={3}>
                                    {item.header}
                                </Title>
                                {item.btnText !== '' ? (
                                    <Link
                                        className="iltlc-btn"
                                        to={item.btnLink}
                                        style={{ margin: '0 auto' }}>
                                        {item.btnText}
                                    </Link>
                                ) : (
                                    <span />
                                )}
                            </div>
                        </div>
                    )
                })}
        </Carousel>
    )
}

export default CarouselElm
