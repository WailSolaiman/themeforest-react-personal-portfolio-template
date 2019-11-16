import React from 'react'
import './quote.scss'

const Quote = ({ subtitle = '', title = '' }) => {
    return (
        <div className="quote">
            <h5 className="quote__subtitle">{subtitle}</h5>
            <h1 className="quote__title">{title}</h1>
        </div>
    )
}

export default Quote
