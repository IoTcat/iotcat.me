import * as React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Navitem = ({ children, ...others }) => (
    <li>
        <OutboundLink {...others}>
            {children}
        </OutboundLink>
    </li>
)

export default Navitem