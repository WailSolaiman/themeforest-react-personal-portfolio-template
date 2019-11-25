import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Icon } from 'antd'
import { getOneArticle } from '../../components/utils/_componentsData'
import './scss/full-article.scss'

const ArticleTemplate = () => {
    const { Title, Paragraph } = Typography
    const { id } = useParams()
    const article = getOneArticle(id)
    return (
        <div className="full-article">
            <div className="container">
                <img
                    className="full-article__image"
                    src={article.blogFigure}
                    alt={article.blogTitle}
                />
                <Title className="full-article__title" level={2}>
                    {article.blogTitle}
                </Title>
                <Paragraph className="full-article__calendar">
                    <Icon type="calendar" /> {article.publishDate}
                </Paragraph>
                <Paragraph className="full-article__excerpt">
                    {article.blogBody}
                </Paragraph>
                <Link className="iltlc-btn btn-secondary" to="/blog">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default ArticleTemplate
