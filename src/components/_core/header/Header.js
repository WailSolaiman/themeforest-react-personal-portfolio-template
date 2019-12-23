import React from 'react'
import HeroImageCarouselElm from '../heroimage-carousel/CarouselElm'
import HeroImageGradientElm from '../heroimage-gradient/GradientElm'
import HeroImageElm from '../heroimage/HeroImageElm'
import './header.scss'

const Header = ({ heroImage = {}, carousel = {}, selected = 'heroImage' }) => {
    const selectedHero = () => {
        if (selected === 'heroImage') {
            return <HeroImageElm item={heroImage} />
        }
        if (selected === 'carousel') {
            return <HeroImageCarouselElm items={carousel} />
        }
        return <HeroImageGradientElm item={heroImage} />
    }
    return <div className="header">{selectedHero()}</div>
}

export default Header
