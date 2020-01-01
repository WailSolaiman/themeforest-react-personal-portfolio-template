import uuidv4 from 'uuid/v4'
import HeroImageMobile from '../../../assets/heroimage/heroimage-mobile.jpg'
import TeamImage1 from '../../../assets/team/team-1.jpg'
import TeamImage2 from '../../../assets/team/team-2.jpg'
import TeamImage3 from '../../../assets/team/team-3.jpg'
import TeamMember1 from '../../../assets/team/members/team-member-1.jpg'
import TeamMember2 from '../../../assets/team/members/team-member-2.jpg'
import TeamMember3 from '../../../assets/team/members/team-member-3.jpg'
import TeamMember4 from '../../../assets/team/members/team-member-4.jpg'
import TeamMember5 from '../../../assets/team/members/team-member-5.jpg'
import Event1 from '../../../assets/team/events/event-1.jpg'
import Event2 from '../../../assets/team/events/event-2.jpg'
import Event3 from '../../../assets/team/events/event-3.jpg'
import Event4 from '../../../assets/team/events/event-4.jpg'
import Event5 from '../../../assets/team/events/event-5.jpg'
import Event6 from '../../../assets/team/events/event-6.jpg'

const aboutUsData = {
    subtitle: 'About Us',
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
const aboutUsPageTitle = {
    title: 'About Us',
    subtitle: `We make the world better. We design and code beautiful Web Applications.`,
}
const teamSwiperImages = [
    {
        id: uuidv4(),
        src: TeamImage1,
        title: 'team-image-1',
    },
    {
        id: uuidv4(),
        src: TeamImage2,
        title: 'team-image-2',
    },
    {
        id: uuidv4(),
        src: TeamImage3,
        title: 'team-image-3',
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
const teamMembers = [
    {
        id: uuidv4(),
        name: 'John White',
        position: 'Founder and CEO',
        image: TeamMember1,
        personalData: [
            {
                id: uuidv4(),
                label: 'First Name',
                value: 'John',
            },
            {
                id: uuidv4(),
                label: 'Last Name',
                value: 'White',
            },
            {
                id: uuidv4(),
                label: 'Birthdate',
                value: '01.09.1980',
            },
            {
                id: uuidv4(),
                label: 'Phone',
                value: '+00 123 45678910',
            },
            {
                id: uuidv4(),
                label: 'Email',
                value: 'johnwhite@email.com',
            },
            {
                id: uuidv4(),
                label: 'Nationality',
                value: 'Americans',
            },
            {
                id: uuidv4(),
                label: 'Address',
                value: 'Ap #856-7349 Orci St.',
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
                value: 'skype-johnwhite',
            },
            {
                id: uuidv4(),
                label: 'Facebook',
                value: 'facebook-johnwhite',
            },
        ],
        experiences: [
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
                career: 'Founder and CEO',
                company: 'Company GmbH',
                description: `Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.`,
            },
        ],
        educations: [
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
        ],
        skills: [
            {
                id: uuidv4(),
                name: 'Interpersonal skills',
                value: 90,
            },
            {
                id: uuidv4(),
                name: 'Analytical skills',
                value: 100,
            },
            {
                id: uuidv4(),
                name: 'Leadership skills',
                value: 90,
            },
            {
                id: uuidv4(),
                name: 'Management skills',
                value: 80,
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Julie Lorenson',
        position: 'Frontend Web-Developer',
        image: TeamMember2,
        personalData: [
            {
                id: uuidv4(),
                label: 'First Name',
                value: 'Julie',
            },
            {
                id: uuidv4(),
                label: 'Last Name',
                value: 'Lorenson',
            },
            {
                id: uuidv4(),
                label: 'Birthdate',
                value: '05.07.1992',
            },
            {
                id: uuidv4(),
                label: 'Phone',
                value: '+00 123 45678944',
            },
            {
                id: uuidv4(),
                label: 'Email',
                value: 'j.lorenson@email.com',
            },
            {
                id: uuidv4(),
                label: 'Nationality',
                value: 'Americans',
            },
            {
                id: uuidv4(),
                label: 'Address',
                value: 'P.O. Box 197, 6527 Pellentesque Street',
            },
            {
                id: uuidv4(),
                label: 'Experience',
                value: '2 years',
            },
            {
                id: uuidv4(),
                label: 'Freelance',
                value: 'Available',
            },
            {
                id: uuidv4(),
                label: 'Langages',
                value: 'English',
            },
            {
                id: uuidv4(),
                label: 'Skype',
                value: 'skype-jLorenson',
            },
            {
                id: uuidv4(),
                label: 'Facebook',
                value: 'facebook-jLorenson',
            },
        ],
        experiences: [
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Frontend Web-Developer',
                company: 'Company GmbH',
                description: `Completely synergize resource taxing relationships via premier niche markets. 
            Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            },
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Frontend Web-Developer',
                company: 'Company GmbH',
                description: `Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.`,
            },
        ],
        educations: [
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
        ],
        skills: [
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
                name: 'SASS',
                value: 100,
            },
            {
                id: uuidv4(),
                name: 'JavaScript',
                value: 60,
            },
            {
                id: uuidv4(),
                name: 'jQuery',
                value: 80,
            },
            {
                id: uuidv4(),
                name: 'Animation',
                value: 75,
            },
            {
                id: uuidv4(),
                name: 'React',
                value: 75,
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Lucy Smith',
        position: 'Fullstack Web-Developer',
        image: TeamMember3,
        personalData: [
            {
                id: uuidv4(),
                label: 'First Name',
                value: 'Lucy',
            },
            {
                id: uuidv4(),
                label: 'Last Name',
                value: 'Smith',
            },
            {
                id: uuidv4(),
                label: 'Birthdate',
                value: '04.08.1992',
            },
            {
                id: uuidv4(),
                label: 'Phone',
                value: '+00 123 45611910',
            },
            {
                id: uuidv4(),
                label: 'Email',
                value: 'lucy.smith@email.com',
            },
            {
                id: uuidv4(),
                label: 'Nationality',
                value: 'Americans',
            },
            {
                id: uuidv4(),
                label: 'Address',
                value: 'Ap #916-2928 Blandit Avenue',
            },
            {
                id: uuidv4(),
                label: 'Experience',
                value: '5 years',
            },
            {
                id: uuidv4(),
                label: 'Freelance',
                value: 'Available',
            },
            {
                id: uuidv4(),
                label: 'Langages',
                value: 'English, French',
            },
            {
                id: uuidv4(),
                label: 'Skype',
                value: 'skype-lucy.smith',
            },
            {
                id: uuidv4(),
                label: 'Facebook',
                value: 'facebook-lucy.smith',
            },
        ],
        experiences: [
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Fullstack Web-Developer',
                company: 'Company GmbH',
                description: `Completely synergize resource taxing relationships via premier niche markets. 
            Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            },
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Fullstack Web-Developer',
                company: 'Company GmbH',
                description: `Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.`,
            },
        ],
        educations: [
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
        ],
        skills: [
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
            {
                id: uuidv4(),
                name: 'MongoDB',
                value: 75,
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Lara Lau',
        position: 'Internet Marketing',
        image: TeamMember4,
        personalData: [
            {
                id: uuidv4(),
                label: 'First Name',
                value: 'Lara',
            },
            {
                id: uuidv4(),
                label: 'Last Name',
                value: 'Lau',
            },
            {
                id: uuidv4(),
                label: 'Birthdate',
                value: '12.12.1982',
            },
            {
                id: uuidv4(),
                label: 'Phone',
                value: '+00 123 44178910',
            },
            {
                id: uuidv4(),
                label: 'Email',
                value: 'laralau@email.com',
            },
            {
                id: uuidv4(),
                label: 'Nationality',
                value: 'Americans',
            },
            {
                id: uuidv4(),
                label: 'Address',
                value: '5359 Proin Street',
            },
            {
                id: uuidv4(),
                label: 'Experience',
                value: '2 years',
            },
            {
                id: uuidv4(),
                label: 'Freelance',
                value: 'Available',
            },
            {
                id: uuidv4(),
                label: 'Langages',
                value: 'English',
            },
            {
                id: uuidv4(),
                label: 'Skype',
                value: 'skype-laralau',
            },
            {
                id: uuidv4(),
                label: 'Facebook',
                value: 'facebook-laralau',
            },
        ],
        experiences: [
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Internet Marketing',
                company: 'Company GmbH',
                description: `Completely synergize resource taxing relationships via premier niche markets. 
            Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            },
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Internet Marketing',
                company: 'Company GmbH',
                description: `Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.`,
            },
        ],
        educations: [
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
        ],
        skills: [
            {
                id: uuidv4(),
                name: 'Social Media',
                value: 90,
            },
            {
                id: uuidv4(),
                name: 'Promotions',
                value: 90,
            },
            {
                id: uuidv4(),
                name: 'Analytics',
                value: 70,
            },
            {
                id: uuidv4(),
                name: 'Sales',
                value: 80,
            },
            {
                id: uuidv4(),
                name: 'Advertising',
                value: 75,
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Tionne Jackson',
        position: 'Graphic Designer',
        image: TeamMember5,
        personalData: [
            {
                id: uuidv4(),
                label: 'First Name',
                value: 'Tionne',
            },
            {
                id: uuidv4(),
                label: 'Last Name',
                value: 'Jackson',
            },
            {
                id: uuidv4(),
                label: 'Birthdate',
                value: '02.11.1989',
            },
            {
                id: uuidv4(),
                label: 'Phone',
                value: '+00 123 45677740',
            },
            {
                id: uuidv4(),
                label: 'Email',
                value: 'tionne.jackson@email.com',
            },
            {
                id: uuidv4(),
                label: 'Nationality',
                value: 'Americans',
            },
            {
                id: uuidv4(),
                label: 'Address',
                value: '603-6126 Magna. Rd.',
            },
            {
                id: uuidv4(),
                label: 'Experience',
                value: '8 years',
            },
            {
                id: uuidv4(),
                label: 'Freelance',
                value: 'Available',
            },
            {
                id: uuidv4(),
                label: 'Langages',
                value: 'English',
            },
            {
                id: uuidv4(),
                label: 'Skype',
                value: 'skype-tionne.jackson',
            },
            {
                id: uuidv4(),
                label: 'Facebook',
                value: 'facebook-tionne.jackson',
            },
        ],
        experiences: [
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Graphic Designer',
                company: 'Company GmbH',
                description: `Completely synergize resource taxing relationships via premier niche markets. 
            Dynamically innovate resource-leveling customer service for state of the art customer service.`,
            },
            {
                id: uuidv4(),
                from: '2017',
                to: '2019',
                career: 'Graphic Designer',
                company: 'Company GmbH',
                description: `Proactively envisioned multimedia based expertise and cross-media growth strategies. 
            Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing.`,
            },
        ],
        educations: [
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
        ],
        skills: [
            {
                id: uuidv4(),
                name: 'Photoshop',
                value: 90,
            },
            {
                id: uuidv4(),
                name: 'Autocad',
                value: 100,
            },
            {
                id: uuidv4(),
                name: 'Gimp',
                value: 60,
            },
            {
                id: uuidv4(),
                name: 'illustrator',
                value: 80,
            },
        ],
    },
]
const events = [
    {
        id: uuidv4(),
        image: Event3,
        name: 'Completely synergize resource.',
    },
    {
        id: uuidv4(),
        image: Event2,
        name: 'Taxing relationships via premier.',
    },
    {
        id: uuidv4(),
        image: Event1,
        name: 'Synergize resource taxing.',
    },
    {
        id: uuidv4(),
        image: Event4,
        name: 'Via premier niche markets.',
    },
    {
        id: uuidv4(),
        image: Event5,
        name: 'Premier niche',
    },
    {
        id: uuidv4(),
        image: Event4,
        name: 'Erdergize resource',
    },
    {
        id: uuidv4(),
        image: Event1,
        name: 'Completely synergize resource.',
    },
    {
        id: uuidv4(),
        image: Event2,
        name: 'Taxing relationships via premier.',
    },
    {
        id: uuidv4(),
        image: Event4,
        name: 'Via premier niche markets.',
    },
    {
        id: uuidv4(),
        image: Event6,
        name: 'Premier niche',
    },
]

const getAboutUsPageTitle = () => aboutUsPageTitle
const getAboutUsData = () => aboutUsData
const getTeamImages = () => teamSwiperImages
const getTeamMembers = () => teamMembers
const getTeamMember = id => teamMembers.find(teamMember => teamMember.id === id)
const getEvents = () => events
const getContactData = () => contactData

export {
    getAboutUsPageTitle,
    getAboutUsData,
    getTeamImages,
    getTeamMembers,
    getTeamMember,
    getEvents,
    getContactData,
}
