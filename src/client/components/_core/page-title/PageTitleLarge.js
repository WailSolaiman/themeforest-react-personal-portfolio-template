import React from 'react'
import { Typography } from 'antd'
import './scss/page-title-large.scss'

const PageTitleLarge = ({ header = '', client = '' }) => {
    const { Title } = Typography
    return (
        <div className="page-title-large">
            <Title className="page-title-large__content" level={1}>
                <span className="page-title-large__header">{header} </span>
                <span className="page-title-large__client">{client}</span>
            </Title>
        </div>
    )
}

export default PageTitleLarge
