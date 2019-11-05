import React from 'react'
import CarouselElm from '../elements/CarouselElm'
import getCarouselImages from '../_componentsUtils'

const Header = () => {
    return (
        <div>
            <CarouselElm items={getCarouselImages()} />
        </div>
    )
}

export default Header
