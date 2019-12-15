import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../../assets/carousel/carousel-1-desktop.jpg'
import CarouselImgFirstMobile from '../../assets/carousel/carousel-1-mobile.jpg'
import CarouselImgSecondDesktop from '../../assets/carousel/carousel-2-desktop.jpg'
import CarouselImgSecondMobile from '../../assets/carousel/carousel-2-mobile.jpg'
import CarouselImgThirdDesktop from '../../assets/carousel/carousel-3-desktop.jpg'
import CarouselImgThirdMobile from '../../assets/carousel/carousel-3-mobile.jpg'
import HeroImageDesktop from '../../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../../assets/heroimage/heroimage-mobile.jpg'

const carouselElements = [
    {
        id: uuidv4(),
        desktopImage: CarouselImgFirstDesktop,
        mobileImage: CarouselImgFirstMobile,
        subheader: 'Digital design studio',
        header: 'An application that will change your way of thinking.',
        btnText: 'Click Here',
        btnLink: '/',
    },
    {
        id: uuidv4(),
        desktopImage: CarouselImgSecondDesktop,
        mobileImage: CarouselImgSecondMobile,
        subheader: 'Digital design studio',
        header: 'More than just a web design.',
        btnText: 'Explore Now',
        btnLink: '/',
    },
    {
        id: uuidv4(),
        desktopImage: CarouselImgThirdDesktop,
        mobileImage: CarouselImgThirdMobile,
        subheader: 'Digital design studio',
        header: 'An application that will change your way of thinking.',
        btnText: 'Click Here',
        btnLink: '/',
    },
]

const homeHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Digital design studio',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
    btnLink: '/contact',
}

const contactHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Digital design studio',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
    btnLink: '/',
}

const getCarouselImages = () => {
    return carouselElements
}

const getHomeHeroImage = () => {
    return homeHeroImage
}

const getContactHeroImage = () => {
    return contactHeroImage
}

export {
    getHomeHeroImage,
    getContactHeroImage,
    getCarouselImages,
}
