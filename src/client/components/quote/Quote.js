import React from 'react'
import { Typography } from 'antd'
import './quote.scss'

const Quote = ({ subtitle = '', title = '' }) => {
    const { Title } = Typography
    return (
        <div className="quote">
            <Title className="quote__subtitle" level={4}>
                {subtitle}
            </Title>
            <Title className="quote__title">{title}</Title>
        </div>
    )
}

export default Quote
