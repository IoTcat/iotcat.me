import * as React from 'react'

import {
    hitokoto
} from '../styles/hitokoto.module.scss'


const Hitokoto = ({ children }) => (
    <span className={hitokoto}>{children}</span>
)

export default Hitokoto