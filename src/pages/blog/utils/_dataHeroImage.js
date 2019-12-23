import uuidv4 from 'uuid/v4'
import HeroImageDesktop from '../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../assets/heroimage/heroimage-mobile.jpg'

const blogHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Leverage agile frameworks',
    header: `Iterative approaches to corporate strategy diversity and empowerment`,
    btnText: '',
    btnLink: '',
}

const getBlogHeroImage = () => {
    return blogHeroImage
}

export { getBlogHeroImage as default }
