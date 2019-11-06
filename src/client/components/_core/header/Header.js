import React from 'react'
// import CarouselElm from '../carousel/CarouselElm'
import HeroImage from '../heroimage/HeroImageElm'
import { getHeroImage } from '../../_components-data'

const Header = () => {
    return (
        <div>
            {
                // <CarouselElm items={getCarouselImages()} />
            }
            <HeroImage item={getHeroImage()} />
        </div>
    )
}

export default Header
