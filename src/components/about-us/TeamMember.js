import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'
import './scss/team-member.scss'

const TeamMember = ({ member = {} }) => {
    const { Text, Paragraph } = Typography
    const { id, name, position, image } = member
    return (
        <div className="team-member">
            <Link to={`/about-me/${id}`}>
                <div className="team-member__text-content">
                    <Text className="team-member__name" strong>
                        {name}
                    </Text>
                    <Paragraph className="team-member__position">
                        {position}
                    </Paragraph>
                </div>
                <img className="team-member__image" src={image} alt={name} />
            </Link>
        </div>
    )
}

export default TeamMember
