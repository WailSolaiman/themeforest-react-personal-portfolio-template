import uuidv4 from 'uuid/v4'
import firstProjectImage1 from '../../assets/projects/first-project/lorem.jpg'
import firstProjectImage2 from '../../assets/projects/first-project/ipsum.jpg'
import firstProjectImage3 from '../../assets/projects/first-project/dolor.jpg'
import secondProjectImage1 from '../../assets/projects/second-project/lorem.jpg'
import secondProjectImage2 from '../../assets/projects/second-project/ipsum.jpg'
import secondProjectImage3 from '../../assets/projects/second-project/dolor.jpg'
import thirdProjectImage1 from '../../assets/projects/third-project/lorem.jpg'
import thirdProjectImage2 from '../../assets/projects/third-project/ipsum.jpg'
import thirdProjectImage3 from '../../assets/projects/third-project/dolor.jpg'

const projects = [
    {
        id: uuidv4(),
        tech: 'Javascript',
        desktopImage: firstProjectImage1,
        mobileImage: firstProjectImage1,
        gallery: [
            {
                id: uuidv4(),
                src: firstProjectImage1,
            },
            {
                id: uuidv4(),
                src: firstProjectImage2,
            },
            {
                id: uuidv4(),
                src: firstProjectImage3,
            },
        ],
        header: 'Deleniti eligendi Eumhic',
        subheader: 'Lorem ipsum Dolor amet.',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        thirdParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'Wordpress & PHP 7.0',
        desktopImage: firstProjectImage1,
        mobileImage: firstProjectImage1,
        gallery: [
            {
                id: uuidv4(),
                src: secondProjectImage1,
            },
            {
                id: uuidv4(),
                src: secondProjectImage2,
            },
            {
                id: uuidv4(),
                src: secondProjectImage3,
            },
        ],
        header: 'Laborum mole ecessitatibus',
        subheader: 'Lorem ipsum Dolor amet.',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        thirdParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!`,
        services: 'Research, UX design, UI Design, Mobile App.',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'HTML5 & CSS3',
        desktopImage: firstProjectImage1,
        mobileImage: firstProjectImage1,
        gallery: [
            {
                id: uuidv4(),
                src: thirdProjectImage1,
            },
            {
                id: uuidv4(),
                src: thirdProjectImage2,
            },
            {
                id: uuidv4(),
                src: thirdProjectImage3,
            },
        ],
        header: 'Ctetur adipisicing Elit',
        subheader: 'Lorem ipsum Dolor amet.',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        thirdParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
]

const getProjects = () => {
    return projects
}

const getOneProject = id => {
    return projects.find(project => project.id === id)
}

export { getProjects, getOneProject }
