import React from 'react'
import { Carousel, Card, Avatar, Row, Col } from 'antd'
import './testimonials.scss'

const Testimonials = ({ testimonials = [] }) => {
    const { Meta } = Card
    return (
        <Row className="row-with-padding testimonials">
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <h2>Testimonials</h2>
            </Col>
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <Carousel>
                    {testimonials &&
                        testimonials.map(testimonial => {
                            return (
                                <Card key={testimonial.id}>
                                    <Meta
                                        avatar={
                                            <Avatar src={testimonial.avatar} />
                                        }
                                        title={testimonial.title}
                                        description={testimonial.description}
                                    />
                                </Card>
                            )
                        })}
                </Carousel>
            </Col>
        </Row>
    )
}

export default Testimonials
