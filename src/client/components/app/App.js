import React from 'react'
import Home from '../home/Home'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const App = () => {
    return (
        <div className="root">
            <Navbar />
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default App
