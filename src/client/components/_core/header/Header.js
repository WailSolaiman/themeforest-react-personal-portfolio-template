import React from 'react'
import CarouselElm from '../carousel/CarouselElm'
import HeroImage from '../heroimage/HeroImageElm'

const Header = ({ heroImage, carousel, selected }) => {
    return (
        <div>
            {selected === 'heroImage' ? (
                <HeroImage item={heroImage} />
            ) : (
                <CarouselElm items={carousel} />
            )}
        </div>
    )
}

export default Header
