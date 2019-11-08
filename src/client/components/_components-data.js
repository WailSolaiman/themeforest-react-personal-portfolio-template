import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../assets/carousel/carousel-1-desktop.jpg'
import CarouselImgFirstMobile from '../assets/carousel/carousel-1-mobile.jpg'
import CarouselImgSecondDesktop from '../assets/carousel/carousel-2-desktop.jpg'
import CarouselImgSecondMobile from '../assets/carousel/carousel-2-mobile.jpg'
import CarouselImgThirdDesktop from '../assets/carousel/carousel-3-desktop.jpg'
import CarouselImgThirdMobile from '../assets/carousel/carousel-3-mobile.jpg'
import HeroImageDesktop from '../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../assets/heroimage/heroimage-mobile.jpg'

const carouselElements = [
    {
        id: uuidv4(),
        desktopImage: CarouselImgFirstDesktop,
        mobileImage: CarouselImgFirstMobile,
        subheader: 'Digital design studio',
        header: 'An application that will change your way of thinking.',
        btnText: 'Click Here',
    },
    {
        id: uuidv4(),
        desktopImage: CarouselImgSecondDesktop,
        mobileImage: CarouselImgSecondMobile,
        subheader: 'Digital design studio',
        header: 'More than just a web design.',
        btnText: 'Explore Now',
    },
    {
        id: uuidv4(),
        desktopImage: CarouselImgThirdDesktop,
        mobileImage: CarouselImgThirdMobile,
        subheader: 'Digital design studio',
        header: 'An application that will change your way of thinking.',
        btnText: 'Click Here',
    },
]

const heroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Digital design studio',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
}

const aboutMeData = {
    subtitle: 'About Me',
    title: 'Lorem ipsum Dolor',
    firstParagraph: `Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.`,
    secondParagraph: `Lias minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.`,
    btnText: 'Learn More',
    image: HeroImageMobile,
}

const myServicesData = [
    {
        id: uuidv4(),
        name: 'Service A',
        img: HeroImageMobile,
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Service B',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Service C',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'Service D',
        img: HeroImageMobile,
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
]

const projects = [
    {
        id: uuidv4(),
        name: 'Project A',
        img: HeroImageMobile,
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Project B',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Project C',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'Project D',
        img: HeroImageMobile,
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        name: 'Project E',
        img: HeroImageMobile,
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Project F',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Project G',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'Project H',
        img: HeroImageMobile,
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
]

const testimonials = [
    {
        id: uuidv4(),
        title: 'Lorem ipsum 1',
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, 
            voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum 2',
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum 3',
        avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Temporibus distinctio sit, ipsum ex nam praesentium.`,
    },
]

const parallax = {
    img: CarouselImgFirstDesktop,
    header: 'Lorem ipsum Dolor',
}

const getCarouselImages = () => {
    return carouselElements
}

const getHeroImage = () => {
    return heroImage
}

const getAboutMeData = () => {
    return aboutMeData
}

const getMyServicesData = () => {
    return myServicesData
}

const getProjects = () => {
    return projects
}

const getTestimonials = () => {
    return testimonials
}

const getParallax = () => {
    return parallax
}

export {
    getHeroImage,
    getCarouselImages,
    getAboutMeData,
    getMyServicesData,
    getProjects,
    getTestimonials,
    getParallax,
}
