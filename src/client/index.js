import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import WebFont from 'webfontloader'
import App from './components/app/App'
import './index.scss'

WebFont.load({
    google: {
        families: ['Fjalla+One|Noto+Sans:400,700', 'sans-serif'],
    },
})

ReactDOM.render(
    <ConfigProvider prefixCls="iltlc">
        <App />
    </ConfigProvider>,
    document.getElementById('root')
)
