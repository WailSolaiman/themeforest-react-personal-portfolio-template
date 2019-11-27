import uuidv4 from 'uuid/v4'
import HeroImageDesktop from '../../assets/heroimage/heroimage-desktop.jpg'
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
    {
        id: uuidv4(),
        header: 'Design',
        src: HeroImageDesktop,
        client: 'Gamigo',
        logo: Gamigo,
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
        client: 'Gj',
        logo: Gj,
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
        client: 'Jimdo',
        logo: Jimdo,
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
        client: 'Mobil',
        logo: Mobil,
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
        client: 'Otto',
        logo: Otto,
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
        client: 'TOnline',
        logo: TOnline,
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
        client: 'Travel',
        logo: Travel,
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
        client: 'Zalando',
        logo: Zalando,
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

const getPortfolios = () => {
    return portfolios
}

const getPortfoliosText = () => {
    return portfoliosText
}

const getOnePortfolio = id => {
    return portfolios.find(portfolio => portfolio.id === id)
}

export { getPortfolios, getPortfoliosText, getOnePortfolio }
