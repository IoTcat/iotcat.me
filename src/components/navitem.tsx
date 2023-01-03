import * as React from 'react'

const Navitem = ({ children, ...others }) => (
    <li>
        <a {...others}>
            {children}
        </a>
    </li>
)

export default Navitem