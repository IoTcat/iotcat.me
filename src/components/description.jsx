import * as React from 'react'

import {
    description,
    description_sub
} from '../styles/global.module.css'


const Description = ({ children, type }) => (
        <p className={type==='sub' ? description_sub : description}>{children}</p>
)

export default Description