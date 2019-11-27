import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../../assets/carousel/carousel-1-desktop.jpg'

const articles = [
    {
        id: uuidv4(),
        blogFigure: CarouselImgFirstDesktop,
        blogTitle: 'Lorem ipsum',
        blogExcerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        blogBody:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        blogFigure: CarouselImgFirstDesktop,
        blogTitle: 'Lorem ipsum 2',
        blogExcerpt:
            'Froogno Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the.',
        blogBody:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
]

const getArticles = () => {
    return articles
}

const getOneArticle = id => {
    return articles.find(article => article.id === id)
}

export { getArticles, getOneArticle }
