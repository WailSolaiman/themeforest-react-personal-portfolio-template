import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import SocialMedia from '../social-media/SocialMedia'
import './footer.scss'

const Footer = () => {
    const { Title, Paragraph } = Typography
    return (
        <div className="footer">
            <div className="container">
                <Row gutter={24}>
                    <Col xs={24} md={10}>
                        <div className="footer__first-section">
                            <Title level={2}>ILTLC</Title>
                            <Paragraph className="footer__paragraph">
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={7}>
                        <div className="footer__second-section">
                            <Title level={4}>Get in Touch</Title>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                E-Mail:{' '}
                                <a href="mailto: info@iltlc.com">
                                    info@iltlc.com
                                </a>
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                Tel.: +49 00 - 123 53 - 6700
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                Fax: +49 00 - 554 53 - 6799
                            </Paragraph>
                            <Title level={4}>Social Media</Title>
                            <SocialMedia
                                containerWidth="200px"
                                containerMargin="unset"
                                containerJustifyContent="center"
                                IconMarginRight="15px"
                                IconColor="white"
                            />
                        </div>
                    </Col>
                    <Col xs={24} md={7}>
                        <div className="footer__third-section">
                            <Title level={4}>Menu</Title>
                            <ul className="footer__list">
                                <li className="footer__list-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="footer__list-item">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="footer__list-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="footer__list-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="footer__list-item">
                                    <Link to="/">imprint</Link>
                                </li>
                                <li className="footer__list-item">
                                    <Link to="/">Data Privacy</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <Paragraph className="footer__copyright">
                            © ILTLC. 2020 | All Rights Reserved
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer
