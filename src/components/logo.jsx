import * as React from 'react'

import {
    logo,
} from '../styles/global.module.css'

const Logo = ({ onClick, animate, ...others }) => (
    <a onClick={onClick}>
        <img className={logo} {...others} />
    </a>
)
export default Logo