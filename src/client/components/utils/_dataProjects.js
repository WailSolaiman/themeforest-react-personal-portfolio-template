import uuidv4 from 'uuid/v4'
import HeroImageDesktop from '../../assets/heroimage/heroimage-desktop.jpg'

const projects = [
    {
        id: uuidv4(),
        tech: 'Javascript',
        img: HeroImageDesktop,
        title: 'From dirt to Kings',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'PHP',
        img: HeroImageDesktop,
        title: 'Dignissimos',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'Wordpress',
        img: HeroImageDesktop,
        title: 'Distinctio Sfwit',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'HTML5 & CSS3',
        img: HeroImageDesktop,
        title: 'Earum nihid',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'Contao',
        img: HeroImageDesktop,
        title: 'Dolor sit Amet',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'Node.js',
        img: HeroImageDesktop,
        title: 'Dignissimos',
        excerpt: `Lorem ipsum dolor sit amet conse ctetur adipisicing elit.`,
        paragraph: `Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
        secondParagraph: `Deleniti eligendi eum hic
                    inventore officiis? Accusamus culpa deleniti est
                    eum fuga laborum molestias necessitatibus
                    reiciendis repellendus soluta, totam unde
                    voluptate voluptatibus!Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Blanditiis
                    consequuntur ex quam tempore.`,
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
