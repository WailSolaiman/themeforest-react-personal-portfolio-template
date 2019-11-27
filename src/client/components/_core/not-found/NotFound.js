import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import './not-found.scss'

const NotFound = () => {
    const { Title, Paragraph } = Typography
    return (
        <div className="not-found">
            <div className="container">
                <Row>
                    <Col xs={24}>
                        <Title className="not-found__header">
                            404 – Page or file not found
                        </Title>
                        <Paragraph>
                            We are sorry but the page you are looking for is
                            unavailable, was renamed or no longer exists. Also,
                            please be sure that you are using the correct URL.
                        </Paragraph>
                        <Link
                            className="not-found__btn iltlc-btn btn-secondary"
                            to="/">
                            Home
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NotFound
