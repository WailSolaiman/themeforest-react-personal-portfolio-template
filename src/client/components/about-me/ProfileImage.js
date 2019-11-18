import React from 'react'
import './scss/profile-image.scss'

const ProfileImage = ({ profileImage }) => {
    return (
        <div className="profile-image">
            <img
                className="profile-image__photo"
                src={profileImage}
                alt="profile"
            />
        </div>
    )
}

export default ProfileImage
