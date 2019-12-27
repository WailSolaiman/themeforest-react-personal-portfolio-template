import uuidv4 from 'uuid/v4'
import ClientBWPortfolioDesktop from '../../../assets/portfolio/client_black-white-portfolio-web/b-w-portfolio-desktop.jpg'
import ClientBWPortfolioTablet from '../../../assets/portfolio/client_black-white-portfolio-web/b-w-portfolio-tablet.jpg'
import ClientBWPortfolioMobile from '../../../assets/portfolio/client_black-white-portfolio-web/b-w-portfolio-mobile.jpg'
import ClientBWPortfolioDesktop2 from '../../../assets/portfolio/client_black-white-portfolio-web/b-w-portfolio-desktop-surface.png'
import ClientBWPortfolioTablet2 from '../../../assets/portfolio/client_black-white-portfolio-web/b-w-portfolio-tablet-iPad-Air-2.png'
import ClientBWPortfolioMobile2 from '../../../assets/portfolio/client_black-white-portfolio-web/b-w-portfolio-mobile-iPhone-7.png'
import ClientFashionDesktop from '../../../assets/portfolio/client_fashion-blog/fashion-desktop.jpg'
import ClientFashionTablet from '../../../assets/portfolio/client_fashion-blog/fashion-tablet.jpg'
import ClientFashionMobile from '../../../assets/portfolio/client_fashion-blog/fashion-mobile.jpg'
import ClientFashionDesktop2 from '../../../assets/portfolio/client_fashion-blog/fashion-desktop-Surface.png'
import ClientFashionTablet2 from '../../../assets/portfolio/client_fashion-blog/fashion-tablet-iPad-Air-2.png'
import ClientFashionMobile2 from '../../../assets/portfolio/client_fashion-blog/fashion-mobile-iPhone-7.png'

const portfoliosText = `Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate 
    integrated processes through technically sound intellectual capital. Holistically foster superior methodologies 
    without market-driven best practices.`

const portfolios = [
    {
        id: uuidv4(),
        header: 'Design',
        src: ClientBWPortfolioDesktop,
        client: 'Aida',
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
            desktop: ClientBWPortfolioDesktop2,
            tablet: ClientBWPortfolioTablet2,
            mobile: ClientBWPortfolioMobile2,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                photo: ClientBWPortfolioDesktop,
                client: 'Aida',
            },
            {
                id: uuidv4(),
                photo: ClientBWPortfolioTablet,
                client: 'Aida',
            },
            {
                id: uuidv4(),
                photo: ClientBWPortfolioMobile,
                client: 'Aida',
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Web Development',
        src: ClientFashionDesktop,
        client: 'AirBerlin',
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
            desktop: ClientFashionDesktop2,
            tablet: ClientFashionTablet2,
            mobile: ClientFashionMobile2,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                photo: ClientFashionDesktop,
                client: 'AirBerlin',
            },
            {
                id: uuidv4(),
                photo: ClientFashionTablet,
                client: 'AirBerlin',
            },
            {
                id: uuidv4(),
                photo: ClientFashionMobile,
                client: 'AirBerlin',
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: ClientBWPortfolioDesktop,
        client: 'Aida',
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
            desktop: ClientBWPortfolioDesktop2,
            tablet: ClientBWPortfolioTablet2,
            mobile: ClientBWPortfolioMobile2,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                photo: ClientBWPortfolioDesktop,
                client: 'Aida',
            },
            {
                id: uuidv4(),
                photo: ClientBWPortfolioTablet,
                client: 'Aida',
            },
            {
                id: uuidv4(),
                photo: ClientBWPortfolioMobile,
                client: 'Aida',
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Web Development',
        src: ClientFashionDesktop,
        client: 'AirBerlin',
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
            desktop: ClientFashionDesktop2,
            tablet: ClientFashionTablet2,
            mobile: ClientFashionMobile2,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                photo: ClientFashionDesktop,
                client: 'AirBerlin',
            },
            {
                id: uuidv4(),
                photo: ClientFashionTablet,
                client: 'AirBerlin',
            },
            {
                id: uuidv4(),
                photo: ClientFashionMobile,
                client: 'AirBerlin',
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Design',
        src: ClientBWPortfolioDesktop,
        client: 'Aida',
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
            desktop: ClientBWPortfolioDesktop2,
            tablet: ClientBWPortfolioTablet2,
            mobile: ClientBWPortfolioMobile2,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                photo: ClientBWPortfolioDesktop,
                client: 'Aida',
            },
            {
                id: uuidv4(),
                photo: ClientBWPortfolioTablet,
                client: 'Aida',
            },
            {
                id: uuidv4(),
                photo: ClientBWPortfolioMobile,
                client: 'Aida',
            },
        ],
    },
    {
        id: uuidv4(),
        header: 'Web Development',
        src: ClientFashionDesktop,
        client: 'AirBerlin',
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
            desktop: ClientFashionDesktop2,
            tablet: ClientFashionTablet2,
            mobile: ClientFashionMobile2,
        },
        webpage: 'https://google.com',
        gallery: [
            {
                id: uuidv4(),
                photo: ClientFashionDesktop,
                client: 'AirBerlin',
            },
            {
                id: uuidv4(),
                photo: ClientFashionTablet,
                client: 'AirBerlin',
            },
            {
                id: uuidv4(),
                photo: ClientFashionMobile,
                client: 'AirBerlin',
            },
        ],
    },
]

const getPortfolios = () => portfolios
const getPortfoliosText = () => portfoliosText
const getOnePortfolio = id => portfolios.find(portfolio => portfolio.id === id)

export { getPortfolios, getPortfoliosText, getOnePortfolio }
