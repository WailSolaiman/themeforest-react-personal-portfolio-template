import React from 'react'
import AboutMe from '../../components/about-me/About-Me'
import MyServices from '../../components/my-services/My-Services'
import Projects from '../../components/projects/Projects'
import {
    getAboutMeData,
    getMyServicesData,
    getProjects,
} from '../../components/_components-data'

const Home = () => {
    const aboutMeData = getAboutMeData()
    const myServicesData = getMyServicesData()
    const projectsData = getProjects()
    return (
        <div className="home">
            <AboutMe
                subtitle={aboutMeData.subtitle}
                title={aboutMeData.title}
                firstParagraph={aboutMeData.firstParagraph}
                secondParagraph={aboutMeData.secondParagraph}
                btnText={aboutMeData.btnText}
                image={aboutMeData.image}
            />
            <MyServices services={myServicesData} />
            <Projects projects={projectsData} />
        </div>
    )
}

export default Home
