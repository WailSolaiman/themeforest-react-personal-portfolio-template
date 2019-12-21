import uuidv4 from 'uuid/v4'
import HeroImageDesktop from '../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../assets/heroimage/heroimage-mobile.jpg'

const blogHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Blog',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
    btnLink: '/contact',
}

const getBlogHeroImage = () => {
    return blogHeroImage
}

export { getBlogHeroImage as default }
