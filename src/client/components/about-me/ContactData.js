import React from 'react'
import { List, Typography, Icon } from 'antd'
import './contact-data.scss'

const ContactData = ({ contactData = [] }) => {
    const { Title, Paragraph } = Typography
    return (
        <List
            className="row-with-padding contact-data"
            itemLayout="horizontal"
            dataSource={contactData}
            renderItem={item => (
                <List.Item className="contact-data__item">
                    <Title level={4} className="contact-data__title">
                        {item.contactTitle}
                    </Title>
                    <Paragraph className="contact-data__paragraph">
                        <span className="contact-data__icon">
                            <Icon type={item.contactIcon} />
                        </span>
                        {item.contactContent}
                    </Paragraph>
                </List.Item>
            )}
        />
    )
}

export default ContactData
