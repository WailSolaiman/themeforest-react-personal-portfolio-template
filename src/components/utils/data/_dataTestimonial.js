import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../../assets/heroimage/heroimage-mobile.jpg'

const testimonials = [
    {
        id: uuidv4(),
        title: 'Carrie Blackburn',
        avatar: HeroImageMobile,
        description: `Rapaciously seize adaptive infomediaries and user-centric intellectual capital. 
            Collaboratively unleash market-driven "outside the box" thinking for long-term high-impact solutions.`,
    },
    {
        id: uuidv4(),
        title: 'Angela Hall (Angie)',
        avatar: HeroImageMobile,
        description: `Appropriately empower dynamic leadership skills after business portals. Globally myocardinate 
            interactive supply chains with distinctive quality vectors. 
            Globally revolutionize global sources through interoperable services.`,
    },
    {
        id: uuidv4(),
        title: 'William Mayer',
        avatar: HeroImageMobile,
        description: `Dynamically target high-payoff intellectual capital for customized technologies. 
            Objectively integrate emerging core competencies before process-centric communities.`,
    },
]

const getTestimonials = () => testimonials

export { getTestimonials as default }
