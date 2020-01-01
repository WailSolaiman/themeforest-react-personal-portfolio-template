import React from 'react'
import { Row, Col, Typography } from 'antd'
import TeamMember from './TeamMember'
import './scss/team.scss'

const Team = ({ title = '', members = [] }) => {
    const { Title } = Typography
    return (
        <div className="team">
            <Title className="team__header" level={2}>
                {title}
            </Title>
            <Row gutter={[24, 24]}>
                {members &&
                    members.map(member => {
                        return (
                            <Col key={member.id} xs={24} sm={12} md={8}>
                                <TeamMember member={member} />
                            </Col>
                        )
                    })}
            </Row>
        </div>
    )
}

export default Team
