import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import './scss/related-posts.scss'

const RelatedPosts = ({ currentPost = {}, posts = [] }) => {
    const { Title, Paragraph } = Typography
    const relatedPosts = posts
        .filter(post => post.id !== currentPost.id)
        .filter(post =>
            post.categories.find(item => {
                return currentPost.categories.some(item2 => {
                    return item.category === item2.category
                })
            })
        )
        .sort(() => Math.random() - 0.5)
        .filter((post, index) => (index < 3 ? post : false))
    return (
        <div className="related-posts">
            <Title className="related-posts__header" level={2}>
                Related Posts
            </Title>
            <Row gutter={24}>
                {relatedPosts &&
                    relatedPosts.map(post => {
                        const { id, title, image, excerpt } = post
                        return (
                            <Col xs={24} md={12} xl={8} key={id}>
                                <Title
                                    className="related-posts__title"
                                    level={4}>
                                    {title}
                                </Title>
                                <img
                                    className="related-posts__image"
                                    src={image}
                                    alt={title}
                                />
                                <Paragraph className="related-posts__excerpt">
                                    {excerpt}
                                </Paragraph>
                                <Link to={`/blog/posts/${id}`}>Read More</Link>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default RelatedPosts
