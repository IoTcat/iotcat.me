import * as React from 'react'

import {
name
} from '../styles/name.module.scss'

const Name = ({ children, ...others }) => (
    <>
        <h1 className={name}>
            <a id="name" {...others}>
                <span>{children}</span>
            </a>
        </h1>
    </>
)
export default Name
