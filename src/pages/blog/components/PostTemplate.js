import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Icon, Tag } from 'antd'
import RelatedPosts from './RelatedPosts'
import { getPost, getPosts } from '../utils/_dataPosts'
import './scss/post-template.scss'

const PostTemplate = () => {
    const { Title, Paragraph } = Typography
    const { id } = useParams()
    const post = getPost(id)
    const {
        title,
        image,
        categories,
        publishDate,
        firstParagraph,
        secondParagraph,
        thirdParagraph,
    } = post
    return (
        <div className="post-template">
            <div className="container">
                <Title className="post-template__title" level={2}>
                    {title}
                </Title>
                <img className="post-template__image" src={image} alt={title} />
                <div className="post-template__container">
                    <div className="post-template__category-container">
                        {categories &&
                            categories.map(item => {
                                return (
                                    <Tag
                                        className="post-template__category"
                                        key={item.id}
                                        color="#bc01b0">
                                        {item.category}
                                    </Tag>
                                )
                            })}
                    </div>
                    <Paragraph className="post-template__calendar">
                        <Icon type="calendar" /> {publishDate}
                    </Paragraph>
                </div>
                <Paragraph>{firstParagraph}</Paragraph>
                <Paragraph>{secondParagraph}</Paragraph>
                <Paragraph>{thirdParagraph}</Paragraph>
                <RelatedPosts currentPost={post} posts={getPosts()} />
                <Link
                    className="iltlc-btn btn-secondary post-template__btn"
                    to="/blog">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default PostTemplate
