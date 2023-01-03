import * as React from 'react'

import {
    logo,
} from '../styles/logo.module.scss'

const Logo = ({ onClick, ...others }) => (
    <a id="logo" onClick={onClick}>
        <img className={logo} {...others} />
    </a>
)
export default Logo