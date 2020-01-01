import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import App from './app/App'

ReactDOM.render(
    <ConfigProvider prefixCls="iltlc">
        <App />
    </ConfigProvider>,
    document.getElementById('root')
)
