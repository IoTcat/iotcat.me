import * as React from 'react'

import {
    navi_wrapper
} from '../styles/navi.module.scss'


const Navi = ({ children }) => (
    <div className={navi_wrapper}>{children}</div>
)

export default Navi