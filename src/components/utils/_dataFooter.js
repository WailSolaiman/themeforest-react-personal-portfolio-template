import uuidv4 from 'uuid/v4'

const footer = {
    text: `Podcasting operational change management inside of workflows to establish a framework. 
        Taking seamless key performance indicators offline to maximise the long tail.`,
    header1: 'Get in Touch',
    header2: 'Social Media',
    header3: 'Menu',
    contact: {
        mail: 'info@iltlc.com',
        tel: '+49 00 - 123 53 - 6700',
        fax: '+49 00 - 554 53 - 6799',
        address: 'Dankwartsgrube 35',
        postcode: '23552',
        city: 'Lübeck',
        country: 'Germany',
    },
    copyright: '© ILTLC. 2020 | All Rights Reserved',
    footerNav: [
        {
            id: uuidv4(),
            page: 'Home',
            link: '/',
        },
        {
            id: uuidv4(),
            page: 'Blog',
            link: '/blog',
        },
        {
            id: uuidv4(),
            page: 'About',
            link: '/about',
        },
        {
            id: uuidv4(),
            page: 'Contact',
            link: '/contact',
        },
        {
            id: uuidv4(),
            page: 'Imprint',
            link: '/',
        },
        {
            id: uuidv4(),
            page: 'Data Privacy',
            link: '/',
        },
    ],
}

const getFooter = () => footer

export { getFooter as default }
