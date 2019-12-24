import uuidv4 from 'uuid/v4'
import HeroImageDesktop from '../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../assets/heroimage/heroimage-mobile.jpg'

const blogHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Stay up to date with',
    header: `the latest web design, development and technology news...`,
    btnText: '',
    btnLink: '',
}

const getBlogHeroImage = () => {
    return blogHeroImage
}

export { getBlogHeroImage as default }
