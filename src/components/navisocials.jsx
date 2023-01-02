import * as React from 'react'

import {
    navi,
    navi_social
} from '../styles/global.module.css'


const Navisocials = ({ children }) => (
    <div>
        <nav className={`${navi} ${navi_social}`}>
            <ul>
                {children}
            </ul>
        </nav>
    </div>
)

export default Navisocials