import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import AOS from 'aos'
import ScrollToTop from './ScrollToTop'
import FixedNavbar from '../components/_core/navbar/FixedNavbar'
import Home from '../pages/home/Home'
import ContactPage from '../pages/contact/ContactPage'
import AboutPage from '../pages/about/AboutPage'
import BlogPage from '../pages/blog/BlogPage'
import ArticleTemplate from '../pages/blog/ArticleTemplate'
import PortfolioTemplate from '../components/portfolio/PortfolioTemplate'
import ProjectsTemplate from '../components/projects/ProjectsTemplate'
import NotFound from '../components/_core/not-found/NotFound'
import Footer from '../components/_core/footer/Footer'
import { getNavbarStyle } from '../components/utils/_componentsData'
// import useWindowWidth from '../components/_core/utils/_coreUtils'
import './app.scss'

const App = () => {
    // const windowWidth = useWindowWidth()
    // useEffect(() => {
    //     AOS.init({
    //         disable: () => {
    //             const maxWidth = 768
    //             return window.innerWidth < maxWidth
    //         },
    //     })
    // }, [])
    // useEffect(() => {
    //     AOS.refresh()
    // }, [windowWidth])
    return (
        <Router>
            <FixedNavbar navbarStyle={getNavbarStyle()} selected="one-menu" />
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/blog/posts/:id">
                        <ArticleTemplate />
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
            <Footer />
        </Router>
    )
}

export default App
