import React from 'react'
import GridGallery from 'react-grid-gallery'
import './gallery.scss'

const Gallery = ({ items = [] }) => {
    const images = items.map(item => ({
        ...item,
        thumbnailWidth: 250,
        thumbnailHeight: 150,
    }))
    return <GridGallery images={images} backdropClosesModal />
}

export default Gallery
