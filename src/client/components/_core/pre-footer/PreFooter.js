import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import './pre-footer.scss'

const PreFooter = ({
    title = '',
    text = '',
    btnText = '',
    btnLink = '/contact',
}) => {
    const { Title, Paragraph } = Typography
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
