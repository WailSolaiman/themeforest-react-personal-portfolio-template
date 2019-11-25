import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from '../pages/home/Home'
import ContactPage from '../pages/contact/ContactPage'
import AboutPage from '../pages/about/AboutPage'
import BlogPage from '../pages/blog/BlogPage'
import ArticleTemplate from '../pages/blog/ArticleTemplate'
import PortfolioTemplate from '../components/portfolio/PortfolioTemplate'
import FixedNavbar from '../components/_core/navbar/FixedNavbar'
import Footer from '../components/_core/footer/Footer'
import { getNavbarStyle } from '../components/utils/_componentsData'
import './app.scss'

const App = () => {
    return (
        <Router>
            <FixedNavbar navbarStyle={getNavbarStyle()} selected="one-menu" />
            <ScrollToTop>
                <Switch>
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/blog/posts/:id">
                        <ArticleTemplate />
                    </Route>
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/portfolio/:id">
                        <PortfolioTemplate />
                    </Route>
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
