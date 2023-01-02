import * as React from 'react'

import {
name
} from '../styles/global.module.css'

const Name = ({ children, ...others }) => (
    <>
        <h1 className={name}>
            <a {...others}>
                <span>{children}</span>
            </a>
        </h1>
    </>
)
export default Name
