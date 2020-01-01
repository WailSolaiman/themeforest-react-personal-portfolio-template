import React from 'react'
import { Row, Col } from 'antd'
import Post from './Post'

const Posts = ({ posts = [] }) => {
    let aosDelayCounter = 0
    return (
        <Row gutter={24}>
            {posts &&
                posts.map((post, index) => {
                    const counter = index > 0 ? (aosDelayCounter += 50) : 0
                    return (
                        <Col xs={24} xl={12} key={post.id}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={counter}
                                data-aos-offset="300">
                                <Post post={post} />
                            </div>
                        </Col>
                    )
                })}
        </Row>
    )
}

export default Posts
