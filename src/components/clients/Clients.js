import React from 'react'
import { Row, Col, Typography } from 'antd'
import useWindowWidth from '../_core/utils/_coreUtils'
import './clients.scss'

const Clients = ({ clients = [], header = '', description = '' }) => {
    const { Title, Paragraph } = Typography
    const windowWidth = useWindowWidth()
    let aosDelayCounter = 0
    return (
        <div className="clients">
            <Row gutter={24}>
                <Col xs={24} xl={7}>
                    <Title className="clients__header" level={2}>
                        {header}
                    </Title>
                    <Paragraph className="clients__text">
                        {description}
                    </Paragraph>
                </Col>
                <Col xs={24} xl={17}>
                    <Row gutter={24}>
                        {clients &&
                            clients.map((client, index) => {
                                const counter =
                                    index > 0 ? (aosDelayCounter += 50) : 0
                                return (
                                    <Col
                                        className="clients__col"
                                        xs={12}
                                        md={8}
                                        lg={6}
                                        key={client.id}>
                                        <div
                                            data-aos={
                                                windowWidth > 768
                                                    ? 'fade'
                                                    : 'fade-up'
                                            }
                                            data-aos-delay={counter}>
                                            <img
                                                className="clients__image"
                                                src={client.logo.src}
                                                alt={client.logo.name}
                                            />
                                        </div>
                                    </Col>
                                )
                            })}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Clients
