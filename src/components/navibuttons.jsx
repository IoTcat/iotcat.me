import * as React from 'react'

import {
    navi
} from '../styles/global.module.css'


const Navibuttons = ({ children }) => (
    <div>
        <nav className={navi}>
            <ul>
                {children}
            </ul>
        </nav>
    </div>
)

export default Navibuttons