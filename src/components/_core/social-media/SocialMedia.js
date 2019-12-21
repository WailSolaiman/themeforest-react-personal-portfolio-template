import React from 'react'
import { Icon } from 'antd'
import './social-media.scss'

const SocialMedia = ({
    containerWidth = '300px',
    containerMargin = '0 auto 1rem',
    containerJustifyContent = 'space-between',
    IconMarginRight = '0',
    IconColor = '#343434',
}) => {
    return (
        <div
            className="social-media"
            style={{
                width: containerWidth,
                justifyContent: containerJustifyContent,
                margin: containerMargin,
            }}>
            <Icon
                className="social-media__icon"
                type="facebook"
                style={{ marginRight: IconMarginRight, color: IconColor }}
            />
            <Icon
                className="social-media__icon"
                type="twitter"
                style={{ marginRight: IconMarginRight, color: IconColor }}
            />
            <Icon
                className="social-media__icon"
                type="youtube"
                style={{
                    marginRight: IconMarginRight,
                    color: IconColor,
                }}
            />
            <Icon
                className="social-media__icon"
                type="instagram"
                style={{ marginRight: IconMarginRight, color: IconColor }}
            />
        </div>
    )
}

export default SocialMedia
