import * as React from 'react'

import {
    description,
    description_sub
} from '../styles/description.module.scss'


const Description = ({ children, type }) => (
        <p className={type==='sub' ? description_sub : description}>{children}</p>
)

export default Description