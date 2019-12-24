import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../../../assets/carousel/carousel-1-desktop.jpg'
import CarouselImgFirstMobile from '../../../assets/carousel/carousel-1-mobile.jpg'
import CarouselImgSecondDesktop from '../../../assets/carousel/carousel-2-desktop.jpg'
import CarouselImgSecondMobile from '../../../assets/carousel/carousel-2-mobile.jpg'
import CarouselImgThirdDesktop from '../../../assets/carousel/carousel-3-desktop.jpg'
import CarouselImgThirdMobile from '../../../assets/carousel/carousel-3-mobile.jpg'
import HeroImageDesktop from '../../../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../../../assets/heroimage/heroimage-mobile.jpg'

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
    subheader: 'We make the world better',
    header: `We offer web services 
        from brochure sites to full-scale e-commerce sites.`,
    btnText: '',
    btnLink: '',
}

const aboutHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Partner with us.',
    header: `We're performs Professional Web Development & Web Design Work.`,
    btnText: '',
    btnLink: '',
}

const contactHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: `Ready to get started? Let us chat`,
    header: `Contact us. Your best website is just a click away!`,
    btnText: '',
    btnLink: '',
}

const getCarouselImages = () => carouselElements
const getHomeHeroImage = () => homeHeroImage
const getAboutHeroImage = () => aboutHeroImage
const getContactHeroImage = () => contactHeroImage

export {
    getHomeHeroImage,
    getAboutHeroImage,
    getContactHeroImage,
    getCarouselImages,
}
