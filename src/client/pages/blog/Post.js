import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Icon } from 'antd'
import './scss/post.scss'

const Post = ({ post }) => {
    const { Title, Paragraph } = Typography
    return (
        <div className="post">
            <Title className="post__title" level={4}>
                {post.title}
            </Title>
            <img className="post__image" src={post.image} alt={post.title} />
            <Paragraph className="post__calendar">
                <Icon type="calendar" /> {post.publishDate}
            </Paragraph>
            <Paragraph className="post__excerpt">{post.excerpt}</Paragraph>
            <Link
                className="iltlc-btn btn-secondary"
                to={`/blog/posts/${post.id}`}>
                Read More
            </Link>
        </div>
    )
}

export default Post
