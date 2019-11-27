import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../assets/heroimage/heroimage-mobile.jpg'

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

const getTestimonials = () => {
    return testimonials
}

export { getTestimonials as default }
