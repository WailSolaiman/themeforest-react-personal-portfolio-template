import React from 'react'
import { Carousel, Card, Avatar, Typography } from 'antd'
import './testimonials.scss'

const Testimonials = ({ title = '', testimonials = [] }) => {
    const { Meta } = Card
    const { Title } = Typography
    return (
        <div className="testimonials">
            <Title className="testimonials__header" level={2}>
                {title}
            </Title>
            <Carousel autoplay>
                {testimonials &&
                    testimonials.map(testimonial => {
                        return (
                            <Card key={testimonial.id}>
                                <Meta
                                    avatar={<Avatar src={testimonial.avatar} />}
                                    title={testimonial.title}
                                    description={testimonial.description}
                                />
                            </Card>
                        )
                    })}
            </Carousel>
        </div>
    )
}

export default Testimonials
