import * as React from 'react'

import {
    navi_wrapper
} from '../styles/global.module.css'


const Navi = ({ children }) => (
    <div className={navi_wrapper}>{children}</div>
)

export default Navi