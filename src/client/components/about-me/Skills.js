import React from 'react'
import { Row, Col, Typography, Progress } from 'antd'
import './scss/skills.scss'

const Skills = ({ title = 'Skills', skills = [] }) => {
    const { Title } = Typography
    return (
        <div className="skills">
            <Title level={2}>{title}</Title>
            <Row gutter={{ xs: 0, xl: 24 }}>
                {skills &&
                    skills.map(skill => {
                        return (
                            <Col key={skill.id} xs={24} xl={12}>
                                <h6 className="skills__subtitle">
                                    {skill.name}
                                </h6>
                                <Progress
                                    strokeColor={{
                                        '0%': '#ffc8fc',
                                        '100%': '#32ff0c',
                                    }}
                                    percent={skill.value}
                                    status="active"
                                />
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Skills
