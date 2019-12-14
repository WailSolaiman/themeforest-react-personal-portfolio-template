import uuidv4 from 'uuid/v4'
import CarouselImgFirstDesktop from '../assets/heroimage/heroimage-desktop.jpg'

const posts = [
    {
        id: uuidv4(),
        image: CarouselImgFirstDesktop,
        title: 'Lorem ipsum',
        excerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        body:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        image: CarouselImgFirstDesktop,
        title: 'Lorem ipsum 2',
        excerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        body:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        image: CarouselImgFirstDesktop,
        title: 'Lorem ipsum 3',
        excerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        body:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        image: CarouselImgFirstDesktop,
        title: 'Lorem ipsum 4',
        excerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        body:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        image: CarouselImgFirstDesktop,
        title: 'Lorem ipsum 5',
        excerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        body:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
    {
        id: uuidv4(),
        image: CarouselImgFirstDesktop,
        title: 'Lorem ipsum 6',
        excerpt:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno.',
        body:
            'Lorem ipsum dolor informad text dfsa the froogno Lorem ipsum dolor informad text dfsa the froogno. Lorem ipsum dolor informad text dfsa the froogno.',
        publishDate: '15.12.2020',
    },
]

const getPosts = () => {
    return posts
}

const getPost = id => {
    return posts.find(post => post.id === id)
}

export { getPosts, getPost }
