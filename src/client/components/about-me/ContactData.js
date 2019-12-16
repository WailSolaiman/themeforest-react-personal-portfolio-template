import React from 'react'
import { List, Typography, Icon } from 'antd'
import './scss/contact-data.scss'

const ContactData = ({ contactData = [] }) => {
    const { Paragraph } = Typography
    return (
        <div className="contact-data">
            <List
                className="contact-data__container"
                itemLayout="horizontal"
                dataSource={contactData}
                renderItem={item => (
                    <List.Item className="contact-data__item">
                        <Paragraph className="contact-data__paragraph">
                            <span className="contact-data__icon">
                                <Icon type={item.contactIcon} />
                            </span>
                            {item.contactContent}
                        </Paragraph>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ContactData
