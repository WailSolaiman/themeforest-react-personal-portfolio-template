import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import WebFont from 'webfontloader'
import Home from '../pages/home/Home'
import ContactPage from '../pages/contact/ContactPage'
import AboutPage from '../pages/about/AboutPage'
import BlogPage from '../pages/blog/BlogPage'
import FullArticle from '../pages/blog/FullArticle'
import FixedNavbar from '../components/_core/navbar/FixedNavbar'
import Footer from '../components/_core/footer/Footer'
import { getNavbarStyle } from '../components/_componentsData'
import './app.scss'

WebFont.load({
    google: {
        families: ['Poppins:400,900|Noto+Sans:400,700'],
    },
})

const App = () => {
    return (
        <MemoryRouter>
            <div className="iltlc-root">
                <FixedNavbar
                    navbarStyle={getNavbarStyle()}
                    selected="one-menu"
                />
                <Switch>
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/blog" component={BlogPage} />
                    <Route path="/fullarticle" component={FullArticle} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </MemoryRouter>
    )
}

export default App
