import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../assets/heroimage/heroimage-mobile.jpg'

const profileImage = HeroImageMobile

const aboutMePageTitle = {
    title: 'About Me',
    subtitle: 'I design and code beautiful things, and I love what I do.',
}

const aboutMeData = {
    subtitle: 'About Me',
    title: 'Lorem ipsum dolor',
    firstParagraph: `Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem.`,
    secondParagraph: `Lias minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Smet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem.`,
    thirdParagraph: ``,
    btnText: 'Read More',
    image: HeroImageMobile,
}

const personalData = [
    {
        id: uuidv4(),
        label: 'First Name',
        value: 'John',
    },
    {
        id: uuidv4(),
        label: 'Last Name',
        value: 'Doe',
    },
    {
        id: uuidv4(),
        label: 'Birthdate',
        value: '21 june 1990',
    },
    {
        id: uuidv4(),
        label: 'Phone',
        value: '+34 21 18 40 10',
    },
    {
        id: uuidv4(),
        label: 'Email',
        value: 'you@you.com',
    },
    {
        id: uuidv4(),
        label: 'Nationality',
        value: 'U.S.A',
    },
    {
        id: uuidv4(),
        label: 'Address',
        value: 'Germany. Street Name, 12345 City',
    },
    {
        id: uuidv4(),
        label: 'Experience',
        value: '7 years',
    },
    {
        id: uuidv4(),
        label: 'Freelance',
        value: 'Available',
    },
    {
        id: uuidv4(),
        label: 'Langages',
        value: 'English, Germany',
    },
    {
        id: uuidv4(),
        label: 'Skype',
        value: 'iltlc-0123',
    },
    {
        id: uuidv4(),
        label: 'Facebook',
        value: 'iltlc-f',
    },
]

const experiences = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
]

const educations = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Master Degree, University',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Bachelor Degree, University',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'High School',
        description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy`,
    },
]

const skills = [
    {
        id: uuidv4(),
        name: 'HTML5',
        value: 90,
    },
    {
        id: uuidv4(),
        name: 'CSS3',
        value: 100,
    },
    {
        id: uuidv4(),
        name: 'JavaScript',
        value: 60,
    },
    {
        id: uuidv4(),
        name: 'PHP',
        value: 80,
    },
    {
        id: uuidv4(),
        name: 'Node.js',
        value: 75,
    },
]

const contactData = [
    {
        contactIcon: 'home',
        contactContent: 'Germany. Street Name, 12345 City',
    },
    {
        contactIcon: 'phone',
        contactContent: '+49 176 77027455',
    },
    {
        contactIcon: 'mail',
        contactContent: 'iltlc@hotmail.com',
    },
]

const getAboutMePageTitle = () => {
    return aboutMePageTitle
}

const getAboutMeData = () => {
    return aboutMeData
}

const getprofileImage = () => {
    return profileImage
}

const getPersonalData = () => {
    return personalData
}

const getExperiences = () => {
    return experiences
}

const getEducations = () => {
    return educations
}

const getSkills = () => {
    return skills
}

const getContactData = () => {
    return contactData
}

export {
    getAboutMePageTitle,
    getAboutMeData,
    getprofileImage,
    getPersonalData,
    getExperiences,
    getEducations,
    getSkills,
    getContactData,
}
