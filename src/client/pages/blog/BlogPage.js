import React, { useState, useEffect } from 'react'
import { Row, Col, Spin, Pagination } from 'antd'
import Header from '../../components/_core/header/Header'
import PageTitle from '../../components/_core/page-title/PageTitle'
import Posts from './Posts'
import getBlogHeroImage from './utils/_dataHeroImage'
import getBlogPageTitle from './utils/_dataBlog'
import { getPosts } from './utils/_dataPosts'
import './scss/blog.scss'

const BlogPage = () => {
    const [renderPage, setPageRendering] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(4)
    const totalPosts = getPosts().length
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = getPosts().slice(indexOfFirstPost, indexOfLastPost)
    const paginate = pageNumber => setCurrentPage(pageNumber)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPageRendering(true)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <div className="blog">
            <Header heroImage={getBlogHeroImage()} selected="heroImage" />
            {renderPage ? (
                <div className="container">
                    <Row className="row-with-margin-bottom">
                        <Col xs={24}>
                            <PageTitle data={getBlogPageTitle()} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <Posts posts={currentPosts} />
                            <Pagination
                                className="blog__pagination"
                                showQuickJumper
                                total={totalPosts}
                                pageSize={postsPerPage}
                                defaultCurrent={1}
                                onChange={paginate}
                            />
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
