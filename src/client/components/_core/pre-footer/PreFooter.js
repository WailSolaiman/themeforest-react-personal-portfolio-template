import React from 'react'
import { Typography, Button } from 'antd'
import './pre-footer.scss'

const PreFooter = ({ title = '', text = '', btnText = '', btnLink = '' }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="pre-footer">
            <Title level={4}>{title}</Title>
            <Paragraph className="portfolio__text">{text}</Paragraph>
            <Button className="btn-secondary" href={btnLink}>
                {btnText}
            </Button>
        </div>
    )
}

export default PreFooter
