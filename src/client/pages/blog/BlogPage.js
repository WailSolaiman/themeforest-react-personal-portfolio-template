import React, { useState, useEffect } from 'react'
import { Row, Col, Spin } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Articles from './Articles'
import {
    getBlogHeroImage,
    getCarouselImages,
    getBlogPageTitle,
    getArticles,
} from '../../components/utils/_componentsData'

const BlogPage = () => {
    const [renderPage, setPageRendering] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageRendering(true)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <div className="blog-page">
            <Header
                heroImage={getBlogHeroImage()}
                carousel={getCarouselImages()}
                selected="heroImage"
            />
            {renderPage ? (
                <div className="container">
                    <Row className="row-with-margin-bottom">
                        <Col xs={24}>
                            <PageTitle data={getBlogPageTitle()} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <Articles articles={getArticles()} />
                        </Col>
                    </Row>
                </div>
            ) : (
                <div className="loading-spinner">
                    <Spin />
                </div>
            )}
        </div>
    )
}

export default BlogPage
