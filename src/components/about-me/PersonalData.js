import React from 'react'
import { Descriptions } from 'antd'
import './scss/personal-data.scss'

const PersonalData = ({ personalData = [] }) => {
    return (
        <div className="personal-data">
            <Descriptions
                layout="vertical"
                bordered
                column={{ xs: 1, md: 2 }}
                size="small">
                {personalData &&
                    personalData.map(item => {
                        return (
                            <Descriptions.Item
                                key={item.id}
                                className="personal-data__descriptions"
                                label={item.label}>
                                {item.value}
                            </Descriptions.Item>
                        )
                    })}
            </Descriptions>
        </div>
    )
}

export default PersonalData
