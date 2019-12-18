import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Icon, Tag } from 'antd'
import './scss/post.scss'

const Post = ({ post }) => {
    const { Title, Paragraph } = Typography
    const { id, title, image, categories, publishDate, excerpt } = post
    return (
        <div className="post">
            <Title className="post__title" level={4}>
                {title}
            </Title>
            <img className="post__image" src={image} alt={title} />
            <div className="post__container">
                <div className="post__category-container">
                    {categories &&
                        categories.map(item => {
                            return (
                                <Tag
                                    className="post__category"
                                    key={item.id}
                                    color="#bc01b0">
                                    {item.category}
                                </Tag>
                            )
                        })}
                </div>
                <Paragraph className="post__calender">
                    <Icon type="calendar" /> {publishDate}
                </Paragraph>
            </div>
            <Paragraph className="post__excerpt">{excerpt}</Paragraph>
            <Link className="iltlc-btn" to={`/blog/posts/${id}`}>
                Read More
            </Link>
        </div>
    )
}

export default Post
