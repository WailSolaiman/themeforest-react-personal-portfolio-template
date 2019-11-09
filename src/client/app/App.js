import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import WebFont from 'webfontloader'
import Home from '../pages/home/Home'
import ContactPage from '../pages/contact/ContactPage'
import Navbar from '../components/_core/navbar/Navbar'
import Footer from '../components/_core/footer/Footer'
import './app.scss'

WebFont.load({
    google: {
        families: ['Fjalla+One|Noto+Sans:400,700', 'sans-serif'],
    },
})

const App = () => {
    return (
        <BrowserRouter>
            <div className="iltlc-root">
                <Navbar />
                <Switch>
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/" component={Home} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
