import React from 'react'
import WebFont from 'webfontloader'
import Home from '../pages/home/Home'
import Navbar from '../components/_core/navbar/Navbar'
import Header from '../components/_core/header/Header'
import Footer from '../components/_core/footer/Footer'
import './app.scss'

WebFont.load({
    google: {
        families: ['Fjalla+One|Noto+Sans:400,700', 'sans-serif'],
    },
})

const App = () => {
    return (
        <div className="iltlc-root">
            <Navbar />
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default App
