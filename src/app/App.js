import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { BackTop } from 'antd'
import AOS from 'aos'
import ScrollToTop from './ScrollToTop'
import FixedNavbar from '../components/_core/navbar/FixedNavbar'
import Home from '../pages/home/Home'
import ContactPage from '../pages/contact/ContactPage'
import AboutUsPage from '../pages/about/AboutUsPage'
import AboutMePage from '../pages/about/AboutMePage'
import BlogPage from '../pages/blog/BlogPage'
import PostTemplate from '../pages/blog/components/PostTemplate'
import PortfolioTemplate from '../components/portfolio/PortfolioTemplate'
import ProjectsTemplate from '../components/projects/ProjectsTemplate'
import NotFound from '../components/_core/not-found/NotFound'
import Footer from '../components/_core/footer/Footer'
import {
    getNavbarStyle,
    getSelectedNavbar,
    getFooter,
} from '../components/utils/_componentsData'
import useWindowWidth from '../components/_core/utils/_coreUtils'
import './app.scss'

const App = () => {
    const windowWidth = useWindowWidth()
    useEffect(() => {
        AOS.init({
            once: true,
        })
    }, [])
    useEffect(() => {
        AOS.refresh()
    }, [windowWidth])
    return (
        <Router>
            <FixedNavbar
                navbarStyle={getNavbarStyle()}
                selected={getSelectedNavbar()}
            />
            <ScrollToTop>
                <BackTop />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about-us" component={AboutUsPage} />
                    <Route path="/about-me/:id">
                        <AboutMePage />
                    </Route>
                    <Route path="/blog/posts/:id">
                        <PostTemplate />
                    </Route>
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/portfolio/:id">
                        <PortfolioTemplate />
                    </Route>
                    <Route path="/projects/:id">
                        <ProjectsTemplate />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </ScrollToTop>
            <Footer data={getFooter()} />
        </Router>
    )
}

export default App
