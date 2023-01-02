import * as React from 'react'

import {
    hitokoto
} from '../styles/global.module.css'


const Hitokoto = ({ children }) => (
    <span className={hitokoto}>{children}</span>
)

export default Hitokoto