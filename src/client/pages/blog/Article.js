import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Icon } from 'antd'
import './scss/article.scss'

const Article = ({ article }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="article">
            <img
                className="article__image"
                src={article.blogFigure}
                alt={article.blogTitle}
            />
            <Title className="article__title" level={4}>
                {article.blogTitle}
            </Title>
            <Paragraph className="article__calendar">
                <Icon type="calendar" /> {article.publishDate}
            </Paragraph>
            <Paragraph className="article__excerpt">
                {article.blogExcerpt}
            </Paragraph>
            <Link className="iltlc-btn btn-secondary" to="/fullarticle">
                Read More
            </Link>
        </div>
    )
}

export default Article
