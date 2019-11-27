import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../assets/heroimage/heroimage-mobile.jpg'

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

const getMyServicesData = () => {
    return myServicesData
}

export { getMyServicesData as default }
