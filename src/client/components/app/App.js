import React from 'react'
import WebFont from 'webfontloader'
import Home from '../home/Home'
import Nav from '../navbar/Nav'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './app.scss'

WebFont.load({
    google: {
        families: ['Carter+One|Lato Web:400,700,900', 'sans-serif'],
    },
})

const App = () => {
    return (
        <div className="root">
            <Nav />
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default App
