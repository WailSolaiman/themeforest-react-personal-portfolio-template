import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Typography } from 'antd'
import useWindowWidth from '../utils/_coreUtils'
import './carousel-elm.scss'

const CarouselElm = ({ items = [] }) => {
    const windowWidth = useWindowWidth()
    const { Title } = Typography
    return (
        <Carousel effect="fade" autoplay>
            {items &&
                items.map(item => {
                    const {
                        id,
                        header = '',
                        subheader = '',
                        btnText = '',
                        btnLink = '',
                        desktopImage,
                        mobileImage,
                    } = item
                    const imageUrl =
                        windowWidth >= 768 ? desktopImage : mobileImage
                    return (
                        <div className="carousel-content" key={`key-nr-${id}`}>
                            <div
                                className="carousel-content__backgroundImage"
                                style={{ backgroundImage: `url(${imageUrl})` }}
                            />
                            <div className="carousel-content-absolute">
                                <Title className="carousel-content-absolute__subheader">
                                    {subheader}
                                </Title>
                                <Title
                                    className="carousel-content-absolute__header"
                                    level={3}>
                                    {header}
                                </Title>
                                {btnText !== '' ? (
                                    <Link
                                        className="iltlc-btn"
                                        to={btnLink}
                                        style={{ margin: '0 auto' }}>
                                        {btnText}
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
