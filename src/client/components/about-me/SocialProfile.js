import React from 'react'
import { Row, Col, Typography, Icon } from 'antd'
import './social-profiles.scss'

const SocialProfile = ({ socialMedia = [] }) => {
    const { Title } = Typography
    return (
        <div className="social-profiles">
            <Title level={3}>Social Media</Title>
            <Row>
                {socialMedia &&
                    socialMedia.map(social => {
                        return (
                            <Col key={social.id} xs={{ span: 6, offset: 0 }}>
                                <a href={social.link}>
                                    <Icon
                                        className="social-profiles__icon"
                                        type={social.icon}
                                    />
                                </a>
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default SocialProfile
