import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography } from 'antd'
import SocialMedia from '../social-media/SocialMedia'
import './footer.scss'

const Footer = ({ data = {} }) => {
    const { Title, Paragraph } = Typography
    const { text, header1, header2, header3, copyright, footerNav } = data
    const { mail, tel, fax, address, postcode, city, country } = data.contact
    return (
        <div className="footer">
            <div className="container">
                <Row className="footer__row-first" gutter={24}>
                    <Col xs={24} md={10} xl={10}>
                        <div className="footer__first-section">
                            <Title level={2}>ILTLC</Title>
                            <Paragraph className="footer__paragraph">
                                {text}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={7} xl={7}>
                        <div className="footer__second-section">
                            <Title className="footer__title" level={4}>
                                {header1}
                            </Title>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                E-Mail: <a href={`mailto: ${mail}`}>{mail}</a>
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                Tel.: {tel}
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                Fax: {fax}
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                Address:
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                {address}
                            </Paragraph>
                            <Paragraph className="footer__paragraph footer__paragraph--second">
                                {postcode} {city}. {country}
                            </Paragraph>
                        </div>
                    </Col>
                    <Col xs={24} md={7} xl={7}>
                        <div className="footer__third-section">
                            <Title className="footer__title" level={4}>
                                {header2}
                            </Title>
                            <SocialMedia
                                containerWidth="100%"
                                containerJustifyContent="baseline"
                                IconMarginRight="15px"
                                IconColor="white"
                            />
                            <Title className="footer__title" level={4}>
                                {header3}
                            </Title>
                            <ul className="footer__list">
                                {footerNav &&
                                    footerNav.map(nav => {
                                        return (
                                            <li
                                                className="footer__list-item"
                                                key={nav.id}>
                                                <Link to={nav.link}>
                                                    {nav.page}
                                                </Link>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <Paragraph className="footer__copyright">
                            {copyright}
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer
