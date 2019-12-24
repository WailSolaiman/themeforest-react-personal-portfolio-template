import uuidv4 from 'uuid/v4'
// import firstProjectImage1 from '../../../assets/projects/first-project/lorem.jpg'
// import firstProjectImage2 from '../../../assets/projects/first-project/ipsum.jpg'
// import firstProjectImage3 from '../../../assets/projects/first-project/dolor.jpg'
// import secondProjectImage1 from '../../../assets/projects/second-project/lorem.jpg'
// import secondProjectImage2 from '../../../assets/projects/second-project/ipsum.jpg'
// import secondProjectImage3 from '../../../assets/projects/second-project/dolor.jpg'
// import thirdProjectImage1 from '../../../assets/projects/third-project/lorem.jpg'
// import thirdProjectImage2 from '../../../assets/projects/third-project/ipsum.jpg'
// import thirdProjectImage3 from '../../../assets/projects/third-project/dolor.jpg'
import JavascriptProjectsDesktopImg from '../../../assets/projects/javascripts-projects-desktop.jpg'
import JavascriptProjectsMobileImg from '../../../assets/projects/javascripts-projects-mobile.jpg'
import WordpressProjectsDesktopImg from '../../../assets/projects/wordpress-projects-desktop.jpg'
import WordpressProjectsMobileImg from '../../../assets/projects/wordpress-projects-mobile.jpg'
import MagentoProjectDesktopImg from '../../../assets/projects/magento-projects-desktop.jpg'
import MagentoProjectMobileImg from '../../../assets/projects/magento-projects-mobile.jpg'

const projects = [
    {
        id: uuidv4(),
        tech: 'Javascript Projects',
        desktopImage: JavascriptProjectsDesktopImg,
        mobileImage: JavascriptProjectsMobileImg,
        gallery: [
            {
                id: uuidv4(),
                src: JavascriptProjectsDesktopImg,
            },
            {
                id: uuidv4(),
                src: JavascriptProjectsDesktopImg,
            },
            {
                id: uuidv4(),
                src: JavascriptProjectsDesktopImg,
            },
        ],
        header: `Latest JavaScript Technologies such as ECMAScript 6 and JS Frameworks.`,
        subheader: 'ECMAScript 6',
        excerpt: `Latest JS Technologies such as ECMAScript 6 and JS Frameworks like React, Angular and Vue.`,
        paragraph: `Collaboratively administrate empowered markets via plug-and-play networks. Dynamically 
            procrastinate B2C users after installed base benefits. Dramatically visualize customer directed 
            convergence without revolutionary ROI. Efficiently unleash cross-media information without 
            cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically 
            maintain clicks-and-mortar solutions without functional solutions.`,
        secondParagraph: `Deleniti eligendi eum hic inventore officiis? Accusamus culpa deleniti esteum fuga 
            laborum molestias necess itatibus reiciendis repellendus soluta, totam unde voluptate voluptatibus! 
            itamet, consectetur adipisicing elit. Blanditiis consequuntur ex quam tempore.`,
        thirdParagraph: `Deleniti eligendi eum hicinventore officiis? Accusamus culpa deleniti esteum fuga 
            laborum molestias necessitatibus reiciendis repellendus soluta, totam undevoluptate voluptatibus!`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'Wordpress Projects',
        desktopImage: WordpressProjectsDesktopImg,
        mobileImage: WordpressProjectsMobileImg,
        gallery: [
            {
                id: uuidv4(),
                src: WordpressProjectsDesktopImg,
            },
            {
                id: uuidv4(),
                src: WordpressProjectsDesktopImg,
            },
            {
                id: uuidv4(),
                src: WordpressProjectsDesktopImg,
            },
        ],
        header: `Latest Wordpress 5.0 features. Themes, Plugins Development.`,
        subheader: 'Wordpress 5.0',
        excerpt: `Latest Wordpress 5.0 features. Themes, Plugins and Widgets Design and Development.`,
        paragraph: `Collaboratively administrate empowered markets via plug-and-play networks. Dynamically 
            procrastinate B2C users after installed base benefits. Dramatically visualize customer directed 
            convergence without revolutionary ROI. Efficiently unleash cross-media information without 
            cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically 
            maintain clicks-and-mortar solutions without functional solutions.`,
        secondParagraph: `Deleniti eligendi eum hic inventore officiis? Accusamus culpa deleniti esteum fuga 
            laborum molestias necess itatibus reiciendis repellendus soluta, totam unde voluptate voluptatibus! 
            itamet, consectetur adipisicing elit. Blanditiis consequuntur ex quam tempore.`,
        thirdParagraph: `Deleniti eligendi eum hicinventore officiis? Accusamus culpa deleniti esteum fuga 
            laborum molestias necessitatibus reiciendis repellendus soluta, totam undevoluptate voluptatibus!`,
        services: 'Research, UX design, UI Design, Mobile App.',
        platforms: 'Web',
    },
    {
        id: uuidv4(),
        tech: 'Magento Projects',
        desktopImage: MagentoProjectDesktopImg,
        mobileImage: MagentoProjectMobileImg,
        gallery: [
            {
                id: uuidv4(),
                src: MagentoProjectDesktopImg,
            },
            {
                id: uuidv4(),
                src: MagentoProjectDesktopImg,
            },
            {
                id: uuidv4(),
                src: MagentoProjectDesktopImg,
            },
        ],
        header: `Latest Magento 2.3 features to build full-scale e-Commerce Websites.`,
        subheader: 'Magento 2.3.',
        excerpt: `Latest Magento 2.3 features. Magento provides online merchants with a flexible shopping cart system.`,
        paragraph: `Collaboratively administrate empowered markets via plug-and-play networks. Dynamically 
            procrastinate B2C users after installed base benefits. Dramatically visualize customer directed 
            convergence without revolutionary ROI. Efficiently unleash cross-media information without 
            cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically 
            maintain clicks-and-mortar solutions without functional solutions.`,
        secondParagraph: `Deleniti eligendi eum hic inventore officiis? Accusamus culpa deleniti esteum fuga 
            laborum molestias necess itatibus reiciendis repellendus soluta, totam unde voluptate voluptatibus! 
            itamet, consectetur adipisicing elit. Blanditiis consequuntur ex quam tempore.`,
        thirdParagraph: `Deleniti eligendi eum hicinventore officiis? Accusamus culpa deleniti esteum fuga 
            laborum molestias necessitatibus reiciendis repellendus soluta, totam undevoluptate voluptatibus!`,
        services: 'Research, UX design, UI Design',
        platforms: 'Web',
    },
]

const getProjects = () => projects
const getOneProject = id => projects.find(project => project.id === id)

export { getProjects, getOneProject }
