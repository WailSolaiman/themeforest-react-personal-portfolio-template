import uuidv4 from 'uuid/v4'
import ArticleImg1 from '../assets/article-name-1/article-img-1.jpg'
import ArticleImg2 from '../assets/article-name-2/article-img-2.jpg'
import ArticleImg3 from '../assets/article-name-3/article-img-3.jpg'
import ArticleImg4 from '../assets/article-name-4/article-img-4.jpg'
import ArticleImg5 from '../assets/article-name-5/article-img-5.jpg'
import ArticleImg6 from '../assets/article-name-6/article-img-6.jpg'

const posts = [
    {
        id: uuidv4(),
        image: ArticleImg1,
        title: 'Leverage agile frameworks',
        excerpt: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster ...`,
        body: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster 
            collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace 
            diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate 
            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation 
            via workplace diversity and empowerment.`,
        publishDate: '15.12.2020',
        categories: [
            {
                id: uuidv4(),
                category: 'Logo Design',
            },
            {
                id: uuidv4(),
                category: 'Web Application',
            },
            {
                id: uuidv4(),
                category: 'Web Development',
            },
        ],
    },
    {
        id: uuidv4(),
        image: ArticleImg2,
        title: 'Capitalize on low hanging fruit',
        excerpt: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster ...`,
        body: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace
            diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.`,
        publishDate: '15.12.2020',
        categories: [
            {
                id: uuidv4(),
                category: 'Logo Design',
            },
            {
                id: uuidv4(),
                category: 'Web Development',
            },
        ],
    },
    {
        id: uuidv4(),
        image: ArticleImg3,
        title: 'Podcasting operational changes',
        excerpt: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster ...`,
        body: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace
            diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.`,
        publishDate: '15.12.2020',
        categories: [
            {
                id: uuidv4(),
                category: 'Software Development',
            },
            {
                id: uuidv4(),
                category: 'Web Development',
            },
        ],
    },
    {
        id: uuidv4(),
        image: ArticleImg4,
        title: 'Collaboratively administration',
        excerpt: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster ...`,
        body: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace
            diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.`,
        publishDate: '15.12.2020',
        categories: [
            {
                id: uuidv4(),
                category: 'Software Development',
            },
            {
                id: uuidv4(),
                category: 'Logo Design',
            },
            {
                id: uuidv4(),
                category: 'Web Application',
            },
        ],
    },
    {
        id: uuidv4(),
        image: ArticleImg5,
        title: 'Efficiently unleash cross-media',
        excerpt: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster ...`,
        body: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace
            diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.`,
        publishDate: '15.12.2020',
        categories: [
            {
                id: uuidv4(),
                category: 'Logo Design',
            },
        ],
    },
    {
        id: uuidv4(),
        image: ArticleImg6,
        title: 'Proactively envisioned multimedia',
        excerpt: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster ...`,
        body: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace
            diversity and empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.`,
        publishDate: '15.12.2020',
        categories: [
            {
                id: uuidv4(),
                category: 'Software Development',
            },
        ],
    },
]

const getPosts = () => {
    return posts
}

const getPost = id => {
    return posts.find(post => post.id === id)
}

export { getPosts, getPost }
