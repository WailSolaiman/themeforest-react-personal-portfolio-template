import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../assets/heroimage/heroimage-mobile.jpg'

const profileImage = HeroImageMobile

const aboutMeData = {
    subtitle: 'About Me',
    title: 'Capitalize on low hanging',
    firstParagraph: `Leverage agile frameworks to provide a robust synopsis for high level overviews. 
        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`,
    secondParagraph: `Bring to the table win-win survival strategies to ensure proactive domination. 
        At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading 
        towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.`,
    thirdParagraph: ``,
    btnText: 'Read More',
    image: HeroImageMobile,
}

const aboutMePageTitle = {
    title: 'About Me',
    subtitle: `I design and code beautiful Web Applications, and I love what I do.`,
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
        value: '01.01.1980',
    },
    {
        id: uuidv4(),
        label: 'Phone',
        value: '+00 123 45678910',
    },
    {
        id: uuidv4(),
        label: 'Email',
        value: 'johndoe@email.com',
    },
    {
        id: uuidv4(),
        label: 'Nationality',
        value: 'Americans',
    },
    {
        id: uuidv4(),
        label: 'Address',
        value: 'Country. Street Name, 12345 City',
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
        value: 'skype-johndoe',
    },
    {
        id: uuidv4(),
        label: 'Facebook',
        value: 'facebook-johndoe',
    },
]

const experiences = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Completely synergize resource taxing relationships via premier niche markets. 
            Dynamically innovate resource-leveling customer service for state of the art customer service.`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        career: 'Web Developer',
        company: 'Company GmbH',
        description: `Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.`,
    },
]

const educations = [
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Master Degree, University',
        description: `Globally incubate standards compliant channels before scalable benefits. 
            Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar 
            catalysts for change before vertical architectures.`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'Bachelor Degree, University',
        description: `Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated 
            processes through technically sound intellectual capital.`,
    },
    {
        id: uuidv4(),
        from: '2017',
        to: '2019',
        academy: 'High School',
        description: `Synergistically evolve 2.0 technologies rather than just in time initiatives. Quickly deploy strategic 
            networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.`,
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
        contactContent: 'Country. Street Name, 12345 City',
    },
    {
        contactIcon: 'phone',
        contactContent: '+00 123 45678910',
    },
    {
        contactIcon: 'mail',
        contactContent: 'johndoe@email.com',
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
