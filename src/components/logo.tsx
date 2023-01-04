import * as React from 'react'

import {
    logo,
} from '../styles/logo.module.scss'

const Logo = ({ onClick, rotateCoefficient, ...others }) => (
    <a id="logo" className={logo} onClick={onClick}>
        <img style={{ transform: `rotate(${rotateCoefficient*360}deg)` }} {...others} />
    </a>
)
export default Logo