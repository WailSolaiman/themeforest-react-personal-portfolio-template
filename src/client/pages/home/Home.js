import React from 'react'
import AboutMe from '../../components/about-me/About-Me'
import IntroImg from '../../assets/home/intro-img.jpg'

const Home = () => {
    const data = {
        subtitle: 'About Me',
        title: 'Lorem ipsum Dolor',
        firstParagraph: `Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Voluptatibus sapiente alias
                minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.`,
        secondParagraph: `Lias minus saepe laborum corporis earum quaerat
                deserunt unde quidem. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit.`,
        btnText: 'Learn More',
        image: IntroImg,
    }
    return (
        <div className="home">
            <AboutMe
                subtitle={data.subtitle}
                title={data.title}
                firstParagraph={data.firstParagraph}
                secondParagraph={data.secondParagraph}
                btnText={data.btnText}
                image={data.image}
            />
        </div>
    )
}

export default Home
