import * as React from 'react'

import {
    navi,
    navi_social
} from '../styles/navi.module.scss'


const Naviblock = ({ children, type }) => (
    <div>
        <nav className={type==="social"?`${navi} ${navi_social}`:navi}>
            <ul>
                {children}
            </ul>
        </nav>
    </div>
)

export default Naviblock