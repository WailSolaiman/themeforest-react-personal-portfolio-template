import React from 'react'
import { DatePicker } from 'antd'
import output from '../../../utils'
import ReactImage from '../../../assets/react.png'
import './intro.scss'

const Intro = () => {
    return (
        <div className="parentDiv">
            <h2 className="heading">Hello World</h2>
            <p className="subheading">{output()}</p>
            <img src={ReactImage} alt="react" />
            <DatePicker />
        </div>
    )
}

export default Intro
