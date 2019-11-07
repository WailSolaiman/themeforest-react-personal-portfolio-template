import React from 'react'
import { Row, Col, Card } from 'antd'
import './projects.scss'

const Projects = ({ projects = [] }) => {
    const { Meta } = Card
    return (
        <Row className="row-with-padding projects">
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <h2>Projects</h2>
            </Col>
            <Col xs={{ span: 20, offset: 2 }} xl={{ span: 12, offset: 6 }}>
                <Row gutter={16}>
                    {projects &&
                        projects.map(project => {
                            return (
                                <Col
                                    xs={24}
                                    md={12}
                                    lg={8}
                                    xl={6}
                                    key={project.id}
                                >
                                    <div className="projects__content">
                                        <Card
                                            className="card"
                                            title={project.name}
                                            extra={<a href="/">More</a>}
                                            cover={
                                                <img
                                                    alt={project.name}
                                                    src={project.img}
                                                />
                                            }
                                        >
                                            <Meta
                                                title={project.name}
                                                description={project.paragraph}
                                            />
                                        </Card>
                                        ,
                                    </div>
                                </Col>
                            )
                        })}
                </Row>
            </Col>
        </Row>
    )
}

export default Projects
