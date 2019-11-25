import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../../assets/carousel/carousel-1-desktop.jpg'
import CarouselImgFirstMobile from '../../assets/carousel/carousel-1-mobile.jpg'
import CarouselImgSecondDesktop from '../../assets/carousel/carousel-2-desktop.jpg'
import CarouselImgSecondMobile from '../../assets/carousel/carousel-2-mobile.jpg'
import CarouselImgThirdDesktop from '../../assets/carousel/carousel-3-desktop.jpg'
import CarouselImgThirdMobile from '../../assets/carousel/carousel-3-mobile.jpg'
import HeroImageDesktop from '../../assets/heroimage/heroimage-desktop.jpg'
import HeroImageMobile from '../../assets/heroimage/heroimage-mobile.jpg'
import Aida from '../../assets/clients/aida.png'
import AirBerlin from '../../assets/clients/airberlin.png'
import Akad from '../../assets/clients/akad.png'
import FoodPanda from '../../assets/clients/foodpanda.png'
import Gamigo from '../../assets/clients/gamigo.png'
import Gj from '../../assets/clients/gj.png'
import Jimdo from '../../assets/clients/jimdo.png'
import Mobil from '../../assets/clients/mobil.png'
import Otto from '../../assets/clients/otto.png'
import TOnline from '../../assets/clients/t-online.png'
import Travel from '../../assets/clients/travel.png'
import Zalando from '../../assets/clients/zalando.png'
import PortfolioMobileClientName from '../../assets/portfolio/client_name_1/portfolio-mobile-client_name.png'
import PortfolioTabletClientName from '../../assets/portfolio/client_name_1/portfolio-tablet-client_name.png'
import PortfolioDesktopClientName from '../../assets/portfolio/client_name_1/portfolio-desktop-client_name.png'

const navbarStyle = [
    {
        navbar: 'one-menu',
    },
    {
        navbar: 'two-menus',
    },
]

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

const blogHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Digital design studio',
    header: 'More than just a web design.',
    btnText: 'Explore Now',
    btnLink: '/contact',
}

const portfolioHeroImage = {
    id: uuidv4(),
    desktopImage: HeroImageDesktop,
    mobileImage: HeroImageMobile,
    subheader: 'Portfolio',
    header: 'More than just a Portfolio.',
    btnText: '',
    btnLink: '',
}

const aboutMeData = {
    subtitle: 'About Me',
    title: 'Lorem ipsum dolor',
    firstParagraph: `Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem.`,
    secondParagraph: `Lias minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Smet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem.`,
    thirdParagraph: ``,
    btnText: 'Read More',
    image: HeroImageMobile,
}

const myServicesData = [
    {
        id: uuidv4(),
        name: 'Web Design',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere nobis ad dignissimos.`,
    },
    {
        id: uuidv4(),
        name: 'Web Development',
        img: HeroImageMobile,
        paragraph: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus tempore accusamus.`,
    },
    {
        id: uuidv4(),
        name: 'Management',
        img: HeroImageMobile,
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere nobis ad dignissimos.`,
    },
]

const projects = [
    {
        id: uuidv4(),
        name: 'Javascript',
        img: HeroImageDesktop,
        title: 'Dolor sit Amet',
        paragraph: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'PHP',
        img: HeroImageDesktop,
        title: 'Dignissimos',
        paragraph: `Voluptas nobis tempore accu samus ad dignissimos necessitatibus.`,
    },
    {
        id: uuidv4(),
        name: 'Wordpress',
        img: HeroImageDesktop,
        title: 'Distinctio Sfwit',
        paragraph: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere.`,
    },
    {
        id: uuidv4(),
        name: 'HTML5 & CSS3',
        img: HeroImageDesktop,
        title: 'Earum nihid',
        paragraph: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        name: 'Contao',
        img: HeroImageDesktop,
        title: 'Dolor sit Amet',
        paragraph: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
    },
    {
        id: uuidv4(),
        name: 'Node.js',
        img: HeroImageDesktop,
        title: 'Dignissimos',
        paragraph: `Voluptas nobis tempore accu samus ad dignissimos necessitatibus.`,
    },
]

const testimonials = [
    {
        id: uuidv4(),
        title: 'Lorem ipsum 1',
        avatar: HeroImageMobile,
        description: `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, 
            voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum 2',
        avatar: HeroImageMobile,
        description: `Temporibus distinctio sit, ipsum ex nam praesentium iste facere. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus.`,
    },
    {
        id: uuidv4(),
        title: 'Lorem ipsum 3',
        avatar: HeroImageMobile,
        description: `Voluptas nobis tempore accusamus ad dignissimos necessitatibus. Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Temporibus distinctio sit, ipsum ex nam praesentium.`,
    },
]
const portfoliosText = `Commodi, voluptatem. Earum nihil sit itaque in ut porro delectus. Commodi, Voluptas nobis tempore accusamus ad dignissimos necessitatibus. Commodi, voluptatem. Earum nihil sit itaque in ut 
porro delectus, voluptatem Earum voluptatem.`

const portfolios = [
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Aida',
        logo: Aida,
        description:
            'Der CockayneGolf-Shop bietet Ihnen eine große Auswahl von Schlägern, Zubehör und Bekleidung für den Golfsport an. In der CockayneGolf-School im LTGK erwartet Sie die wahrscheinlich schönste Driving Range Deutschlands. Das SMG Golf Fitting Center bietet professionelles Schläger-Fitting und Optimierung an.',
        services: {
            online:
                'Responsive Webseite unter Verwendung von PHP 7, jQuery, HTML5, CSS3 und SASS. Einbindung eines CMS-Moduls zur einfachen Pflege der Inhalte.',
            offline:
                'Logodesign, Anzeigen, diverse Printprodukte wie Flyer, Broschüren, Visitenkarten, Briefpaper, Umschläge und Mappen.',
            others:
                'Banner, Fahnen, Banden, Corporate Fashion, Fahrzeugverklebung',
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
    },
    {
        id: uuidv4(),
        header: 'Web Development',
        src: HeroImageDesktop,
        client: 'AirBerlin',
        logo: AirBerlin,
        description:
            'Der CockayneGolf-Shop bietet Ihnen eine große Auswahl von Schlägern, Zubehör und Bekleidung für den Golfsport an. In der CockayneGolf-School im LTGK erwartet Sie die wahrscheinlich schönste Driving Range Deutschlands. Das SMG Golf Fitting Center bietet professionelles Schläger-Fitting und Optimierung an.',
        services: {
            online:
                'Responsive Webseite unter Verwendung von PHP 7, jQuery, HTML5, CSS3 und SASS. Einbindung eines CMS-Moduls zur einfachen Pflege der Inhalte.',
            offline:
                'Logodesign, Anzeigen, diverse Printprodukte wie Flyer, Broschüren, Visitenkarten, Briefpaper, Umschläge und Mappen.',
            others:
                'Banner, Fahnen, Banden, Corporate Fashion, Fahrzeugverklebung',
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
    },
    {
        id: uuidv4(),
        header: 'Logo Design',
        src: HeroImageDesktop,
        client: 'Akad',
        logo: Akad,
        description:
            'Der CockayneGolf-Shop bietet Ihnen eine große Auswahl von Schlägern, Zubehör und Bekleidung für den Golfsport an. In der CockayneGolf-School im LTGK erwartet Sie die wahrscheinlich schönste Driving Range Deutschlands. Das SMG Golf Fitting Center bietet professionelles Schläger-Fitting und Optimierung an.',
        services: {
            online:
                'Responsive Webseite unter Verwendung von PHP 7, jQuery, HTML5, CSS3 und SASS. Einbindung eines CMS-Moduls zur einfachen Pflege der Inhalte.',
            offline:
                'Logodesign, Anzeigen, diverse Printprodukte wie Flyer, Broschüren, Visitenkarten, Briefpaper, Umschläge und Mappen.',
            others:
                'Banner, Fahnen, Banden, Corporate Fashion, Fahrzeugverklebung',
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'FoodPanda',
        logo: FoodPanda,
        description:
            'Der CockayneGolf-Shop bietet Ihnen eine große Auswahl von Schlägern, Zubehör und Bekleidung für den Golfsport an. In der CockayneGolf-School im LTGK erwartet Sie die wahrscheinlich schönste Driving Range Deutschlands. Das SMG Golf Fitting Center bietet professionelles Schläger-Fitting und Optimierung an.',
        services: {
            online:
                'Responsive Webseite unter Verwendung von PHP 7, jQuery, HTML5, CSS3 und SASS. Einbindung eines CMS-Moduls zur einfachen Pflege der Inhalte.',
            offline:
                'Logodesign, Anzeigen, diverse Printprodukte wie Flyer, Broschüren, Visitenkarten, Briefpaper, Umschläge und Mappen.',
            others:
                'Banner, Fahnen, Banden, Corporate Fashion, Fahrzeugverklebung',
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
    },
]

const profileImage = HeroImageMobile

const personalData = [
    {
        id: uuidv4(),
        label: 'First Name',
        value: 'John',
    },
    {
        id: uuidv4(),
        label: 'Last Name',
        value: 'Doe',
    },
    {
        id: uuidv4(),
        label: 'Birthdate',
        value: '21 june 1990',
    },
    {
        id: uuidv4(),
        label: 'Phone',
        value: '+34 21 18 40 10',
    },
    {
        id: uuidv4(),
        label: 'Email',
        value: 'you@you.com',
    },
    {
        id: uuidv4(),
        label: 'Nationality',
        value: 'U.S.A',
    },
    {
        id: uuidv4(),
        label: 'Address',
        value: 'Germany. Street Name, 12345 City',
    },
    {
        id: uuidv4(),
        label: 'Experience',
        value: '7 years',
    },
    {
        id: uuidv4(),
        label: 'Freelance',
        value: 'Available',
    },
    {
        id: uuidv4(),
        label: 'Langages',
        value: 'English, Germany',
    },
    {
        id: uuidv4(),
        label: 'Skype',
        value: 'iltlc-0123',
    },
    {
        id: uuidv4(),
        label: 'Facebook',
        value: 'iltlc-f',
    },
]

const experiences = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
]

const educations = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Master Degree, University',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Bachelor Degree, University',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'High School',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
]

const skills = [
    {
        id: uuidv4(),
        name: 'HTML5',
        value: 90,
    },
    {
        id: uuidv4(),
        name: 'CSS3',
        value: 100,
    },
    {
        id: uuidv4(),
        name: 'JavaScript',
        value: 60,
    },
    {
        id: uuidv4(),
        name: 'PHP',
        value: 80,
    },
    {
        id: uuidv4(),
        name: 'Node.js',
        value: 75,
    },
]

const parallax = {
    img: CarouselImgFirstDesktop,
    header: 'i love templates, layouts and components',
}

const contactData = [
    {
        contactIcon: 'home',
        contactContent: 'Germany. Street Name, 12345 City',
    },
    {
        contactIcon: 'phone',
        contactContent: '+49 176 77027455',
    },
    {
        contactIcon: 'mail',
        contactContent: 'iltlc@hotmail.com',
    },
]

const articles = [
    {
        id: uuidv4(),
        blogFigure: CarouselImgFirstDesktop,
        blogTitle: 'Lorem ipsum',
        blogExcerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        blogBody:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        blogFigure: CarouselImgFirstDesktop,
        blogTitle: 'Lorem ipsum 2',
        blogExcerpt:
            'Froogno Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the.',
        blogBody:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
]

const clients = [
    {
        id: uuidv4(),
        src: Aida,
        name: 'Aida',
    },
    {
        id: uuidv4(),
        src: AirBerlin,
        name: 'Air-Berlin',
    },
    {
        id: uuidv4(),
        src: Akad,
        name: 'Akad',
    },
    {
        id: uuidv4(),
        src: FoodPanda,
        name: 'Food-Panda',
    },
    {
        id: uuidv4(),
        src: Gamigo,
        name: 'Gamigo',
    },
    {
        id: uuidv4(),
        src: Gj,
        name: 'GJ',
    },
    {
        id: uuidv4(),
        src: Jimdo,
        name: 'Jimdo',
    },
    {
        id: uuidv4(),
        src: Mobil,
        name: 'Mobil',
    },
    {
        id: uuidv4(),
        src: Otto,
        name: 'Otto',
    },
    {
        id: uuidv4(),
        src: TOnline,
        name: 'T-Online',
    },
    {
        id: uuidv4(),
        src: Travel,
        name: 'Travel',
    },
    {
        id: uuidv4(),
        src: Zalando,
        name: 'Zalando',
    },
]

const getNavbarStyle = () => {
    return navbarStyle
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

const getBlogHeroImage = () => {
    return blogHeroImage
}

const getPortfolioHeroImage = () => {
    return portfolioHeroImage
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

const getprofileImage = () => {
    return profileImage
}

const getPersonalData = () => {
    return personalData
}

const getExperiences = () => {
    return experiences
}

const getEducations = () => {
    return educations
}

const getSkills = () => {
    return skills
}

const getContactData = () => {
    return contactData
}

const getArticles = () => {
    return articles
}

const getOneArticle = id => {
    return articles.find(article => article.id === id)
}

const getPortfolios = () => {
    return portfolios
}

const getPortfoliosText = () => {
    return portfoliosText
}

const getOnePortfolio = id => {
    return portfolios.find(portfolio => portfolio.id === id)
}

const getClients = () => {
    return clients
}

export {
    getNavbarStyle,
    getHomeHeroImage,
    getContactHeroImage,
    getBlogHeroImage,
    getCarouselImages,
    getPortfolioHeroImage,
    getAboutMeData,
    getMyServicesData,
    getProjects,
    getTestimonials,
    getParallax,
    getprofileImage,
    getPersonalData,
    getExperiences,
    getEducations,
    getSkills,
    getContactData,
    getArticles,
    getOneArticle,
    getPortfolios,
    getPortfoliosText,
    getOnePortfolio,
    getClients,
}
