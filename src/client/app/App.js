import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from '../pages/home/Home'
import ContactPage from '../pages/contact/ContactPage'
import AboutPage from '../pages/about/AboutPage'
import BlogPage from '../pages/blog/BlogPage'
import FullArticle from '../pages/blog/FullArticle'
import FixedNavbar from '../components/_core/navbar/FixedNavbar'
import Footer from '../components/_core/footer/Footer'
import { getNavbarStyle } from '../components/_componentsData'
import './app.scss'

const App = () => {
    return (
        <Router>
            <FixedNavbar navbarStyle={getNavbarStyle()} selected="one-menu" />
            <ScrollToTop>
                <Switch>
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/fullarticle" component={FullArticle} />
                    <Route path="/" component={Home} />
                    {
                        // <Route component={Notfound} />
                    }
                </Switch>
            </ScrollToTop>
            <Footer />
        </Router>
    )
}

export default App
