import uuidv4 from 'uuid/v4'
import carrieBlackburn from '../../../assets/testimonials/carrie-blackburn.jpg'
import johnniTucker from '../../../assets/testimonials/johnni-tucker.jpg'
import williamMayer from '../../../assets/testimonials/william-mayer.jpg'

const testimonials = [
    {
        id: uuidv4(),
        name: 'Carrie Blackburn',
        position: '',
        avatar: carrieBlackburn,
        description: `Rapaciously seize adaptive infomediaries and user-centric intellectual capital. 
            Collaboratively unleash market-driven "outside the box" thinking for long-term high-impact solutions.`,
    },
    {
        id: uuidv4(),
        name: 'Johnni Tucker',
        position: 'CEO/Founder',
        avatar: johnniTucker,
        description: `Appropriately empower dynamic leadership skills after business portals. Globally myocardinate 
            interactive supply chains with distinctive quality vectors. 
            Globally revolutionize global sources through interoperable services.`,
    },
    {
        id: uuidv4(),
        name: 'William Mayer',
        position: '',
        avatar: williamMayer,
        description: `Dynamically target high-payoff intellectual capital for customized technologies. 
            Objectively integrate emerging core competencies before process-centric communities.`,
    },
]

const getTestimonials = () => testimonials

export { getTestimonials as default }
