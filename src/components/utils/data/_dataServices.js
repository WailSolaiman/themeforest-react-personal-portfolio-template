import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../../assets/heroimage/heroimage-mobile.jpg'

const services = [
    {
        id: uuidv4(),
        name: 'Web Design',
        img: HeroImageMobile,
        paragraph: `Leverage agile frameworks to provide a robust synopsis for high level overviews. 
            Iterative approaches to corporate strategy collaborative thinking.`,
    },
    {
        id: uuidv4(),
        name: 'Web Development',
        img: HeroImageMobile,
        paragraph: `ring to the table win-win survival strategies to ensure proactive domination. 
            At the end of the day, a new normal that has evolved from generation.`,
    },
    {
        id: uuidv4(),
        name: 'Logo Design',
        img: HeroImageMobile,
        paragraph: `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
            Override the digital divide with additional clickthroughs from DevOps.`,
    },
]

const getServices = () => services

export { getServices as default }
