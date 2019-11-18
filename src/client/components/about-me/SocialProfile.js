import React from 'react'
import { Typography } from 'antd'
import SocialMedia from '../_core/social-media/SocialMedia'
import './scss/social-profiles.scss'

const SocialProfile = ({ title = 'Social Media' }) => {
    const { Title } = Typography
    return (
        <div className="social-profiles">
            <Title level={3}>{title}</Title>
            <SocialMedia
                containerWidth="200px"
                containerMargin="unset"
                containerJustifyContent="center"
                IconMarginRight="15px"
                IconColor="#343434"
            />
        </div>
    )
}

export default SocialProfile
