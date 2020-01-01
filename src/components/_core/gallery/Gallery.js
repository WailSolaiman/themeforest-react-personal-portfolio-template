import React from 'react'
import { Typography } from 'antd'
import './gallery.scss'

const Gallery = ({ title = '', images = [] }) => {
    const { Text, Title } = Typography
    return (
        <div className="gallery">
            <Title className="gallery__header" level={2}>
                {title}
            </Title>
            <div className="gallery__masonry">
                {images &&
                    images.map(item => {
                        return (
                            <div
                                className="gallery__masonry--brick"
                                key={item.id}
                                xs={24}
                                sm={12}
                                md={8}>
                                <img src={item.image} alt={item.name} />
                                <Text strong>{item.name}</Text>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Gallery
