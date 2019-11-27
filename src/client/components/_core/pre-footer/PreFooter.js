import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import './pre-footer.scss'

const PreFooter = ({ data = {} }) => {
    const { Title, Paragraph } = Typography
    const { title, text, btnText, btnLink } = data
    return (
        <div className="pre-footer">
            <Title level={4}>{title}</Title>
            <Paragraph className="portfolio__text">{text}</Paragraph>
            <Link
                className="iltlc-btn btn-secondary"
                to={btnLink}
                style={{ margin: '0 auto' }}>
                {btnText}
            </Link>
        </div>
    )
}

export default PreFooter
