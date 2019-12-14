import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Typography, Icon } from 'antd'
import { getPost } from './utils/_dataPosts'
import './scss/post-template.scss'

const PostTemplate = () => {
    const { Title, Paragraph } = Typography
    const { id } = useParams()
    const post = getPost(id)
    return (
        <div className="post-template">
            <div className="container">
                <img
                    className="post-template__image"
                    src={post.image}
                    alt={post.title}
                />
                <Title className="post-template__title" level={2}>
                    {post.title}
                </Title>
                <Paragraph className="post-template__calendar">
                    <Icon type="calendar" /> {post.publishDate}
                </Paragraph>
                <Paragraph className="post-template__excerpt">
                    {post.body}
                </Paragraph>
                <Link className="iltlc-btn btn-secondary" to="/blog">
                    Go Back
                </Link>
            </div>
        </div>
    )
}

export default PostTemplate
