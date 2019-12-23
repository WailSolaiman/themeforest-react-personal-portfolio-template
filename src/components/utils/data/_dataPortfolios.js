import uuidv4 from 'uuid/v4'
import HeroImageDesktop from '../../../assets/heroimage/heroimage-desktop.jpg'
import Aida from '../../../assets/clients/aida.png'
import AirBerlin from '../../../assets/clients/airberlin.png'
import Akad from '../../../assets/clients/akad.png'
import FoodPanda from '../../../assets/clients/foodpanda.png'
import Gamigo from '../../../assets/clients/gamigo.png'
import Gj from '../../../assets/clients/gj.png'
import Jimdo from '../../../assets/clients/jimdo.png'
import Mobil from '../../../assets/clients/mobil.png'
import Otto from '../../../assets/clients/otto.png'
import TOnline from '../../../assets/clients/t-online.png'
import Travel from '../../../assets/clients/travel.png'
import Zalando from '../../../assets/clients/zalando.png'
import PortfolioMobileClientName from '../../../assets/portfolio/client_name_1/portfolio-mobile-client_name.png'
import PortfolioTabletClientName from '../../../assets/portfolio/client_name_1/portfolio-tablet-client_name.png'
import PortfolioDesktopClientName from '../../../assets/portfolio/client_name_1/portfolio-desktop-client_name.png'
import firstProjectImage1 from '../../../assets/portfolio/client_name_1/lorem.jpg'

const portfoliosText = `Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate 
    integrated processes through technically sound intellectual capital. Holistically foster superior methodologies 
    without market-driven best practices.`

const portfolios = [
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Aida',
        logo: Aida,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Web Development',
        src: HeroImageDesktop,
        client: 'AirBerlin',
        logo: AirBerlin,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Logo Design',
        src: HeroImageDesktop,
        client: 'Akad',
        logo: Akad,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'FoodPanda',
        logo: FoodPanda,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Gamigo',
        logo: Gamigo,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Gj',
        logo: Gj,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Jimdo',
        logo: Jimdo,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Mobil',
        logo: Mobil,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Otto',
        logo: Otto,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'TOnline',
        logo: TOnline,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Travel',
        logo: Travel,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Zalando',
        logo: Zalando,
        description: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow 
            the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
        services: {
            online: `Organically grow the holistic world view of PHP 7, jQuery, HTML5, CSS3 und SASS. Bring to the table 
                win-win to ensure proactive domination.`,
            offline: `Logo design, advertisements, various print products such as flyers, brochures, business cards, stationery, envelopes and folders.`,
            others: `Banners, flags, gangs, corporate fashion, vehicle wrapping`,
        },
        image: {
            desktop: PortfolioDesktopClientName,
            tablet: PortfolioTabletClientName,
            mobile: PortfolioMobileClientName,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage1,
                thumbnail: firstProjectImage1,
            },
        ],
    },
]

const getPortfolios = () => portfolios
const getPortfoliosText = () => portfoliosText
const getOnePortfolio = id => portfolios.find(portfolio => portfolio.id === id)

export { getPortfolios, getPortfoliosText, getOnePortfolio }
