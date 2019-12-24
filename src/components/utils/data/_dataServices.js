import uuidv4 from 'uuid/v4'
import WebDevelopmentImg from '../../../assets/services/services-web-development.jpg'
import WebDesignImg from '../../../assets/services/services-web-design.jpg'
import LogoDesignImg from '../../../assets/services/services-logo-design.jpg'

const services = [
    {
        id: uuidv4(),
        name: 'Web Design',
        img: WebDesignImg,
        paragraph: `Leverage agile frameworks to provide a 
            robust synopsis for high level overviews iterative approaches.`,
    },
    {
        id: uuidv4(),
        name: 'Web Development',
        img: WebDevelopmentImg,
        paragraph: `Provide to the table win-win survival strategies to ensure 
            the proactive domination.`,
    },
    {
        id: uuidv4(),
        name: 'Logo Design',
        img: LogoDesignImg,
        paragraph: `Capitalize on low hanging fruit to identify a ballpark value 
            added activity to beta all tests.`,
    },
]

const getServices = () => services

export { getServices as default }
