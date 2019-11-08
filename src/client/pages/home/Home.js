import React from 'react'
import { Form } from 'antd'
import AboutMe from '../../components/about-me/About-Me'
import MyServices from '../../components/my-services/My-Services'
import Projects from '../../components/projects/Projects'
import Testimonials from '../../components/testimonials/Testimonials'
import Parallax from '../../components/_core/parallax/Parallax'
import Contact from '../../components/contact/Contact'
import {
    getAboutMeData,
    getMyServicesData,
    getProjects,
    getTestimonials,
    getParallax,
} from '../../components/_components-data'

const Home = () => {
    const aboutMeData = getAboutMeData()
    const myServicesData = getMyServicesData()
    const projectsData = getProjects()
    const testimonials = getTestimonials()
    const parallax = getParallax()
    const WrappedContact = Form.create()(Contact)
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
            <Testimonials testimonials={testimonials} />
            <Parallax parallax={parallax} />
            <WrappedContact />
        </div>
    )
}

export default Home
